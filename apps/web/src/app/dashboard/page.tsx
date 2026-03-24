"use client";
import { authClient } from "@/lib/auth/auth-client";
import { LeetcodeScatterChart } from "@/features/analytics/components/leetcode-scatter-chart";
import { AddSolveButton } from "@/features/solves/components/AddSolveButton";
import { Card } from "@mantine/core";
export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;
  if (!session) return <div>Not signed in</div>;

  return (
    <main>
      <LeetcodeScatterChart />
      <AddSolveButton />
    </main>
  );
}
