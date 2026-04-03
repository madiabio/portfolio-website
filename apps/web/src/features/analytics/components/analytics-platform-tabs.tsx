"use client";

import { Stack, Tabs } from "@mantine/core";
import { LeetcodeScatterChart } from "./leetcode-scatter-chart";
import { CodeforcesAnalyticsPanel } from "./codeforces-analytics-panel";
import { AddSolveButton } from "@/features/solves/components/AddSolveButton";

type Props = {
  codeforcesHandle?: string;
};

export function AnalyticsPlatformTabs({ codeforcesHandle = "madelineabio" }: Props) {
  return (
    <Tabs defaultValue="leetcode" keepMounted={false}>
      <Tabs.List>
        <Tabs.Tab value="leetcode">LeetCode</Tabs.Tab>
        <Tabs.Tab value="codeforces">Codeforces</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="leetcode" pt="md">
        <Stack gap="md">
          <LeetcodeScatterChart />
          <AddSolveButton />
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="codeforces" pt="md">
        <CodeforcesAnalyticsPanel handle={codeforcesHandle} />
      </Tabs.Panel>
    </Tabs>
  );
}
