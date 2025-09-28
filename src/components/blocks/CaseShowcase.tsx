import { Card, CardContent } from "@/components/ui/card";

type CaseItem = {
  title: string;
  detail: string;
};

type CaseShowcaseProps = {
  cases: CaseItem[];
  id?: string;
};

export function CaseShowcase({ cases, id = "cases" }: CaseShowcaseProps) {
  if (!cases?.length) return null;
  return (
    <section id={id} className="app-container grid gap-6 py-10 lg:grid-cols-2">
      {cases.map((item) => (
        <Card
          key={item.title}
          className="rounded-3xl border border-brand-navy/10 bg-white/95 shadow-soft"
        >
          <CardContent className="space-y-3 p-6">
            <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
            <p className="text-sm text-brand-navy/70">{item.detail}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
