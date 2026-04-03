import { Controller, Get, Req } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { LeetcodeSummaryDto } from './dto/leetcode-summary.dto';
import {
  CodeforcesTimeByRatingResponseDto,
  LeetcodeTimeByDifficultyResponseDto,
} from './dto/leetcode-time-point.dto';
import { Public } from '../auth/public.decorator';
import type { Request } from 'express';

type RequestWithAuth = Request & {
  user?: unknown;
  session?: unknown;
};

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Public()
  @Get('summary')
  @ApiOkResponse({ type: LeetcodeSummaryDto })
  async getLeetcodeSummary(): Promise<LeetcodeSummaryDto> {
    return this.analyticsService.leetcodeSummary();
  }

  @Public()
  @Get('scatter')
  async getLeetcodeScatterpoints(
    @Req() req: RequestWithAuth,
  ): Promise<
    | LeetcodeTimeByDifficultyResponseDto
    | CodeforcesTimeByRatingResponseDto
  > {
    const platform =
      typeof req.query.platform === 'string' ? req.query.platform : 'leetcode';

    if (platform === 'codeforces') {
      return this.analyticsService.codeforcesTimeByRating();
    }

    return this.analyticsService.leetcodeTimeByDifficulty();
  }
}
