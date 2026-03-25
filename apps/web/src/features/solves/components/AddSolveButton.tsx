"use client";

import { Button, Modal } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { AddSolveForm } from "./forms/AddSolveForm";
import { useIsAdmin } from "@/lib/api/generated/auth/auth";

export function AddSolveButton() {
  const [opened, setOpened] = useState(false);

  const { data, isLoading } = useIsAdmin({
    query: {
      staleTime: 0,
      gcTime: 0,
      retry: false,
      refetchOnMount: "always",
      refetchOnWindowFocus: true,
    },
  });

  const canCreate = data?.data?.isAdmin ?? false;

  const handleClick = () => {
    if (!canCreate) {
      notifications.show({
        title: "Not allowed",
        message: "You are not authorised to add solves.",
        color: "red",
      });
      return;
    }

    setOpened(true);
  };

  return (
    <>
      <Button onClick={handleClick} loading={isLoading}>
        Add solve
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add LeetCode solve"
      >
        <AddSolveForm onSuccess={() => setOpened(false)} />
      </Modal>
    </>
  );
}
