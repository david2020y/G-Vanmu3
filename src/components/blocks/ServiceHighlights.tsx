"use client";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

export type ServiceHighlight = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
};

type ServiceHighlightsProps = {
  services: ServiceHighlight[];
};

const ICONS: Record<string, JSX.Element> = {
  AcademicCapIcon: (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 7l10-4 10 4-10 4-10-4z" />
      <path d="M6 10v4c0 2 4 3 6 3s6-1 6-3v-4" />
    </svg>
  ),
  BeakerIcon: (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 3h12" />
      <path d="M6 3v5a6 6 0 001 3.3L9.7 18a3 3 0 002.6 1.5 3 3 0 002.6-1.5L17 11.3A6 6 0 0018 8V3" />
    </svg>
  ),
  MapIcon: (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 3l-6 2v16l6-2 6 2 6-2V3l-6 2-6-2z" />
      <path d="M9 3v16" />
      <path d="M15 5v16" />
    </svg>
  ),
};

export function ServiceHighlights({ services }: ServiceHighlightsProps) {
  if (!services?.length) return null;
  return (
    <section id="programs" className="app-container grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Card
          key={service.id}
          className="group flex flex-col justify-between rounded-3xl border border-brand-navy/10 bg-white/90 shadow-soft transition hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl"
        >
          <CardContent className="flex h-full flex-col gap-4 p-6">
            <div className="flex items-center gap-3 text-brand-navy">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-navy/10 text-brand-navy">
                {service.icon && ICONS[service.icon]}
              </span>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
            <p className="flex-1 text-sm text-brand-navy/70">{service.description}</p>
            <Link
              href={service.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold"
              onClick={() => console.info("event:service_click", { id: service.id })}
            >
              了解更多
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="M13 18l6-6-6-6" />
              </svg>
            </Link>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
