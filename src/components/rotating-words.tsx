"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false // Server render: assume motion is fine; the client corrects it.
  );
}

/**
 * Headline word that rolls over like a split-flap board: the old word slides up
 * and out, the new one rises into its place, and the slot's width follows along
 * so the rest of the sentence shifts smoothly.
 *
 * Only the current word is in the document — the outgoing one joins it just for
 * the half-second of the roll. So the static HTML a crawler or an AI assistant
 * reads is one clean sentence, and a screen reader hears the headline once,
 * rather than every variant run together.
 */
export function RotatingWords({
  words,
  intervalMs = 2800,
  className,
}: {
  words: string[];
  intervalMs?: number;
  className?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  // `outgoing` is null until the first roll, so the first client render matches
  // the server's single word exactly.
  const [{ current, outgoing }, setRoll] = useState<{ current: number; outgoing: number | null }>({
    current: 0,
    outgoing: null,
  });
  const slotRef = useRef<HTMLSpanElement>(null);
  const currentRef = useRef<HTMLSpanElement>(null);

  const animate = !prefersReducedMotion && words.length > 1;

  useEffect(() => {
    if (!animate) return;
    const id = setInterval(
      () => setRoll((roll) => ({ current: (roll.current + 1) % words.length, outgoing: roll.current })),
      intervalMs
    );
    return () => clearInterval(id);
  }, [animate, words.length, intervalMs]);

  // Width is written straight to the node rather than held in state: it's a
  // measurement, not data, and this keeps each roll to a single render.
  useEffect(() => {
    const measure = () => {
      const slot = slotRef.current;
      const word = currentRef.current;
      if (slot && word) slot.style.width = `${word.getBoundingClientRect().width}px`;
    };
    measure();
    window.addEventListener("resize", measure);
    // Web fonts can land after first paint and change the measurement.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [current]);

  const motion = "transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none";

  return (
    <span
      ref={slotRef}
      className={cn(
        "relative inline-block overflow-hidden whitespace-nowrap align-bottom",
        "transition-[width] duration-500 ease-out motion-reduce:transition-none",
        className
      )}
    >
      {/* Keyed so React mounts a fresh node per word and the roll-in animates. */}
      <span key={words[current]} ref={currentRef} className={cn("inline-block animate-roll-in", motion)}>
        {words[current]}
      </span>
      {outgoing !== null && outgoing !== current && (
        <span
          key={`out-${words[outgoing]}`}
          aria-hidden
          className={cn("absolute inset-x-0 top-0 animate-roll-out", motion)}
          // Drop the old word once it has rolled away, so the slot holds exactly
          // one word between rolls.
          onAnimationEnd={() => setRoll((roll) => (roll.outgoing === null ? roll : { ...roll, outgoing: null }))}
        >
          {words[outgoing]}
        </span>
      )}
    </span>
  );
}
