import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Palette,
} from "lucide-react";
import type { DevelopmentProcessData } from "./types";

export const developmentProcessData: DevelopmentProcessData = {
  eyebrow: "Our Development Process",
  title: "A simple, transparent process",
  description:
    "From first conversation to launch, stay close to the work and know what comes next.",
  steps: [
    {
      title: "Discover",
      description: "Understand your goals, users, and constraints.",
      icon: ArrowUpRight,
    },
    {
      title: "Plan",
      description: "Turn priorities into a practical scope and roadmap.",
      icon: Layers3,
    },
    {
      title: "Design",
      description: "Shape the experience and validate the product direction.",
      icon: Palette,
    },
    {
      title: "Develop",
      description: "Build, review, and test in clear delivery cycles.",
      icon: Code2,
    },
    {
      title: "Launch",
      description: "Prepare your product for release and its next iteration.",
      icon: ArrowRight,
    },
  ],
};
