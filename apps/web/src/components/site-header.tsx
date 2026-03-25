"use client";

import { ActionIcon, Anchor, Button, Group } from "@mantine/core";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
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
    <Group justify="space-between" align="center" w="100%">
      <Anchor href="/" underline="never" c="inherit" fw={700} fz="lg">
        madiab.io
      </Anchor>

      <Group gap="xs">
        <ActionIcon
          component="a"
          href="https://github.com/madiabio"
          target="_blank"
          rel="noreferrer"
          variant="subtle"
          radius="xl"
          aria-label="GitHub"
        >
          <IconBrandGithub size={18} />
        </ActionIcon>

        <ActionIcon
          component="a"
          href="https://linkedin.com/in/madiabio"
          target="_blank"
          rel="noreferrer"
          variant="subtle"
          radius="xl"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin size={18} />
        </ActionIcon>

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
