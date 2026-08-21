"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Palette, Bot } from "lucide-react";

const capabilities = [
  {
    tag: "Development",
    tagVariant: "orange",
    Icon: Code2,
    iconBg: "#FDE9D9",
    iconColor: "#C6551A",
    title: "Web, Mobile & Ecommerce",
    items: [
      { title: "Web Design & Custom Web Dev", desc: "Corporate sites, landing pages & CMS — WordPress or headless." },
      { title: "Shopify & Ecommerce Stores", desc: "Custom storefronts, checkout APIs & WooCommerce migrations." },
      { title: "Mobile App Development", desc: "iOS (Swift), Android (Kotlin), Flutter & React Native." },
      { title: "Admin Panels & API Integration", desc: "Dashboards, REST & GraphQL integrations, payment gateways." },
    ],
    cta: "Browse Web & App Stack",
    href: "/services",
  },
  {
    tag: "Creative Studio",
    tagVariant: "teal",
    Icon: Palette,
    iconBg: "#DDF6EF",
    iconColor: "#1E9E85",
    title: "UI/UX, Brand & Motion",
    items: [
      { title: "UI/UX & Design Systems", desc: "UX research, wireframes, prototypes & scalable design systems." },
      { title: "Brand Identity & Guidelines", desc: "Logo design, brand guides, company profiles & social assets." },
      { title: "AI Video & Motion Design", desc: "AI video generation, ad creatives, reels & UGC-style content." },
      { title: "3D & Explainer Motion Graphics", desc: "3D animation, explainer videos & UI motion." },
    ],
    cta: "Browse Design & Motion",
    href: "/services",
  },
  {
    tag: "New AI Tech",
    tagVariant: "orange",
    Icon: Bot,
    iconBg: "#FDE9D9",
    iconColor: "#C6551A",
    title: "AI, SaaS & MVP Launch",
    items: [
      { title: "AI Automation & Chatbots", desc: "WhatsApp automation, AI support & CRM workflow bots." },
      { title: "SaaS Platforms & Dashboards", desc: "Multi-tenant engines, billing systems & AI SaaS products." },
      { title: "MVP Development & Validation", desc: "Startup MVPs, rapid prototyping & product validation systems." },
    ],
    cta: "Browse All Capabilities",
    href: "/services",
  },
];

function TagPill({ label, variant }: { label: string; variant: "orange" | "teal" }) {
  const styles =
    variant === "orange"
      ? { background: "#FDE9D9", color: "#C6551A" }
      : { background: "#DDF6EF", color: "#1E9E85" };
  return (
    <span
      className="inline-flex items-center font-mono text-[10.5px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full"
      style={styles}
    >
      {label}
    </span>
  );
}

export function CapabilitiesSection() {
  return (
    <section className="py-24" id="capabilities" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-flex items-center gap-1.5 font-mono text-[12.5px] font-semibold tracking-[0.06em] uppercase mb-4" style={{ color: "var(--accent-orange)" }}>
            <span className="font-bold" style={{ color: "var(--accent-teal)" }}>//</span>
            What We Do
          </span>
          <h2 className="font-display font-bold text-[clamp(28px,3.6vw,44px)] tracking-[-0.015em] leading-[1.08]" style={{ color: "var(--text-primary)" }}>
            Three studios,{" "}
            <em className="not-italic" style={{ color: "var(--accent-orange)" }}>one build.</em>
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            We don't hand you off between departments. One team of engineers, designers and AI specialists carries your product from sketch to shipped software.
          </p>
        </div>

        {/* 3-col grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)", gap: "1px", backgroundColor: "var(--border)" }}
        >
          {capabilities.map((cap, idx) => {
            const { Icon } = cap;
            return (
              <div
                key={idx}
                className="flex flex-col p-8"
                style={{ backgroundColor: "var(--bg-surface)" }}
              >
                {/* Tag + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <TagPill label={cap.tag} variant={cap.tagVariant as "orange" | "teal"} />
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: cap.iconBg }}
                >
                  <Icon size={18} color={cap.iconColor} strokeWidth={2} />
                </div>
                <h3 className="font-display font-semibold text-[19px] mb-5" style={{ color: "var(--text-primary)" }}>
                  {cap.title}
                </h3>

                {/* Items */}
                <div className="flex-1 divide-y" style={{ borderColor: "var(--border)" }}>
                  {cap.items.map((item, i) => (
                    <div key={i} className="group py-3.5">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-[14px] font-semibold transition-colors group-hover:text-orange-600" style={{ color: "var(--text-primary)" }}>
                          {item.title}
                        </h4>
                        <ArrowRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 shrink-0"
                          style={{ color: "var(--accent-orange)" }}
                        />
                      </div>
                      <p className="mt-1 text-[12.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer CTA */}
                <Link
                  href={cap.href}
                  className="mt-5 pt-4 flex items-center gap-1.5 text-[13.5px] font-semibold transition-colors hover:opacity-70"
                  style={{ borderTop: "1px solid var(--border)", color: "var(--text-primary)" }}
                >
                  {cap.cta}
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
