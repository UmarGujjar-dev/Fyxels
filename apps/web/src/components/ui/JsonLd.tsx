// Pure server-safe utilities — NO "use client" directive

interface JsonLdData {
  [key: string]: unknown;
}

export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fyxels",
  url: "https://fyxels.com",
  logo: "https://fyxels.com/logo.png",
  description:
    "Premium software engineering agency specializing in custom software, web & mobile apps, UI/UX design, and digital marketing.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-234-567-890",
    contactType: "customer service",
    email: "hello@fyxels.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://twitter.com/fyxels",
    "https://linkedin.com/company/fyxels",
    "https://github.com/fyxels",
  ],
};

export function buildServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Fyxels",
      url: "https://fyxels.com",
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://fyxels.com${item.href}`,
    })),
  };
}
