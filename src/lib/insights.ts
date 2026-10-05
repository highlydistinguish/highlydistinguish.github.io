import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Locale } from "./i18n";

// Articles live in src/content/insights as <slug>.<locale>.md, e.g.
// "free-chatgpt-client-data.en.md". Each needs title, description and date.
const DIR = path.join(process.cwd(), "src/content/insights");

export type Insight = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  html: string;
};

function readingMinutes(text: string, locale: Locale) {
  // ~230 English words or ~400 Chinese characters per minute.
  const units = locale === "zh" ? text.replace(/\s/g, "").length / 400 : text.split(/\s+/).length / 230;
  return Math.max(1, Math.round(units));
}

function load(file: string): Insight {
  const [slug, locale] = file.replace(/\.md$/, "").split(".") as [string, Locale];
  const { data, content } = matter(readFileSync(path.join(DIR, file), "utf8"));
  return {
    slug,
    locale,
    title: String(data.title),
    description: String(data.description),
    // YAML turns an unquoted 2026-10-05 into a Date; normalise back to the string.
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    readingMinutes: readingMinutes(content, locale),
    html: marked.parse(content, { async: false }),
  };
}

export function getInsights(locale: Locale): Insight[] {
  return readdirSync(DIR)
    .filter((f) => f.endsWith(`.${locale}.md`))
    .map(load)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getInsight(locale: Locale, slug: string): Insight | undefined {
  return getInsights(locale).find((i) => i.slug === slug);
}

export function formatDate(date: string, locale: Locale) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(locale === "zh" ? "zh-CN" : "en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
