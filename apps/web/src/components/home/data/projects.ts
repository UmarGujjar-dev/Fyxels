import type { FeaturedProjectsData } from "./types";

export const featuredProjectsData: FeaturedProjectsData = {
  eyebrow: "Featured Projects",
  title: "Ideas shaped into digital products",
  description:
    "A glimpse at the kinds of product experiences we can help you create.",
  disclaimer: "Illustrative product concepts—not published client case studies.",
  linkLabel: "Explore our work",
  linkHref: "/work",
  projects: [
    {
      title: "Connected Fitness",
      category: "Mobile product · Concept direction",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
      alt: "Modern fitness studio with workout equipment",
      badge: "Concept",
    },
    {
      title: "Commerce Studio",
      category: "Digital commerce · Concept direction",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
      alt: "Minimal product photography for an online store",
      badge: "Concept",
    },
    {
      title: "Productivity Cloud",
      category: "Web application · Concept direction",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
      alt: "Developer workspace with a laptop and code editor",
      badge: "Concept",
    },
  ],
};
