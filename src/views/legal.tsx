import { readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { Container, PageHero } from "@/components/layout-primitives";
import type { Locale } from "@/lib/i18n";
import { formatDate } from "@/lib/insights";

export type LegalDoc = "privacy" | "terms";

export function loadLegal(doc: LegalDoc) {
  const file = path.join(process.cwd(), "src/content/legal", `${doc}.md`);
  const { data, content } = matter(readFileSync(file, "utf8"));
  const updated = data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated);
  return { title: String(data.title), updated, html: marked.parse(content, { async: false }) };
}

// Legal documents are published in English only; the Chinese route explains that.
export function LegalView({ locale, doc }: { locale: Locale; doc: LegalDoc }) {
  const { title, updated, html } = loadLegal(doc);
  const updatedLabel = locale === "zh" ? "最后更新" : "Last updated";
  return (
    <>
      <PageHero title={title} intro={`${updatedLabel}: ${formatDate(updated, locale)}`} />
      <Container className="max-w-3xl py-12 sm:py-16">
        {locale === "zh" && (
          <p className="mb-8 rounded-xl border border-border bg-brand-soft p-4 text-sm text-muted-strong">
            本文件仅提供英文版本，并以英文版本为准。如有疑问，欢迎用中文联系我们。
          </p>
        )}
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </>
  );
}
