import { Module } from '@nestjs/common';
import { LeetcodeSolveController } from './leetcodeSolve.controller';
import { LeetcodeSolveService } from './leetcodeSolve.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LeetcodeSolveController],
  providers: [LeetcodeSolveService],
})
export class LeetcodeSolveModule {}
