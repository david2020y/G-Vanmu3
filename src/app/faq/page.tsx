import siteContent from "@/data/site-content.json";
import { PageHero } from "@/components/blocks/PageHero";
import { FaqAccordion } from "@/components/blocks/FaqAccordion";
import { StrongCtaSection } from "@/components/blocks/StrongCtaSection";

const { faq } = siteContent;

export default function FaqPage() {
  return (
    <div className="space-y-10">
      <PageHero title={faq.hero.title} subtitle={faq.hero.subtitle} />
      <FaqAccordion items={faq.items} />
      <StrongCtaSection
        title="还有其他问题？"
        description="预约 15 分钟顾问答疑时间，快速获取专属建议。"
        button="预约顾问"
        href="/contact"
      />
    </div>
  );
}
