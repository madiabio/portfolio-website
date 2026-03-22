import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeetcodeSolveModule } from '@/leetcodeSolve/leetcodeSolve.module';

@Module({
  imports: [LeetcodeSolveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
