export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};
export const experiences: ExperienceItem[] = [
  {
    company: "VPTech",
    role: "Software Engineer",
    period: "Aug 2025 – Present",
    description:
      "Building production-grade RAG systems with human-in-the-loop validation and vector database integration. Contributing to full-stack development, system design, and CI/CD pipelines.",
  },
  {
    company: "Energy Queensland",
    role: "Grid Technology Intern",
    period: "Jan 2025 – Sept 2025",
    description:
      "Developed a machine learning anomaly detection system for neutral faults targeting large-scale deployment. Built data dashboards and automation tools that significantly reduced manual processing time.",
  },
  {
    company: "Griffith University",
    role: "Undergraduate Research Assistant",
    period: "Mar 2024 – Jun 2024",
    description:
      "Processed and structured large datasets for machine learning research using Python, Bash, and HDF5. Focused on efficient data pipelines and preprocessing workflows.",
  },
  {
    company: "Energy Queensland",
    role: "Cyber Security Platforms Intern",
    period: "Nov 2023 – Feb 2024",
    description:
      "Developed foundational knowledge in networking and enterprise security systems. Applied this to resolve ServiceNow tickets and gain exposure to cloud and firewall technologies.",
  },
];
