"use client";

const stats = [
  { num: "120+", label: "Products Shipped" },
  { num: "40+", label: "Industries Served" },
  { num: "98%", label: "Client Retention" },
  { num: "24/7", label: "Global Delivery" },
];

export function StatsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#0e0d0b" }}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col">
              <span
                className="font-display font-bold text-[clamp(36px,4.5vw,52px)] tracking-[-0.02em]"
                style={{ color: "var(--text-primary, #f4efe4)" }}
              >
                {s.num}
              </span>
              <span
                className="mt-2 font-mono text-[12px] font-semibold tracking-[0.06em] uppercase"
                style={{ color: "#9C9384" }}
              >
                // {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
