import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero, Section } from "@/components/layout-primitives";
import { getDictionary } from "@/content";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function AboutView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const a = t.about;

  return (
    <>
      <PageHero title={a.title} intro={a.intro} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{a.founderTitle}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-strong">
              {a.founderBody.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <h2 className="mt-14 text-2xl font-bold tracking-tight sm:text-3xl">{a.principlesTitle}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {a.principles.map((c) => (
                <div key={c.title} className="border-l-2 border-brand pl-5">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-ink">
              <Image
                src="/img/HighlyDistinguishLogo-stamp.png"
                alt="Highly Distinguish — The Expert"
                width={499}
                height={352}
                className="h-auto w-full"
              />
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-semibold">{a.companyTitle}</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="inline text-muted">{a.companyLabels.name}: </dt>
                  <dd className="inline">{site.legalName}</dd>
                </div>
                <div>
                  <dt className="inline text-muted">ABN: </dt>
                  <dd className="inline">{site.abn}</dd>
                </div>
                <div>
                  <dt className="inline text-muted">{a.companyLabels.location}: </dt>
                  <dd className="inline">
                    {site.city}, {site.region}
                  </dd>
                </div>
                <div>
                  <dt className="inline text-muted">{a.companyLabels.phone}: </dt>
                  <dd className="inline">
                    <a href={site.phoneHref} className="text-brand-strong hover:underline">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-semibold">{a.elsewhereTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {a.elsewhere.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand-strong hover:underline"
                    >
                      {l.label}
                      <ExternalLink aria-hidden className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand locale={locale} title={t.home.ctaTitle} body={t.home.ctaBody} />
    </>
  );
}
