import siteContent from "@/data/site-content.json";
import { PageHero } from "@/components/blocks/PageHero";
import { Timeline } from "@/components/blocks/Timeline";
import { SectionTabs } from "@/components/layout/SectionTabs";
import { PackageComparison } from "@/components/blocks/PackageComparison";
import { CaseShowcase } from "@/components/blocks/CaseShowcase";
import { StrongCtaSection } from "@/components/blocks/StrongCtaSection";

const { admissions } = siteContent;

const tabs = [
  { id: "timeline", label: "路线" },
  { id: "ivy", label: "Ivy 18m" },
  { id: "elite", label: "Elite 12m" },
  { id: "cases", label: "案例" },
];

export default function AdmissionsPage() {
  return (
    <div className="space-y-10">
      <PageHero title={admissions.hero.title} subtitle={admissions.hero.subtitle} />
      <SectionTabs sections={tabs} />
      <Timeline steps={admissions.timeline} />
      <PackageComparison plans={admissions.packages} />
      <CaseShowcase cases={admissions.cases} />
      <StrongCtaSection
        title={admissions.cta.title}
        description={admissions.cta.description}
        button={admissions.cta.button}
        href="/contact"
      />
    </div>
  );
}
