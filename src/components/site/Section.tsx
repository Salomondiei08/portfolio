import type { ReactNode } from "react";
import Link from "next/link";

/**
 * A page section with its label in a narrow left margin on desktop,
 * stacked above the content on mobile. This is the backbone of the
 * site's layout: one calm reading column with labels you can scan.
 */
export function Section({
  label,
  id,
  action,
  children,
}: {
  label: string;
  id?: string;
  /** Optional link shown under the label, e.g. "All posts" */
  action?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-label` : undefined}
      className="grid gap-4 border-t border-border py-10 md:grid-cols-[9rem_1fr] md:gap-10 md:py-12"
    >
      <div className="flex items-baseline justify-between gap-4 md:block">
        <h2 id={id ? `${id}-label` : undefined} className="eyebrow md:pt-1.5">
          {label}
        </h2>
        {action && (
          <Link
            href={action.href}
            className="inline-flex min-h-11 items-center font-sans text-sm text-primary hover:underline underline-offset-4 md:mt-2 md:min-h-0"
          >
            {action.label} →
          </Link>
        )}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

/**
 * Title block for interior pages. Uses the same margin grid as Section so
 * the title lines up with the content column below it.
 */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  /** Lede paragraph(s) */
  children?: ReactNode;
}) {
  return (
    <header className="grid gap-4 pb-10 pt-4 md:grid-cols-[9rem_1fr] md:gap-10 md:pb-12 md:pt-10">
      <p className="eyebrow md:pt-3">{eyebrow}</p>
      <div className="min-w-0 space-y-4">
        <h1 className="text-[2rem] font-bold leading-tight tracking-tight sm:text-4xl">{title}</h1>
        {children && (
          <div className="max-w-[38rem] space-y-4 text-lg leading-relaxed text-muted-foreground">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}

export type EntryLink = { label: string; href: string };

/**
 * Publication-style list entry: title, one line of metadata, a short
 * description and bracketed links. Used for projects, research and apps.
 */
export function Entry({
  title,
  href,
  meta,
  links = [],
  id,
  children,
}: {
  title: string;
  /** Makes the title itself a link */
  href?: string;
  meta?: string;
  links?: EntryLink[];
  id?: string;
  children?: ReactNode;
}) {
  const isExternal = href?.startsWith("http");
  return (
    <article id={id} className="space-y-1.5">
      <h3 className="text-lg font-bold leading-snug">
        {href ? (
          <a
            href={href}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="hover:text-primary transition-colors"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {meta && <p className="font-sans text-sm text-muted-foreground">{meta}</p>}
      {children && <div className="leading-relaxed text-foreground/90">{children}</div>}
      {links.length > 0 && <LinkRow links={links} />}
    </article>
  );
}

/** Bracketed links in the style of an academic CV: [GitHub] [Website] */
export function LinkRow({ links }: { links: EntryLink[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 font-sans text-sm">
      {links.map((link) => {
        const isExternal = link.href.startsWith("http");
        return (
          <li key={link.href}>
            <a
              href={link.href}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex min-h-11 items-center text-primary hover:underline underline-offset-4"
            >
              [{link.label}]
            </a>
          </li>
        );
      })}
    </ul>
  );
}
