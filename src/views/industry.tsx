import { AlertTriangle, Check, Clock } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero, Section, SourceLinks } from "@/components/layout-primitives";
import { getDictionary } from "@/content";
import type { IndustrySlug } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export function IndustryView({ locale, slug }: { locale: Locale; slug: IndustrySlug }) {
  const t = getDictionary(locale);
  const ind = t.industries.find((i) => i.slug === slug)!;
  const labels = t.industryPage;

  return (
    <>
      <PageHero eyebrow={ind.name} title={ind.heroTitle} intro={ind.heroBody} />

      <Section>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{labels.useCasesTitle}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {ind.useCases.map((c) => (
            <div key={c.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
              <Clock aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-strong" />
              <div>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-sunken">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{labels.risksTitle}</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {ind.risks.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-surface p-6">
              <AlertTriangle aria-hidden className="h-5 w-5 text-warning" />
              <h3 className="mt-3 font-semibold">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{r.body}</p>
              <SourceLinks label={t.common.sources} sources={r.sources} />
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-muted">{t.footer.disclaimer}</p>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{labels.setupTitle}</h2>
        <ul className="mt-8 grid max-w-3xl gap-4">
          {ind.setup.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand">
                <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="leading-relaxed text-muted-strong">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand locale={locale} title={labels.ctaTitle} body={labels.ctaBody} />
    </>
  );
}
