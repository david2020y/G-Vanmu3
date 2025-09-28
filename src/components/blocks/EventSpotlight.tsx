export type EventItem = {
  title: string;
  date: string;
  location: string;
  excerpt: string;
};

type EventSpotlightProps = {
  events: EventItem[];
  id?: string;
};

export function EventSpotlight({ events, id }: EventSpotlightProps) {
  if (!events?.length) return null;
  return (
    <section id={id} className="app-container grid gap-4 py-10 lg:grid-cols-[1.4fr,1fr]">
      <div className="rounded-3xl bg-gradient-to-br from-brand-navy to-brand-blue p-8 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.35em] text-white/70">U-TRACK Events</p>
        <h2 className="mt-3 text-2xl font-semibold">最新活动</h2>
        <p className="mt-3 max-w-xl text-sm text-white/80">
          精选讲座与说明会，覆盖科研、课程与升学规划，支持线上线下参与。
        </p>
      </div>
      <div className="grid gap-4">
        {events.map((event) => (
          <article
            key={`${event.title}-${event.date}`}
            className="rounded-3xl border border-brand-navy/10 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-gold/40"
          >
            <header className="flex items-center justify-between text-brand-navy">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy/60">
                  {event.date} · {event.location}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{event.title}</h3>
              </div>
              <svg
                className="size-6 text-brand-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="M13 18l6-6-6-6" />
              </svg>
            </header>
            <p className="mt-3 text-sm text-brand-navy/70">{event.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
