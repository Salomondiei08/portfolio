import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: ProjectLink[];
};

const topProjects: Project[] = [
  {
    title: "Autonomous AI Agent Researcher",
    description:
      "An end-to-end AI research assistant that takes a problem, proposes hypotheses, runs experiments, and produces research outputs.",
    tags: ["AI", "Research", "Automation"],
    image: "/projects/autonomous-ai-agent-researcher.jpg",
    links: [],
  },
  {
    title: "TourCI",
    description:
      "TourCI is the #2 tourism app in Cote d'Ivoire. It helps users discover places and explore them in 360.",
    tags: ["Tourism", "Mobile", "360"],
    image: "/projects/tourci.jpg",
    links: [
      {
        label: "Website",
        href: "https://www.tour.ci/",
      },
    ],
  },
  {
    title: "Help AI",
    description:
      "An open-source Python project using GPT-3/GPT-4 and LangChain to build a customer-service AI agent, with company help-center data vectorized in Pinecone.",
    tags: ["Python", "OpenAI", "LangChain", "Pinecone"],
    image: "/projects/help-ai.jpg",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Salomondiei08/HelpAI",
      },
    ],
  },
];

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

      <section className="space-y-4">
        <div className="grid gap-5">
          {topProjects.map((project) => (
            <Card
              key={project.title}
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
