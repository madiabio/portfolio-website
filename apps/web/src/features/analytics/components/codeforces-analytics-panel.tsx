"use client";

import { Button, Modal, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { useIsAdmin } from "@/lib/api/generated/auth/auth";
import { CodeforcesQueueReviewPanel } from "@/features/codeforces/components/codeforces-queue-review-panel";
import { CodeforcesScatterChart } from "./codeforces-scatter-chart";

type Props = {
  handle?: string;
};

export function CodeforcesAnalyticsPanel({ handle = "madelineabio" }: Props) {
  const [opened, setOpened] = useState(false);
  const { data, isLoading } = useIsAdmin({
    query: {
      staleTime: 0,
      gcTime: 0,
      retry: false,
      refetchOnMount: "always",
      refetchOnWindowFocus: true,
    },
  });

  const canManageQueue = data?.data?.isAdmin ?? false;

  const handleClick = () => {
    if (!canManageQueue) {
      notifications.show({
        title: "Not allowed",
        message: "You are not authorised to review queue.",
        color: "red",
      });
      return;
    }

    setOpened(true);
  };

  return (
    <Stack gap="md">
      <CodeforcesScatterChart />

      <Button onClick={handleClick} loading={isLoading}>
        Review Queue
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Codeforces Review Queue"
        size="lg"
      >
        <CodeforcesQueueReviewPanel handle={handle} isInModal />
      </Modal>
    </Stack>
  );
}
