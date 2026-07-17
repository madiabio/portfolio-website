"use client";

import {
  Button,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useQueryClient } from "@tanstack/react-query";
import {
  getGetLeetcodeScatterpointsQueryKey,
  getGetLeetcodeSummaryQueryKey,
} from "@/lib/api/generated/analytics/analytics"; // fix path if needed
import {
  type CreateLeetcodeSolveDto,
  CreateLeetcodeSolveDtoDifficulty,
} from "@/lib/api/generated/generated.schemas";
import {
  getFindAllQueryKey,
  useCreate,
} from "@/lib/api/generated/leetcode-solve/leetcode-solve";

type Props = {
  onSuccess?: () => void;
};

type MetadataChoice = "unknown" | "yes" | "no";

type AddSolveFormValues = {
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

function metadataChoiceToBoolean(value: MetadataChoice): boolean | null {
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

export function AddSolveForm({ onSuccess }: Props) {
  const queryClient = useQueryClient();

  const form = useForm<AddSolveFormValues>({
    initialValues: {
      problemNumber: 1,
      problemName: "",
      difficulty: CreateLeetcodeSolveDtoDifficulty.easy,
      language: "",
      durationMin: 15,
      solvedAt: new Date(),
      notes: "",
      solvedWithoutHint: "unknown",
      solvedOptimally: "unknown",
    },
    validate: {
      problemNumber: (value) =>
        value > 0 ? null : "Problem number must be greater than 0",
      problemName: (value) =>
        value.trim().length > 0 ? null : "Problem name is required",
      durationMin: (value) =>
        value > 0 ? null : "Duration must be greater than 0",
    },
  });

  const mutation = useCreate({
    mutation: {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: getGetLeetcodeSummaryQueryKey(),
        });

        await queryClient.invalidateQueries({
          queryKey: getGetLeetcodeScatterpointsQueryKey(),
        });

        await queryClient.invalidateQueries({
          queryKey: getFindAllQueryKey(),
        });

        form.reset();
        onSuccess?.();
      },
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    const solvedAt =
      values.solvedAt instanceof Date
        ? values.solvedAt.toISOString()
        : new Date(values.solvedAt).toISOString();

    mutation.mutate({
      data: {
        problemNumber: values.problemNumber,
        problemName: values.problemName.trim(),
        difficulty: values.difficulty,
        language: optionalText(values.language),
        durationMin: values.durationMin,
        solvedAt,
        notes: optionalText(values.notes),
        solvedWithoutHint: metadataChoiceToBoolean(values.solvedWithoutHint),
        solvedOptimally: metadataChoiceToBoolean(values.solvedOptimally),
      },
    });
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <NumberInput
          label="Problem number"
          min={1}
          {...form.getInputProps("problemNumber")}
        />

        <TextInput
          label="Problem name"
          {...form.getInputProps("problemName")}
        />

        <Select
          label="Difficulty"
          data={[
            { value: "easy", label: "Easy" },
            { value: "medium", label: "Medium" },
            { value: "hard", label: "Hard" },
          ]}
          {...form.getInputProps("difficulty")}
        />

        <NumberInput
          label="Duration (minutes)"
          min={1}
          {...form.getInputProps("durationMin")}
        />

        <TextInput label="Language" {...form.getInputProps("language")} />

        <DateTimePicker label="Solved at" {...form.getInputProps("solvedAt")} />

        <Select
          label="Solved without hint"
          data={[
            { value: "unknown", label: "Unknown" },
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          {...form.getInputProps("solvedWithoutHint")}
        />

        <Select
          label="Solved optimally"
          data={[
            { value: "unknown", label: "Unknown" },
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          {...form.getInputProps("solvedOptimally")}
        />

        <Textarea
          label="Notes"
          autosize
          minRows={3}
          {...form.getInputProps("notes")}
        />

        <Button type="submit" loading={mutation.isPending}>
          Save solve
        </Button>
      </Stack>
    </form>
  );
}
