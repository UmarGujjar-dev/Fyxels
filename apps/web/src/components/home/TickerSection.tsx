"use client";

const items = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Brand Identity",
  "AI Automation",
  "SaaS Platforms",
  "Cloud & DevOps",
  "MVP Launch",
  "Shopify Plus",
  "Motion Design",
];

export function TickerSection() {
  const doubled = [...items, ...items];

  return (
    <div className="border-y overflow-hidden" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}>
      <div
        className="flex w-max"
        style={{ animation: "ticker 32s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="relative whitespace-nowrap px-7 py-4 font-mono text-[11.5px] font-semibold tracking-widest uppercase"
            style={{ color: "var(--text-secondary)" }}
          >
            {item}
            <span className="absolute right-0 top-4 font-mono font-bold text-[11px]" style={{ color: "var(--accent-orange)" }}>//</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
