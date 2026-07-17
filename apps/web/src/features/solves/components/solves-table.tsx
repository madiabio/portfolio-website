/**
 * Read-only table of logged LeetCode solves with per-row edit/delete actions.
 *
 * Pure presentation: data fetching and mutations live in LeetcodeSolveManager,
 * which passes solves and action callbacks in.
 */

"use client";

import { ActionIcon, Group, Table, Text } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import type { LeetcodeSolveDto } from "@/lib/api/generated/generated.schemas";
import { formatDateTime } from "@/utils/format-date";
import { booleanToChoice } from "../utils/solve-form";

type Props = {
  solves: LeetcodeSolveDto[];
  deletingSolveId: number | null;
  onEdit: (solve: LeetcodeSolveDto) => void;
  onDelete: (solve: LeetcodeSolveDto) => void;
};

export function SolvesTable({
  solves,
  deletingSolveId,
  onEdit,
  onDelete,
}: Props) {
  return (
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
              <Table.Td>{formatDateTime(solve.solvedAt)}</Table.Td>
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
                    onClick={() => onEdit(solve)}
                  >
                    <IconPencil size={16} />
                  </ActionIcon>
                  <ActionIcon
                    aria-label={`Delete ${solve.problemName}`}
                    title="Delete solve"
                    color="red"
                    variant="subtle"
                    loading={deletingSolveId === solve.id}
                    onClick={() => onDelete(solve)}
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
  );
}
