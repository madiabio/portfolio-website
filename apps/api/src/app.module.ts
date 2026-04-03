import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeetcodeSolveModule } from './leetcodeSolve/leetcodeSolve.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AdminGuard } from './auth/admin.guard';
import { AuthController } from './auth/auth.controller';
import { AdminAuthService } from './auth/admin-auth.service';
import { CodeforcesModule } from './codeforces/codeforces.module';

@Module({
  imports: [LeetcodeSolveModule, AnalyticsModule, CodeforcesModule],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    AdminAuthService,
    {
      provide: APP_GUARD,
      useClass: AdminGuard,
    },
  ],
})
export class AppModule {}
