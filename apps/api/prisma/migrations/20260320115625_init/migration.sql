-- CreateTable
CREATE TABLE "LeetCodeSolve" (
    "id" SERIAL NOT NULL,
    "problemId" INTEGER NOT NULL,
    "problemName" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "durationMin" INTEGER NOT NULL,
    "solvedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeetCodeSolve_pkey" PRIMARY KEY ("id")
);
