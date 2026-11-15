interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
}: SectionIntroProps) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} mb-10 max-w-2xl`}>
      <span
        className="mb-3 inline-flex rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
        style={{
          color: "var(--accent-orange)",
          backgroundColor: dark ? "rgba(249,124,0,0.12)" : "#fff3e8",
        }}
      >
        {eyebrow}
      </span>
      <h2
        className="font-display text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.08] tracking-[-0.035em]"
        style={{ color: dark ? "#ffffff" : "#17191c" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-3 text-sm leading-relaxed sm:text-base"
          style={{ color: dark ? "#a1a1aa" : "#4b5563" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
