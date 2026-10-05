import type { ReactNode } from "react";
import { getDictionary } from "@/content";
import { htmlLang, type Locale } from "@/lib/i18n";
import { OrganizationJsonLd } from "./json-ld";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

// Each language has its own root layout (so <html lang> is right for SEO and
// screen readers); both render through this shell.
export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDictionary(locale);
  return (
    <html lang={htmlLang[locale]} className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <OrganizationJsonLd description={t.meta.siteDescription} />
        <SiteHeader locale={locale} nav={t.nav} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
