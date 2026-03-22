import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Shell } from "@/components/shell";
import { ReactNode } from "react";
import { QueryProvider } from "@/components/providers/query-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <MantineProvider>
            <Shell>{children}</Shell>
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
