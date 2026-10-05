import { ArrowRight, Phone } from "lucide-react";
import { getDictionary } from "@/content";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { ButtonLink } from "./button";
import { Container } from "./layout-primitives";

export function CtaBand({ locale, title, body }: { locale: Locale; title: string; body: string }) {
  const t = getDictionary(locale);
  return (
    <section className="bg-ink text-ink-foreground">
      <Container className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <ButtonLink href={localePath(locale, "/contact/")} size="lg">
            {t.common.bookCheck}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href={site.phoneHref}
            size="lg"
            variant="secondary"
            className="border-white/20 bg-white/5 text-ink-foreground hover:bg-white/10"
          >
            <Phone aria-hidden className="h-4 w-4" />
            {site.phone}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
