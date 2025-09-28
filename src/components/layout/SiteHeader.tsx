"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const NAV_GROUPS = [
  {
    id: "programs",
    title: "Programs",
    items: [
      { label: "AP", href: "/learning#ap" },
      { label: "IB", href: "/learning#ib" },
      { label: "AI", href: "/learning#ai" },
      { label: "Debate", href: "/learning#debate" },
      { label: "Business", href: "/learning#business" },
      { label: "Study Hub", href: "/learning#study" }
    ],
  },
  {
    id: "research",
    title: "Research",
    items: [
      { label: "Ivy Lab", href: "/research" },
      { label: "Labs · Physics", href: "/research#physics" },
      { label: "Labs · Chemistry", href: "/research#chemistry" },
      { label: "Labs · Biology", href: "/research#biology" },
      { label: "Labs · CS", href: "/research#computing" },
      { label: "Labs · Econs", href: "/research#economics" },
      { label: "Outputs", href: "/research#outputs" }
    ],
  },
  {
    id: "admissions",
    title: "Admissions",
    items: [
      { label: "Timeline", href: "/admissions#timeline" },
      { label: "Packages · Ivy 18m", href: "/admissions#ivy" },
      { label: "Packages · Elite 12m", href: "/admissions#elite" },
      { label: "Cases", href: "/admissions#cases" }
    ],
  },
  {
    id: "resources",
    title: "Resources",
    items: [
      { label: "Publications", href: "/resources#publications" },
      { label: "Media", href: "/resources#media" },
      { label: "Parents Club", href: "/resources#parents" },
      { label: "Events", href: "/resources#events" }
    ],
  },
  {
    id: "about",
    title: "About & Contact",
    items: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" }
    ],
  },
] as const;

type SiteHeaderProps = {
  language: "zh" | "en";
  onLanguageToggle: () => void;
  onMenuToggle: (open: boolean) => void;
  isDrawerOpen: boolean;
};

export function SiteHeader({
  language,
  onLanguageToggle,
  onMenuToggle,
  isDrawerOpen,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [hidden, setHidden] = React.useState(false);
  const [elevated, setElevated] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [openGroups, setOpenGroups] = React.useState<string[]>([
    "programs",
    "admissions",
  ]);
  const lastScrollRef = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollRef.current;
      const shouldHide = delta > 8 && current > 72;
      const shouldShow = delta < -8 || current <= 72;
      if (shouldHide) {
        setHidden(true);
      } else if (shouldShow) {
        setHidden(false);
      }
      setElevated(current > 0);
      lastScrollRef.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isDrawerOpen) {
      setHidden(false);
    }
  }, [isDrawerOpen]);

  const filteredGroups = React.useMemo(() => {
    if (!query.trim()) {
      return NAV_GROUPS;
    }
    const keyword = query.trim().toLowerCase();
    return NAV_GROUPS.map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(keyword),
      ),
    })).filter((group) => group.items.length > 0);
  }, [query]);

  const handleTitleClick = React.useCallback(() => {
    const anchor = document.querySelector("#overview");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    console.info("event:nav_overview", { page: pathname });
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-200",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-[var(--app-bar-height)] w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8",
          "backdrop-blur supports-[backdrop-filter]:bg-white/85",
          elevated ? "shadow-lg shadow-brand-navy/10" : "shadow-none",
        )}
        role="banner"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-brand-navy"
          aria-label="U-TRACK 首页"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-navy text-xs font-bold tracking-wider text-white">
            UT
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span>U-TRACK</span>
            <span className="text-[10px] font-normal uppercase tracking-[0.32em] text-brand-navy/70">
              Empower Dreams
            </span>
          </span>
        </Link>
        <button
          onClick={handleTitleClick}
          className="ml-2 flex-1 truncate text-left text-sm font-semibold tracking-wide text-brand-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          全球学术规划概览
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={onLanguageToggle}
            className="hidden items-center gap-1 rounded-full border border-brand-navy/20 px-3 py-1 text-xs font-medium text-brand-navy transition hover:border-brand-navy/60 hover:bg-brand-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 sm:inline-flex"
            aria-label="语言切换"
          >
            <span className="font-semibold text-brand-navy">
              {language === "zh" ? "中文" : "EN"}
            </span>
            <span className="text-brand-navy/40">/</span>
            <span className="text-brand-navy/60">
              {language === "zh" ? "EN" : "中文"}
            </span>
          </button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-brand-navy/15 bg-white text-brand-navy shadow-sm transition hover:border-brand-navy/40 hover:bg-brand-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="打开导航菜单"
            onClick={() => onMenuToggle(!isDrawerOpen)}
          >
            <span className="sr-only">菜单</span>
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <Drawer open={isDrawerOpen} onClose={() => onMenuToggle(false)}>
        <nav aria-label="U-TRACK 全站导航" className="flex h-full flex-col">
          <div className="border-b border-brand-navy/10 bg-brand-light/60 px-5 py-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-brand-navy">导航</div>
                <p className="mt-1 text-xs text-brand-navy/70">
                  通过搜索快速定位课程、科研或服务板块。
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border border-brand-navy/15 p-2 text-brand-navy transition hover:border-brand-navy/40 hover:bg-brand-navy/5"
                aria-label="关闭导航"
                onClick={() => onMenuToggle(false)}
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <Input
                aria-label="搜索站内导航"
                placeholder="搜索关键词..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-2 py-4">
            <div className="space-y-2">
              {filteredGroups.map((group) => {
                const isOpen = openGroups.includes(group.id);
                return (
                  <div key={group.id} className="rounded-2xl border border-brand-navy/10 bg-white">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-brand-navy"
                      aria-expanded={isOpen}
                      onClick={() => {
                        setOpenGroups((prev) => {
                          if (prev.includes(group.id)) {
                            return prev.filter((item) => item !== group.id);
                          }
                          return [...prev, group.id];
                        });
                      }}
                    >
                      {group.title}
                      <svg
                        className={cn(
                          "size-4 transition-transform duration-200",
                          isOpen ? "rotate-180" : "rotate-0",
                        )}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-all",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <ul className="space-y-2 px-4 py-3 text-sm text-brand-navy/80">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-brand-navy/10"
                              onClick={() => {
                                console.info("event:menu_navigate", {
                                  destination: item.href,
                                  from: pathname,
                                });
                                onMenuToggle(false);
                              }}
                            >
                              <span>{item.label}</span>
                              <svg
                                className="size-4 text-brand-navy/50"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-t border-brand-navy/10 px-5 py-4 text-xs text-brand-navy/70">
            <p>键盘操作：Tab 定位，回车打开链接，Esc 关闭。</p>
          </div>
        </nav>
      </Drawer>
    </header>
  );
}

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Drawer({ open, onClose, children }: DrawerProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!open) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open || !mounted || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex">
      <div
        className="absolute inset-0 bg-black/40"
        role="presentation"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        className="ml-auto flex h-full w-full max-w-xs flex-col bg-card shadow-2xl"
      >
        {children}
      </aside>
    </div>,
    document.body,
  );
}
