import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { PageHero, Section } from "@/components/layout-primitives";
import { getDictionary } from "@/content";
import { mailtoHref, site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function ContactView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const c = t.contact;

  return (
    <>
      <PageHero title={c.title} intro={c.intro} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-brand bg-surface p-7">
              <div className="flex items-center gap-3 text-sm font-semibold text-muted">
                <Phone aria-hidden className="h-4 w-4 text-brand-strong" />
                {c.phoneLabel}
              </div>
              <a href={site.phoneHref} className="mt-2 block text-3xl font-bold tracking-tight hover:text-brand-strong">
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-muted">{c.hours}</p>
              <ButtonLink href={site.phoneHref} className="mt-5">
                {t.common.callUs}
              </ButtonLink>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7">
              <div className="flex items-center gap-3 text-sm font-semibold text-muted">
                <Mail aria-hidden className="h-4 w-4 text-brand-strong" />
                {c.emailLabel}
              </div>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block break-all text-xl font-semibold hover:text-brand-strong"
              >
                {site.email}
              </a>
              <ButtonLink href={mailtoHref(c.emailSubject, c.emailBody)} variant="secondary" className="mt-5">
                {t.common.emailUs}
              </ButtonLink>
            </div>

            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin aria-hidden className="h-4 w-4" />
              {c.area}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight">{c.stepsTitle}</h2>
            <ol className="mt-6 space-y-6">
              {c.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-ink-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
    </>
  );
}
