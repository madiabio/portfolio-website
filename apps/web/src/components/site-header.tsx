"use client";

import { ActionIcon, Button, Group, Text } from "@mantine/core";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth/auth-client";

export function SiteHeader() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { data: session, isPending } = authClient.useSession();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  const handleGithubSignIn = async () => {
    const res = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (res.data?.url && res.data?.redirect) {
      window.location.href = res.data.url;
    }
  };

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.reload();
        },
      },
    });
  };

  return (
    <Group justify="space-between" align="center">
      <Text fw={700} size="lg">
        madiab.io
      </Text>

      <Group gap="sm">
        {isPending ? null : session ? (
          <Button variant="subtle" color="gray" onClick={handleSignOut}>
            sign out
          </Button>
        ) : (
          <Button variant="subtle" color="gray" onClick={handleGithubSignIn}>
            admin sign-in
          </Button>
        )}

        <ActionIcon
          variant="subtle"
          radius="xl"
          onClick={toggleColorScheme}
          aria-label="Toggle color scheme"
        >
          {mounted &&
            (computedColorScheme === "dark" ? (
              <IconSun size={18} />
            ) : (
              <IconMoon size={18} />
            ))}
        </ActionIcon>
      </Group>
    </Group>
  );
}
