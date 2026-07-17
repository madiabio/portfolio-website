/**
 * Form for logging a new LeetCode solve.
 *
 * Uses the shared solve form model and field set; owns the create mutation
 * and resets the form after a successful save.
 */

"use client";

import { Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCreate } from "@/lib/api/generated/leetcode-solve/leetcode-solve";
import { useInvalidateSolveQueries } from "../hooks/use-invalidate-solve-queries";
import {
  defaultSolveFormValues,
  type SolveFormValues,
  solveFormValidation,
  solvePayloadFromValues,
} from "../utils/solve-form";
import { SolveFormFields } from "./solve-form-fields";

type Props = {
  onSuccess?: () => void;
};

export function AddSolveForm({ onSuccess }: Props) {
  const invalidateSolveQueries = useInvalidateSolveQueries();

  const form = useForm<SolveFormValues>({
    initialValues: defaultSolveFormValues(),
    validate: solveFormValidation,
  });

  const mutation = useCreate({
    mutation: {
      onSuccess: async () => {
        await invalidateSolveQueries();
        form.reset();
        onSuccess?.();
      },
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    mutation.mutate({ data: solvePayloadFromValues(values) });
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <SolveFormFields form={form} />

        <Button type="submit" loading={mutation.isPending}>
          Save solve
        </Button>
      </Stack>
    </form>
  );
}
