import { MetadataRoute } from "next";

const BASE_URL = "https://fyxels.com";

const servicesSlugs = [
  "custom-software-development", "web-application-development", "mobile-app-development",
  "ecommerce-solutions", "api-integration-services", "ui-ux-design",
  "brand-identity", "product-design", "technical-seo", "digital-marketing", "cloud-devops",
];

const industrySlugs = ["saas", "ecommerce", "healthcare", "fintech"];

const workSlugs = [
  "dataflow-analytics-saas", "payswift-fintech-app", "luxestyle-headless-ecommerce",
];

const insightsSlugs = [
  "nextjs-14-app-router-production", "headless-shopify-conversion-guide", "prisma-mysql-production-best-practices",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/technologies`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/industries`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/work`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/insights`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/careers`, priority: 0.6, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/get-a-quote`, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const servicePages = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const industryPages = industrySlugs.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const workPages = workSlugs.map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const insightPages = insightsSlugs.map((slug) => ({
    url: `${BASE_URL}/insights/${slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...workPages,
    ...insightPages,
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}
