-- CreateTable
CREATE TABLE "LeetcodeSolve" (
    "id" SERIAL NOT NULL,
    "problemNumber" INTEGER NOT NULL,
    "problemName" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "durationMin" INTEGER NOT NULL,
    "solvedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeetcodeSolve_pkey" PRIMARY KEY ("id")
);
