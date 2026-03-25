import { Paper, Stack, Text, Title } from "@mantine/core";
import { LeetcodeScatterChart } from "@/features/analytics/components/leetcode-scatter-chart";
import { AddSolveButton } from "@/features/solves/components/AddSolveButton";

export function HomeAnalyticsSection() {
  return (
    <Stack id="analytics" gap="md">
      <Paper withBorder radius="lg" p="md">
        <LeetcodeScatterChart />
      </Paper>
      <AddSolveButton />
    </Stack>
  );
}
