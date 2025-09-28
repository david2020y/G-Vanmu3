import { cn } from "@/lib/utils";

type TimelineStep = {
  phase: string;
  detail: string;
};

type TimelineProps = {
  steps: TimelineStep[];
  id?: string;
};

export function Timeline({ steps, id = "timeline" }: TimelineProps) {
  if (!steps?.length) return null;
  return (
    <section id={id} className="app-container py-10">
      <ol className="relative border-l border-brand-navy/20 pl-6">
        {steps.map((step, index) => (
          <li key={step.phase} className="mb-8 ml-4">
            <span
              className={cn(
                "absolute -left-3 flex size-6 items-center justify-center rounded-full border-2 border-white bg-brand-gold text-xs font-bold text-brand-navy",
                index === 0 ? "shadow-soft" : "shadow",
              )}
            >
              {index + 1}
            </span>
            <h3 className="text-lg font-semibold text-brand-navy">{step.phase}</h3>
            <p className="mt-2 text-sm text-brand-navy/70">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
