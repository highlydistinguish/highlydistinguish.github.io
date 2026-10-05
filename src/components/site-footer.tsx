import Link from "next/link";
import { getDictionary } from "@/content";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Container } from "./layout-primitives";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = (path: string) => localePath(locale, path);
  const linkClass = "text-sm text-ink-muted hover:text-ink-foreground";

  return (
    <footer className="mt-auto border-t border-white/10 bg-ink text-ink-foreground">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-base font-bold">Highly Distinguish</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{t.footer.tagline}</p>
          <p className="mt-4 text-sm">
            <a href={site.phoneHref} className="font-semibold hover:text-brand">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="text-ink-muted hover:text-ink-foreground">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">{t.footer.explore}</p>
          <ul className="mt-3 space-y-2">
            {t.industries.map((i) => (
              <li key={i.slug}>
                <Link href={p(`/industries/${i.slug}/`)} className={linkClass}>
                  {i.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={p("/services/")} className={linkClass}>
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link href={p("/case-studies/")} className={linkClass}>
                {t.nav.caseStudies}
              </Link>
            </li>
            <li>
              <Link href={p("/insights/")} className={linkClass}>
                {t.nav.insights}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">{t.footer.company}</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href={p("/about/")} className={linkClass}>
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href={p("/contact/")} className={linkClass}>
                {t.nav.contact}
              </Link>
            </li>
            <li>
              <Link href={p("/privacy/")} className={linkClass}>
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={p("/terms/")} className={linkClass}>
                {t.footer.terms}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">{t.footer.archive}</p>
          {/* External links to the founder's live engineering blog on todzhang.com. */}
          <ul className="mt-3 space-y-2">
            <li>
              <a href={site.archive.tech} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {t.footer.archiveTech}
              </a>
            </li>
            <li>
              <a href={site.archive.chinese} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {t.footer.archiveChinese}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs leading-relaxed text-ink-muted">
          <p>{t.footer.disclaimer}</p>
          <p>
            © {new Date().getFullYear()} {site.legalName} · ABN {site.abn} · {site.location}
          </p>
        </Container>
      </div>
    </footer>
  );
}
