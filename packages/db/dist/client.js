"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// packages/db/src/client.ts
require("dotenv/config");
const client_1 = require("./generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set.");
}
const globalForPrisma = globalThis;
exports.prisma = globalForPrisma.prisma ??
    new client_1.PrismaClient({
        adapter: new adapter_pg_1.PrismaPg({ connectionString: databaseUrl }),
        log: ["warn", "error"],
    });
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = exports.prisma;
}
