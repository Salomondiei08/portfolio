"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = {
  languages: ["Python", "TypeScript", "C++", "Rust"],
  frameworks: ["PyTorch", "TensorFlow", "JAX", "Hugging Face"],
  tools: ["Docker", "Kubernetes", "AWS", "GCP"],
  specialties: ["LLMs", "Computer Vision", "NLP", "MLOps"],
};

export function TechStack() {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <span className="text-primary">02.</span>
          Tech Stack
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category}>
            <p className="text-sm text-muted-foreground capitalize mb-2">{category}</p>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
