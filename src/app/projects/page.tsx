import Link from "next/link";
import { PageHeader, Section } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/ProjectCard";
import { appGalleryItems, portfolioProjects } from "@/lib/portfolio-data";

export const metadata = {
  title: "Projects | Salomon Diei",
  description: "Projects by Salomon Diei — Oh My Hermes, Kernel, Aya, TourCI.",
  alternates: {
    canonical: "https://salomondiei.com/projects",
  },
};

/**
 * Projects as screenshot cards with full descriptions and links.
 * Small apps follow in a compact list.
 */
export default function ProjectsPage() {
  const smallApps = appGalleryItems.slice(0, 5);

  return (
    <>
      <PageHeader eyebrow="Projects" title="Things I have built">
        <p>
          Open-source tools for AI agents, products used by real people, and a few experiments. Most of them
          started as a problem I had myself.
        </p>
      </PageHeader>

      <section aria-label="Products and tools" className="grid gap-5 pb-14 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} variant="full" priority={index < 3} />
        ))}
      </section>

      <Section label="Small apps" id="apps" action={{ href: "/gallery/apps", label: "All apps" }}>
        <ul className="max-w-[38rem] divide-y divide-border">
          {smallApps.map((app) => (
            <li key={app.id}>
              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-3"
              >
                <span className="font-sans font-bold group-hover:text-primary transition-colors">{app.title}</span>
                <span className="block text-foreground/80">{app.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-sans text-sm text-muted-foreground">
          More in the <Link href="/gallery/apps" className="text-link">app gallery</Link>.
        </p>
      </Section>
    </>
  );
}
