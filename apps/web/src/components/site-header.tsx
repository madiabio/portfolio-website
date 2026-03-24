"use client";

import { Anchor, Group, ActionIcon, Text } from "@mantine/core";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#analytics", label: "analytics" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
  { href: "/dashboard", label: "dashboard" },
];

export function SiteHeader() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Group justify="space-between" align="center">
      <Text fw={700} size="lg">
        Madeline Abio
      </Text>

      <Group gap="lg">
        {links.map((link) => (
          <Anchor
            key={link.href}
            href={link.href}
            underline="never"
            c="dimmed"
            fw={500}
          >
            {link.label}
          </Anchor>
        ))}

        <ActionIcon
          variant="subtle"
          radius="xl"
          onClick={toggleColorScheme}
          aria-label="Toggle color scheme"
        >
          {mounted && computedColorScheme === "dark" ? (
            <IconSun size={18} />
          ) : (
            <IconMoon size={18} />
          )}
        </ActionIcon>
      </Group>
    </Group>
  );
}
