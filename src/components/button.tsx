import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: "bg-brand text-foreground shadow-sm shadow-amber-900/10 hover:bg-brand-hover",
  secondary: "bg-surface text-foreground border border-border-strong hover:bg-surface-sunken",
  ink: "bg-ink text-ink-foreground hover:bg-black",
  ghost: "text-muted-strong hover:text-foreground hover:bg-surface-sunken",
} as const;

const SIZES = {
  sm: "h-9 px-3.5 text-sm rounded-lg gap-1.5",
  md: "h-11 px-5 text-sm rounded-xl gap-2",
  lg: "h-12 px-6 text-base rounded-xl gap-2",
} as const;

type Props = {
  href: string;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center font-semibold transition-colors duration-150 whitespace-nowrap";

/** Internal links go through next/link; mailto:, tel: and external URLs use a plain anchor. */
export function ButtonLink({ href, variant = "primary", size = "md", className, children }: Props) {
  const classes = cn(base, VARIANTS[variant], SIZES[size], className);
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
