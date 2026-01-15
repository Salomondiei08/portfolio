import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Projects | AI Engineer Portfolio",
  description: "AI/ML projects, research implementations, and vibe-coded applications.",
};

const featuredProjects = [
  {
    title: "Neural Architecture Search",
    description:
      "Automated neural network design using evolutionary algorithms and reinforcement learning. Achieved state-of-the-art results on image classification benchmarks.",
    tags: ["PyTorch", "RL", "AutoML"],
    github: "https://github.com/yourusername/nas",
    demo: "#",
    image: "/projects/nas.png",
  },
  {
    title: "Multimodal Sentiment Analysis",
    description:
      "A transformer-based model that combines text, audio, and visual cues to predict sentiment with high accuracy across multiple languages.",
    tags: ["Transformers", "NLP", "Computer Vision"],
    github: "https://github.com/yourusername/multimodal-sentiment",
    demo: "#",
    image: "/projects/sentiment.png",
  },
  {
    title: "LLM Fine-tuning Pipeline",
    description:
      "Production-ready pipeline for fine-tuning large language models with LoRA and QLoRA techniques. Supports multiple model architectures.",
    tags: ["LLMs", "PEFT", "MLOps"],
    github: "https://github.com/yourusername/llm-finetune",
    image: "/projects/llm.png",
  },
];

const otherProjects = [
  {
    title: "Real-time Object Detection",
    description: "Optimized YOLO variant for edge deployment at 60 FPS.",
    tags: ["Computer Vision", "Edge AI"],
    github: "#",
  },
  {
    title: "Text-to-SQL Engine",
    description: "Natural language to SQL query converter using fine-tuned LLMs.",
    tags: ["NLP", "Databases"],
    github: "#",
  },
  {
    title: "Distributed Training Framework",
    description: "Custom framework for training models across multiple GPUs and nodes.",
    tags: ["PyTorch", "Distributed"],
    github: "#",
  },
  {
    title: "AI Code Review Bot",
    description: "GitHub bot that automatically reviews PRs using LLMs.",
    tags: ["LLMs", "DevTools"],
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          A collection of AI/ML projects, research implementations, and experiments.
        </p>
      </div>

      {/* Gallery Banner */}
      <Link href="/gallery" className="block group">
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
                  <div className="lg:w-48 h-32 lg:h-auto rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <span className="text-4xl text-muted-foreground/50">
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
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      )}
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
    </div>
  );
}
