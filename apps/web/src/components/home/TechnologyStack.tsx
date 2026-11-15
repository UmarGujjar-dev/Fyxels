import { SectionIntro } from "./SectionIntro";
import { technologyStackData } from "./data/technologyStack";

export function TechnologyStack() {
  return (
    <section className="bg-zinc-50 py-16 text-[#17191c] sm:py-20">
      <div className="container-custom">
        <SectionIntro {...technologyStackData} centered />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologyStackData.groups.map(({ category, items, icon: Icon }) => (
            <div
              key={category}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <div className="mb-4 flex items-center gap-2 text-sm font-bold">
                <Icon
                  size={17}
                  style={{ color: "var(--accent-orange)" }}
                  aria-hidden="true"
                />
                {category}
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
