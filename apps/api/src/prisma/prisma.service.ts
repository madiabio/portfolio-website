import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { createPrisma } from '@portfolio/db';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  readonly client = createPrisma(process.env.DATABASE_URL!);
  constructor() {
    this.logger.log(`DATABASE_URL exists = ${!!process.env.DATABASE_URL}`);
  }
  async onModuleInit() {
    await this.client.$connect();
    this.logger.log('Prisma connected');
  }
  async onModuleDestroy() {
    await this.client.$disconnect();
    this.logger.log('Prisma disconnected');
  }
}
