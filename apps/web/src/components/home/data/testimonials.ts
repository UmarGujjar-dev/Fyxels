import { Palette } from "lucide-react";
import type { TestimonialSectionData } from "./types";

export const testimonialsData: TestimonialSectionData = {
  eyebrow: "Testimonials",
  title: "Client feedback should speak for itself",
  description:
    "We don’t publish placeholder quotes or unverified endorsements. When client feedback is approved for sharing, it belongs here.",
  icon: Palette,
  emptyStateTitle: "Real stories, shared with permission",
  emptyStateDescription:
    "We don’t currently have public client testimonials to feature. Get in touch to learn about our approach and discuss your project directly.",
  linkLabel: "Talk with our team",
  linkHref: "/contact",
};
