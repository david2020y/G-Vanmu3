"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type SectionItem = {
  id: string;
  label: string;
};

type SectionTabsProps = {
  sections: SectionItem[];
};

export function SectionTabs({ sections }: SectionTabsProps) {
  const [active, setActive] = React.useState<string | null>(
    sections[0]?.id ?? null,
  );

  React.useEffect(() => {
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -65% 0px",
        threshold: [0.25, 0.6],
      },
    );

    sections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScroll = React.useCallback((id: string) => {
    const node = document.getElementById(id);
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "start" });
    console.info("event:section_tab", { id });
  }, []);

  if (sections.length === 0) return null;

  return (
    <div className="sticky top-[var(--app-bar-height)] z-40 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="app-container">
        <nav
          className="flex gap-2 overflow-x-auto pb-3 pt-3"
          aria-label="页面分节导航"
        >
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleScroll(section.id)}
                className={cn(
                  "flex-shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition",
                  isActive
                    ? "border-brand-gold bg-brand-gold/20 text-brand-navy"
                    : "border-brand-navy/15 bg-white text-brand-navy/70 hover:border-brand-gold/50 hover:text-brand-navy",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {section.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
