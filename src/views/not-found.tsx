import { ButtonLink } from "@/components/button";
import { Container } from "@/components/layout-primitives";
import { getDictionary } from "@/content";
import { localePath, type Locale } from "@/lib/i18n";

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound;
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">{t.title}</h1>
      <p className="mt-4 text-lg text-muted">{t.body}</p>
      <ButtonLink href={localePath(locale, "/")} className="mt-8">
        {t.home}
      </ButtonLink>
    </Container>
  );
}
