import siteContent from "@/data/site-content.json";
import { PageHero } from "@/components/blocks/PageHero";
import { SectionTabs } from "@/components/layout/SectionTabs";
import { ProgramGrid } from "@/components/blocks/ProgramGrid";
import { FaqAccordion } from "@/components/blocks/FaqAccordion";
import { StrongCtaSection } from "@/components/blocks/StrongCtaSection";

const { learning } = siteContent;

const sectionTabs = learning.tabs.map((label) => ({
  id: label === "辩论" ? "debate" : label === "商赛" ? "business" : label === "自习" ? "study" : label.toLowerCase(),
  label,
}));

export default function LearningPage() {
  return (
    <div className="space-y-10">
      <PageHero title={learning.hero.title} subtitle={learning.hero.subtitle} />
      <SectionTabs sections={sectionTabs} />
      <ProgramGrid programs={learning.programs} />
      <FaqAccordion items={learning.faq} />
      <StrongCtaSection
        title={learning.cta.title}
        description={learning.cta.description}
        button={learning.cta.button}
        href="/contact"
      />
    </div>
  );
}
