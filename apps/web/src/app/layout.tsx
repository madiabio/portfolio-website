import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Shell } from "@/components/shell";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
