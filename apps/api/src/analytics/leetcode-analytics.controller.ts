import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/public.decorator';
import { AnalyticsService } from './analytics.service';
import { LeetcodeSummaryDto } from './dto/leetcode-summary.dto';
import { LeetcodeTimeByDifficultyResponseDto } from './dto/leetcode-time-point.dto';

@Controller('analytics')
export class LeetcodeAnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Public()
  @Get('summary')
  async getLeetcodeSummary(): Promise<LeetcodeSummaryDto> {
    return this.analyticsService.leetcodeSummary();
  }

  @Public()
  @Get('scatter')
  async getLeetcodeScatterpoints(): Promise<LeetcodeTimeByDifficultyResponseDto> {
    return this.analyticsService.leetcodeTimeByDifficulty();
  }
}