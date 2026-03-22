"use client";

import { Stack, Button, Text, Avatar } from "@mantine/core";
import { authClient } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  return (
    <Stack p="md">
      <Button variant="subtle" onClick={() => router.push("/")}>
        Home
      </Button>

      <Button variant="subtle" onClick={() => router.push("/dashboard")}>
        Dashboard
      </Button>

      {session ? (
        <>
          <Avatar src={session.user.image} />
          <Text size="sm">{session.user.name}</Text>

          <Button
            variant="light"
            onClick={() =>
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => router.push("/"),
                },
              })
            }
          >
            Sign out
          </Button>
        </>
      ) : (
        <Button
          onClick={() =>
            authClient.signIn.social({
              provider: "github",
              callbackURL: "http://localhost:3000",
            })
          }
        >
          Sign in
        </Button>
      )}
    </Stack>
  );
}
