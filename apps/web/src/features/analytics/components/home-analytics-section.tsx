import { Paper, Stack, Text, Title } from "@mantine/core";
import { LeetcodeScatterChart } from "@/features/analytics/components/leetcode-scatter-chart";

export function HomeAnalyticsSection() {
  return (
    <Stack id="analytics" gap="md">
      <div>
        <Title order={2}>LeetCode analytics</Title>
        <Text c="dimmed" mt={4}>
          A simple view of my solve history and problem difficulty over time.
        </Text>
      </div>

      <Paper withBorder radius="lg" p="md">
        <LeetcodeScatterChart />
      </Paper>
    </Stack>
  );
}
