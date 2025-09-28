"use client";

import * as React from "react";

export type SuccessStory = {
  name: string;
  result: string;
  story: string;
  avatarColor: string;
};

type SuccessCarouselProps = {
  stories: SuccessStory[];
};

export function SuccessCarousel({ stories }: SuccessCarouselProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!stories?.length) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [stories]);

  if (!stories?.length) return null;

  const activeStory = stories[index];

  return (
    <section id="success" className="app-container py-12">
      <div className="rounded-3xl bg-gradient-to-br from-brand-navy via-brand-blue to-brand-sky p-8 text-white shadow-soft">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Success Stories</p>
            <h2 className="text-3xl font-semibold">成功案例</h2>
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider">
            {stories.map((story, storyIndex) => (
              <button
                key={story.name}
                type="button"
                aria-label={`切换到 ${story.name} 案例`}
                className="size-3 rounded-full border border-white/60"
                style={{
                  backgroundColor:
                    storyIndex === index ? "rgba(255,255,255,0.9)" : "transparent",
                }}
                onClick={() => {
                  setIndex(storyIndex);
                  console.info("event:success_carousel", { index: storyIndex });
                }}
              />
            ))}
          </div>
        </header>
        <article className="mt-8 grid gap-6 lg:grid-cols-[1fr,1.2fr]">
          <div className="flex items-center gap-4">
            <span
              className="flex size-16 items-center justify-center rounded-full text-lg font-bold text-brand-navy"
              style={{ backgroundColor: activeStory.avatarColor }}
            >
              {activeStory.name.slice(0, 1)}
            </span>
            <div>
              <h3 className="text-lg font-semibold">{activeStory.name}</h3>
              <p className="text-sm text-white/80">{activeStory.result}</p>
            </div>
          </div>
          <p className="text-base leading-relaxed text-white/90">{activeStory.story}</p>
        </article>
      </div>
    </section>
  );
}
