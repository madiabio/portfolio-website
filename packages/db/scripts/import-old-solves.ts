import path from "node:path";
import fs from "node:fs/promises";
import dotenv from "dotenv";
import { createPrisma } from "../src/client";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const prisma = createPrisma(databaseUrl);

function mapDifficulty(value: number): "easy" | "medium" | "hard" {
  if (value === 0) return "easy";
  if (value === 1) return "medium";
  if (value === 2) return "hard";
  throw new Error(`Unknown difficulty code: ${value}`);
}

function extractProblemName(title: string): string {
  return title.replace(/^\d+\.\s*/, "").trim();
}

type OldAttempt = {
  problemAttemptId: string;
  attemptStartDateUtc: string;
  timeTakenInMinutes: number;
  notes?: string | null;
  leetcodeProblem: {
    leetcodeNumber: number;
    leetcodeProblemDifficulty: number;
    problem: {
      title: string;
      link: string;
    };
  };
};

async function main() {
  const filePath = path.resolve(
    process.cwd(),
    "../../.rsp_data/problem_attempts.json",
  );

  console.log("cwd:", process.cwd());
  console.log("filePath:", filePath);

  const raw = await fs.readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);

  const attempts: OldAttempt[] = Array.isArray(parsed)
    ? parsed
    : Array.isArray(parsed.responseBody?.problemAttempts)
      ? parsed.responseBody.problemAttempts
      : Array.isArray(parsed.problemAttempts)
        ? parsed.problemAttempts
        : [];

  if (attempts.length === 0) {
    throw new Error("No attempts found in JSON");
  }

  if (attempts.length === 0) {
    throw new Error("No attempts found in JSON");
  }

  console.log(`Found ${attempts.length} attempts`);

  let inserted = 0;
  let skipped = 0;

  for (const attempt of attempts) {
    const problemNumber = attempt.leetcodeProblem.leetcodeNumber;
    const problemName = extractProblemName(
      attempt.leetcodeProblem.problem.title,
    );
    const difficulty = mapDifficulty(
      attempt.leetcodeProblem.leetcodeProblemDifficulty,
    );
    const durationMin = attempt.timeTakenInMinutes;
    const solvedAt = new Date(attempt.attemptStartDateUtc);

    const existing = await prisma.leetcodeSolve.findFirst({
      where: {
        problemNumber,
        solvedAt,
      },
      select: { id: true },
    });

    if (existing) {
      skipped += 1;
      continue;
    }

    await prisma.leetcodeSolve.create({
      data: {
        problemNumber,
        problemName,
        difficulty,
        durationMin,
        solvedAt,
      },
    });

    inserted += 1;
  }

  console.log({ inserted, skipped, total: attempts.length });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
