import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeetcodeSolveModule } from '@/leetcodeSolve/leetcodeSolve.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [LeetcodeSolveModule, AnalyticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
