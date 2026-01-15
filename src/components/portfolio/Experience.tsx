"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Senior AI Engineer",
    company: "Tech Company",
    period: "2023 - Present",
    description: "Leading development of LLM-based applications and ML infrastructure.",
  },
  {
    role: "ML Research Engineer",
    company: "Research Lab",
    period: "2021 - 2023",
    description: "Published research on multimodal learning and transformer architectures.",
  },
  {
    role: "AI Research Intern",
    company: "AI Startup",
    period: "2020 - 2021",
    description: "Developed computer vision models for real-time object detection.",
  },
];

export function Experience() {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <span className="text-primary">03.</span>
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
              <h3 className="font-medium text-foreground">{exp.role}</h3>
              <p className="text-sm text-primary">{exp.company}</p>
              <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
