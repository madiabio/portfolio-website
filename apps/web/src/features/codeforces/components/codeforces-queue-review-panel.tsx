"use client";

import {
  Badge,
  Button,
  Card,
  Divider,
  Group,
  NumberInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ApiState } from "@/components/api-state";
import { CodeforcesSyncButton } from "./codeforces-sync-button";
import type {
  CodeforcesQueueItemDto,
  ReviewCodeforcesQueueDto,
} from "@/lib/api/generated/generated.schemas";
import {
  getQueueQueryKey,
  reviewQueueItem,
  useQueue,
} from "@/lib/api/generated/codeforces/codeforces";

type Props = {
  handle?: string;
};

function formatSolvedAt(value: string) {
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function CodeforcesQueueReviewPanel({ handle = "madelineabio" }: Props) {
  const queryClient = useQueryClient();
  const [durations, setDurations] = useState<Record<number, number | undefined>>(
    {},
  );

  const queueQuery = useQueue({ handle });

  const reviewMutation = useMutation({
    mutationFn: async ({
      id,
      durationMin,
    }: {
      id: number;
      durationMin: number;
    }) => reviewQueueItem(id, { durationMin } satisfies ReviewCodeforcesQueueDto),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: getQueueQueryKey({ handle }),
      });
      notifications.show({
        title: "Saved",
        message: "Queued submission was reviewed.",
        color: "green",
      });
    },
    onError: () => {
      notifications.show({
        title: "Save failed",
        message: "Could not save the reviewed duration.",
        color: "red",
      });
    },
  });

  const handleReview = (item: CodeforcesQueueItemDto) => {
    const durationMin = durations[item.id];

    if (!durationMin || durationMin < 1) {
      notifications.show({
        title: "Missing duration",
        message: "Enter a valid duration before saving.",
        color: "yellow",
      });
      return;
    }

    reviewMutation.mutate({ id: item.id, durationMin });
  };

  const queueItems: CodeforcesQueueItemDto[] = queueQuery.data?.data ?? [];

  return (
    <Card withBorder radius="lg" p="lg">
      <Stack gap="md">
        <Group justify="space-between" align="center">
          <Stack gap={2}>
            <Title order={3}>Codeforces Review Queue</Title>
            <Text size="sm" c="dimmed">
              Sync submissions, then enter the solve time for each accepted item.
            </Text>
          </Stack>

          <CodeforcesSyncButton handle={handle} />
        </Group>

        <ApiState
          data={queueItems}
          isLoading={queueQuery.isLoading}
          error={queueQuery.error}
          isEmpty={(items) => items.length === 0}
        >
          {(items: CodeforcesQueueItemDto[]) => (
            <Stack gap="sm">
              {items.map((item: CodeforcesQueueItemDto) => (
                <Card key={item.id} withBorder radius="md" p="md">
                  <Stack gap="sm">
                    <Group justify="space-between" align="start">
                      <Stack gap={4}>
                        <Group gap="xs">
                          <Text fw={700}>
                            {item.problemIndex}. {item.problemName}
                          </Text>
                          <Badge variant="light">{item.status}</Badge>
                        </Group>
                        <Text size="sm" c="dimmed">
                          Contest {item.contestId} · Rating{" "}
                          {item.rating ?? "unrated"} · Solved {formatSolvedAt(item.solvedAt)}
                        </Text>
                      </Stack>
                    </Group>

                    <Divider />

                    <Group align="end" grow>
                      <NumberInput
                        label="Duration (minutes)"
                        min={1}
                        value={durations[item.id] ?? item.durationMin ?? undefined}
                        onChange={(value: number | string | undefined) => {
                          setDurations((current: Record<number, number | undefined>) => ({
                            ...current,
                            [item.id]: typeof value === "number" ? value : undefined,
                          }));
                        }}
                      />

                      <Button
                        onClick={() => handleReview(item)}
                        loading={reviewMutation.isPending}
                      >
                        Save time
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              ))}
            </Stack>
          )}
        </ApiState>
      </Stack>
    </Card>
  );
}