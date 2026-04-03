import { Injectable, Logger } from '@nestjs/common';
import { type CodeforcesSubmissionQueue, Prisma } from '@portfolio/db';
import { PrismaService } from '../prisma/prisma.service';
import { type CodeforcesQueueItemDto } from './dto/codeforces-queue.dto';
import { type CodeforcesSubmissionDto } from './dto/codeforces-submission.dto';

type CodeforcesApiResponse<T> = {
  status: 'OK' | 'FAILED';
  comment?: string;
  result: T;
};

const CODEFORCES_API_BASE = 'https://codeforces.com/api';

@Injectable()
export class CodeforcesService {
  private readonly logger = new Logger(CodeforcesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async fetchAllUserSubmissions(handle: string): Promise<CodeforcesSubmissionDto[]> {
    const response = await this.fetchApi<CodeforcesSubmissionDto[]>(
      `/user.status?handle=${encodeURIComponent(handle)}`,
    );

    return response.result;
  }

  async fetchAcceptedUserSubmissions(handle: string): Promise<CodeforcesSubmissionDto[]> {
    const response = await this.fetchApi<CodeforcesSubmissionDto[]>(
      `/user.status?handle=${encodeURIComponent(handle)}`,
    );

    const accepted = response.result.filter((submission) => {
      return submission.verdict === 'OK' && submission.problem.contestId;
    });

    return accepted;
  }

  async syncUserSubmissions(handle: string): Promise<{ created: number }> {
    const submissions = await this.fetchAcceptedUserSubmissions(handle);

    let created = 0;

    for (const submission of submissions) {
      const existing = await this.prisma.client.codeforcesSubmissionQueue.findFirst({
        where: {
          username: handle,
          submissionId: submission.id,
        },
      });

      if (existing) {
        continue;
      }

      const solvedAt = new Date(submission.creationTimeSeconds * 1000);

      await this.prisma.client.codeforcesSubmissionQueue.create({
        data: {
          platform: 'CODEFORCES',
          status: 'PENDING_TIME',
          username: handle,
          submissionId: submission.id,
          contestId: submission.problem.contestId ?? 0,
          problemIndex: submission.problem.index,
          problemName: submission.problem.name,
          rating: submission.problem.rating ?? null,
          solvedAt,
        },
      });

      created += 1;
    }

    return { created };
  }

  async getQueuedUserSubmissions(
    handle: string,
  ): Promise<CodeforcesQueueItemDto[]> {
    const queueItems = await this.prisma.client.codeforcesSubmissionQueue.findMany({
      where: { username: handle },
      orderBy: { solvedAt: 'desc' },
    });

    return queueItems.map((item) => this.mapQueueItem(item));
  }

  async getPendingQueuedUserSubmissions(
    handle: string,
  ): Promise<CodeforcesQueueItemDto[]> {
    const queueItems = await this.prisma.client.codeforcesSubmissionQueue.findMany({
      where: {
        username: handle,
        status: 'PENDING_TIME',
      },
      orderBy: { solvedAt: 'desc' },
    });

    return queueItems.map((item) => this.mapQueueItem(item));
  }

  async reviewQueuedSubmission(params: {
    id: number;
    durationMin: number;
  }): Promise<CodeforcesQueueItemDto> {
    const queueItem = await this.prisma.client.codeforcesSubmissionQueue.findUniqueOrThrow({
      where: { id: params.id },
    });

    const reviewedAt = new Date();

    await this.prisma.client.$transaction([
      this.prisma.client.codeforcesSolve.create({
        data: {
          platform: 'CODEFORCES',
          username: queueItem.username,
          submissionId: queueItem.submissionId,
          contestId: queueItem.contestId,
          problemIndex: queueItem.problemIndex,
          problemName: queueItem.problemName,
          rating: queueItem.rating,
          durationMin: params.durationMin,
          solvedAt: queueItem.solvedAt,
        },
      }),
      this.prisma.client.codeforcesSubmissionQueue.update({
        where: { id: queueItem.id },
        data: {
          status: 'TIMED',
          durationMin: params.durationMin,
          reviewedAt,
        },
      }),
    ]);

    const updatedQueueItem = await this.prisma.client.codeforcesSubmissionQueue.findUniqueOrThrow({
      where: { id: queueItem.id },
    });

    return this.mapQueueItem(updatedQueueItem);
  }

  private mapQueueItem(
    item: CodeforcesSubmissionQueue,
  ): CodeforcesQueueItemDto {
    return {
      id: item.id,
      platform: 'CODEFORCES',
      status: item.status,
      username: item.username,
      submissionId: item.submissionId,
      contestId: item.contestId,
      problemIndex: item.problemIndex,
      problemName: item.problemName,
      rating: item.rating,
      solvedAt: item.solvedAt,
      durationMin: item.durationMin,
      reviewedAt: item.reviewedAt,
      createdAt: item.createdAt,
    };
  }

  private async fetchApi<T>(path: string): Promise<CodeforcesApiResponse<T>> {
    const response = await fetch(`${CODEFORCES_API_BASE}${path}`);

    if (!response.ok) {
      throw new Error(`Codeforces API request failed with status ${response.status}`);
    }

    const body = (await response.json()) as CodeforcesApiResponse<T>;

    if (body.status !== 'OK') {
      this.logger.warn(`Codeforces API failed: ${body.comment ?? 'unknown error'}`);
      throw new Error(body.comment ?? 'Codeforces API failed');
    }

    return body;
  }
}