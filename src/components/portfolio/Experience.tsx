"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "CTO and Supply Manager (Contract)",
    company: "Sikili",
    period: "Nov 2024 - Present",
    description: "Built internal management tools and an AI sales automation bot while coordinating engineering workflows and supply chain operations.",
  },
  {
    role: "Software Engineer (Full-time)",
    company: "BUI Corporation",
    period: "May 2024 - Jun 2024",
    description: "Contributed to mobile and backend development and collaborated on scalable software architecture.",
  },
  {
    role: "Technical Lead Mobile",
    company: "Futurafric IA",
    period: "Aug 2023 - May 2024",
    description: "Led end-to-end mobile app delivery from UI/UX to production and established cross-platform best practices.",
  },
  {
    role: "Junior Software Engineer",
    company: "Casys Technologies",
    period: "Oct 2021 - Feb 2022",
    description: "Built a JavaCard and Batch CLI tool for smart-card encoding automation, improving process speed by 300%.",
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
