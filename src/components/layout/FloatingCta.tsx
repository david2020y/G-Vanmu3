"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FloatingCtaProps = {
  watchSelector?: string;
};

const ACTIONS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/8613800000000",
    description: "与升学顾问即时沟通",
  },
  {
    label: "微信",
    href: "#wechat",
    description: "扫码添加企业微信",
  },
  {
    label: "预约表单",
    href: "/contact#form",
    description: "填写升学评估信息",
  },
];

export function FloatingCta({ watchSelector }: FloatingCtaProps) {
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    if (!watchSelector) return;
    const target = document.querySelector(watchSelector);
    if (!target) return;
    const observer = new IntersectionObserver((entries) => {
      const isVisible = entries.some((entry) => entry.isIntersecting);
      setHidden(isVisible);
      if (isVisible) {
        setOpen(false);
      }
    }, { threshold: 0.2 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [watchSelector]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-6 right-4 z-40 transition-all duration-300 sm:right-6",
        hidden ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <div className="flex flex-col items-end gap-3">
        <div
          className={cn(
            "flex w-64 flex-col gap-2 rounded-2xl bg-white p-4 shadow-soft transition-all",
            open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
          )}
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy/60">
            快速连接顾问
          </span>
          <ul className="space-y-2">
            {ACTIONS.map((action) => (
              <li key={action.label}>
                <Link
                  href={action.href}
                  className="flex items-start gap-3 rounded-xl border border-brand-navy/10 bg-brand-light/60 px-3 py-2 text-sm text-brand-navy transition hover:border-brand-navy/30 hover:bg-white"
                  onClick={() => {
                    console.info("event:floating_cta", { channel: action.label });
                    setOpen(false);
                  }}
                >
                  <div className="mt-0.5 size-2.5 rounded-full bg-brand-gold" aria-hidden />
                  <div>
                    <div className="font-semibold">{action.label}</div>
                    <p className="text-xs text-brand-navy/70">{action.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button
          size="lg"
          variant="default"
          className="pointer-events-auto rounded-full bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/30 hover:bg-brand-gold/90"
          aria-expanded={open}
          aria-controls="floating-cta-actions"
          onClick={() => {
            setOpen((prev) => !prev);
            console.info("event:cta_primary", { open: !open });
          }}
        >
          获取升学评估
        </Button>
      </div>
    </div>
  );
}
