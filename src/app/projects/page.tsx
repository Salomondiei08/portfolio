import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Projects | Salomon Diei - AI Engineer Portfolio",
  description: "Mobile apps, AI projects, and innovative solutions by Salomon Diei.",
};

const featuredProjects = [
  {
    title: "Alladjai",
    description:
      "A comprehensive home service mobile application connecting users with service providers. Features real-time booking, secure payments via mobile money, and AI-powered service matching. Built during the MTN MoMo Hackathon (1st Place - AI & Tourism category).",
    tags: ["Flutter", "FastAPI", "MongoDB", "AI", "Mobile Money"],
    github: "https://github.com/salomondiei08",
    image: "/projects/alladjai.png",
  },
  {
    title: "TourCI",
    description:
      "An immersive tourism application featuring 360-degree virtual tours of Côte d'Ivoire's landmarks and attractions. Enables users to explore cultural sites and plan trips with an interactive map interface.",
    tags: ["Flutter", "360° Tours", "Maps", "Tourism"],
    github: "https://github.com/salomondiei08",
    image: "/projects/tourci.png",
  },
  {
    title: "Helper AI",
    description:
      "An intelligent chatbot application powered by GPT-4 that provides conversational assistance. Features context-aware responses, multi-language support, and a clean, intuitive interface.",
    tags: ["Flutter", "GPT-4", "AI", "NLP"],
    github: "https://github.com/salomondiei08",
    image: "/projects/helper.png",
  },
];

const otherProjects = [
  {
    title: "ResiCar",
    description: "A residential car rental and booking platform with seamless user experience.",
    tags: ["Flutter", "Firebase", "Booking"],
    github: "https://github.com/salomondiei08",
  },
  {
    title: "Sikili Platform",
    description: "Supply chain management system for connecting markets and streamlining operations.",
    tags: ["Vue.js", "FastAPI", "PostgreSQL"],
    github: "https://github.com/salomondiei08",
  },
  {
    title: "Cloud Infrastructure",
    description: "Terraform-based infrastructure as code for deploying scalable cloud applications on GCP.",
    tags: ["Terraform", "GCP", "Docker"],
    github: "https://github.com/salomondiei08",
  },
  {
    title: "Mobile App Templates",
    description: "Collection of reusable Flutter templates and components for rapid app development.",
    tags: ["Flutter", "Dart", "UI/UX"],
    github: "https://github.com/salomondiei08",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          A collection of mobile applications, AI projects, and innovative solutions.
        </p>
      </div>

      {/* Gallery Banner */}
      <Link href="/gallery/apps" className="block group">
        <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/20 via-card to-card p-8 hover:border-primary/50 transition-all duration-300">
          <div className="relative z-10">
            <Badge className="mb-4">Vibe Coded</Badge>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              App Gallery
            </h2>
            <p className="text-muted-foreground mb-4 max-w-xl">
              A curated collection of apps I&apos;ve built through vibe coding sessions.
              Quick experiments, creative tools, and fun side projects.
            </p>
            <span className="inline-flex items-center text-primary font-medium">
              Explore the gallery →
            </span>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        </div>
      </Link>

      {/* Featured Projects */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">01.</span>
          Featured Projects
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Project Image Placeholder */}
                  <div className="lg:w-48 h-32 lg:h-auto rounded-lg bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center shrink-0">
                    <span className="text-4xl font-bold text-primary/50">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">02.</span>
          Other Projects
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors pt-2"
                >
                  View on GitHub →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hackathon Wins */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">03.</span>
          Hackathon Achievements
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary/50">
                <Badge className="mb-2">1st Place</Badge>
                <h4 className="font-semibold">MTN MoMo Hackathon</h4>
                <p className="text-sm text-muted-foreground">AI & Tourism Category - 2023</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <Badge className="mb-2">1st Place</Badge>
                <h4 className="font-semibold">Orange SeedStar</h4>
                <p className="text-sm text-muted-foreground">Innovation Challenge - 2022</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <Badge className="mb-2">1st Place</Badge>
                <h4 className="font-semibold">Djamo x Epitech Hackathon</h4>
                <p className="text-sm text-muted-foreground">FinTech Innovation - 2022</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <Badge variant="secondary" className="mb-2">Top 10</Badge>
                <h4 className="font-semibold">GDG DevFest Hackathon</h4>
                <p className="text-sm text-muted-foreground">Developer Community - 2022</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
