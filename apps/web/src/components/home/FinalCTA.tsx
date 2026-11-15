import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { finalCTAData } from "./data/finalCTA";

export function FinalCTA() {
  return (
    <section className="bg-white px-4 pb-8 pt-4 sm:px-6 sm:pb-12">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] px-6 py-10 text-white sm:px-10 lg:px-14">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at right, rgba(0,222,170,0.24), transparent 55%), radial-gradient(ellipse at bottom left, rgba(249,124,0,0.35), transparent 45%)",
            }}
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p
                className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--accent-teal)" }}
              >
                {finalCTAData.eyebrow}
              </p>
              <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                {finalCTAData.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                {finalCTAData.description}
              </p>
            </div>
            <Link
              href={finalCTAData.buttonHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                background:
                  "linear-gradient(100deg, var(--accent-orange), #fcd34d 52%, var(--accent-teal))",
              }}
            >
              {finalCTAData.buttonLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
