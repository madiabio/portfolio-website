"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrisma = createPrisma;
const client_1 = require("../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
function createPrisma(databaseUrl) {
    return new client_1.PrismaClient({
        adapter: new adapter_pg_1.PrismaPg({ connectionString: databaseUrl }),
        log: ["warn", "error"],
    });
}
