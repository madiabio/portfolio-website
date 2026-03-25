"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const db_1 = require("@portfolio/db");
const prisma = (0, db_1.createPrisma)(process.env.DATABASE_URL);
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";
exports.auth = (0, better_auth_1.betterAuth)({
    trustedOrigins: [process.env.NEXT_PUBLIC_URL],
    database: (0, prisma_1.prismaAdapter)(prisma, {
        provider: "postgresql",
    }),
    secret: process.env.BETTER_AUTH_SECRET,
    baseUrl: process.env.BETTER_AUTH_URL,
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
});
