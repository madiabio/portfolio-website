"use client";

import {
  ActionIcon,
  Button,
  Group,
  Modal,
  NumberInput,
  Select,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  getGetLeetcodeScatterpointsQueryKey,
  getGetLeetcodeSummaryQueryKey,
} from "@/lib/api/generated/analytics/analytics";
import type {
  LeetcodeSolveDto,
  UpdateLeetcodeSolveDto,
} from "@/lib/api/generated/generated.schemas";
import {
  getFindAllQueryKey,
  useFindAll,
  useRemove,
  useUpdate,
} from "@/lib/api/generated/leetcode-solve/leetcode-solve";

type MetadataChoice = "unknown" | "yes" | "no";

type SolveFormValues = {
  problemNumber: number;
  problemName: string;
  difficulty: UpdateLeetcodeSolveDto["difficulty"];
  language: string;
  durationMin: number;
  solvedAt: Date;
  notes: string;
  solvedWithoutHint: MetadataChoice;
  solvedOptimally: MetadataChoice;
};

function booleanToChoice(value: boolean | null | undefined): MetadataChoice {
  if (value === true) {
    return "yes";
  }

  if (value === false) {
    return "no";
  }

  return "unknown";
}

function choiceToBoolean(value: MetadataChoice): boolean | null {
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

function formatSolvedAt(value: string) {
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function valuesFromSolve(solve: LeetcodeSolveDto): SolveFormValues {
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

export function LeetcodeSolveManager() {
  const queryClient = useQueryClient();
  const solvesQuery = useFindAll();
  const [editingSolve, setEditingSolve] = useState<LeetcodeSolveDto | null>(
    null,
  );

  const form = useForm<SolveFormValues>({
    initialValues: {
      problemNumber: 1,
      problemName: "",
      difficulty: "easy",
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

  const invalidateSolveQueries = async () => {
    await queryClient.invalidateQueries({ queryKey: getFindAllQueryKey() });
    await queryClient.invalidateQueries({
      queryKey: getGetLeetcodeSummaryQueryKey(),
    });
    await queryClient.invalidateQueries({
      queryKey: getGetLeetcodeScatterpointsQueryKey(),
    });
  };

  const updateMutation = useUpdate({
    mutation: {
      onSuccess: async () => {
        await invalidateSolveQueries();
        setEditingSolve(null);
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

  const startEditing = (solve: LeetcodeSolveDto) => {
    setEditingSolve(solve);
    form.setValues(valuesFromSolve(solve));
    form.resetDirty(valuesFromSolve(solve));
  };

  const handleSubmit = form.onSubmit((values) => {
    if (!editingSolve) {
      return;
    }

    updateMutation.mutate({
      id: editingSolve.id,
      data: {
        problemNumber: values.problemNumber,
        problemName: values.problemName.trim(),
        difficulty: values.difficulty,
        language: optionalText(values.language),
        durationMin: values.durationMin,
        solvedAt: values.solvedAt.toISOString(),
        notes: optionalText(values.notes),
        solvedWithoutHint: choiceToBoolean(values.solvedWithoutHint),
        solvedOptimally: choiceToBoolean(values.solvedOptimally),
      },
    });
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
        <Table.ScrollContainer minWidth={760}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Problem</Table.Th>
                <Table.Th>Difficulty</Table.Th>
                <Table.Th>Language</Table.Th>
                <Table.Th>Solved at</Table.Th>
                <Table.Th>Metadata</Table.Th>
                <Table.Th aria-label="Actions" />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {solves.map((solve) => (
                <Table.Tr key={solve.id}>
                  <Table.Td>
                    {solve.problemNumber}. {solve.problemName}
                  </Table.Td>
                  <Table.Td>{solve.difficulty}</Table.Td>
                  <Table.Td>{solve.language ?? "-"}</Table.Td>
                  <Table.Td>{formatSolvedAt(solve.solvedAt)}</Table.Td>
                  <Table.Td>
                    <Text size="sm">
                      No hint: {booleanToChoice(solve.solvedWithoutHint)}
                    </Text>
                    <Text size="sm">
                      Optimal: {booleanToChoice(solve.solvedOptimally)}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs" justify="flex-end" wrap="nowrap">
                      <ActionIcon
                        aria-label={`Edit ${solve.problemName}`}
                        title="Edit solve"
                        variant="subtle"
                        onClick={() => startEditing(solve)}
                      >
                        <IconPencil size={16} />
                      </ActionIcon>
                      <ActionIcon
                        aria-label={`Delete ${solve.problemName}`}
                        title="Delete solve"
                        color="red"
                        variant="subtle"
                        loading={
                          removeMutation.isPending &&
                          removeMutation.variables?.id === solve.id
                        }
                        onClick={() => handleDelete(solve)}
                      >
                        <IconTrash size={16} />
                      </ActionIcon>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      ) : null}

      <Modal
        opened={editingSolve !== null}
        onClose={() => setEditingSolve(null)}
        title="Edit LeetCode solve"
      >
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

            <DateTimePicker
              label="Solved at"
              {...form.getInputProps("solvedAt")}
            />

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

            <Group justify="flex-end">
              <Button
                type="button"
                variant="default"
                onClick={() => setEditingSolve(null)}
              >
                Cancel
              </Button>
              <Button type="submit" loading={updateMutation.isPending}>
                Save
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </Stack>
  );
}
