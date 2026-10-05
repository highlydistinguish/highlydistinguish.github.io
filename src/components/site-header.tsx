"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import type { Dictionary } from "@/content/types";
import { basePath, localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./button";

export function SiteHeader({ locale, nav }: { locale: Locale; nav: Dictionary["nav"] }) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const other: Locale = locale === "en" ? "zh" : "en";
  const p = (path: string) => localePath(locale, path);

  const links = [
    { href: p("/#industries"), label: nav.industries },
    { href: p("/services/"), label: nav.services },
    { href: p("/case-studies/"), label: nav.caseStudies },
    { href: p("/insights/"), label: nav.insights },
    { href: p("/about/"), label: nav.about },
    { href: p("/contact/"), label: nav.contact },
  ];

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={p("/")} className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/img/HighlyDistinguishLogo-logo-nav.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full"
            priority
          />
          <span className="text-base font-bold tracking-tight">Highly Distinguish</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium text-muted-strong transition-colors hover:bg-surface-sunken hover:text-foreground",
                isActive(l.href) && "text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={localePath(other, basePath(pathname))}
            hrefLang={other === "zh" ? "zh-Hans" : "en-AU"}
            aria-label={nav.switchLanguageLabel}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-muted-strong hover:bg-surface-sunken hover:text-foreground"
          >
            <Globe aria-hidden className="h-4 w-4" />
            {nav.switchLanguage}
          </Link>
          <ButtonLink href={p("/contact/")} size="sm" className="hidden sm:inline-flex">
            {nav.cta}
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-strong hover:bg-surface-sunken lg:hidden"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted-strong hover:bg-surface-sunken hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <ButtonLink href={p("/contact/")} className="mt-2 sm:hidden">
              {nav.cta}
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
