import siteContent from "@/data/site-content.json";
import { PageHero } from "@/components/blocks/PageHero";
import { SectionTabs } from "@/components/layout/SectionTabs";
import { StatBar } from "@/components/blocks/StatBar";
import { ServiceHighlights } from "@/components/blocks/ServiceHighlights";
import { EventSpotlight } from "@/components/blocks/EventSpotlight";
import { SuccessCarousel } from "@/components/blocks/SuccessCarousel";
import { StrongCtaSection } from "@/components/blocks/StrongCtaSection";

const { home, global } = siteContent;

export default function HomePage() {
  return (
    <div className="space-y-10">
      <PageHero
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        primaryCta={home.hero.ctaPrimary}
        secondaryCta={home.hero.ctaSecondary}
        mediaSrc={home.hero.media}
        mediaAlt={home.hero.mediaAlt}
      />
      <SectionTabs sections={home.sections} />
      <StatBar stats={global.stats} id="overview" />
      <section className="app-container" aria-labelledby="core-services-heading">
        <header className="mb-4 flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-navy/60">
            Core Services
          </p>
          <h2 id="core-services-heading" className="text-2xl font-semibold text-brand-navy">
            学术·科研·规划全链路服务
          </h2>
        </header>
      </section>
      <ServiceHighlights services={global.services} />
      <EventSpotlight events={global.events} id="services" />
      <SuccessCarousel stories={global.success} />
      <StrongCtaSection
        title={global.cta.title}
        description={global.cta.description}
        button={global.cta.button}
        href={global.cta.href}
      />
    </div>
  );
}
