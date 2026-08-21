"use client";

import { Users, Calendar, ShieldCheck, Star } from "lucide-react";

const differentiators = [
  {
    Icon: Users,
    title: "Dedicated senior pods",
    desc: "A fixed team of senior engineers and a product designer — no rotating juniors, no ticket queue.",
  },
  {
    Icon: Calendar,
    title: "Fixed-fee sprints",
    desc: "Two-week sprints, scoped and priced upfront. You see the build plan before we write a line of code.",
  },
  {
    Icon: ShieldCheck,
    title: "Compliance built in",
    desc: "PCI-DSS, HIPAA and SOC 2 patterns baked into the architecture, not bolted on after audit.",
  },
  {
    Icon: Star,
    title: "90-day post-launch SLA",
    desc: "Every build ships with three months of monitored uptime, bug triage and response-time guarantees.",
  },
];

export function DifferentSection() {
  return (
    <section
      className="py-24 border-y"
      id="different"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <span className="inline-flex items-center gap-1.5 font-mono text-[12.5px] font-semibold tracking-[0.06em] uppercase mb-4" style={{ color: "var(--accent-orange)" }}>
            <span className="font-bold" style={{ color: "var(--accent-teal)" }}>//</span>
            How We&apos;re Different
          </span>
          <h2 className="font-display font-bold text-[clamp(28px,3.6vw,44px)] tracking-[-0.015em] leading-[1.08]" style={{ color: "var(--text-primary)" }}>
            Agency polish,
            <br />
            <em className="not-italic" style={{ color: "var(--accent-orange)" }}>engineering discipline.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Differentiators list */}
          <div className="divide-y" style={{ borderColor: "var(--border)" }}>
            {differentiators.map(({ Icon, title, desc }, i) => (
              <div key={i} className="py-7 grid grid-cols-[52px_1fr] gap-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(245,112,28,0.12)" }}
                >
                  <Icon size={20} style={{ color: "var(--accent-orange)" }} strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="font-display text-[18px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {title}
                  </h4>
                  <p className="text-[14px] leading-[1.65]" style={{ color: "var(--text-secondary)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky quote card */}
          <div
            className="rounded-[22px] p-10 lg:sticky lg:top-28"
            style={{ backgroundColor: "#0e0d0b" }}
          >
            <div
              className="font-display text-[56px] leading-none mb-2 font-bold"
              style={{ color: "var(--accent-orange)" }}
            >
              &ldquo;
            </div>
            <p
              className="font-display text-[22px] leading-[1.45] font-medium"
              style={{ color: "#F4EFE4" }}
            >
              Fyxels rebuilt our booking engine in nine weeks and it hasn&apos;t gone down since. They talk like engineers, not salespeople.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full"
                style={{ background: "linear-gradient(135deg, var(--accent-teal), var(--accent-orange))" }}
              />
              <div>
                <div className="text-[14px] font-semibold" style={{ color: "#F4EFE4" }}>
                  Head of Engineering
                </div>
                <div className="font-mono text-[12px] mt-0.5" style={{ color: "#9C9384" }}>
                  Travel-tech scaleup, Series B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
