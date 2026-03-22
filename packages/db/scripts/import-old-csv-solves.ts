import path from "node:path";
import fs from "node:fs/promises";
import dotenv from "dotenv";
import Papa from "papaparse";
import { createPrisma } from "../src/client";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const prisma = createPrisma(databaseUrl);

type CsvRow = {
  "Problem Number": string;
  "Problem Name": string;
  Difficulty: string;
  "Duration (Minutes)": string;
  Datetime: string;
  "Solved without Hint?": string;
  "Solved Optimally?": string;
  Notes: string;
};

function parseDifficulty(value: string): "easy" | "medium" | "hard" {
  const v = value.trim().toLowerCase();
  if (v === "easy") return "easy";
  if (v === "medium") return "medium";
  if (v === "hard") return "hard";
  throw new Error(`Invalid difficulty: ${value}`);
}

function parseDatetime(value: string): Date {
  const [datePart, timePart] = value.trim().split(" ");
  if (!datePart || !timePart) {
    throw new Error(`Invalid datetime: ${value}`);
  }

  const [month, day, year] = datePart.split("/").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);

  return new Date(year, month - 1, day, hour, minute);
}

function parseBoolean(value: string): boolean | null {
  const v = value.trim().toLowerCase();

  if (v === "yes") return true;
  if (v === "no") return false;

  return null;
}

async function main() {
  const filePath = path.resolve(
    process.cwd(),
    "../../.rsp_data/problem_attempts.csv",
  );

  console.log("cwd:", process.cwd());
  console.log("filePath:", filePath);

  const raw = await fs.readFile(filePath, "utf8");

  const parsed = Papa.parse<CsvRow>(raw, {
    header: true,
    skipEmptyLines: true,
  });

  if (parsed.errors.length > 0) {
    console.error(parsed.errors);
    throw new Error("Failed to parse CSV");
  }

  const rows = parsed.data;
  console.log(`Found ${rows.length} CSV rows`);

  let inserted = 0;
  let skipped = 0;

  for (const row of rows) {
    const problemNumber = Number(row["Problem Number"]);
    const problemName = row["Problem Name"]?.trim();
    const difficulty = parseDifficulty(row["Difficulty"]);
    const durationMin = Number(row["Duration (Minutes)"]);
    const solvedAt = parseDatetime(row["Datetime"]);
    const solvedWithoutHint = parseBoolean(row["Solved without Hint?"] ?? "");
    const solvedOptimally = parseBoolean(row["Solved Optimally?"] ?? "");
    const notes = row["Notes"]?.trim() || null;

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
        notes,
        solvedWithoutHint,
        solvedOptimally,
      },
    });

    inserted += 1;
  }

  console.log({ inserted, skipped, total: rows.length });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
