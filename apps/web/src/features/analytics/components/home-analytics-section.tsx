import { Paper, Stack, Text, Title } from "@mantine/core";
import { LeetcodeScatterChart } from "@/features/analytics/components/leetcode-scatter-chart";
import { AddSolveButton } from "@/features/solves/components/AddSolveButton";

export function HomeAnalyticsSection() {
  return (
    <Stack id="analytics" gap="md">
      <div>
        <Title order={2}>My Leetcode Analytics</Title>
        <Text c="dimmed" mt={4}>
          I enjoy competitve programming and practise my skills on Leetcode. The
          primary motivation of developing this website was to create a tool I
          could use to host and view my Leetcode solve times any time, anywhere.
          The following graph can only be updated by me via the 'Add Solve'
          button when I am signed in. The data is stored in a PostgreSQL
          database and accesed via Prisma and a NestJS server.
        </Text>
      </div>

      <Paper withBorder radius="lg" p="md">
        <LeetcodeScatterChart />
      </Paper>
      <AddSolveButton />
    </Stack>
  );
}
