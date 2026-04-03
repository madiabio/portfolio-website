"use client";

import {
  Box,
  Card,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
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
import { ApiState } from "@/components/api-state";
import { useGetCodeforcesScatterpoints } from "@/lib/api/generated/codeforces-analytics/codeforces-analytics";
import type {
  CodeforcesScatterPointDto,
  CodeforcesScatterPointDtoRatingTier,
  CodeforcesTimeByRatingResponseDto,
  CodeforcesTimeByRatingResponseDtoGoals,
} from "@/lib/api/generated/generated.schemas";

const Y_MAX_MINUTES = 120;

const TIER_COLORS: Record<CodeforcesScatterPointDtoRatingTier | "800-1200", string> = {
  "0-800": "#5c7cfa",
  "800-1200": "#228be6",
  "1200-1600": "#2f9e44",
  "1600-2000": "#f08c00",
  "2000+": "#e03131",
};

const FALLBACK_GOALS: Required<CodeforcesTimeByRatingResponseDtoGoals & Record<"800-1200", number>> = {
  "0-1200": 10,
  "1200-1600": 35,
  "1600-2000": 50,
  "2000+": 70,
  "800-1200": 25,
};

type ChartPoint = {
  timestamp: number;
  duration: number;
  ratingTier: CodeforcesScatterPointDtoRatingTier;
  rating: number | null;
  contestId: number;
  problemIndex: string;
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
          {point.problemIndex}. {point.problemName}
        </Text>
        <Text size="sm">Contest: {point.contestId}</Text>
        <Text size="sm">Rating: {point.rating ?? "unrated"}</Text>
        <Text size="sm">Tier: {point.ratingTier}</Text>
        <Text size="sm">Duration: {point.duration} min</Text>
        <Text size="sm">Solved: {formatTooltipDate(point.timestamp)}</Text>
      </Stack>
    </Card>
  );
}

export function CodeforcesScatterChart() {
  const theme = useMantineTheme();
  const { data, isLoading, isError, error } = useGetCodeforcesScatterpoints();

  const scatter = data?.data as CodeforcesTimeByRatingResponseDto | undefined;

  return (
    <ApiState
      data={scatter}
      isLoading={isLoading}
      error={isError ? error : null}
      isEmpty={(d) => !Array.isArray(d.points) || d.points.length === 0}
    >
      {(loadedScatter) => {
        const chartPoints: ChartPoint[] = loadedScatter.points.map(
          (point: CodeforcesScatterPointDto) => ({
            timestamp: new Date(point.x).getTime(),
            duration: point.y,
            ratingTier: point.ratingTier,
            rating: point.rating ?? null,
            contestId: point.contestId,
            problemIndex: point.problemIndex,
            problemName: point.problemName,
          }),
        );

        const goals = {
          ...FALLBACK_GOALS,
          ...loadedScatter.goals,
        };

        // Override 0-1200 with our split tier goals
        goals["0-1200"] = FALLBACK_GOALS["0-1200"];
        goals["800-1200"] = FALLBACK_GOALS["800-1200"];

        const tierData: Record<CodeforcesScatterPointDtoRatingTier | "800-1200", ChartPoint[]> = {
          "0-1200": chartPoints.filter((p) => p.ratingTier === "0-1200"),
          "800-1200": [],
          "1200-1600": chartPoints.filter((p) => p.ratingTier === "1200-1600"),
          "1600-2000": chartPoints.filter((p) => p.ratingTier === "1600-2000"),
          "2000+": chartPoints.filter((p) => p.ratingTier === "2000+"),
        };

        // Split 0-1200 into 0-800 and 800-1200
        const baseTier0to1200 = tierData["0-1200"];
        const tier0to800 = baseTier0to1200.filter((p) => !p.rating || p.rating < 800);
        const tier800to1200 = baseTier0to1200.filter((p) => p.rating && p.rating >= 800);
        tierData["0-1200"] = tier0to800;
        tierData["800-1200"] = tier800to1200;

        const timestamps = chartPoints.map((p) => p.timestamp);
        const minX = timestamps.length ? Math.min(...timestamps) : Date.now();
        const maxX = timestamps.length ? Math.max(...timestamps) : Date.now();

        return (
          <Card withBorder radius="xl" p="xl" shadow="sm">
            <Stack gap="md">
              <Box>
                <Title order={3}>Codeforces Solve Duration</Title>
                <Text c="dimmed" size="sm">
                  Reviewed solve durations by rating tier.
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
                      domain={[0, Y_MAX_MINUTES]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />

                    <ReferenceLine
                      y={goals["0-1200"]}
                      stroke={TIER_COLORS["0-800"]}
                      strokeDasharray="4 4"
                      label={{ value: `0-800 goal (${goals["0-1200"]}m)`, position: "insideTopLeft" }}
                    />
                    <ReferenceLine
                      y={goals["800-1200"]}
                      stroke={TIER_COLORS["800-1200"]}
                      strokeDasharray="4 4"
                      label={{
                        value: `800-1200 goal (${goals["800-1200"]}m)`,
                        position: "insideTopLeft",
                      }}
                    />
                    <ReferenceLine
                      y={goals["1200-1600"]}
                      stroke={TIER_COLORS["1200-1600"]}
                      strokeDasharray="4 4"
                      label={{
                        value: `1200-1600 goal (${goals["1200-1600"]}m)`,
                        position: "insideTopLeft",
                      }}
                    />
                    <ReferenceLine
                      y={goals["1600-2000"]}
                      stroke={TIER_COLORS["1600-2000"]}
                      strokeDasharray="4 4"
                      label={{
                        value: `1600-2000 goal (${goals["1600-2000"]}m)`,
                        position: "insideTopLeft",
                      }}
                    />
                    <ReferenceLine
                      y={goals["2000+"]}
                      stroke={TIER_COLORS["2000+"]}
                      strokeDasharray="4 4"
                      label={{ value: `2000+ goal (${goals["2000+"]}m)`, position: "insideTopLeft" }}
                    />

                    <Scatter
                      name="0-800"
                      data={tierData["0-1200"]}
                      fill={TIER_COLORS["0-800"]}
                    />
                    <Scatter
                      name="800-1200"
                      data={tierData["800-1200"]}
                      fill={TIER_COLORS["800-1200"]}
                    />
                    <Scatter
                      name="1200-1600"
                      data={tierData["1200-1600"]}
                      fill={theme.colors.green[6]}
                    />
                    <Scatter
                      name="1600-2000"
                      data={tierData["1600-2000"]}
                      fill={theme.colors.yellow[6]}
                    />
                    <Scatter name="2000+" data={tierData["2000+"]} fill={theme.colors.red[6]} />
                  </ScatterChart>
                </ResponsiveContainer>
              </Box>
            </Stack>
          </Card>
        );
      }}
    </ApiState>
  );
}
