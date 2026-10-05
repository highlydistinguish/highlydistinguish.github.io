"use client";

import { useEffect, useRef, useState } from "react";

// Splits a display string like "79.5%" or "20" into prefix/number/suffix so we
// can animate just the number and keep the units. Returns null if there's no
// number to animate (e.g. "Australia") — then we just render the value as-is.
function parse(value: string) {
  const m = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const [, prefix, num, suffix] = m;
  return { prefix, target: parseFloat(num), suffix, decimals: num.includes(".") ? num.split(".")[1].length : 0 };
}

export function CountUp({ value, className, duration = 1200 }: { value: string; className?: string; duration?: number }) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  // SSR and first paint show the final value, so no-JS users and SEO see the real
  // number. We only drop to 0 and ramp up once it scrolls into view.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay(`${parsed.prefix}${(parsed.target * eased).toFixed(parsed.decimals)}${parsed.suffix}`);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          obs.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
