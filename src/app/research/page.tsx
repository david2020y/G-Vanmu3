import siteContent from "@/data/site-content.json";
import { PageHero } from "@/components/blocks/PageHero";
import { SectionTabs } from "@/components/layout/SectionTabs";
import { FeatureList } from "@/components/blocks/FeatureList";
import { ProgramStructure } from "@/components/blocks/ProgramStructure";
import { OutputGrid } from "@/components/blocks/OutputGrid";
import { MentorRoster } from "@/components/blocks/MentorRoster";
import { StrongCtaSection } from "@/components/blocks/StrongCtaSection";

const { research } = siteContent;

const tabs = research.tabs.map((label) => {
  const map: Record<string, string> = {
    物理: "physics",
    化学: "chemistry",
    生物: "biology",
    计算机: "computing",
    经济: "economics",
    跨学科: "interdisciplinary",
  };
  return { id: map[label] ?? label, label };
});

const LAB_SUMMARIES: Record<string, string> = {
  physics: "机器人、光电与材料方向，支持远程仿真与线下实验室联合。",
  chemistry: "合成化学、环境化学项目，由牛津与 ETH 联合导师指导。",
  biology: "分子、生物信息、神经科学专题，提供湿实验 + 计算融合。",
  computing: "算法、AI、FinTech 与人机交互，产出顶会投稿级成果。",
  economics: "计量经济、行为经济与金融科技，覆盖实证与理论模型。",
  interdisciplinary: "跨学科设计思维，支持社会创新、艺术科技等主题。",
};

export default function ResearchPage() {
  return (
    <div className="space-y-10">
      <PageHero title={research.hero.title} subtitle={research.hero.subtitle} />
      <SectionTabs sections={tabs} />
      <section className="app-container grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
        {tabs.map((tab) => (
          <article
            key={tab.id}
            id={tab.id}
            className="rounded-3xl border border-brand-navy/10 bg-white/95 p-6 shadow-soft"
          >
            <h3 className="text-lg font-semibold text-brand-navy">{tab.label} Lab</h3>
            <p className="mt-3 text-sm text-brand-navy/70">{LAB_SUMMARIES[tab.id] ?? "沉浸式实验体验，结合国际导师指导。"}</p>
          </article>
        ))}
      </section>
      <FeatureList items={research.highlights} id="research" />
      <ProgramStructure structures={research.structures} />
      <OutputGrid outputs={research.outputs} id="outputs" />
      <MentorRoster mentors={research.mentors} />
      <StrongCtaSection
        title={research.cta.title}
        description={research.cta.description}
        button={research.cta.button}
        href="/contact"
      />
    </div>
  );
}
