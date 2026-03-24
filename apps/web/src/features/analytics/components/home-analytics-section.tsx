import { Paper, Stack, Text, Title } from "@mantine/core";
import { LeetcodeScatterChart } from "@/features/analytics/components/leetcode-scatter-chart";

export function HomeAnalyticsSection() {
  return (
    <Stack id="analytics" gap="md">
      <div>
        <Title order={2}>My Leetcode Analytics</Title>
        <Text c="dimmed" mt={4}>
          I enjoy competitve programming and practise my skills on Leetcode. The
          primary motivation of developing this website was to create a tool I
          could use to host and view my Leetcode solve times any time, anywhere.
          The following graph is updated by me via this site's admin dashboard.
          The data is stored in a PostgreSQL database and accesed via Prisma and
          a NestJS server.
        </Text>
      </div>

      <Paper withBorder radius="lg" p="md">
        <LeetcodeScatterChart />
      </Paper>
    </Stack>
  );
}
