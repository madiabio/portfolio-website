import "@mantine/core/styles.layer.css";
import "@mantine/notifications/styles.layer.css";
import "@mantine/dates/styles.css";
import "./globals.css";

import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ReactNode } from "react";
import { QueryProvider } from "@/components/providers/query-provider";

const theme = createTheme({
  components: {
    Paper: {
      defaultProps: {
        withBorder: true,
        radius: "lg",
        bg: "dark.6",
      },
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <QueryProvider>
          <MantineProvider
            theme={theme}
            defaultColorScheme="dark"
            forceColorScheme="dark"
          >
            <Notifications />
            {children}
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
