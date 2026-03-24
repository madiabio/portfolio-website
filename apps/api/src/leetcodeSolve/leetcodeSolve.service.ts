import { Injectable } from '@nestjs/common';
import { CreateLeetcodeSolveDto } from './dto/create-leetcodeSolve.dto';

import { type LeetcodeSolve, Prisma } from '@portfolio/db';

import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class LeetcodeSolveService {
  constructor(private readonly prisma: PrismaService) {}

  async leetcodeSolve(
    leetcodeSolveWhereUniqueInput: Prisma.LeetcodeSolveWhereUniqueInput,
  ): Promise<LeetcodeSolve> {
    return this.prisma.client.leetcodeSolve.findUniqueOrThrow({
      where: leetcodeSolveWhereUniqueInput,
    });
  }

  async leetcodeSolves(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LeetcodeSolveWhereUniqueInput;
    where?: Prisma.LeetcodeSolveWhereInput;
    orderBy?: Prisma.LeetcodeSolveOrderByWithRelationInput;
  }): Promise<LeetcodeSolve[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.client.leetcodeSolve.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createLeetcodeSolve(
    data: CreateLeetcodeSolveDto,
  ): Promise<LeetcodeSolve> {
    return this.prisma.client.leetcodeSolve.create({
      data: {
        problemNumber: data.problemNumber,
        problemName: data.problemName,
        difficulty: data.difficulty,
        durationMin: data.durationMin,
        solvedAt: data.solvedAt,
      },
    });
  }

  async updateLeetcodeSolve(params: {
    where: Prisma.LeetcodeSolveWhereUniqueInput;
    data: Prisma.LeetcodeSolveUpdateInput;
  }): Promise<LeetcodeSolve> {
    const { where, data } = params;
    return this.prisma.client.leetcodeSolve.update({
      data,
      where,
    });
  }

  async deleteLeetcodeSolve(
    where: Prisma.LeetcodeSolveWhereUniqueInput,
  ): Promise<LeetcodeSolve> {
    return this.prisma.client.leetcodeSolve.delete({
      where,
    });
  }
}
