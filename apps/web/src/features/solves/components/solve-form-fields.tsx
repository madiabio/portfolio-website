/**
 * Presentational field set shared by the add and edit solve forms.
 *
 * Renders every `SolveFormValues` input against a Mantine form instance; owns
 * no submission or mutation logic. Parent forms supply layout (Stack) and
 * submit controls.
 */

"use client";

import { NumberInput, Select, Textarea, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import type { UseFormReturnType } from "@mantine/form";
import type { SolveFormValues } from "../utils/solve-form";

const DIFFICULTY_OPTIONS = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const METADATA_CHOICE_OPTIONS = [
  { value: "unknown", label: "Unknown" },
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

type Props = {
  form: UseFormReturnType<SolveFormValues>;
};

export function SolveFormFields({ form }: Props) {
  return (
    <>
      <NumberInput
        label="Problem number"
        min={1}
        {...form.getInputProps("problemNumber")}
      />

      <TextInput label="Problem name" {...form.getInputProps("problemName")} />

      <Select
        label="Difficulty"
        data={DIFFICULTY_OPTIONS}
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
        data={METADATA_CHOICE_OPTIONS}
        {...form.getInputProps("solvedWithoutHint")}
      />

      <Select
        label="Solved optimally"
        data={METADATA_CHOICE_OPTIONS}
        {...form.getInputProps("solvedOptimally")}
      />

      <Textarea
        label="Notes"
        autosize
        minRows={3}
        {...form.getInputProps("notes")}
      />
    </>
  );
}
