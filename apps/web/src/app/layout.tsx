import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { QueryProvider } from "@/components/providers/query-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <MantineProvider>
            <Notifications />
            {children}
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
