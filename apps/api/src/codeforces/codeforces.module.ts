import { Module } from '@nestjs/common';
import { CodeforcesController } from './codeforces.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CodeforcesService } from './codeforces.service';

@Module({
  imports: [PrismaModule],
  controllers: [CodeforcesController],
  providers: [CodeforcesService],
  exports: [CodeforcesService],
})
export class CodeforcesModule {}