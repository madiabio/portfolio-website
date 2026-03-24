import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
export declare function createPrisma(databaseUrl: string): PrismaClient<{
    adapter: PrismaPg;
    log: ("warn" | "error")[];
}, "warn" | "error", import("packages/db/generated/prisma/client/runtime/client").DefaultArgs>;
