import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { LeetcodeSummaryDto } from './dto/leetcode-summary.dto';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('summary')
  async getLeetcodeSummary(): Promise<LeetcodeSummaryDto> {
    return await this.analyticsService.leetcodeSummary();
  }
}
