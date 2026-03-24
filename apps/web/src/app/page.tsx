"use client";

import { LeetcodeScatterChart } from "@/features/analytics/components/leetcode-scatter-chart";
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconCode,
  IconDownload,
  IconMail,
  IconMoon,
  IconSchool,
  IconSun,
} from "@tabler/icons-react";

const projects = [
  {
    title: "Leetcode Analytics Dashboard / Portfolio Website",
    description:
      "This website. A fullstack project developed to host my Leetcode analyitcs dashboard. I developed this for myself to track my solve-times over time, and to improve my skills in the tools I use at VPTech. It features a NestJS backend ",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Full-stack"],
    href: "https://github.com/madiabio/portfolio-website",
  },
  {
    title: "Digital Bass Synthesiser",
    description:
      "A digital bass synthesiser designed on a microcontroller, written in bare metal C.",
    tags: ["C", "Microcontroller", "Embedded Systems"],
    href: "https://github.com/madiabio/bass-synth",
  },
  {
    title: "Neutral Fault Detection",
    description:
      "In-house machine learning prototype for detecting neutral faults from smart meter data. Developed during my time as a grid technology intern at Energy Queensland",
    tags: ["Python", "Machine Learning", "Data Science"],
    href: "#",
  },
];

const experience = [
  {
    title: "Software Engineer",
    subtitle: "Health-tech startup",
    description:
      "Building software systems and AI-driven tooling, contributing across implementation, design, and iteration.",
    icon: IconBriefcase,
  },
  {
    title: "Electrical Engineering + Computer Science",
    subtitle: "University studies",
    description:
      "Studying a double degree with interests spanning software engineering, systems, algorithms, and technical product building.",
    icon: IconSchool,
  },
  {
    title: "Technical projects",
    subtitle: "Portfolio and personal work",
    description:
      "Designing end-to-end projects that combine backend engineering, analytics, data modelling, and clean interfaces.",
    icon: IconCode,
  },
];

const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
  { label: "resume", href: "#resume" },
];

function getPalette(scheme: "light" | "dark") {
  if (scheme === "dark") {
    return {
      bg: "#0b100d",
      bg2: "#121914",
      bg3: "#18211a",
      panel: "rgba(18, 25, 20, 0.82)",
      panelStrong: "rgba(21, 30, 24, 0.92)",
      hero: "rgba(15, 22, 17, 0.86)",
      border: "rgba(155, 183, 140, 0.16)",
      text: "#f4f8f2",
      textStrong: "#ffffff",
      muted: "#c0cbc0",
      soft: "#94a194",
      accent: "#a6d39a",
      accentStrong: "#c9ebc0",
      accentBg: "rgba(166, 211, 154, 0.12)",
      grid: "rgba(255,255,255,0.035)",
      shadow: "0 20px 80px rgba(0,0,0,0.28)",
    };
  }

  return {
    bg: "#f4f7f1",
    bg2: "#edf2e9",
    bg3: "#e3eadf",
    panel: "rgba(255, 255, 255, 0.82)",
    panelStrong: "rgba(255, 255, 255, 0.94)",
    hero: "rgba(250, 252, 248, 0.92)",
    border: "rgba(88, 112, 87, 0.14)",
    text: "#243126",
    textStrong: "#162018",
    muted: "#47584a",
    soft: "#6d7b70",
    accent: "#486b4b",
    accentStrong: "#355238",
    accentBg: "rgba(72, 107, 75, 0.08)",
    grid: "rgba(0,0,0,0.035)",
    shadow: "0 20px 60px rgba(40, 56, 44, 0.08)",
  };
}

function SectionLabel({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <Text
      tt="uppercase"
      fw={700}
      size="xs"
      style={{
        letterSpacing: "0.16em",
        color,
      }}
    >
      {children}
    </Text>
  );
}

function OrganicCard({
  children,
  palette,
  p = "xl",
}: {
  children: React.ReactNode;
  palette: ReturnType<typeof getPalette>;
  p?: string;
}) {
  return (
    <Card
      p={p}
      radius="28px"
      style={{
        background: palette.panel,
        border: `1px solid ${palette.border}`,
        boxShadow: palette.shadow,
        backdropFilter: "blur(10px)",
      }}
    >
      {children}
    </Card>
  );
}

