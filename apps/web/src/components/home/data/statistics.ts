import { ArrowUpRight, Code2, Layers3, Workflow } from "lucide-react";
import type { WhyChooseFyxelsData } from "./types";

export const whyChooseFyxelsData: WhyChooseFyxelsData = {
  eyebrow: "Why Choose Fyxels",
  title: "A thoughtful partner, from first idea to launch",
  description:
    "Good software starts with clear communication and a team that cares about the outcome.",
  strengths: [
    {
      title: "Direct collaboration",
      description:
        "Work with the people shaping and building your product.",
      icon: Code2,
    },
    {
      title: "A clear roadmap",
      description:
        "Align on priorities, scope, and milestones before delivery.",
      icon: Workflow,
    },
    {
      title: "Quality by design",
      description:
        "Make performance, usability, and maintainability part of the work.",
      icon: Layers3,
    },
    {
      title: "Built for what’s next",
      description:
        "Choose an approach that can adapt as your needs change.",
      icon: ArrowUpRight,
    },
  ],
};
