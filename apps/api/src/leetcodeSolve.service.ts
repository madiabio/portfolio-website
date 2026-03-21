import { Injectable } from "@nestjs/common";
import type { LeetcodeSolve, Prisma } from "./generated/prisma/client";
import type { PrismaService } from "./prisma.service";

@Injectable()
export class LeetcodeSolveService {
	constructor(private readonly prisma: PrismaService) {}

	async leetcodeSolve(
		leetcodeSolveWhereUniqueInput: Prisma.LeetcodeSolveWhereUniqueInput,
	): Promise<LeetcodeSolve | null> {
		return this.prisma.leetcodeSolve.findUnique({
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
		return this.prisma.leetcodeSolve.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy,
		});
	}

	async createLeetcodeSolve(
		data: Prisma.LeetcodeSolveCreateInput,
	): Promise<LeetcodeSolve> {
		return this.prisma.leetcodeSolve.create({
			data,
		});
	}

	async updateLeetcodeSolve(params: {
		where: Prisma.LeetcodeSolveWhereUniqueInput;
		data: Prisma.LeetcodeSolveUpdateInput;
	}): Promise<LeetcodeSolve> {
		const { where, data } = params;
		return this.prisma.leetcodeSolve.update({
			data,
			where,
		});
	}

	async deleteLeetcodeSolve(
		where: Prisma.LeetcodeSolveWhereUniqueInput,
	): Promise<LeetcodeSolve> {
		return this.prisma.leetcodeSolve.delete({
			where,
		});
	}
}
