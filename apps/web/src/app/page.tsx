import { Container, Stack } from "@mantine/core";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { HomeAnalyticsSection } from "@/features/analytics/components/home-analytics-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { headers } from "next/headers";
import { FeaturedDemosSection } from "@/components/featured-demos-section";

export default async function Home() {
  const h = await headers();
  console.log("HOST:", h.get("host"));
  return (
    <Container size="xl" py="xl">
      <Stack gap={64}>
        <SiteHeader />
        <HeroSection />
        <ProjectsSection />
        <FeaturedDemosSection />
        <ExperienceSection />
        <ContactSection />
      </Stack>
    </Container>
  );
}
