import { Anchor, Group, Paper, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";

export function LinksSection() {
  return (
    <Paper
      withBorder
      radius="lg"
      p="md"
      mt="xl"
      style={{
        backgroundColor: "var(--mantine-color-dark-6)",
      }}
    >
      <Group justify="center" gap="xl" wrap="wrap">
        <Anchor
          href="https://github.com/madiabio"
          target="_blank"
          rel="noreferrer"
          underline="never"
          c="inherit"
        >
          <Group gap={8}>
            <IconBrandGithub size={18} />
            <Text size="sm" tt="lowercase">
              github
            </Text>
          </Group>
        </Anchor>

        <Anchor
          href="https://linkedin.com/in/madiabio"
          target="_blank"
          rel="noreferrer"
          underline="never"
          c="inherit"
        >
          <Group gap={8}>
            <IconBrandLinkedin size={18} />
            <Text size="sm" tt="lowercase">
              linkedin
            </Text>
          </Group>
        </Anchor>

        <Anchor
          href="https://raw.githubusercontent.com/madiabio/Resume/main/resume.pdf"
          target="_blank"
          rel="noreferrer"
          underline="never"
          c="inherit"
        >
          <Group gap={8}>
            <IconFileCv size={18} />
            <Text size="sm" tt="lowercase">
              resume
            </Text>
          </Group>
        </Anchor>
      </Group>
    </Paper>
  );
}
