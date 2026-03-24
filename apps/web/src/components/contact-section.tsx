import { Anchor, Group, Stack, Text, Title } from "@mantine/core";

export function ContactSection() {
  return (
    <Stack id="contact" gap="sm" pb="xl">
      <Title order={2}>Contact</Title>
      <Text c="dimmed">You can find me through the links below.</Text>

      <Group gap="lg">
        <Anchor
          href="https://github.com/madiabio"
          target="_blank"
          underline="never"
        >
          GitHub
        </Anchor>
        <Anchor
          href="https://linkedin.com/in/madiabio"
          target="_blank"
          underline="never"
        >
          LinkedIn
        </Anchor>
      </Group>
    </Stack>
  );
}
