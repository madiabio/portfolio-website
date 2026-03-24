import { Controller, Get, Req } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { LeetcodeSummaryDto } from './dto/leetcode-summary.dto';
import { LeetcodeTimeByDifficultyResponseDto } from './dto/leetcode-time-point.dto';
import { Public } from '@/auth/public.decorator';
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
  async getLeetcodeSummary(): Promise<LeetcodeSummaryDto> {
    return this.analyticsService.leetcodeSummary();
  }

  @Public()
  @Get('scatter')
  async getLeetcodeScatterpoints(
    @Req() req: RequestWithAuth,
  ): Promise<LeetcodeTimeByDifficultyResponseDto> {
    console.log('ADMIN_EMAIL', process.env.ADMIN_EMAIL);
    console.log('user', req.user);
    console.log('session', req.session);
    console.log('cookies', req.headers.cookie);

    return this.analyticsService.leetcodeTimeByDifficulty();
  }
}
