import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionIntro } from "./SectionIntro";
import { expertiseData } from "./data/expertise";

export function OurExpertise() {
  return (
    <section id="services" className="bg-white py-16 text-[#17191c] sm:py-20">
      <div className="container-custom">
        <SectionIntro {...expertiseData} centered />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseData.services.map(({ title, description, icon: Icon }) => (
            <Link
              key={title}
              href={expertiseData.serviceLinkHref}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_8px_28px_rgba(17,24,39,0.04)] transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_16px_34px_rgba(17,24,39,0.09)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <span
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  color: "var(--accent-orange)",
                  backgroundColor: "rgba(249,124,0,0.1)",
                }}
              >
                <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-bold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-800 transition-colors group-hover:text-orange-600">
                {expertiseData.serviceLinkLabel}
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
