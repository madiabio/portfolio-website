"use client";

import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useIsAdmin } from "@/lib/api/generated/auth/auth";
import { getQueueQueryKey, sync } from "@/lib/api/generated/codeforces/codeforces";

type Props = {
  handle?: string;
};

export function CodeforcesSyncButton({ handle = "madelineabio" }: Props) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useIsAdmin({
    query: {
      staleTime: 0,
      gcTime: 0,
      retry: false,
      refetchOnMount: "always",
      refetchOnWindowFocus: true,
    },
  });

  const canUse = data?.data?.isAdmin ?? false;

  const syncMutation = useMutation({
    mutationFn: async () => sync({ handle }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: getQueueQueryKey({ handle }),
      });

      notifications.show({
        title: "Synced",
        message: "Codeforces submissions were synced.",
        color: "green",
      });
    },
    onError: () => {
      notifications.show({
        title: "Sync failed",
        message: "Could not sync Codeforces submissions.",
        color: "red",
      });
    },
  });

  const handleClick = async () => {
    if (!canUse) {
      notifications.show({
        title: "Not allowed",
        message: "You are not authorised to sync Codeforces submissions.",
        color: "red",
      });
      return;
    }

    syncMutation.mutate();
  };

  return (
    <Button onClick={handleClick} loading={isLoading || syncMutation.isPending}>
      Sync Codeforces
    </Button>
  );
}