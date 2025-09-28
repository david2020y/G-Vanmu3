"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "Programs",
    items: [
      { label: "AP", href: "/learning#ap" },
      { label: "IB", href: "/learning#ib" },
      { label: "AI", href: "/learning#ai" }
    ],
  },
  {
    title: "Research",
    items: [
      { label: "Ivy Lab", href: "/research" },
      { label: "Outputs", href: "/research#outputs" }
    ],
  },
  {
    title: "Admissions",
    items: [
      { label: "Timeline", href: "/admissions#timeline" },
      { label: "Packages", href: "/admissions#packages" }
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" }
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-brand-navy text-white" data-cta-anchor="strong">
      <div className="app-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="text-xl font-semibold">U-TRACK</div>
          <p className="mt-3 max-w-md text-sm text-white/75">
            Empower Your Dreams · 以科研力、学术力与规划力驱动学生成长。
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
            <span>© {new Date().getFullYear()} U-TRACK</span>
            <span>隐私政策</span>
            <span>使用条款</span>
          </div>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {group.title}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                    onClick={() => console.info("event:footer_link", { href: item.href })}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
