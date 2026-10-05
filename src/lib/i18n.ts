export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, string> = { en: "en-AU", zh: "zh-Hans" };

/** "/services/" in English is "/zh/services/" in Chinese. Paths always end with "/". */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return clean;
  return clean === "/" ? "/zh/" : `/zh${clean}`;
}

/** Strips the locale prefix so a path can be re-targeted at the other language. */
export function basePath(pathname: string): string {
  if (pathname === "/zh" || pathname === "/zh/") return "/";
  return pathname.startsWith("/zh/") ? pathname.slice(3) : pathname;
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}
