import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";
import { SectionIntro } from "./SectionIntro";
import { solutionsData } from "./data/solutions";

export function OurSolutions() {
  const { visual } = solutionsData;

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute -right-36 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="container-custom relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 sm:min-h-[380px]">
          <Image
            src={visual.image}
            alt={visual.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />
          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-black/65 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-zinc-300">{visual.label}</p>
                <p className="mt-1 font-display text-lg font-bold">{visual.title}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                <Layers3 size={20} aria-hidden="true" />
              </span>
            </div>
            <div className="mt-4 flex gap-2" aria-hidden="true">
              <span className="h-1.5 w-2/5 rounded-full bg-orange-500" />
              <span className="h-1.5 w-1/4 rounded-full bg-teal-400" />
              <span className="h-1.5 flex-1 rounded-full bg-white/25" />
            </div>
          </div>
        </div>
        <div>
          <SectionIntro {...solutionsData} dark />
          <ul className="mb-8 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
            {solutionsData.offerings.map((offering) => (
              <li key={offering} className="flex items-center gap-2.5">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] text-black"
                  style={{ backgroundColor: "var(--accent-orange)" }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                {offering}
              </li>
            ))}
          </ul>
          <Link
            href={solutionsData.linkHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-orange-400 hover:text-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            {solutionsData.linkLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
