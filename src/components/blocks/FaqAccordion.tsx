type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  id?: string;
};

export function FaqAccordion({ items, id = "faq" }: FaqAccordionProps) {
  if (!items?.length) return null;
  return (
    <section id={id} className="app-container py-12">
      <div className="rounded-3xl border border-brand-navy/10 bg-white/95 p-6 shadow-soft">
        <h2 className="text-2xl font-semibold text-brand-navy">常见问题</h2>
        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-brand-navy/80 transition hover:border-brand-gold/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-brand-navy">
                {item.question}
                <svg
                  className="size-4 transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
