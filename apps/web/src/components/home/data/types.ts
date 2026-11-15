import type { LucideIcon } from "lucide-react";

export interface TrustedPlatform {
  name: string;
}

export interface TrustedCompaniesData {
  introduction: string;
  platforms: TrustedPlatform[];
}

export interface SectionHeadingData {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ExpertiseService {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ExpertiseSectionData extends SectionHeadingData {
  services: ExpertiseService[];
  serviceLinkLabel: string;
  serviceLinkHref: string;
}

export interface SolutionSectionData extends SectionHeadingData {
  visual: {
    image: string;
    alt: string;
    label: string;
    title: string;
  };
  offerings: string[];
  linkLabel: string;
  linkHref: string;
}

export interface ProjectConcept {
  title: string;
  category: string;
  image: string;
  alt: string;
  badge: string;
}

export interface FeaturedProjectsData extends SectionHeadingData {
  projects: ProjectConcept[];
  disclaimer: string;
  linkLabel: string;
  linkHref: string;
}

export interface WhyChooseFyxelsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyChooseFyxelsData extends SectionHeadingData {
  strengths: WhyChooseFyxelsItem[];
}

export interface DevelopmentProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DevelopmentProcessData extends SectionHeadingData {
  steps: DevelopmentProcessStep[];
}

export interface TechnologyGroup {
  category: string;
  items: string[];
  icon: LucideIcon;
}

export interface TechnologyStackData extends SectionHeadingData {
  groups: TechnologyGroup[];
}

export interface TestimonialSectionData extends SectionHeadingData {
  icon: LucideIcon;
  emptyStateTitle: string;
  emptyStateDescription: string;
  linkLabel: string;
  linkHref: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData extends SectionHeadingData {
  questions: FAQItem[];
}

export interface FinalCTAData {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}
