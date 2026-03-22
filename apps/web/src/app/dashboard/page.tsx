"use client";
import { authClient } from "@/lib/auth/auth-client";

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;
  if (!session) return <div>Not signed in</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
    </div>
  );
}
