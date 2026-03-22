"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const globalForPrisma = globalThis;
const databaseUrl = process.env.DATABASE_URL;
exports.prisma = globalForPrisma.prisma ??
    new client_1.PrismaClient({
        adapter: new adapter_pg_1.PrismaPg({ connectionString: databaseUrl }),
        log: ["warn", "error"],
    });
console.log("DATABASE_URL exists:", !!databaseUrl);
console.log(Object.keys(exports.prisma)
    .filter((k) => !k.startsWith("$"))
    .sort());
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = exports.prisma;
}
