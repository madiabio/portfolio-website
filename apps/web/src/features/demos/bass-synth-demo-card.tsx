import { Paper, Stack, Text, Title } from "@mantine/core";

export function BassSynthDemoCard() {
  return (
    <Paper withBorder radius="lg" p="lg" style={{ overflow: "hidden" }}>
      <Stack gap="md">
        <div>
          <Title order={3}>Digital Bass Synthesiser</Title>
          <Text c="dimmed" mt={4}>
            Outside of engineering, I’m also a musician, so I’d always wanted to
            try building my own instrument. When I got the chance to define a
            bare-metal C embedded systems project, I decided to make a digital
            bass synthesiser from scratch. The video below is a demo and
            walkthrough of one of my all-time favourite projects.
          </Text>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            borderRadius: "var(--mantine-radius-md)",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/EuSdQnB61mw"
            title="Digital Bass Synthesiser Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>
      </Stack>
    </Paper>
  );
}
