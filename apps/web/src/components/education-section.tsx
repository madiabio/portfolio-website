import { Paper, Stack, Text, Title, Group } from "@mantine/core";

export function EducationSection() {
  return (
    <Stack id="education" gap="md">
      <div>
        <Title order={2}>Education</Title>
      </div>

      {/* Electrical Engineering */}
      <Paper withBorder radius="lg" p="lg">
        <Stack gap={4}>
          <Group justify="space-between" align="flex-start">
            <div>
              <Text fw={600}>Bachelor of Electrical Engineering (Honours)</Text>
              <Text c="dimmed" size="sm">
                Griffith University
              </Text>
            </div>

            <Text size="sm" c="dimmed">
              Mar 2022 - Nov 2026
            </Text>
          </Group>

          {/* Computer Science */}
          <Group justify="space-between" align="flex-start">
            <div>
              <Text fw={600}>Bachelor of Computer Science</Text>
              <Text c="dimmed" size="sm">
                Griffith University
              </Text>
            </div>

            <Text size="sm" c="dimmed">
              Mar 2022 - Nov 2026
            </Text>
          </Group>
        </Stack>
      </Paper>
    </Stack>
  );
}
