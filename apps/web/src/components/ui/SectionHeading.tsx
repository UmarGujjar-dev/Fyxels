export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
}: {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {label && (
        <span className="badge-pill mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
