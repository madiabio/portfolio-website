import { Anchor, Stack, Text, Title } from "@mantine/core";

export function HeroSection() {
  return (
    <Stack gap="md">
      <Text c="dimmed" fw={600}>
        Software Engineer · Electrical Engineering + Computer Science Student
      </Text>

      <Title order={1} size="3.2rem" lh={1.05}>
        Madi Abio&apos;s Portfolio
      </Title>

      <Text size="lg" c="dimmed">
        {`Welcome! I am a Software Engineer and final year student of Electrical Engineering and Computer Science (yes, five years long). Luckily, I still enjoy coding, so after getting annoyed with Excel, I decided to make this website to host my LeetCode solve times. It has since evolved into a platform where I can showcase my projects and experience.`}
        <br />
        <br />
        You can view my{" "}
        <Anchor
          href="https://github.com/madiabio/Resume"
          target="_blank"
          rel="noreferrer"
        >
          resume (and transcript) here
        </Anchor>
        .
        <br />
        <br />
        {`I'm also currently the lead guitar player for the UQ Computing Society Band, and I love to surf, hike and rock climb.`}
      </Text>
    </Stack>
  );
}
