"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Layout wrapper kept for existing call sites. Entrance animations were
 * removed on purpose: the site stays calm and the same on every page.
 */
export function FadeIn({ children, className = "" }: FadeInProps) {
  return <div className={className}>{children}</div>;
}

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}

export function SlideIn({ children, direction = "up", delay = 0, className = "" }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`animate-slide-in-${direction}`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [direction]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export function Stagger({ children, staggerDelay = 100, className = "" }: StaggerProps) {
  return (
    <>
      {children.map((child, index) => (
        <FadeIn key={index} delay={index * staggerDelay} className={className}>
          {child}
        </FadeIn>
      ))}
    </>
  );
}
