"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { FloatingCta } from "@/components/layout/FloatingCta";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<"zh" | "en">("zh");

  const handleLanguageToggle = React.useCallback(() => {
    setLanguage((prev) => (prev === "zh" ? "en" : "zh"));
    console.info("event:language_toggle", { page: pathname });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader
        language={language}
        onLanguageToggle={handleLanguageToggle}
        onMenuToggle={(open) => {
          setIsDrawerOpen(open);
          if (open) {
            console.info("event:menu_open", { page: pathname });
          }
        }}
        isDrawerOpen={isDrawerOpen}
      />
      <main className="flex-1 pt-[var(--app-bar-height)]">{children}</main>
      <SiteFooter />
      <FloatingCta watchSelector="[data-cta-anchor='strong']" />
    </div>
  );
}
