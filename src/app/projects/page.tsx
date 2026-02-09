import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/lib/portfolio-data";

export const metadata = {
  title: "Projects | Salomon Diei",
  description: "Top projects by Salomon Diei: Autonomous AI Agent Researcher, TourCI, and Help AI.",
  keywords: [
    "Autonomous AI Agent Researcher",
    "TourCI",
    "Help AI",
    "AI research assistant",
    "Cote d'Ivoire tourism app",
  ],
};

/**
 * Displays the top portfolio projects with short descriptions, links, and image placeholders.
 */
export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Top Projects</h1>
        <p className="text-muted-foreground">
          A focused list of key products and research tools.
        </p>
      </div>

      {/* App Gallery Banner */}
      <Link href="/gallery/apps" className="block group">
        <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/20 via-card to-card p-8 hover:border-primary/50 transition-all duration-300">
          <div className="relative z-10">
            <Badge className="mb-4">Vibe Coded</Badge>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              App Gallery
            </h2>
            <p className="text-muted-foreground mb-4 max-w-xl">
              A curated gallery of apps and experiments, from practical utilities to creative AI tools.
            </p>
            <span className="inline-flex items-center text-primary font-medium">
              Explore the gallery →
            </span>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        </div>
      </Link>

      <section className="space-y-4">
        <div className="grid gap-5">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              id={project.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                  <div className="relative w-full md:w-56 h-44 md:h-36 rounded-lg overflow-hidden bg-secondary shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 224px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-1">
                        {project.links.map((link) => (
                          <Button key={link.href} variant="outline" asChild>
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
        </div>
      </section>
    </div>
  );
}
