import siteContent from "@/data/site-content.json";
import { PageHero } from "@/components/blocks/PageHero";
import { SectionTabs } from "@/components/layout/SectionTabs";
import { StrongCtaSection } from "@/components/blocks/StrongCtaSection";

const { resources } = siteContent;

const tabs = [
  { id: "publications", label: "出版物" },
  { id: "media", label: "媒体" },
  { id: "parents", label: "家长俱乐部" },
  { id: "events", label: "活动" },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <PageHero title={resources.hero.title} subtitle={resources.hero.subtitle} />
      <SectionTabs sections={tabs} />
      <section className="app-container grid gap-6 py-10 sm:grid-cols-2">
        {resources.items.map((item) => {
          const id =
            item.title.includes("白皮书")
              ? "publications"
              : item.title.includes("媒体")
              ? "media"
              : item.title.includes("家长")
              ? "parents"
              : "events";
          return (
            <article
              key={item.title}
              id={id}
              className="rounded-3xl border border-brand-navy/10 bg-white/95 p-6 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm text-brand-navy/70">{item.description}</p>
            </article>
          );
        })}
      </section>
      <StrongCtaSection
        title={resources.cta.title}
        description={resources.cta.description}
        button={resources.cta.button}
        href="/contact"
      />
    </div>
  );
}
