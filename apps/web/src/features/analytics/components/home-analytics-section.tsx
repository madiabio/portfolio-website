import { Stack } from "@mantine/core";
import { LeetcodeScatterChart } from "@/features/analytics/components/leetcode-scatter-chart";
import { AddSolveButton } from "@/features/solves/components/AddSolveButton";

export function HomeAnalyticsSection() {
  return (
    <Stack id="analytics" gap="md">
      <LeetcodeScatterChart />
      <AddSolveButton />
    </Stack>
  );
}
