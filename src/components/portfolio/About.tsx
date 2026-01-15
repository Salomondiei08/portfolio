"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <span className="text-primary">01.</span>
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m an AI Engineer and Researcher with a passion for developing
          cutting-edge machine learning solutions. My work spans from theoretical
          research to practical applications.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Currently exploring the intersection of large language models and
          multimodal systems, with a focus on making AI more accessible and
          beneficial for everyone.
        </p>
        <div className="pt-2">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-medium">Location:</span> Your City, Country
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-medium">Focus:</span> LLMs, Computer Vision, MLOps
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
