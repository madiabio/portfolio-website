import { Paper, Stack, Text, Title } from "@mantine/core";
import { HomeAnalyticsSection } from "@/features/analytics/components/home-analytics-section";

export function LeetCodeDemoCard() {
  return (
    <Paper withBorder radius="lg" p="lg">
      <Stack gap="md">
        <div>
          <Title order={3}>LeetCode Analytics (Portfolio Website)</Title>
          <Text c="dimmed" mt={4}>
            I enjoy competitive programming and practice my skills on LeetCode.
            The primary motivation of developing this website was to create a
            tool I could use to host and view my LeetCode solve times no matter
            where I was. The following graph can only be updated by me via the
            'Add Solve' button when I am signed in. The data is stored in a
            PostgreSQL database and accessed via my NestJS backend. I used
            Prisma as my ORM. Everything is hosted on Railway. The choices I
            made for the tech stack were motivated by a desire to improve my
            technical skills in the stack I use at my current job.
          </Text>
        </div>
        <HomeAnalyticsSection />
      </Stack>
    </Paper>
  );
}
