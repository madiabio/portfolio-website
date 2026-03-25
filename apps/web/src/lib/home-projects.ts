export type HomeProject = {
  title: string;
  description: string;
  href?: string;
};

export const homeProjects: HomeProject[] = [
  {
    title: "Portfolio website",
    description:
      "A full-stack portfolio built with Next.js, NestJS, PostgreSQL, and Mantine. Includes authentication, analytics, and a private dashboard for managing solve data.",
    href: "/dashboard",
  },
];
