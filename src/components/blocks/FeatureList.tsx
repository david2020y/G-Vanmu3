export function FeatureList({ items, id }: { items: string[]; id?: string }) {
  if (!items?.length) return null;
  return (
    <section id={id} className="app-container grid gap-4 py-10 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-3xl border border-brand-navy/10 bg-white/95 p-5 shadow-soft"
        >
          <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-brand-navy">
            ✔
          </span>
          <p className="text-sm text-brand-navy/80">{item}</p>
        </div>
      ))}
    </section>
  );
}