export default function Home() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark");
  const palette = getPalette(computedColorScheme);

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 15% 10%, ${
            computedColorScheme === "dark"
              ? "rgba(111, 143, 118, 0.18)"
              : "rgba(99, 134, 103, 0.14)"
          }, transparent 22%),
          radial-gradient(circle at 85% 12%, ${
            computedColorScheme === "dark"
              ? "rgba(157, 192, 139, 0.10)"
              : "rgba(122, 154, 117, 0.10)"
          }, transparent 18%),
          radial-gradient(circle at 50% 35%, ${
            computedColorScheme === "dark"
              ? "rgba(72, 92, 78, 0.10)"
              : "rgba(138, 160, 136, 0.10)"
          }, transparent 30%),
          linear-gradient(180deg, ${palette.bg} 0%, ${palette.bg2} 50%, ${palette.bg3} 100%)
        `,
        color: palette.text,
        position: "relative",
        overflow: "hidden",
        transition: "background 180ms ease, color 180ms ease",
      }}
    >
      <Box
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: computedColorScheme === "dark" ? 0.18 : 0.1,
          backgroundImage: `
            linear-gradient(${palette.grid} 1px, transparent 1px),
            linear-gradient(90deg, ${palette.grid} 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.18))",
        }}
      />

      <Container size="lg" py={36} style={{ position: "relative", zIndex: 1 }}>
        <Stack gap={56}>
          <Group justify="space-between" align="center" wrap="wrap">
            <Text
              fw={800}
              size="lg"
              style={{
                letterSpacing: "-0.03em",
                color: palette.textStrong,
              }}
            >
              Madeline Abio
            </Text>

            <Group gap={24} wrap="wrap">
              {navLinks.map((link) => (
                <Anchor
                  key={link.label}
                  href={link.href}
                  underline="never"
                  style={{
                    color: palette.muted,
                    fontSize: "0.98rem",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Anchor>
              ))}

              <ActionIcon
                onClick={toggleColorScheme}
                radius="xl"
                variant="subtle"
                size="lg"
                aria-label="Toggle color scheme"
                style={{
                  color: palette.textStrong,
                  background: palette.accentBg,
                  border: `1px solid ${palette.border}`,
                }}
              >
                {computedColorScheme === "dark" ? (
                  <IconSun size={18} />
                ) : (
                  <IconMoon size={18} />
                )}
              </ActionIcon>
            </Group>
          </Group>

          <Grid gutter="xl" align="stretch">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Paper
                radius="40px"
                p={{ base: "xl", md: 44 }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: `
                    radial-gradient(circle at top left, ${
                      computedColorScheme === "dark"
                        ? "rgba(157, 192, 139, 0.11)"
                        : "rgba(90, 126, 93, 0.08)"
                    }, transparent 30%),
                    radial-gradient(circle at bottom right, ${
                      computedColorScheme === "dark"
                        ? "rgba(110, 143, 118, 0.10)"
                        : "rgba(106, 139, 110, 0.08)"
                    }, transparent 28%),
                    ${palette.hero}
                  `,
                  border: `1px solid ${palette.border}`,
                  boxShadow: palette.shadow,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: -70,
                    right: -40,
                    width: 220,
                    height: 220,
                    borderRadius: "46% 54% 58% 42% / 42% 38% 62% 58%",
                    background:
                      computedColorScheme === "dark"
                        ? "radial-gradient(circle, rgba(157, 192, 139, 0.20), rgba(157, 192, 139, 0.03) 65%, transparent 75%)"
                        : "radial-gradient(circle, rgba(92, 124, 96, 0.16), rgba(92, 124, 96, 0.03) 65%, transparent 75%)",
                    filter: "blur(10px)",
                  }}
                />

                <Stack gap={26} style={{ position: "relative", zIndex: 1 }}>
                  <SectionLabel color={palette.soft}>
                    Software engineer · outdoors · systems
                  </SectionLabel>

                  <Title
                    order={1}
                    style={{
                      fontSize: "clamp(2.8rem, 7vw, 5.4rem)",
                      lineHeight: 0.98,
                      letterSpacing: "-0.05em",
                      maxWidth: 700,
                      color: palette.textStrong,
                      textWrap: "balance",
                    }}
                  >
                    Building thoughtful software with a more grounded visual
                    identity.
                  </Title>

                  <Text
                    maw={760}
                    style={{
                      fontSize: "clamp(1.1rem, 1.7vw, 1.35rem)",
                      lineHeight: 1.9,
                      color: palette.muted,
                      fontWeight: 500,
                    }}
                  >
                    I’m an Electrical Engineering and Computer Science student
                    who likes building clean, technical products — full-stack
                    apps, analytics tooling, and software systems that feel both
                    practical and well-crafted.
                  </Text>

                  <Text
                    maw={760}
                    style={{
                      fontSize: "clamp(1.05rem, 1.6vw, 1.22rem)",
                      lineHeight: 1.9,
                      color: palette.muted,
                    }}
                  >
                    I also care a lot about the outdoors: hiking, rock climbing,
                    and the feeling of moving through landscapes with structure,
                    variation, and direction. I want this portfolio to carry
                    some of that same energy — technical, calm, and recognisably
                    mine.
                  </Text>

                  <Group gap="sm" wrap="wrap" pt={8}>
                    <Button
                      component="a"
                      href="#projects"
                      radius="xl"
                      rightSection={<IconArrowUpRight size={16} />}
                      styles={{
                        root: {
                          background: palette.accent,
                          color:
                            computedColorScheme === "dark"
                              ? "#102012"
                              : "#ffffff",
                          fontWeight: 800,
                        },
                      }}
                    >
                      View projects
                    </Button>

                    <Button
                      component="a"
                      href="#resume"
                      variant="light"
                      radius="xl"
                      leftSection={<IconDownload size={16} />}
                      styles={{
                        root: {
                          background: palette.accentBg,
                          color: palette.textStrong,
                          border: `1px solid ${palette.border}`,
                          fontWeight: 700,
                        },
                      }}
                    >
                      Resume
                    </Button>

                    <Button
                      component="a"
                      href="#contact"
                      variant="subtle"
                      radius="xl"
                      leftSection={<IconBrandGithub size={16} />}
                      styles={{
                        root: {
                          color: palette.muted,
                          fontWeight: 600,
                        },
                      }}
                    >
                      GitHub
                    </Button>

                    <Button
                      component="a"
                      href="#contact"
                      variant="subtle"
                      radius="xl"
                      leftSection={<IconBrandLinkedin size={16} />}
                      styles={{
                        root: {
                          color: palette.muted,
                          fontWeight: 600,
                        },
                      }}
                    >
                      LinkedIn
                    </Button>
                  </Group>
                </Stack>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack h="100%" gap="lg">
                <OrganicCard palette={palette}>
                  <Stack gap="md">
                    <SectionLabel color={palette.soft}>
                      Current focus
                    </SectionLabel>
                    <Text
                      fw={800}
                      size="xl"
                      style={{
                        letterSpacing: "-0.02em",
                        color: palette.textStrong,
                        lineHeight: 1.25,
                      }}
                    >
                      Technical depth with a cleaner, stronger identity.
                    </Text>
                    <Text
                      style={{
                        lineHeight: 1.8,
                        color: palette.muted,
                      }}
                    >
                      Building portfolio pieces that feel polished and modern
                      without looking generic or overly borrowed.
                    </Text>
                  </Stack>
                </OrganicCard>

                <OrganicCard palette={palette}>
                  <SimpleGrid cols={2} spacing="md">
                    <Box>
                      <Text size="xs" style={{ color: palette.soft }}>
                        Style
                      </Text>
                      <Text fw={700} style={{ color: palette.textStrong }}>
                        Organic + technical
                      </Text>
                    </Box>
                    <Box>
                      <Text size="xs" style={{ color: palette.soft }}>
                        Themes
                      </Text>
                      <Text fw={700} style={{ color: palette.textStrong }}>
                        Nature + systems
                      </Text>
                    </Box>
                    <Box>
                      <Text size="xs" style={{ color: palette.soft }}>
                        Interests
                      </Text>
                      <Text fw={700} style={{ color: palette.textStrong }}>
                        Software + outdoors
                      </Text>
                    </Box>
                    <Box>
                      <Text size="xs" style={{ color: palette.soft }}>
                        Focus
                      </Text>
                      <Text fw={700} style={{ color: palette.textStrong }}>
                        Full-stack engineering
                      </Text>
                    </Box>
                  </SimpleGrid>
                </OrganicCard>
              </Stack>
            </Grid.Col>
          </Grid>

          <Stack gap={16}>
            <SectionLabel color={palette.soft}>LeetCode</SectionLabel>
            <OrganicCard palette={palette} p="lg">
              <Stack gap={6} mb="md">
                <Title
                  order={2}
                  style={{
                    letterSpacing: "-0.03em",
                    color: palette.textStrong,
                    fontWeight: 800,
                  }}
                >
                  Solve graph
                </Title>
                <Text
                  style={{
                    color: palette.muted,
                    lineHeight: 1.75,
                    fontWeight: 500,
                  }}
                >
                  A technical section near the top, framed as part of the
                  overall story rather than a detached dashboard.
                </Text>
              </Stack>
              <LeetcodeScatterChart />
            </OrganicCard>
          </Stack>

          <Grid gutter="xl" id="about">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <OrganicCard palette={palette}>
                <Stack gap="md">
                  <SectionLabel color={palette.soft}>About</SectionLabel>
                  <Title
                    order={2}
                    style={{
                      letterSpacing: "-0.03em",
                      color: palette.textStrong,
                      fontWeight: 800,
                    }}
                  >
                    Technical work, shaped by curiosity and the outdoors.
                  </Title>

                  <Text
                    style={{
                      color: palette.muted,
                      lineHeight: 1.95,
                      fontWeight: 500,
                    }}
                  >
                    I enjoy projects that combine backend systems, APIs,
                    analytics, data modelling, and frontend presentation into
                    something coherent. The part I like most is taking an idea
                    from rough concept to something usable and considered.
                  </Text>

                  <Text
                    style={{
                      color: palette.muted,
                      lineHeight: 1.95,
                      fontWeight: 500,
                    }}
                  >
                    Outside pure software, I’m drawn to hiking, climbing, and
                    natural environments. I like the feeling of progression,
                    route-finding, and structure that comes with them, and I
                    think that mindset carries into how I build software too.
                  </Text>
                </Stack>
              </OrganicCard>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <OrganicCard palette={palette}>
                <Stack gap="md">
                  <SectionLabel color={palette.soft}>Principles</SectionLabel>

                  <Box>
                    <Text fw={800} style={{ color: palette.textStrong }}>
                      Clarity over noise
                    </Text>
                    <Text style={{ color: palette.muted, lineHeight: 1.8 }}>
                      I like interfaces and systems that feel deliberate rather
                      than overloaded.
                    </Text>
                  </Box>

                  <Divider color={palette.border} />

                  <Box>
                    <Text fw={800} style={{ color: palette.textStrong }}>
                      Depth over decoration
                    </Text>
                    <Text style={{ color: palette.muted, lineHeight: 1.8 }}>
                      Visual style should support substance, not compensate for
                      it.
                    </Text>
                  </Box>

                  <Divider color={palette.border} />

                  <Box>
                    <Text fw={800} style={{ color: palette.textStrong }}>
                      A more organic portfolio
                    </Text>
                    <Text style={{ color: palette.muted, lineHeight: 1.8 }}>
                      I want the page to feel calm, grounded, and recognisably
                      mine.
                    </Text>
                  </Box>
                </Stack>
              </OrganicCard>
            </Grid.Col>
          </Grid>

          <Stack gap={16} id="experience">
            <SectionLabel color={palette.soft}>Experience</SectionLabel>

            <Stack gap="lg">
              {experience.map((item) => {
                const Icon = item.icon;

                return (
                  <Paper
                    key={item.title}
                    radius="28px"
                    p="xl"
                    style={{
                      background: palette.panelStrong,
                      border: `1px solid ${palette.border}`,
                      boxShadow: palette.shadow,
                    }}
                  >
                    <Group align="flex-start" gap="lg" wrap="nowrap">
                      <ThemeIcon
                        size={44}
                        radius="xl"
                        variant="light"
                        styles={{
                          root: {
                            background: palette.accentBg,
                            color: palette.accentStrong,
                            border: `1px solid ${palette.border}`,
                            flexShrink: 0,
                          },
                        }}
                      >
                        <Icon size={22} />
                      </ThemeIcon>

                      <Stack gap={4}>
                        <Text
                          fw={800}
                          size="xl"
                          style={{ color: palette.textStrong }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          size="sm"
                          style={{
                            color: palette.accent,
                            fontWeight: 700,
                          }}
                        >
                          {item.subtitle}
                        </Text>
                        <Text
                          style={{
                            color: palette.muted,
                            lineHeight: 1.9,
                            paddingTop: 6,
                            fontWeight: 500,
                          }}
                        >
                          {item.description}
                        </Text>
                      </Stack>
                    </Group>
                  </Paper>
                );
              })}
            </Stack>
          </Stack>

          <Stack gap={16} id="projects">
            <SectionLabel color={palette.soft}>Projects</SectionLabel>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  p="lg"
                  radius={index % 2 === 0 ? "32px" : "24px"}
                  style={{
                    background:
                      index === 1
                        ? `linear-gradient(180deg, ${palette.panelStrong}, ${palette.panel})`
                        : palette.panelStrong,
                    border: `1px solid ${palette.border}`,
                    minHeight: 320,
                    boxShadow: palette.shadow,
                  }}
                >
                  <Stack justify="space-between" h="100%">
                    <Stack gap="sm">
                      <Text
                        fw={800}
                        size="xl"
                        style={{
                          letterSpacing: "-0.02em",
                          color: palette.textStrong,
                        }}
                      >
                        {project.title}
                      </Text>

                      <Text
                        style={{
                          color: palette.muted,
                          lineHeight: 1.9,
                          fontWeight: 500,
                        }}
                      >
                        {project.description}
                      </Text>

                      <Group gap="xs" wrap="wrap" pt={6}>
                        {project.tags.map((tag) => (
                          <Box
                            key={tag}
                            px={10}
                            py={5}
                            style={{
                              borderRadius: 999,
                              background: palette.accentBg,
                              border: `1px solid ${palette.border}`,
                            }}
                          >
                            <Text
                              size="xs"
                              fw={700}
                              style={{ color: palette.textStrong }}
                            >
                              {tag}
                            </Text>
                          </Box>
                        ))}
                      </Group>
                    </Stack>

                    <Anchor
                      href={project.href}
                      underline="never"
                      style={{
                        color: palette.accent,
                        fontWeight: 700,
                        width: "fit-content",
                      }}
                    >
                      View project
                    </Anchor>
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>

          <Paper
            id="contact"
            radius="40px"
            p={{ base: "xl", md: 36 }}
            style={{
              background: `
                radial-gradient(circle at 15% 20%, ${
                  computedColorScheme === "dark"
                    ? "rgba(157, 192, 139, 0.08)"
                    : "rgba(72, 107, 75, 0.06)"
                }, transparent 24%),
                ${palette.panelStrong}
              `,
              border: `1px solid ${palette.border}`,
              boxShadow: palette.shadow,
            }}
          >
            <Stack gap="md">
              <SectionLabel color={palette.soft}>Contact</SectionLabel>
              <Title
                order={2}
                style={{
                  letterSpacing: "-0.03em",
                  color: palette.textStrong,
                  fontWeight: 800,
                }}
              >
                Links and contact live here.
              </Title>
              <Text
                maw={760}
                style={{
                  color: palette.muted,
                  lineHeight: 1.9,
                  fontWeight: 500,
                }}
              >
                Replace the placeholders with your actual GitHub, LinkedIn,
                email, and resume. This section is intentionally simple so the
                earlier sections do most of the visual work.
              </Text>

              <Group gap="lg" wrap="wrap" pt={8}>
                <Anchor
                  href="#"
                  underline="never"
                  style={{
                    color: palette.textStrong,
                    fontWeight: 700,
                  }}
                >
                  GitHub
                </Anchor>
                <Anchor
                  href="#"
                  underline="never"
                  style={{
                    color: palette.textStrong,
                    fontWeight: 700,
                  }}
                >
                  LinkedIn
                </Anchor>
                <Anchor
                  id="resume"
                  href="#"
                  underline="never"
                  style={{
                    color: palette.textStrong,
                    fontWeight: 700,
                  }}
                >
                  Resume
                </Anchor>
                <Anchor
                  href="mailto:your-email@example.com"
                  underline="never"
                  style={{
                    color: palette.accent,
                    fontWeight: 700,
                  }}
                >
                  <Group gap={6}>
                    <IconMail size={16} />
                    <span>Email</span>
                  </Group>
                </Anchor>
              </Group>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
