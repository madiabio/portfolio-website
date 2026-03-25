type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
};

type HomeProject = {
  title: string;
  description: string;
  href?: string;
  language?: string | null;
  topics?: string[];
};

const PROJECT_OVERRIDES: Record<
  string,
  { title?: string; description?: string; language?: string }
> = {
  "portfolio-website": {
    title: "Portfolio Website",
    description:
      "The website you're currently on: a full-stack web app built with Next.js, NestJS, PostgreSQL, and Mantine. Hosted on Railway. Includes authentication, a Leetcode analytics graph, and a dynamic link to my GitHub repositories that are tagged 'portfolio'.",
    language: "Typescript",
  },
  "bass-synth": {
    title: "Digital Bass Synthesiser",
    language: "C",
  },
};

export async function getPortfolioProjects(): Promise<HomeProject[]> {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

  if (!GITHUB_USERNAME) {
    throw new Error("GITHUB_USERNAME env var not set.");
  }

  const res = await fetch(
    `https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:portfolio`,
    {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json", // enables topics

        ...(process.env.GITHUB_TOKEN
          ? {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }
          : {}),
      },
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    throw new Error(`GitHub request failed: ${res.status}`);
  }

  const data: { items: GitHubRepo[] } = await res.json();

  return data.items.map((repo) => {
    const override = PROJECT_OVERRIDES[repo.name];

    return {
      title: override?.title ?? prettifyRepoName(repo.name),
      description:
        override?.description ??
        repo.description ??
        "No description provided yet.",
      href: repo.html_url,
      language: override?.language ?? repo.language,
      topics: (repo.topics ?? []).filter(
        (t) =>
          t !== "portfolio" &&
          t.toLowerCase() !== (repo.language ?? "").toLowerCase(),
      ),
    };
  });
}

function prettifyRepoName(name: string): string {
  return name
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
