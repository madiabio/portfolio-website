import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
    log: ["warn", "error"],
  });

console.log(
  Object.keys(prisma)
    .filter((k) => !k.startsWith("$"))
    .sort(),
);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
