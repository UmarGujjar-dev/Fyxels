import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionIntro } from "./SectionIntro";
import { testimonialsData } from "./data/testimonials";

export function Testimonials() {
  const { icon: Icon } = testimonialsData;

  return (
    <section id="testimonials" className="bg-white py-16 text-[#17191c] sm:py-20">
      <div className="container-custom">
        <SectionIntro {...testimonialsData} centered />
        <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-7 text-center sm:p-10">
          <span
            className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full"
            style={{
              color: "var(--accent-orange)",
              backgroundColor: "rgba(249,124,0,0.1)",
            }}
          >
            <Icon size={20} aria-hidden="true" />
          </span>
          <p className="font-display text-lg font-bold">
            {testimonialsData.emptyStateTitle}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
            {testimonialsData.emptyStateDescription}
          </p>
          <Link
            href={testimonialsData.linkHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            {testimonialsData.linkLabel}
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
