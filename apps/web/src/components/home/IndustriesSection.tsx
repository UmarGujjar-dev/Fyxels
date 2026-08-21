"use client";

const sectors = [
  {
    tag: "Finance & Commerce",
    tagVariant: "orange",
    items: [
      { title: "Banking & Fintech", desc: "Digital ledgers, PCI-DSS" },
      { title: "Healthcare & Pharma", desc: "HIPAA, telehealth" },
      { title: "E-Commerce & Shopify", desc: "Headless storefronts" },
      { title: "Retail & CPG", desc: "Omnichannel, POS" },
    ],
  },
  {
    tag: "Global Scale",
    tagVariant: "teal",
    items: [
      { title: "Travel & Hospitality", desc: "Booking, PMS" },
      { title: "Telecommunication", desc: "Billing infrastructure" },
      { title: "Public Sector & GovTech", desc: "Citizen portals" },
      { title: "Oil, Gas & Energy", desc: "IoT telemetry" },
      { title: "Gaming & Interactive", desc: "Live-ops, Web3" },
    ],
  },
  {
    tag: "Rapid 0-to-1",
    tagVariant: "orange",
    items: [
      { title: "Startups & Scaleups", desc: "MVP launches" },
      { title: "Corporate & Enterprise", desc: "Legacy migration" },
      { title: "AI & Automation Tech", desc: "LLM, RAG, agents" },
    ],
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

export function IndustriesSection() {
  return (
    <section className="py-24" id="industries" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-flex items-center gap-1.5 font-mono text-[12.5px] font-semibold tracking-[0.06em] uppercase mb-4" style={{ color: "var(--accent-orange)" }}>
            <span className="font-bold" style={{ color: "var(--accent-teal)" }}>//</span>
            Who We Serve
          </span>
          <h2 className="font-display font-bold text-[clamp(28px,3.6vw,44px)] tracking-[-0.015em] leading-[1.08]" style={{ color: "var(--text-primary)" }}>
            Built for your{" "}
            <em className="not-italic" style={{ color: "var(--accent-orange)" }}>sector's</em>
            <br />regulations and scale.
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Every industry ships software differently. We bring the compliance, integrations, and domain patterns your sector already expects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="group rounded-[18px] p-8 border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-orange)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px -18px rgba(245,112,28,0.28)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div className="mb-5">
                <TagPill label={sector.tag} variant={sector.tagVariant as "orange" | "teal"} />
              </div>
              <ul className="divide-y" style={{ borderColor: "var(--border)" }}>
                {sector.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-3 py-3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span className="text-[14.5px] font-semibold" style={{ color: "var(--text-primary)" }}>
                      {item.title}
                    </span>
                    <span className="text-[12px] text-right shrink-0 max-w-[160px]" style={{ color: "var(--text-secondary)" }}>
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
