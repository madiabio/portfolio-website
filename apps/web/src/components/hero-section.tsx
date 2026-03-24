import { Button, Group, Stack, Text, Title } from "@mantine/core";

export function HeroSection() {
  return (
    <Stack gap="md" maw={720}>
      <Text c="dimmed" fw={600}>
        Software engineer · Electrical engineering + computer science student
      </Text>

      <Title order={1} size="3.2rem" lh={1.05}>
        I build thoughtful software, data tools, and systems with a strong
        engineering foundation.
      </Title>

      <Text size="lg" c="dimmed">
        My portfolio combines software engineering, analytics, and problem
        solving. I am especially interested in backend systems, data-driven
        products, and clean technical design.
      </Text>

      <Group mt="sm">
        <Button component="a" href="#projects" radius="md">
          View projects
        </Button>
        <Button component="a" href="/dashboard" variant="light" radius="md">
          Open dashboard
        </Button>
      </Group>
    </Stack>
  );
}
