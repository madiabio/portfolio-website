"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const globalForPrisma = globalThis;
exports.prisma = globalForPrisma.prisma ??
    new client_1.PrismaClient({
        adapter: new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL }),
        log: ["warn", "error"],
    });
console.log(Object.keys(exports.prisma)
    .filter((k) => !k.startsWith("$"))
    .sort());
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = exports.prisma;
}
