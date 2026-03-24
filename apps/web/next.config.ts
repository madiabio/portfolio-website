/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@portfolio/auth", "@portfolio/db"],

  serverExternalPackages: [
    "@prisma/client",
    "@prisma/client-runtime-utils",
    "@prisma/adapter-pg",
    "pg",
  ],
};

module.exports = nextConfig;
