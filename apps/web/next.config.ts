/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    "@portfolio/auth",
    "@portfolio/db",
    "@prisma/client",
    "@prisma/client-runtime-utils",
    "@prisma/adapter-pg",
    "pg",
  ],
};

module.exports = nextConfig;
