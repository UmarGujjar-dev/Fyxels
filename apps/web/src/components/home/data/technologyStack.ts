import { Code2, Database } from "lucide-react";
import type { TechnologyStackData } from "./types";

export const technologyStackData: TechnologyStackData = {
  eyebrow: "Technology Stack",
  title: "The right tools for the job",
  description:
    "We select technologies to fit your product’s needs, team, and long-term plans.",
  groups: [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      icon: Code2,
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "GraphQL"],
      icon: Code2,
    },
    {
      category: "Data",
      items: ["PostgreSQL", "MySQL", "Prisma", "Redis"],
      icon: Database,
    },
    {
      category: "Cloud & delivery",
      items: ["AWS", "Docker", "Kubernetes", "Terraform"],
      icon: Code2,
    },
  ],
};
