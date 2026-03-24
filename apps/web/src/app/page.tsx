import { Container, Stack } from "@mantine/core";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { HomeAnalyticsSection } from "@/features/analytics/components/home-analytics-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";

export default function Home() {
  return (
    <Container size="xl" py="xl">
      <Stack gap={64}>
        <SiteHeader />
        <HeroSection />
        <HomeAnalyticsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </Stack>
    </Container>
  );
}
