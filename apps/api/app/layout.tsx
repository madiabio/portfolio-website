import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Shell } from "@/components/shell";

export default function RootLayout({ children }) {
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
