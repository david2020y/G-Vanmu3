import { Card, CardContent } from "@/components/ui/card";

export type PackagePlan = {
  name: string;
  price: string;
  features: string[];
};

type PackageComparisonProps = {
  plans: PackagePlan[];
};

export function PackageComparison({ plans }: PackageComparisonProps) {
  if (!plans?.length) return null;
  return (
    <section id="packages" className="app-container grid gap-6 py-10 lg:grid-cols-2">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          id={plan.name.includes("Ivy") ? "ivy" : plan.name.includes("Elite") ? "elite" : undefined}
          className="rounded-3xl border border-brand-navy/15 bg-white/95 shadow-soft"
        >
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-brand-navy">{plan.name}</h3>
              <span className="rounded-full bg-brand-gold/20 px-4 py-1 text-sm font-semibold text-brand-navy">
                {plan.price}
              </span>
            </div>
            <ul className="space-y-2 text-sm text-brand-navy/80">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 size-2 rounded-full bg-brand-gold" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
