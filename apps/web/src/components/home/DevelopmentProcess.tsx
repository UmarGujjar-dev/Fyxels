import { SectionIntro } from "./SectionIntro";
import { developmentProcessData } from "./data/developmentProcess";

export function DevelopmentProcess() {
  return (
    <section className="bg-white py-16 text-[#17191c] sm:py-20">
      <div className="container-custom">
        <SectionIntro {...developmentProcessData} centered />
        <ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {developmentProcessData.steps.map(
            ({ title, description, icon: Icon }, index) => (
              <li key={title} className="relative text-center">
                {index < developmentProcessData.steps.length - 1 && (
                  <span
                    className="absolute left-[62%] top-6 hidden h-px w-[76%] lg:block"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--accent-orange), var(--accent-teal))",
                    }}
                    aria-hidden="true"
                  />
                )}
                <span
                  className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-orange-50"
                  style={{ color: "var(--accent-orange)" }}
                >
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-base font-bold">{title}</h3>
                <p className="mx-auto mt-2 max-w-[190px] text-xs leading-relaxed text-zinc-500">
                  {description}
                </p>
              </li>
            ),
          )}
        </ol>
      </div>
    </section>
  );
}
