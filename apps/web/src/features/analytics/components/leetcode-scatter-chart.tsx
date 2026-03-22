"use client";

import {
  Alert,
  Box,
  Card,
  Group,
  Loader,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import {
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useGetLeetcodeScatterpoints } from "@/lib/api/generated/analytics/analytics";

console.log("client env", process.env.NEXT_PUBLIC_API_URL);
type Difficulty = "easy" | "medium" | "hard";

type ScatterPoint = {
  x: string;
  y: number;
  difficulty: Difficulty;
  problemNumber: number;
  problemName: string;
};

type ChartPoint = {
  timestamp: number;
  duration: number;
  difficulty: Difficulty;
  problemNumber: number;
  problemName: string;
};

function formatDateTick(value: number) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
  }).format(new Date(value));
}

function formatTooltipDate(value: number) {
  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: ChartPoint }>;
}) {
  if (!active || !payload?.length) return null;

  const point = payload[0].payload;

  return (
    <Card withBorder shadow="sm" radius="md" p="sm">
      <Stack gap={4}>
        <Text fw={600}>
          #{point.problemNumber} {point.problemName}
        </Text>
        <Text size="sm">Difficulty: {point.difficulty}</Text>
        <Text size="sm">Duration: {point.duration} min</Text>
        <Text size="sm">Solved: {formatTooltipDate(point.timestamp)}</Text>
      </Stack>
    </Card>
  );
}

export function LeetcodeScatterChart() {
  const theme = useMantineTheme();

  const { data, isLoading, isError, error } = useGetLeetcodeScatterpoints();
  type ScatterResponse = {
    points: ScatterPoint[];
    goals: {
      easy: number;
      medium: number;
      hard: number;
    };
  };

  const scatter = data?.data as ScatterResponse | undefined;
  if (!scatter) return null;

  if (isLoading) {
    return (
      <Card withBorder radius="xl" p="xl">
        <Group justify="center" py="xl">
          <Loader size="sm" />
          <Text>Loading chart...</Text>
        </Group>
      </Card>
    );
  }

  if (isError || !scatter) {
    return (
      <Alert
        icon={<IconAlertCircle size={16} />}
        title="Failed to load chart"
        color="red"
        radius="lg"
      >
        {error instanceof Error ? error.message : "Unknown error"}
      </Alert>
    );
  }

  const chartPoints: ChartPoint[] = scatter.points.map(
    (point: ScatterPoint) => ({
      timestamp: new Date(point.x).getTime(),
      duration: point.y,
      difficulty: point.difficulty,
      problemNumber: point.problemNumber,
      problemName: point.problemName,
    }),
  );

  const easyData = chartPoints.filter((p) => p.difficulty === "easy");
  const mediumData = chartPoints.filter((p) => p.difficulty === "medium");
  const hardData = chartPoints.filter((p) => p.difficulty === "hard");

  const timestamps = chartPoints.map((p) => p.timestamp);
  const minX = timestamps.length ? Math.min(...timestamps) : Date.now();
  const maxX = timestamps.length ? Math.max(...timestamps) : Date.now();

  const maxY = 120;

  return (
    <Card withBorder radius="xl" p="xl" shadow="sm">
      <Stack gap="md">
        <Box>
          <Title order={3}>LeetCode Solve Duration</Title>
          <Text c="dimmed" size="sm">
            Time taken per solved problem, with target lines by difficulty.
          </Text>
        </Box>

        <Box h={420}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                dataKey="timestamp"
                domain={[minX, maxX]}
                tickFormatter={formatDateTick}
                name="Solved at"
              />
              <YAxis
                type="number"
                dataKey="duration"
                name="Duration"
                unit=" min"
                domain={[0, Math.ceil(maxY * 1.15)]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />

              <ReferenceLine
                y={10}
                stroke={theme.colors.green[6]}
                strokeDasharray="4 4"
                label={{
                  value: `Easy goal (${10}m)`,
                  position: "insideTopLeft",
                }}
              />
              <ReferenceLine
                y={25}
                stroke={theme.colors.yellow[6]}
                strokeDasharray="4 4"
                label={{
                  value: `Medium goal (${25}m)`,
                  position: "insideTopLeft",
                }}
              />
              <ReferenceLine
                y={45}
                stroke={theme.colors.red[6]}
                strokeDasharray="4 4"
                label={{
                  value: `Hard goal (${45}m)`,
                  position: "insideTopLeft",
                }}
              />

              <Scatter
                name="Easy"
                data={easyData}
                fill={theme.colors.green[6]}
              />
              <Scatter
                name="Medium"
                data={mediumData}
                fill={theme.colors.yellow[6]}
              />
              <Scatter name="Hard" data={hardData} fill={theme.colors.red[6]} />
            </ScatterChart>
          </ResponsiveContainer>
        </Box>
      </Stack>
    </Card>
  );
}
