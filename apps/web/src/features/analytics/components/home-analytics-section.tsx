import { Stack } from "@mantine/core";
import { AnalyticsPlatformTabs } from "@/features/analytics/components/analytics-platform-tabs";

export function HomeAnalyticsSection() {
  return (
    <Stack id="analytics" gap="md">
      <AnalyticsPlatformTabs />
    </Stack>
  );
}
