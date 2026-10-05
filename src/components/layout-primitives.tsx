import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import type { Source } from "@/content/types";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 sm:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  className,
}: {
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export function SourceLinks({ label, sources }: { label: string; sources?: Source[] }) {
  if (!sources?.length) return null;
  return (
    <div className="mt-4 text-sm text-muted">
      <p className="font-medium">{label}:</p>
      <ul className="mt-1 space-y-1">
        {sources.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-strong underline underline-offset-2 hover:no-underline"
            >
              {s.label}
              <ExternalLink aria-hidden className="ml-1 inline h-3 w-3 align-[-1px]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Page header used on every inner page. */
export function PageHero({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="border-b border-border bg-surface">
      <Container className="py-14 sm:py-20">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-brand-strong">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      </Container>
    </div>
  );
}
