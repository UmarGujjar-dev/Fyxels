export function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  return (
    <span className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
      {target}{suffix}
    </span>
  );
}
