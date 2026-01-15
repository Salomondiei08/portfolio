"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Neural Architecture Search",
    description:
      "Automated neural network design using evolutionary algorithms and reinforcement learning. Achieved state-of-the-art results on image classification benchmarks.",
    tags: ["PyTorch", "RL", "AutoML"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Multimodal Sentiment Analysis",
    description:
      "A transformer-based model that combines text, audio, and visual cues to predict sentiment with high accuracy.",
    tags: ["Transformers", "NLP", "CV"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "LLM Fine-tuning Pipeline",
    description:
      "Production-ready pipeline for fine-tuning large language models with LoRA and QLoRA techniques.",
    tags: ["LLMs", "PEFT", "MLOps"],
    github: "#",
    featured: false,
  },
  {
    title: "Real-time Object Detection",
    description:
      "Optimized YOLO variant for edge deployment, achieving 60 FPS on embedded devices.",
    tags: ["Computer Vision", "Edge AI", "TensorRT"],
    github: "#",
    featured: false,
  },
];

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <span className="text-primary">04.</span>
        Projects
        <div className="h-px flex-1 bg-border" />
      </h2>

      {/* Featured Projects */}
      <div className="grid md:grid-cols-2 gap-4">
        {featuredProjects.map((project, index) => (
          <Card
            key={index}
            className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <Badge variant="outline" className="text-xs border-primary text-primary">
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
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
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Other Projects */}
      <div className="grid md:grid-cols-2 gap-4">
        {otherProjects.map((project, index) => (
          <Card
            key={index}
            className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
          >
            <CardContent className="pt-6 space-y-3">
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="p-0 h-auto" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  View on GitHub →
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
