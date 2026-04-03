"use client";

import { Button, Modal, Stack, Text } from "@mantine/core";
import { useState } from "react";
import { useIsAdmin } from "@/lib/api/generated/auth/auth";
import { CodeforcesQueueReviewPanel } from "@/features/codeforces/components/codeforces-queue-review-panel";
import { CodeforcesScatterChart } from "./codeforces-scatter-chart";

type Props = {
  handle?: string;
};

export function CodeforcesAnalyticsPanel({ handle = "madelineabio" }: Props) {
  const [opened, setOpened] = useState(false);
  const { data } = useIsAdmin({
    query: {
      staleTime: 0,
      gcTime: 0,
      retry: false,
      refetchOnMount: "always",
      refetchOnWindowFocus: true,
    },
  });

  const canManageQueue = data?.data?.isAdmin ?? false;

  return (
    <Stack gap="md">
      <CodeforcesScatterChart />

      {canManageQueue ? (
        <>
          <Button onClick={() => setOpened(true)}>Review Queue</Button>

          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Codeforces Review Queue"
            size="lg"
          >
            <CodeforcesQueueReviewPanel handle={handle} isInModal />
          </Modal>
        </>
      ) : (
        <Text size="sm" c="dimmed">
          Sign in as admin to review queued Codeforces submissions.
        </Text>
      )}
    </Stack>
  );
}
