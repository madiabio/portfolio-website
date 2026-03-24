import { Anchor, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { homeProjects } from "@/lib/home-projects";

export function ProjectsSection() {
  return (
    <Stack id="projects" gap="md">
      <div>
        <Title order={2}>Projects</Title>
        <Text c="dimmed" mt={4}>
          A few things I have built recently.
        </Text>
      </div>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
        {homeProjects.map((project) => (
          <Paper key={project.title} withBorder radius="lg" p="lg">
            <Stack gap="sm">
              <Title order={4}>{project.title}</Title>
              <Text c="dimmed" size="sm">
                {project.description}
              </Text>

              {project.href ? (
                <Anchor href={project.href} underline="never" fw={600}>
                  Open
                </Anchor>
              ) : null}
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
