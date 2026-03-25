/** @type {import('next').NextConfig} */
const API_REWRITE_TARGET = process.env.API_REWRITE_TARGET;

if (!API_REWRITE_TARGET) {
  throw new Error("API_REWRITE_TARGET is not set");
}

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/backend/:path*",
        destination: `${API_REWRITE_TARGET}/:path*`,
      },
    ];
  },

  transpilePackages: ["@portfolio/auth", "@portfolio/db"],

  serverExternalPackages: [
    "@prisma/client",
    "@prisma/client-runtime-utils",
    "@prisma/adapter-pg",
    "pg",
  ],
};

module.exports = nextConfig;
