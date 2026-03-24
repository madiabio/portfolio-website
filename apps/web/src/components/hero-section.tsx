import { Button, Group, Stack, Text, Title } from "@mantine/core";

export function HeroSection() {
  return (
    <Stack gap="md">
      <Text c="dimmed" fw={600}>
        Software Engineer · Electrical Engineering + Computer Science Student
      </Text>

      <Title order={1} size="3.2rem" lh={1.05}>
        WIP
      </Title>

      <Text size="lg" c="dimmed">
        {`WIP`}
      </Text>
    </Stack>
  );
}
