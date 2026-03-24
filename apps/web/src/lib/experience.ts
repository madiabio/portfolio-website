export type ExperienceItem = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
};
export const experiences: ExperienceItem[] = [
  {
    title: "VPTech",
    subtitle: "Software Engineer",
    date: "Aug 2025 – Present",
    description:
      "Building production-grade RAG systems with human-in-the-loop validation and vector database integration. Contributing to full-stack development, system design, and CI/CD pipelines.",
  },
  {
    title: "Energy Queensland",
    subtitle: "Grid Technology Intern",
    date: "Jan 2025 – Sept 2025",
    description:
      "Developed a machine learning anomaly detection system for neutral faults targeting large-scale deployment. Built data dashboards and automation tools that significantly reduced manual processing time.",
  },
  {
    title: "Griffith University",
    subtitle: "Undergraduate Research Assistant",
    date: "Mar 2024 – Jun 2024",
    description:
      "Processed and structured large datasets for machine learning research using Python, Bash, and HDF5. Focused on efficient data pipelines and preprocessing workflows.",
  },
  {
    title: "Energy Queensland",
    subtitle: "Cyber Security Platforms Intern",
    date: "Nov 2023 – Feb 2024",
    description:
      "Developed foundational knowledge in networking and enterprise security systems. Applied this to resolve ServiceNow tickets and gain exposure to cloud and firewall technologies.",
  },
];
