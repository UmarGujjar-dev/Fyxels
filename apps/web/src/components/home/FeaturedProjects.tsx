import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionIntro } from "./SectionIntro";
import { featuredProjectsData } from "./data/projects";

export function FeaturedProjects() {
  return (
    <section id="work" className="bg-white py-16 text-[#17191c] sm:py-20">
      <div className="container-custom">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionIntro {...featuredProjectsData} />
          <Link
            href={featuredProjectsData.linkHref}
            className="mb-10 inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold transition-colors hover:border-orange-400 hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            {featuredProjectsData.linkLabel}
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <p className="-mt-7 mb-6 text-xs text-zinc-500">
          {featuredProjectsData.disclaimer}
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjectsData.projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="relative h-52 overflow-hidden bg-zinc-100 sm:h-60">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur">
                  {project.badge}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-lg font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">{project.category}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-zinc-400"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
