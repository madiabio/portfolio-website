import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
export declare function createPrisma(databaseUrl: string): PrismaClient<{
    adapter: PrismaPg;
    log: ("warn" | "error")[];
}, "warn" | "error", import("@prisma/client/runtime/client").DefaultArgs>;
