"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

type StrongCtaSectionProps = {
  title: string;
  description: string;
  button: string;
  href?: string;
  id?: string;
};

export function StrongCtaSection({
  title,
  description,
  button,
  href = "/contact",
  id = "strong-cta",
}: StrongCtaSectionProps) {
  return (
    <section
      id={id}
      data-cta-anchor="strong"
      className="app-container mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-gold via-brand-sky to-brand-navy text-brand-navy shadow-soft"
    >
      <div className="grid gap-6 px-8 py-10 text-white lg:grid-cols-[1.4fr,1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Ready to Start
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight">{title}</h2>
          <p className="mt-4 max-w-xl text-sm text-white/85">{description}</p>
        </div>
        <div className="flex items-end justify-start lg:justify-end">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-brand-navy hover:bg-white/90"
            onClick={() => console.info("event:strong_cta", { destination: href })}
          >
            <Link href={href}>{button}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
