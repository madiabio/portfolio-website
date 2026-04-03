-- CreateEnum
CREATE TYPE "SolvePlatform" AS ENUM ('LEETCODE', 'CODEFORCES', 'HACKERRANK');

-- AlterTable
ALTER TABLE "LeetcodeSolve" ADD COLUMN     "platform" "SolvePlatform" NOT NULL DEFAULT 'LEETCODE';

-- CreateTable
CREATE TABLE "CodeforcesSolve" (
    "id" SERIAL NOT NULL,
    "platform" "SolvePlatform" NOT NULL DEFAULT 'CODEFORCES',
    "username" TEXT NOT NULL,
    "submissionId" INTEGER NOT NULL,
    "contestId" INTEGER NOT NULL,
    "problemIndex" TEXT NOT NULL,
    "problemName" TEXT NOT NULL,
    "rating" INTEGER,
    "durationMin" INTEGER NOT NULL,
    "solvedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CodeforcesSolve_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CodeforcesSolve_username_idx" ON "CodeforcesSolve"("username");

-- CreateIndex
CREATE INDEX "CodeforcesSolve_solvedAt_idx" ON "CodeforcesSolve"("solvedAt");

-- CreateIndex
CREATE UNIQUE INDEX "CodeforcesSolve_username_contestId_problemIndex_key" ON "CodeforcesSolve"("username", "contestId", "problemIndex");

-- CreateIndex
CREATE UNIQUE INDEX "CodeforcesSolve_submissionId_key" ON "CodeforcesSolve"("submissionId");
