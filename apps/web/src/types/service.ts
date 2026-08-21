// Shared type definitions — no client/server directive needed
export interface ServicePageData {
  slug: string;
  title: string;
  metaDescription: string;
  heroLabel: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  problemTitle: string;
  problemText: string;
  solutionText: string;
  offerings: { title: string; description: string; icon: string }[];
  techStack: string[];
  caseStudy: {
    client: string;
    title: string;
    description: string;
    metric1: { value: string; label: string };
    metric2: { value: string; label: string };
    metric3: { value: string; label: string };
  };
  processSteps: { title: string; description: string }[];
  testimonial: { quote: string; name: string; role: string };
}
