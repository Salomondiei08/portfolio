import Image from "next/image";
import type { PortfolioProject } from "@/lib/portfolio-data";
import { LinkRow } from "./Section";

/**
 * Project card with a screenshot cover. The card itself is not a link
 * (it holds several links), so the cover and title both point at the
 * project's primary link and the bracketed links sit underneath.
 */
export function ProjectCard({
  project,
  /** "compact" shows the one-line summary; "full" shows the long description and all links */
  variant = "compact",
  priority = false,
}: {
  project: PortfolioProject;
  variant?: "compact" | "full";
  priority?: boolean;
}) {
  const primaryHref = project.links[0]?.href;

  return (
    <article
      id={project.id}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/25"
    >
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[16/10] overflow-hidden border-b border-border bg-muted"
      >
        {project.cover && (
          <Image
            src={project.cover}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 340px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        )}
      </a>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold leading-snug">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            {project.title}
          </a>
        </h3>
        <p className="leading-relaxed text-foreground/85">
          {variant === "full" ? project.description : project.summary}
        </p>
        <p className="mt-auto pt-2 font-sans text-sm text-muted-foreground">
          {project.tags.slice(0, variant === "full" ? 5 : 3).join(" · ")}
        </p>
        {variant === "full" && <LinkRow links={project.links} />}
      </div>
    </article>
  );
}
