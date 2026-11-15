import { trustedCompaniesData } from "./data/trustedCompanies";

export function TrustedCompanies() {
  return (
    <section
      aria-label="Platforms and services"
      className="border-y border-zinc-200 bg-white py-8 text-[#17191c] sm:py-10"
    >
      <div className="container-custom">
        <p className="mb-6 text-center text-sm font-semibold text-zinc-700">
          {trustedCompaniesData.introduction}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {trustedCompaniesData.platforms.map((platform) => (
            <li
              key={platform.name}
              className="font-display text-base font-bold tracking-tight text-zinc-500 sm:text-lg"
            >
              {platform.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
