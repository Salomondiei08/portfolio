import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/lib/portfolio-data";

export const metadata = {
  title: "Projects | Salomon Diei",
  description: "Projects by Salomon Diei — Oh My Hermes, Kernel, Aya, TourCI.",
  alternates: {
    canonical: "https://salomondiei.com/projects",
  },
};

/** Real screenshot of the project (same images as the home page). */
function ProjectThumbnail({ cover, title }: { cover?: string; title: string }) {
  if (!cover) return null;
  return (
    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
      <Image src={cover} alt={`${title} screenshot`} fill sizes="96px" className="object-cover object-top" />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">Key products and open-source tools.</p>
      </div>

      <section className="space-y-3">
        {portfolioProjects.map((project) => (
          <Card
            key={project.title}
            id={project.id}
            className="bg-card border-border hover:border-primary/50 transition-all duration-300"
          >
            <CardContent className="p-5">
              <div className="flex gap-4">
                <ProjectThumbnail cover={project.cover} title={project.title} />
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold">{project.title}</h2>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.links.map((link) => (
                        <Button key={link.href} variant="outline" size="sm" asChild>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <Link href="/gallery/apps" className="block group">
        <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
          <h2 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">App Gallery</h2>
          <p className="text-sm text-muted-foreground mb-3">Experiments and small apps.</p>
          <span className="text-sm text-primary font-medium">Explore →</span>
        </div>
      </Link>
    </div>
  );
}
