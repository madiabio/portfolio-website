-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('PENDING_TIME', 'TIMED', 'SKIPPED');

-- CreateTable
CREATE TABLE "CodeforcesSubmissionQueue" (
    "id" SERIAL NOT NULL,
    "platform" "SolvePlatform" NOT NULL DEFAULT 'CODEFORCES',
    "status" "SubmissionStatus" NOT NULL DEFAULT 'PENDING_TIME',
    "username" TEXT NOT NULL,
    "submissionId" INTEGER NOT NULL,
    "contestId" INTEGER NOT NULL,
    "problemIndex" TEXT NOT NULL,
    "problemName" TEXT NOT NULL,
    "rating" INTEGER,
    "solvedAt" TIMESTAMP(3) NOT NULL,
    "durationMin" INTEGER,
    "reviewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CodeforcesSubmissionQueue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CodeforcesSubmissionQueue_username_idx" ON "CodeforcesSubmissionQueue"("username");

-- CreateIndex
CREATE INDEX "CodeforcesSubmissionQueue_status_idx" ON "CodeforcesSubmissionQueue"("status");

-- CreateIndex
CREATE INDEX "CodeforcesSubmissionQueue_solvedAt_idx" ON "CodeforcesSubmissionQueue"("solvedAt");

-- CreateIndex
CREATE UNIQUE INDEX "CodeforcesSubmissionQueue_submissionId_key" ON "CodeforcesSubmissionQueue"("submissionId");
