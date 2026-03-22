import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

const databaseUrl = process.env.DATABASE_URL;
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg({ connectionString: databaseUrl }),
    log: ["warn", "error"],
  });

console.log("DATABASE_URL =:", databaseUrl);
console.log(
  Object.keys(prisma)
    .filter((k) => !k.startsWith("$"))
    .sort(),
);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
