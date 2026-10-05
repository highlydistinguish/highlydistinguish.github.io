import { Check } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { PageHero, Section } from "@/components/layout-primitives";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ServicesView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const s = t.services;

  return (
    <>
      <PageHero title={s.title} intro={s.intro} />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {s.tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-2xl border bg-surface p-7",
                i === 0 ? "border-2 border-brand" : "border-border"
              )}
            >
              <h2 className="text-xl font-bold">{tier.name}</h2>
              <p className="mt-1 text-sm font-semibold text-brand-strong">{tier.price}</p>
              <p className="mt-4 leading-relaxed text-muted">{tier.summary}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.95rem] text-muted-strong">
                    <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-success" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={localePath(locale, "/contact/")}
                variant={i === 0 ? "primary" : "secondary"}
                className="mt-8"
              >
                {tier.cta}
              </ButtonLink>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl rounded-2xl border border-border bg-surface-sunken p-7">
          <h2 className="text-xl font-bold">{s.notTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted-strong">{s.notBody}</p>
        </div>
      </Section>
    </>
  );
}
