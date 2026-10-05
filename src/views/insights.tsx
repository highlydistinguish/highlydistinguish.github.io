import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Container, PageHero, Section } from "@/components/layout-primitives";
import { getDictionary } from "@/content";
import { site } from "@/content/site";
import { formatDate, getInsight, getInsights } from "@/lib/insights";
import { localePath, type Locale } from "@/lib/i18n";

export function InsightsIndexView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const posts = getInsights(locale);
  return (
    <>
      <PageHero title={t.insightsPage.title} intro={t.insightsPage.intro} />
      <Section>
        <ul className="grid max-w-3xl gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={localePath(locale, `/insights/${post.slug}/`)}
                className="group block rounded-2xl border border-border bg-surface p-7 transition-shadow hover:shadow-lg hover:shadow-amber-900/5"
              >
                <p className="text-sm text-muted">
                  {formatDate(post.date, locale)} · {post.readingMinutes} {t.common.minRead}
                </p>
                <h2 className="mt-2 text-xl font-bold leading-snug group-hover:text-brand-strong">{post.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{post.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong">
                  {t.common.readMore}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

export function InsightView({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDictionary(locale);
  const post = getInsight(locale, slug)!;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          inLanguage: locale === "zh" ? "zh-Hans" : "en-AU",
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
          mainEntityOfPage: `${site.url}${localePath(locale, `/insights/${slug}/`)}`,
        }}
      />
      <article>
        <header className="border-b border-border bg-surface">
          <Container className="max-w-3xl py-14 sm:py-20">
            <Link
              href={localePath(locale, "/insights/")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong hover:underline"
            >
              <ArrowLeft aria-hidden className="h-4 w-4" />
              {t.common.allInsights}
            </Link>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-[2.6rem]">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{post.description}</p>
            <p className="mt-6 text-sm text-muted">
              {site.name} · {t.common.publishedOn} {formatDate(post.date, locale)} · {post.readingMinutes}{" "}
              {t.common.minRead}
            </p>
          </Container>
        </header>
        <Container className="max-w-3xl py-12 sm:py-16">
          {/* Article HTML is rendered at build time from our own Markdown files. */}
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </article>
      <CtaBand locale={locale} title={t.home.ctaTitle} body={t.home.ctaBody} />
    </>
  );
}
