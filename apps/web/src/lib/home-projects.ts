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
  {
    title: "LeetCode solve tracker",
    description:
      "A small data system for recording solved problems and surfacing trends through charts and analytics.",
  },
  {
    title: "Order book project",
    description:
      "A Python market data order book processor with careful testing, performance analysis, and clean data structure design.",
  },
];
