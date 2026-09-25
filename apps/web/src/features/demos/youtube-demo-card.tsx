/**
 * Reusable demo card for projects whose demo is a YouTube video: a titled,
 * described card with a responsive 16:9 embedded player.
 *
 * `description` may be a single node or an array of paragraphs; each array
 * entry renders as its own `Text` so multi-paragraph copy doesn't nest `<p>`s.
 *
 * Exports `YouTubeDemoCard`.
 */
import type { ReactNode } from "react";
import { Paper, Stack, Text, Title } from "@mantine/core";

type YouTubeDemoCardProps = {
  title: string;
  /** One paragraph, or an array rendered as separate paragraphs. */
  description: ReactNode | ReactNode[];
  /** The video ID, e.g. `EuSdQnB61mw` from `youtube.com/watch?v=EuSdQnB61mw`. */
  videoId: string;
  /** Accessible iframe title; defaults to `${title} Demo`. */
  videoTitle?: string;
};

export function YouTubeDemoCard({
  title,
  description,
  videoId,
  videoTitle = `${title} Demo`,
}: YouTubeDemoCardProps) {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <Paper withBorder radius="lg" p="lg" style={{ overflow: "hidden" }}>
      <Stack gap="md">
        <div>
          <Title order={3}>{title}</Title>
          <Stack gap="xs" mt={4}>
            {paragraphs.map((paragraph, i) => (
              <Text key={i} c="dimmed">
                {paragraph}
              </Text>
            ))}
          </Stack>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            borderRadius: "var(--mantine-radius-md)",
            overflow: "hidden",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>
      </Stack>
    </Paper>
  );
}
