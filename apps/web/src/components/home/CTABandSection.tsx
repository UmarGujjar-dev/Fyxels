"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABandSection() {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "var(--accent-orange)" }}>
      {/* Subtle diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(115deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 42px)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Left copy */}
          <div>
            <span
              className="inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold tracking-[0.06em] uppercase mb-4"
              style={{ color: "rgba(26,15,4,0.75)" }}
            >
              <span className="font-bold" style={{ color: "rgba(26,15,4,0.75)" }}>//</span>
              Start A Project
            </span>
            <h2
              className="font-display font-bold text-[clamp(26px,3.6vw,42px)] tracking-[-0.015em] leading-[1.08] max-w-[560px]"
              style={{ color: "#1A0F04" }}
            >
              Ready to uncover a new approach to your software?
            </h2>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[14.5px] font-semibold transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#1A0F04", color: "#FFE9D3" }}
            >
              Get started for free
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[14.5px] font-semibold border transition-all hover:bg-[#1A0F04] hover:text-[#FFE9D3]"
              style={{ borderColor: "#1A0F04", color: "#1A0F04", backgroundColor: "transparent" }}
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
