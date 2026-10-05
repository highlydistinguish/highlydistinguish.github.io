import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero, Section } from "@/components/layout-primitives";
import { getDictionary } from "@/content";
import type { CaseStudySlug } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";

export function CaseStudiesIndexView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <>
      <PageHero title={t.caseStudyPage.indexTitle} intro={t.caseStudyPage.indexIntro} />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {t.caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={localePath(locale, `/case-studies/${cs.slug}/`)}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition-shadow hover:shadow-lg hover:shadow-amber-900/5"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-strong">{cs.tag}</span>
              <h2 className="mt-3 text-xl font-bold leading-snug">{cs.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{cs.teaser}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong">
                {t.common.readMore}
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

export function CaseStudyView({ locale, slug }: { locale: Locale; slug: CaseStudySlug }) {
  const t = getDictionary(locale);
  const cs = t.caseStudies.find((c) => c.slug === slug)!;
  const L = t.caseStudyPage;

  return (
    <>
      <PageHero eyebrow={cs.tag} title={cs.title} intro={cs.teaser} />
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight">{L.problem}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-strong">{cs.problem}</p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight">{L.approach}</h2>
          <ol className="mt-5 space-y-4">
            {cs.approach.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-ink-foreground">
                  {i + 1}
                </span>
                <span className="leading-relaxed text-muted-strong">{step}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 text-2xl font-bold tracking-tight">{L.results}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {cs.results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-3xl font-bold tracking-tight">{r.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 leading-relaxed text-muted-strong">{cs.resultsNote}</p>

          <blockquote className="mt-12 rounded-r-2xl border-l-4 border-brand bg-brand-soft p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-strong">{L.lesson}</p>
            <p className="mt-2 text-lg font-medium leading-relaxed">{cs.lesson}</p>
          </blockquote>

          <h2 className="mt-12 text-2xl font-bold tracking-tight">{L.forYou}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-strong">{cs.forYou}</p>

          <h2 className="mt-12 text-lg font-semibold">{L.furtherReading}</h2>
          <ul className="mt-3 space-y-2">
            {cs.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-strong underline underline-offset-2 hover:no-underline"
                >
                  {l.label}
                  <ExternalLink aria-hidden className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CtaBand locale={locale} title={t.home.ctaTitle} body={t.home.ctaBody} />
    </>
  );
}
