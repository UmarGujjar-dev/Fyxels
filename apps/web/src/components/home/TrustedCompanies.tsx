import { trustedCompaniesData } from "./data/trustedCompanies";
import type { TrustedPlatform } from "./data/types";

function ClientLogo({ platform }: { platform: TrustedPlatform }) {
  switch (platform.logoType) {
    case "al-ghurair":
      return (
        <div className="flex items-center gap-1.5 font-sans">
          <span className="text-[14px] font-semibold tracking-tight text-neutral-800 transition-colors duration-200 group-hover:text-black sm:text-[15px]">
            Al Ghurair
          </span>
          <svg
            className="h-5 w-5 text-neutral-700 transition-colors duration-200 group-hover:text-emerald-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" transform="rotate(45 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
      );

    case "al-jouf":
      return (
        <div className="flex items-center justify-center">
          <div className="relative flex h-8 w-16 items-center justify-center rounded-[50%] border-2 border-neutral-700 px-1.5 transition-colors duration-200 group-hover:border-emerald-800 group-hover:bg-emerald-900/10">
            <span className="font-serif text-xs font-bold tracking-tight text-neutral-800 transition-colors duration-200 group-hover:text-emerald-950">
              الجوف
            </span>
            <span className="absolute -bottom-1 text-[7.5px] font-bold uppercase tracking-wider text-neutral-700 transition-colors duration-200 group-hover:text-emerald-900">
              AL Jouf
            </span>
          </div>
        </div>
      );

    case "weatherbys":
      return (
        <div className="flex flex-col items-center justify-center text-center">
          <svg
            className="mb-0.5 h-4 w-4 text-neutral-700 transition-colors duration-200 group-hover:text-amber-800"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93A6 6 0 0 0 6 15.5V17h12v-1.5a6 6 0 0 0-5.25-5.57A4.002 4.002 0 0 0 16 6a4 4 0 0 0-4-4zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-2 16h8v-2H8v2z" />
          </svg>
          <span className="font-serif text-[11px] font-semibold tracking-[0.2em] text-neutral-800 transition-colors duration-200 group-hover:text-black">
            WEATHERBYS
          </span>
        </div>
      );

    case "bestseller":
      return (
        <span className="font-sans text-[13px] font-extrabold tracking-[0.26em] text-neutral-800 transition-colors duration-200 group-hover:text-black sm:text-[14px]">
          BESTSELLER
        </span>
      );

    case "fam":
      return (
        <div className="flex items-center gap-1.5">
          <span className="font-sans text-xl font-black tracking-tight text-neutral-800 transition-colors duration-200 group-hover:text-sky-700 sm:text-[22px]">
            fäm
          </span>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[8.5px] font-bold uppercase tracking-wider text-neutral-700 transition-colors duration-200 group-hover:text-neutral-900">
              Master
            </span>
            <span className="text-[8.5px] font-bold uppercase tracking-wider text-neutral-700 transition-colors duration-200 group-hover:text-neutral-900">
              Agency
            </span>
          </div>
        </div>
      );

    case "interwood":
      return (
        <div className="flex items-center gap-1.5">
          <svg
            className="h-5 w-5 text-neutral-700 transition-colors duration-200 group-hover:text-emerald-700"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71zM10.5 13.5l1.5-4 1.5 4h-3z" />
          </svg>
          <span className="font-sans text-[13.5px] font-light tracking-[0.14em] text-neutral-800 transition-colors duration-200 group-hover:text-black sm:text-[14px]">
            INTERWOOD
          </span>
        </div>
      );

    case "nestle":
      return (
        <span className="font-serif text-[17px] font-black tracking-tight text-neutral-800 transition-colors duration-200 group-hover:text-sky-800 sm:text-[19px]">
          Nestlé
        </span>
      );

    case "under-armour":
      return (
        <svg
          className="h-7 w-7 text-neutral-800 transition-colors duration-200 group-hover:text-neutral-950"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 2.5c-4.4 0-8 3.6-8 8 0 2.2.9 4.2 2.3 5.7C8.9 17.6 8 19.7 8 22c0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.3-.9-4.4-2.3-5.8 1.4-1.5 2.3-3.5 2.3-5.7 0-4.4-3.6-8-8-8zm-4.5 8c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.6-.8 3-2.1 3.8-.7-.5-1.5-.8-2.4-.8s-1.7.3-2.4.8c-1.3-.8-2.1-2.2-2.1-3.8zm9 11.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5c0-1.6.8-3 2.1-3.8.7.5 1.5.8 2.4.8s1.7-.3 2.4-.8c1.3.8 2.1 2.2 2.1 3.8z" />
        </svg>
      );

    default:
      return (
        <span className="font-display text-sm font-bold text-neutral-800">
          {platform.name}
        </span>
      );
  }
}

export function TrustedCompanies() {
  const { eyebrow, title, platforms } = trustedCompaniesData;

  // Duplicate platforms 3 times to ensure uninterrupted infinite scroll
  const marqueeList = [...platforms, ...platforms, ...platforms];

  return (
    <section
      aria-label="Trusted Companies and Selected Clients"
      className="trusted-companies-section border-y border-zinc-200/80 bg-white py-10 text-[#17191c] sm:py-12"
    >
      <div className="container-custom mb-8 text-left">
        <span className="mb-1.5 block font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-zinc-500">
          {eyebrow}
        </span>
        <h2 className="font-display text-[clamp(24px,3vw,36px)] font-extrabold leading-[1.14] tracking-[-0.03em] text-[#17191c]">
          {title}
        </h2>
      </div>

      <div className="trusted-marquee-container relative w-full overflow-hidden">
        {/* Left & Right gradient fade masks for clean visual integration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24"
        />

        <div className="trusted-marquee-track flex w-max items-center py-1">
          {marqueeList.map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="trusted-marquee-item px-1.5 sm:px-2"
            >
              <div
                tabIndex={0}
                role="img"
                aria-label={platform.name}
                className="group relative flex h-16 w-38 sm:h-[4.5rem] sm:w-48 items-center justify-center rounded-xl bg-[#f4f5f6] px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-white hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.02)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 grayscale contrast-125 opacity-75 hover:grayscale-0 hover:contrast-100 hover:opacity-100 cursor-pointer"
              >
                <ClientLogo platform={platform} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trusted-marquee-container {
          mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
        }

        .trusted-marquee-track {
          animation: trusted-scroll 36s linear infinite;
          will-change: transform;
        }

        /* Hover pauses the continuous marquee animation smoothly */
        .trusted-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes trusted-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        /* Respect user preference for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .trusted-marquee-container {
            overflow-x: auto;
            mask-image: none;
            -webkit-mask-image: none;
          }
          .trusted-marquee-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}