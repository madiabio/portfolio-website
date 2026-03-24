import { Stack, Text, Title, Box } from "@mantine/core";
import { experiences } from "@/lib/experience";
export function ExperienceSection() {
  return (
    <Stack gap="xl">
      <Title order={2}>Experience</Title>

      <Box style={{ position: "relative", paddingLeft: 28 }}>
        {/* Vertical line */}
        <Box
          style={{
            position: "absolute",
            left: 8,
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(to bottom, #888, #444)",
          }}
        />

        <Stack gap="xl">
          {experiences.map((exp, index) => (
            <Box key={index} style={{ position: "relative" }}>
              {/* Dot */}
              <Box
                style={{
                  position: "absolute",
                  left: -20,
                  top: 8,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "var(--mantine-color-gray-5)",
                }}
              />

              <Text fw={600}>{exp.title}</Text>
              <Text size="sm" c="dimmed">
                {exp.subtitle} • {exp.date}
              </Text>
              <Text size="sm" mt={4}>
                {exp.description}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
