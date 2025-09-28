import { Card, CardContent } from "@/components/ui/card";

export type Program = {
  id: string;
  title: string;
  summary: string;
  outcomes: string[];
  price: string;
  duration: string;
  tags: string[];
};

type ProgramGridProps = {
  programs: Program[];
};

export function ProgramGrid({ programs }: ProgramGridProps) {
  if (!programs?.length) return null;
  return (
    <section className="app-container grid gap-6 py-10 md:grid-cols-2">
      {programs.map((program) => (
        <Card
          key={program.id}
          id={program.id}
          className="rounded-3xl border border-brand-navy/10 bg-white/95 shadow-soft transition hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl"
        >
          <CardContent className="flex h-full flex-col gap-4 p-6">
            <div>
              <h3 className="text-xl font-semibold text-brand-navy">{program.title}</h3>
              <p className="mt-2 text-sm text-brand-navy/70">{program.summary}</p>
            </div>
            <ul className="space-y-2 text-sm text-brand-navy/80">
              {program.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2">
                  <span className="mt-1 size-2 rounded-full bg-brand-gold" aria-hidden />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-navy">
              <span>{program.price}</span>
              <span className="rounded-full bg-brand-navy/10 px-3 py-1 text-xs uppercase tracking-wide">
                {program.duration}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-brand-navy/70">
              {program.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-brand-navy/20 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
