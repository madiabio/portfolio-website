import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createPrisma } from "@portfolio/db";
import { Logger } from "@nestjs/common";

const logger = new Logger("AuthConfig");

const prisma = createPrisma(process.env.DATABASE_URL as string);

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const DATABASE_URL = process.env.DATABASE_URL;

const BETTER_AUTH_URL =
  process.env.BETTER_AUTH_URL ??
  process.env.NEXT_PUBLIC_URL ??
  "http://localhost:3000";

const NEXT_PUBLIC_URL =
  process.env.NEXT_PUBLIC_URL ??
  process.env.BETTER_AUTH_URL ??
  "http://localhost:3000";

logger.log(`DATABASE_URL set: ${!!DATABASE_URL}`);
logger.log(`NEXT_PUBLIC_URL: ${NEXT_PUBLIC_URL}`);
logger.log(`BETTER_AUTH_URL: ${BETTER_AUTH_URL}`);
logger.log(`GITHUB_CLIENT_ID set: ${!!GITHUB_CLIENT_ID}`);
logger.log(`GITHUB_CLIENT_ID set: ${!!GITHUB_CLIENT_SECRET}`);

export const auth = betterAuth({
  trustedOrigins: [NEXT_PUBLIC_URL],
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  baseUrl: process.env.BETTER_AUTH_URL,

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
