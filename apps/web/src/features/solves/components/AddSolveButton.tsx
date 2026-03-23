"use client";

import { Button, Modal } from "@mantine/core";
import { useState } from "react";
import { AddSolveForm } from "./forms/AddSolveForm";

export function AddSolveButton() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Add solve</Button>

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
