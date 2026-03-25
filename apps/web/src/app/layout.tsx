import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ReactNode } from "react";
import { QueryProvider } from "@/components/providers/query-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-mantine-color-scheme="dark">
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
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
