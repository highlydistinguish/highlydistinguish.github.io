import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { site } from "@/content/site";
import { htmlLang, localePath, type Locale } from "./i18n";

/** Title, description, canonical URL and hreflang alternates for a page. `path` is the English path. */
export function pageMetadata(
  locale: Locale,
  path: string,
  { title, description }: { title?: string; description?: string } = {}
): Metadata {
  const t = getDictionary(locale);
  const desc = description ?? t.meta.siteDescription;
  const url = localePath(locale, path);
  return {
    title: title ?? { absolute: t.meta.siteTitle },
    description: desc,
    alternates: {
      canonical: url,
      languages: {
        "en-AU": localePath("en", path),
        "zh-Hans": localePath("zh", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: htmlLang[locale].replace("-", "_"),
      url,
      title: title ?? t.meta.siteTitle,
      description: desc,
      images: [{ url: "/img/HighlyDistinguishLogo-stamp.png" }],
    },
  };
}

export function rootMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.siteTitle, template: `%s · ${site.name}` },
    description: t.meta.siteDescription,
    icons: { icon: "/img/HighlyDistinguishLogo-logo-nav.png" },
  };
}
