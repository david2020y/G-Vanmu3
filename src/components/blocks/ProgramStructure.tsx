import { Card, CardContent } from "@/components/ui/card";

type Structure = {
  title: string;
  duration: string;
  modules: string[];
};

type ProgramStructureProps = {
  structures: Structure[];
};

export function ProgramStructure({ structures }: ProgramStructureProps) {
  if (!structures?.length) return null;
  return (
    <section className="app-container grid gap-6 py-10 md:grid-cols-2">
      {structures.map((structure) => (
        <Card
          key={structure.title}
          className="rounded-3xl border border-brand-navy/10 bg-white/95 shadow-soft"
        >
          <CardContent className="space-y-4 p-6">
            <div>
              <h3 className="text-xl font-semibold text-brand-navy">{structure.title}</h3>
              <p className="text-sm text-brand-navy/60">时长：{structure.duration}</p>
            </div>
            <ul className="space-y-2 text-sm text-brand-navy/80">
              {structure.modules.map((module) => (
                <li key={module} className="flex items-start gap-2">
                  <span className="mt-1 size-2 rounded-full bg-brand-gold" aria-hidden />
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
