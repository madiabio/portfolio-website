/**
 * Admin screen for managing logged LeetCode solves.
 *
 * Orchestrates the solve list query, the delete mutation, and edit-modal
 * state; rendering lives in SolvesTable and EditSolveModal.
 */

"use client";

import { Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import type { LeetcodeSolveDto } from "@/lib/api/generated/generated.schemas";
import {
  useFindAll,
  useRemove,
} from "@/lib/api/generated/leetcode-solve/leetcode-solve";
import { useInvalidateSolveQueries } from "../hooks/use-invalidate-solve-queries";
import { EditSolveModal } from "./edit-solve-modal";
import { SolvesTable } from "./solves-table";

export function LeetcodeSolveManager() {
  const solvesQuery = useFindAll();
  const invalidateSolveQueries = useInvalidateSolveQueries();
  const [editingSolve, setEditingSolve] = useState<LeetcodeSolveDto | null>(
    null,
  );

  const removeMutation = useRemove({
    mutation: {
      onSuccess: async () => {
        await invalidateSolveQueries();
        notifications.show({
          title: "Deleted",
          message: "Solve deleted.",
          color: "green",
        });
      },
      onError: () => {
        notifications.show({
          title: "Delete failed",
          message: "Could not delete solve.",
          color: "red",
        });
      },
    },
  });

  const handleDelete = (solve: LeetcodeSolveDto) => {
    const confirmed = window.confirm(
      `Delete ${solve.problemNumber}. ${solve.problemName}?`,
    );

    if (!confirmed) {
      return;
    }

    removeMutation.mutate({ id: solve.id });
  };

  const solves = solvesQuery.data?.data ?? [];

  return (
    <Stack gap="md">
      {solvesQuery.isLoading ? <Text>Loading solves...</Text> : null}
      {solvesQuery.error ? <Text c="red">Could not load solves.</Text> : null}
      {!solvesQuery.isLoading && solves.length === 0 ? (
        <Text c="dimmed">No solves logged.</Text>
      ) : null}

      {solves.length > 0 ? (
        <SolvesTable
          solves={solves}
          deletingSolveId={
            removeMutation.isPending
              ? (removeMutation.variables?.id ?? null)
              : null
          }
          onEdit={setEditingSolve}
          onDelete={handleDelete}
        />
      ) : null}

      <EditSolveModal
        solve={editingSolve}
        onClose={() => setEditingSolve(null)}
      />
    </Stack>
  );
}
