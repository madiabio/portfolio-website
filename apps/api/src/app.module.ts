import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeetcodeSolveModule } from './leetcodeSolve/leetcodeSolve.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AdminGuard } from './auth/admin.guard';

@Module({
  imports: [LeetcodeSolveModule, AnalyticsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AdminGuard,
    },
  ],
})
export class AppModule {}
