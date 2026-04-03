import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { LeetcodeAnalyticsController } from './leetcode-analytics.controller';
import { CodeforcesAnalyticsController } from './codeforces-analytics.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LeetcodeAnalyticsController, CodeforcesAnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
