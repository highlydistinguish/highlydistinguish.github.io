import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Container, Section, SectionHeading, SourceLinks } from "@/components/layout-primitives";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const h = t.home;
  const p = (path: string) => localePath(locale, path);

  return (
    <>
      {/* FAQ structured data helps search engines and AI assistants quote our answers. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: h.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/15 blur-3xl"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background px-3.5 py-1.5 text-xs font-semibold text-muted-strong">
              <ShieldCheck aria-hidden className="h-3.5 w-3.5 text-brand-strong" />
              {h.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              {h.title} <span className="text-brand-strong">{h.titleHighlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-strong">{h.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={p("/contact/")} size="lg">
                {t.common.bookCheck}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#how" size="lg" variant="secondary">
                {h.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-xl shadow-amber-900/5 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-strong">{h.checklistTitle}</p>
            <ul className="mt-5 space-y-4">
              {h.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-foreground">
                    <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[0.95rem] leading-snug text-muted-strong">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <div className="border-t border-border bg-background/60">
          <Container className="flex flex-wrap gap-x-8 gap-y-2 py-4 text-sm text-muted">
            {h.proof.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
                {item}
              </span>
            ))}
          </Container>
        </div>
      </section>

      {/* Problems */}
      <Section>
        <SectionHeading title={h.problemsTitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {h.problems.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" className="bg-surface-sunken">
        <SectionHeading title={h.stepsTitle} intro={h.stepsIntro} />
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {h.steps.map((c, i) => (
            <li
              key={c.title}
              className={
                i === 0
                  ? "rounded-2xl border-2 border-brand bg-surface p-6"
                  : "rounded-2xl border border-border bg-surface p-6"
              }
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link
            href={p("/services/")}
            className="inline-flex items-center gap-1.5 font-semibold text-brand-strong hover:underline"
          >
            {t.nav.services}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Industries */}
      <Section id="industries">
        <SectionHeading title={h.industriesTitle} intro={h.industriesIntro} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.industries.map((ind) => (
            <Link
              key={ind.slug}
              href={p(`/industries/${ind.slug}/`)}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg hover:shadow-amber-900/5"
            >
              <h3 className="text-lg font-semibold">{ind.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{ind.teaser}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong">
                {t.common.learnMore}
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Honesty / proof */}
      <section className="bg-brand-soft">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{h.honestyTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-strong">{h.honestyBody}</p>
            <Link
              href={p("/case-studies/ai-that-shows-its-working/")}
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-strong hover:underline"
            >
              {h.honestyCta}
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {h.honestyStats.map((s) => (
                <div key={s.value} className="rounded-2xl border border-border bg-surface p-6">
                  <p className="text-4xl font-bold tracking-tight">{s.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">{h.honestyFootnote}</p>
          </div>
        </Container>
      </section>

      {/* Why us */}
      <Section>
        <SectionHeading title={h.whyTitle} />
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {h.why.map((c) => (
            <div key={c.title} className="border-l-2 border-brand pl-5">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface-sunken">
        <SectionHeading title={h.faqTitle} />
        <div className="mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
          {h.faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  aria-hidden
                  className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 leading-relaxed text-muted-strong">{f.a}</p>
              <SourceLinks label={t.common.sources} sources={f.sources} />
            </details>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} title={h.ctaTitle} body={h.ctaBody} />
    </>
  );
}
