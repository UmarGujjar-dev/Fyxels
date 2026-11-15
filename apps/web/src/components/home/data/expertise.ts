import {
  Bot,
  Cloud,
  Code2,
  Layers3,
  Palette,
  Smartphone,
} from "lucide-react";
import type { ExpertiseSectionData } from "./types";

export const expertiseData: ExpertiseSectionData = {
  eyebrow: "Our Expertise",
  title: "End-to-end software development",
  description:
    "From the first product idea to a dependable digital experience, bring design and engineering together with one team.",
  serviceLinkLabel: "Explore service",
  serviceLinkHref: "/services",
  services: [
    {
      title: "Custom Software",
      description:
        "Purpose-built systems shaped around the way your business works.",
      icon: Code2,
    },
    {
      title: "Web Applications",
      description:
        "Fast, accessible web products designed to grow with your users.",
      icon: Layers3,
    },
    {
      title: "Mobile Apps",
      description: "Useful, polished mobile experiences for iOS and Android.",
      icon: Smartphone,
    },
    {
      title: "AI & Automation",
      description:
        "Practical AI features and workflows that reduce repetitive work.",
      icon: Bot,
    },
    {
      title: "UI/UX Design",
      description:
        "Clear product journeys, thoughtful interfaces, and design systems.",
      icon: Palette,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Reliable infrastructure and delivery pipelines for your product.",
      icon: Cloud,
    },
  ],
};
