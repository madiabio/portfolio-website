import {
  Badge,
  Group,
  Overlay,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { getPortfolioProjects } from "@/lib/github";

export async function ProjectsSection() {
  const projects = await getPortfolioProjects();

  return (
    <Stack id="projects" gap="md">
      <div>
        <Title order={2}>Projects</Title>
        <Text c="dimmed" mt={4}>
          A few things I have built recently.
        </Text>
      </div>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
        {projects.map((project) => (
          <Paper
            key={project.title}
            component="a"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            withBorder
            radius="lg"
            p="lg"
            style={{
              textDecoration: "none",
              color: "inherit",
              height: "100%",
              position: "relative",
              transition:
                "transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease",
            }}
          >
            <Overlay
              color="#fff"
              backgroundOpacity={0}
              zIndex={0}
              style={{
                borderRadius: "var(--mantine-radius-lg)",
                pointerEvents: "none",
                transition: "background-opacity 140ms ease",
              }}
            />

            <Stack
              gap="sm"
              h="100%"
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <Group justify="space-between" align="flex-start" wrap="nowrap">
                <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
                  <Group gap="xs" wrap="nowrap">
                    <Title order={4} style={{ margin: 0 }}>
                      {project.title}
                    </Title>

                    <IconExternalLink
                      size={16}
                      stroke={1.8}
                      style={{ flexShrink: 0, opacity: 0.55 }}
                    />
                  </Group>

                  {project.date && (
                    <Text c="dimmed" size="xs">
                      {project.date}
                    </Text>
                  )}
                </Stack>

                {project.language && (
                  <Badge
                    variant="filled"
                    radius="xl"
                    size="sm"
                    style={{ flexShrink: 0 }}
                  >
                    {project.language}
                  </Badge>
                )}
              </Group>

              <Text c="dimmed" size="sm">
                {project.description}
              </Text>

              <Stack gap="xs" mt="auto">
                {project.topics && project.topics.length > 0 ? (
                  <Group gap="xs">
                    {project.topics.slice(0, 5).map((topic) => (
                      <Badge
                        key={topic}
                        variant="outline"
                        radius="xl"
                        size="sm"
                      >
                        {formatTopic(topic)}
                      </Badge>
                    ))}
                  </Group>
                ) : null}
              </Stack>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

function formatTopic(topic: string) {
  return topic
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
