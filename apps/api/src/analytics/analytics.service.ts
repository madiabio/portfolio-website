import { Injectable } from '@nestjs/common';
import {
  DifficultyCountsDto,
  LeetcodeSummaryDto,
} from './dto/leetcode-summary.dto';
import { PrismaService } from '@/prisma/prisma.service';
import {
  LeetcodeTimeByDifficultyResponseDto,
  LeetcodeScatterPointDto,
} from './dto/leetcode-time-point.dto';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async leetcodeSummary(): Promise<LeetcodeSummaryDto> {
    const total = await this.prisma.client.leetcodeSolve.aggregate({
      _count: {
        _all: true,
      },
    });

    const grouped = await this.prisma.client.leetcodeSolve.groupBy({
      by: ['difficulty'],
      _count: {
        _all: true,
      },
    });

    const difficultyCounts: DifficultyCountsDto = {
      easy: 0,
      medium: 0,
      hard: 0,
    };

    for (const row of grouped) {
      const difficulty = row.difficulty.toLowerCase();

      if (difficulty === 'easy') {
        difficultyCounts.easy = row._count._all;
      } else if (difficulty === 'medium') {
        difficultyCounts.medium = row._count._all;
      } else if (difficulty === 'hard') {
        difficultyCounts.hard = row._count._all;
      }
    }

    const result: LeetcodeSummaryDto = {
      totalSolved: total._count._all,
      difficultyCounts,
    };

    return result;
  }

  async leetcodeTimeByDifficulty(): Promise<LeetcodeTimeByDifficultyResponseDto> {
    const solves = await this.prisma.client.leetcodeSolve.findMany({
      select: {
        problemNumber: true,
        problemName: true,
        difficulty: true,
        durationMin: true,
        solvedAt: true,
      },
      orderBy: {
        solvedAt: 'asc',
      },
    });

    const points: LeetcodeScatterPointDto[] = solves.map((solve) => ({
      x: solve.solvedAt,
      y: solve.durationMin,
      difficulty: solve.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard',
      problemNumber: solve.problemNumber,
      problemName: solve.problemName,
    }));

    return {
      points,
      goals: {
        easy: 15,
        medium: 30,
        hard: 60,
      },
    };
  }
}
