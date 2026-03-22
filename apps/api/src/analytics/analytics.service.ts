import { Injectable } from '@nestjs/common';
import {
  DifficultyCountsDto,
  LeetcodeSummaryDto,
} from './dto/leetcode-summary.dto';
import { PrismaService } from '@/prisma/prisma.service';

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
      totalSolved: total._count['all'],
      difficultyCounts: difficultyCounts,
    };
    return result;
  }
}
