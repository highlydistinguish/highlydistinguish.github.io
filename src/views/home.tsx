import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Landmark, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { CountUp } from "@/components/count-up";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { RotatingWords } from "@/components/rotating-words";
import { Container, Section, SectionHeading, SourceLinks } from "@/components/layout-primitives";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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
          className="animate-aurora-a pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/15 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-aurora-b pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-brand-strong/10 blur-3xl"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="animate-enter inline-flex items-center gap-2 rounded-full border border-border-strong bg-background px-3.5 py-1.5 text-xs font-semibold text-muted-strong">
              <ShieldCheck aria-hidden className="h-3.5 w-3.5 text-brand-strong" />
              {h.eyebrow}
            </p>
            <h1
              className="animate-enter mt-6 text-balance text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.35rem]"
              style={{ animationDelay: "0.1s" }}
            >
              {h.title}
              {/* The rolling word gets its own line: its width changes as it turns
                  over, and on a shared line that would re-wrap the whole headline. */}
              <span className="block">
                <RotatingWords words={h.titleRotating} className="text-brand-strong" />
                {h.titleSuffix}
              </span>
            </h1>
            <p
              className="animate-enter mt-6 max-w-xl text-lg leading-relaxed text-muted-strong"
              style={{ animationDelay: "0.2s" }}
            >
              {h.body}
            </p>
            <div className="animate-enter mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.3s" }}>
              <ButtonLink href={p("/contact/")} size="lg">
                {t.common.bookCheck}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#how" size="lg" variant="secondary">
                {h.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div
            className="animate-enter rounded-2xl border border-border bg-background p-6 shadow-xl shadow-amber-900/5 sm:p-8"
            style={{ animationDelay: "0.42s" }}
          >
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
          {h.problems.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" className="bg-surface-sunken">
        <SectionHeading title={h.stepsTitle} intro={h.stepsIntro} />
        <Reveal>
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
        </Reveal>
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

      {/* Founder credibility — a dark band that breaks the page's rhythm and
          surfaces the banking background without needing a photo. */}
      <section className="bg-ink text-ink-foreground">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">{h.founderBand.eyebrow}</p>
            <div className="mt-5 flex items-baseline gap-3">
              <CountUp
                value={h.founderBand.statValue}
                className="text-7xl font-bold leading-none tracking-tight sm:text-8xl"
              />
              <span className="text-2xl font-semibold text-ink-foreground/90">{h.founderBand.statUnit}</span>
            </div>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">{h.founderBand.statCaption}</p>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-ink-muted">
                <Landmark aria-hidden className="h-4 w-4 text-brand" />
                {h.founderBand.banksLabel}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
                {h.founderBand.banks.map((bank, i) => (
                  <div
                    key={bank}
                    className={cn(
                      "flex flex-col items-center justify-center gap-2 rounded-xl border px-2 py-8 text-center sm:py-11",
                      ["border-white/10 bg-white/[0.04]", "border-brand/20 bg-brand/[0.09]", "border-brand/30 bg-brand/[0.15]"][i],
                    )}
                  >
                    <span className="text-sm font-bold tabular-nums text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-bold uppercase leading-tight tracking-wide sm:text-lg">
                      {bank}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-7 max-w-xl leading-relaxed text-ink-muted">{h.founderBand.body}</p>
          </Reveal>
          <Reveal delay={140} className="lg:justify-self-end">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-8">
              <p className="font-signature text-5xl leading-none text-ink-foreground">
                {h.founderBand.signatureName}
              </p>
              <p className="mt-4 text-sm text-ink-muted">{h.founderBand.signatureRole}</p>
              <Link
                href={p("/about/")}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                {h.founderBand.cta}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Industries */}
      <Section id="industries">
        <SectionHeading title={h.industriesTitle} intro={h.industriesIntro} />
        <Reveal className="mt-10 grid gap-6 md:grid-cols-3">
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
        </Reveal>

        {/* Catch-all so firms outside the three named industries don't bounce. */}
        <Reveal delay={120} className="mt-6">
          <Link
            href={p("/contact/")}
            className="group flex flex-col items-start gap-3 rounded-2xl border border-dashed border-border-strong bg-surface-sunken p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{h.industriesMore.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{h.industriesMore.body}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-strong">
              {h.industriesMore.cta}
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </Section>

      {/* Honesty / proof */}
      <section className="bg-brand-soft">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{h.honestyTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-strong">{h.honestyBody}</p>
            <Link
              href={p("/case-studies/ai-that-shows-its-working/")}
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-strong hover:underline"
            >
              {h.honestyCta}
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={140}>
            <div className="grid gap-4 sm:grid-cols-2">
              {h.honestyStats.map((s) => (
                <div key={s.value} className="rounded-2xl border border-border bg-surface p-6">
                  <CountUp value={s.value} className="block text-4xl font-bold tracking-tight" />
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">{h.honestyFootnote}</p>
          </Reveal>
        </Container>
      </section>

      {/* Why us */}
      <Section>
        <SectionHeading title={h.whyTitle} />
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {h.why.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 90} className="border-l-2 border-brand pl-5">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
            </Reveal>
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
