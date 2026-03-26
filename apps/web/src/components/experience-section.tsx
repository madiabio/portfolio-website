import { Box, Stack, Text, Title } from "@mantine/core";

const items = [
  {
    company: "VPTech",
    role: "Software Engineer",
    period: "Aug 2025 – Present",
    description:
      "Building production-grade RAG systems with human-in-the-loop validation and vector database integration. Contributing to full-stack development, system design, and CI/CD pipelines.",
  },
  {
    company: "Energy Queensland",
    role: "Grid Technology Intern",
    period: "Jan 2025 – Sept 2025",
    description:
      "Developed a machine learning anomaly detection system to detect neutral faults from smart meter data. Built data dashboards and automation tools that significantly reduced manual processing time.",
  },
  {
    company: "Griffith University",
    role: "Undergraduate Research Assistant",
    period: "Mar 2024 – Jun 2024",
    description:
      "Processed and structured datasets for machine learning research using Python, Bash, and HDF5. Focused on reusable data pipelines and preprocessing workflows.",
  },
  {
    company: "Energy Queensland",
    role: "Cyber Security Platforms Intern",
    period: "Nov 2023 – Feb 2024",
    description:
      "Developed foundational knowledge in networking and enterprise security systems. Applied this to resolve ServiceNow tickets and gain exposure to cloud and firewall technologies.",
  },
];

export function ExperienceSection() {
  return (
    <Box component="section" id="experience">
      <Title order={2} mb="xl">
        Experience
      </Title>

      <Stack gap={28}>
        {items.map((item, index) => (
          <Box
            key={`${item.company}-${item.role}-${index}`}
            style={{
              display: "grid",
              gridTemplateColumns: "20px 1fr",
              columnGap: "20px",
              alignItems: "start",
            }}
          >
            <Box
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                minHeight: "100%",
              }}
            >
              <Box
                style={{
                  position: "absolute",
                  top: 10,
                  bottom:
                    index === items.length - 1 ? "calc(100% - 10px)" : -28,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 2,
                  background: "rgba(255,255,255,0.18)",
                }}
              />
              <Box
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.85)",
                  marginTop: 6,
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>

            <Stack gap={6}>
              <Text fw={700} size="xl">
                {item.company}
              </Text>

              <Text c="dimmed" size="lg">
                {item.role} • {item.period}
              </Text>

              <Text size="md" lh={1.8} maw={950}>
                {item.description}
              </Text>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
