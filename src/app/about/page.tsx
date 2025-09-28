import siteContent from "@/data/site-content.json";
import { PageHero } from "@/components/blocks/PageHero";
import { StrongCtaSection } from "@/components/blocks/StrongCtaSection";

const { about } = siteContent;

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <PageHero title={about.hero.title} subtitle={about.hero.subtitle} />
      <section className="app-container grid gap-6 py-10 sm:grid-cols-2">
        {about.values.map((value) => (
          <article
            key={value.title}
            className="rounded-3xl border border-brand-navy/10 bg-white/95 p-6 shadow-soft"
          >
            <h3 className="text-lg font-semibold text-brand-navy">{value.title}</h3>
            <p className="mt-3 text-sm text-brand-navy/70">{value.description}</p>
          </article>
        ))}
      </section>
      <StrongCtaSection
        title={about.cta.title}
        description={about.cta.description}
        button={about.cta.button}
        href="/contact"
      />
    </div>
  );
}
