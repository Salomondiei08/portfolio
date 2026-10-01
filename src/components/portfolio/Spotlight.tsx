"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/**
 * Tracks the pointer over a group of `.spotlight` cards and writes the
 * cursor position (--mx/--my) onto whichever card is under it. One
 * listener for the whole group keeps this cheap; the glow itself is pure
 * CSS (see .spotlight in globals.css) and is disabled on touch screens.
 */
export function SpotlightGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  const frame = useRef(0);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const card = (event.target as HTMLElement).closest<HTMLElement>(".spotlight");
    if (!card) return;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${clientX - rect.left}px`);
      card.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  };

  return (
    <div className={className} onPointerMove={onPointerMove}>
      {children}
    </div>
  );
}

/**
 * Hero wrapper with an ambient glow that trails the cursor. Purely
 * decorative; hidden on touch devices and static under reduced motion.
 */
export function HeroGlow({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const el = ref.current;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--hx", `${clientX - rect.left + rect.width * 0.2}px`);
      el.style.setProperty("--hy", `${clientY - rect.top + rect.height * 0.1}px`);
    });
  };

  return (
    <div ref={ref} className={`relative isolate ${className}`} onPointerMove={onPointerMove}>
      <div className="hero-glow" aria-hidden="true" />
      {children}
    </div>
  );
}
