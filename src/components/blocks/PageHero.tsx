import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export type PageHeroProps = {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  mediaSrc?: string;
  mediaAlt?: string;
};

export function PageHero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  mediaSrc,
  mediaAlt,
}: PageHeroProps) {
  return (
    <section className="app-container flex flex-col gap-8 pb-8 pt-10 sm:pt-12 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-navy">
          Empower Your Dreams
        </div>
        <h1 className="text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-brand-navy/70">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-3">
          {primaryCta && (
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          )}
          {secondaryCta && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-brand-navy/20 text-brand-navy hover:border-brand-navy/50"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
      {mediaSrc && (
        <div className="flex-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-navy/5 shadow-soft">
            <Image
              src={mediaSrc}
              alt={mediaAlt ?? "U-TRACK"}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
