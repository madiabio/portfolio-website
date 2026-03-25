import { Stack, Text, Title } from "@mantine/core";
import { LeetCodeDemoCard } from "@/features/demos/leetcode-solves-demo-card";
import { BassSynthDemoCard } from "@/features/demos/bass-synth-demo-card";

export function FeaturedDemosSection() {
  return (
    <Stack gap="md">
      <div>
        <Title order={2}>Featured Demos</Title>
        <Text c="dimmed" mt={4}>
          Interactive and visual demos from projects I have built.
        </Text>
      </div>

      <LeetCodeDemoCard />
      <BassSynthDemoCard />
    </Stack>
  );
}
