import { cn } from "@/lib/utils";

type Stat = {
  value: string;
  label: string;
  caption?: string;
};

type StatBarProps = {
  stats: Stat[];
  className?: string;
  id?: string;
};

export function StatBar({ stats, className, id }: StatBarProps) {
  if (!stats?.length) return null;
  return (
    <section
      id={id}
      className={cn(
        "app-container grid gap-4 rounded-3xl bg-white/80 p-6 shadow-soft backdrop-blur sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-1">
          <div className="text-2xl font-bold text-brand-navy">{stat.value}</div>
          <div className="text-sm font-semibold uppercase tracking-wide text-brand-navy/70">
            {stat.label}
          </div>
          {stat.caption && (
            <p className="text-xs text-brand-navy/60">{stat.caption}</p>
          )}
        </div>
      ))}
    </section>
  );
}
