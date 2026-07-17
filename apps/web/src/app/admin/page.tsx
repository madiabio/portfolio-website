"use client";

import { Card, Container, Stack, Text, Title } from "@mantine/core";
import { CodeforcesQueueReviewPanel } from "@/features/codeforces/components/codeforces-queue-review-panel";
import { AddSolveButton } from "@/features/solves/components/add-solve-button";
import { LeetcodeSolveManager } from "@/features/solves/components/leetcode-solve-manager";
import { authClient } from "@/lib/auth/auth-client";

export default function AdminPage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;
  if (!session) return <div>Not signed in</div>;

  return (
    <Container size="lg" py="xl">
      <Stack gap="lg">
        <Stack gap={4}>
          <Title order={2}>Admin</Title>
          <Text c="dimmed">
            Development tools for adding solves and checking sync endpoints.
          </Text>
        </Stack>

        <Card withBorder radius="lg" p="lg">
          <Stack gap="md">
            <Text fw={600}>LeetCode</Text>
            <Text size="sm" c="dimmed">
              Manual solve entry stays here while the public home page stays
              clean.
            </Text>
            <AddSolveButton />
            <LeetcodeSolveManager />
          </Stack>
        </Card>

        <CodeforcesQueueReviewPanel />
      </Stack>
    </Container>
  );
}
