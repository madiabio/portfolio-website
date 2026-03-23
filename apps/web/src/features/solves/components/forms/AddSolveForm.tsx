"use client";

import { Button, NumberInput, Select, Stack, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useQueryClient } from "@tanstack/react-query";
import { useCreate } from "@/lib/api/generated/leetcode-solve/leetcode-solve";
import type { CreateLeetcodeSolveDto } from "@/lib/api/generated/generated.schemas";
import {
  getGetLeetcodeSummaryQueryKey,
  getGetLeetcodeScatterpointsQueryKey,
} from "@/lib/api/generated/analytics/analytics"; // fix path if needed

type Props = {
  onSuccess?: () => void;
};

export function AddSolveForm({ onSuccess }: Props) {
  const queryClient = useQueryClient();

  const form = useForm({
    initialValues: {
      problemNumber: 1,
      problemName: "",
      difficulty: "easy",
      durationMin: 15,
      solvedAt: new Date(),
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
        ...values,
        solvedAt,
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

        <DateTimePicker label="Solved at" {...form.getInputProps("solvedAt")} />

        <Button type="submit" loading={mutation.isPending}>
          Save solve
        </Button>
      </Stack>
    </form>
  );
}
