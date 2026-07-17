/**
 * Modal for editing an existing LeetCode solve.
 *
 * Owns the update mutation. The inner form remounts per solve (keyed by id)
 * so values initialise from the selected solve without effect-based syncing.
 */

"use client";

import { Button, Group, Modal, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import type { LeetcodeSolveDto } from "@/lib/api/generated/generated.schemas";
import { useUpdate } from "@/lib/api/generated/leetcode-solve/leetcode-solve";
import { useInvalidateSolveQueries } from "../hooks/use-invalidate-solve-queries";
import {
  type SolveFormValues,
  solveFormValidation,
  solvePayloadFromValues,
  valuesFromSolve,
} from "../utils/solve-form";
import { SolveFormFields } from "./solve-form-fields";

type Props = {
  solve: LeetcodeSolveDto | null;
  onClose: () => void;
};

export function EditSolveModal({ solve, onClose }: Props) {
  return (
    <Modal
      opened={solve !== null}
      onClose={onClose}
      title="Edit LeetCode solve"
    >
      {solve ? (
        <EditSolveForm key={solve.id} solve={solve} onClose={onClose} />
      ) : null}
    </Modal>
  );
}

function EditSolveForm({
  solve,
  onClose,
}: {
  solve: LeetcodeSolveDto;
  onClose: () => void;
}) {
  const invalidateSolveQueries = useInvalidateSolveQueries();

  const form = useForm<SolveFormValues>({
    initialValues: valuesFromSolve(solve),
    validate: solveFormValidation,
  });

  const updateMutation = useUpdate({
    mutation: {
      onSuccess: async () => {
        await invalidateSolveQueries();
        onClose();
        notifications.show({
          title: "Saved",
          message: "Solve updated.",
          color: "green",
        });
      },
      onError: () => {
        notifications.show({
          title: "Save failed",
          message: "Could not update solve.",
          color: "red",
        });
      },
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    updateMutation.mutate({
      id: solve.id,
      data: solvePayloadFromValues(values),
    });
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <SolveFormFields form={form} />

        <Group justify="flex-end">
          <Button type="button" variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" loading={updateMutation.isPending}>
            Save
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
