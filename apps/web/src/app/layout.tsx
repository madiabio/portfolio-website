import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { QueryProvider } from "@/components/providers/query-provider";
import { queryClient } from "@/lib/api/query-client";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <MantineProvider>{children}</MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
