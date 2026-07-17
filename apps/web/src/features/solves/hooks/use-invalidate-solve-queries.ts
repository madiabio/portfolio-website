/**
 * Hook returning an invalidator for every query affected by a LeetCode solve
 * mutation: the solve list plus the analytics summary and scatterpoints.
 *
 * React Query does not invalidate queries after mutations on its own, so
 * every solve create/update/delete mutation calls this in `onSuccess`.
 */

"use client";

import { useQueryClient } from "@tanstack/react-query";
import {
  getGetLeetcodeScatterpointsQueryKey,
  getGetLeetcodeSummaryQueryKey,
} from "@/lib/api/generated/analytics/analytics";
import { getFindAllQueryKey } from "@/lib/api/generated/leetcode-solve/leetcode-solve";

export function useInvalidateSolveQueries() {
  const queryClient = useQueryClient();

  return () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: getFindAllQueryKey() }),
      queryClient.invalidateQueries({
        queryKey: getGetLeetcodeSummaryQueryKey(),
      }),
      queryClient.invalidateQueries({
        queryKey: getGetLeetcodeScatterpointsQueryKey(),
      }),
    ]);
}
