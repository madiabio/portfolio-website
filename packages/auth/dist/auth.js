"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const db_1 = require("@portfolio/db");
const prisma = (0, db_1.createPrisma)(process.env.DATABASE_URL);
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const DATABASE_URL = process.env.DATABASE_URL;
const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL ??
    process.env.NEXT_PUBLIC_URL ??
    "http://localhost:3000";
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL ??
    process.env.BETTER_AUTH_URL ??
    "http://localhost:3000";
console.log("[AuthConfig] DATABASE_URL set:", !!DATABASE_URL);
console.log("[AuthConfig] NEXT_PUBLIC_URL:", NEXT_PUBLIC_URL);
console.log("[AuthConfig] BETTER_AUTH_URL:", BETTER_AUTH_URL);
console.log("[AuthConfig] GITHUB_CLIENT_ID set:", !!GITHUB_CLIENT_ID);
console.log("[AuthConfig] GITHUB_CLIENT_SECRET set:", !!GITHUB_CLIENT_SECRET);
exports.auth = (0, better_auth_1.betterAuth)({
    trustedOrigins: [NEXT_PUBLIC_URL],
    database: (0, prisma_1.prismaAdapter)(prisma, {
        provider: "postgresql",
    }),
    secret: process.env.BETTER_AUTH_SECRET,
    baseUrl: BETTER_AUTH_URL,
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
});
