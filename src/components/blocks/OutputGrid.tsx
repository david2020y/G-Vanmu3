export function OutputGrid({ outputs, id }: { outputs: string[]; id?: string }) {
  if (!outputs?.length) return null;
  return (
    <section id={id} className="app-container grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {outputs.map((output) => (
        <div
          key={output}
          className="rounded-3xl border border-brand-gold/40 bg-white/95 p-5 text-sm font-semibold text-brand-navy shadow-soft"
        >
          {output}
        </div>
      ))}
    </section>
  );
}
