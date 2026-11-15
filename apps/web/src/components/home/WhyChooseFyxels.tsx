import { SectionIntro } from "./SectionIntro";
import { whyChooseFyxelsData } from "./data/statistics";

export function WhyChooseFyxels() {
  return (
    <section className="bg-[#0a0a0a] py-16 text-white sm:py-20">
      <div className="container-custom">
        <SectionIntro {...whyChooseFyxelsData} centered dark />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseFyxelsData.strengths.map(
            ({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <Icon
                  size={22}
                  className="mb-5"
                  style={{ color: "var(--accent-orange)" }}
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
