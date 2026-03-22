"use client";
import { authClient } from "@/lib/auth/auth-client";
import { LeetcodeScatterChart } from "@/features/analytics/components/leetcode-scatter-chart";
export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;
  if (!session) return <div>Not signed in</div>;

  return (
    <main>
      <LeetcodeScatterChart />
    </main>
  );
}
