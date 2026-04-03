import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Public } from '../auth/public.decorator';
import { AnalyticsService } from './analytics.service';
import { CodeforcesTimeByRatingResponseDto } from './dto/leetcode-time-point.dto';

@Controller('codeforces/analytics')
export class CodeforcesAnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Public()
  @Get('scatter')
  @ApiOkResponse({ type: CodeforcesTimeByRatingResponseDto })
  async getCodeforcesScatterpoints(): Promise<CodeforcesTimeByRatingResponseDto> {
    return this.analyticsService.codeforcesTimeByRating();
  }
}