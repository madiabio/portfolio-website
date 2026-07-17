/**
 * Shared form model for creating and editing LeetCode solves.
 *
 * Owns the `SolveFormValues` shape used by the add and edit solve forms, plus
 * the conversions between form values and the API DTOs: default values,
 * validation rules, `valuesFromSolve` (DTO -> form) and
 * `solvePayloadFromValues` (form -> DTO). The create and update DTOs share
 * field shapes, so one payload builder serves both mutations.
 */

import type {
  CreateLeetcodeSolveDto,
  LeetcodeSolveDto,
} from "@/lib/api/generated/generated.schemas";

export type MetadataChoice = "unknown" | "yes" | "no";

export type SolveFormValues = {
  problemNumber: number;
  problemName: string;
  difficulty: CreateLeetcodeSolveDto["difficulty"];
  language: string;
  durationMin: number;
  solvedAt: Date;
  notes: string;
  solvedWithoutHint: MetadataChoice;
  solvedOptimally: MetadataChoice;
};

export function booleanToChoice(
  value: boolean | null | undefined,
): MetadataChoice {
  if (value === true) {
    return "yes";
  }

  if (value === false) {
    return "no";
  }

  return "unknown";
}

export function choiceToBoolean(value: MetadataChoice): boolean | null {
  if (value === "yes") {
    return true;
  }

  if (value === "no") {
    return false;
  }

  return null;
}

function optionalText(value: string): string | null {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export function defaultSolveFormValues(): SolveFormValues {
  return {
    problemNumber: 1,
    problemName: "",
    difficulty: "easy",
    language: "",
    durationMin: 15,
    solvedAt: new Date(),
    notes: "",
    solvedWithoutHint: "unknown",
    solvedOptimally: "unknown",
  };
}

export const solveFormValidation = {
  problemNumber: (value: number) =>
    value > 0 ? null : "Problem number must be greater than 0",
  problemName: (value: string) =>
    value.trim().length > 0 ? null : "Problem name is required",
  durationMin: (value: number) =>
    value > 0 ? null : "Duration must be greater than 0",
};

export function valuesFromSolve(solve: LeetcodeSolveDto): SolveFormValues {
  return {
    problemNumber: solve.problemNumber,
    problemName: solve.problemName,
    difficulty: solve.difficulty,
    language: solve.language ?? "",
    durationMin: solve.durationMin,
    solvedAt: new Date(solve.solvedAt),
    notes: solve.notes ?? "",
    solvedWithoutHint: booleanToChoice(solve.solvedWithoutHint),
    solvedOptimally: booleanToChoice(solve.solvedOptimally),
  };
}

export function solvePayloadFromValues(
  values: SolveFormValues,
): CreateLeetcodeSolveDto {
  const solvedAt =
    values.solvedAt instanceof Date
      ? values.solvedAt
      : new Date(values.solvedAt);

  return {
    problemNumber: values.problemNumber,
    problemName: values.problemName.trim(),
    difficulty: values.difficulty,
    language: optionalText(values.language),
    durationMin: values.durationMin,
    solvedAt: solvedAt.toISOString(),
    notes: optionalText(values.notes),
    solvedWithoutHint: choiceToBoolean(values.solvedWithoutHint),
    solvedOptimally: choiceToBoolean(values.solvedOptimally),
  };
}
