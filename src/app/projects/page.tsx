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

const PLACEHOLDER_IDS = new Set(["oh-my-hermes", "aya", "help-ai"]);
const WHITE_BG_IDS = new Set(["tourci"]);

function ProjectThumbnail({ id, image, title }: { id: string; image: string; title: string }) {
  if (PLACEHOLDER_IDS.has(id)) {
    const initials = title.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    return (
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
        <span className="text-primary font-bold text-lg">{initials}</span>
      </div>
    );
  }
  return (
    <div className={`w-14 h-14 rounded-xl overflow-hidden shrink-0 flex items-center justify-center ${WHITE_BG_IDS.has(id) ? "bg-white p-2" : "bg-zinc-800 p-1"}`}>
      <Image
        src={image}
        alt={title}
        width={52}
        height={52}
        className="object-contain w-full h-full"
      />
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
                <ProjectThumbnail id={project.id} image={project.image} title={project.title} />
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-base font-semibold">{project.title}</h2>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
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
        <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/20 via-card to-card p-6 hover:border-primary/50 transition-all duration-300">
          <Badge className="mb-3">Vibe Coded</Badge>
          <h2 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">App Gallery</h2>
          <p className="text-sm text-muted-foreground mb-3">Experiments and small apps.</p>
          <span className="text-sm text-primary font-medium">Explore →</span>
        </div>
      </Link>
    </div>
  );
}
