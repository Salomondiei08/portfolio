"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title: "Efficient Attention Mechanisms for Long-Context Language Models",
    venue: "NeurIPS 2024",
    authors: "Your Name, Co-Author 1, Co-Author 2",
    link: "#",
    type: "Conference",
  },
  {
    title: "Cross-Modal Learning with Vision-Language Transformers",
    venue: "CVPR 2024",
    authors: "Co-Author 1, Your Name, Co-Author 3",
    link: "#",
    type: "Conference",
  },
  {
    title: "A Survey on Parameter-Efficient Fine-Tuning of Large Language Models",
    venue: "arXiv 2024",
    authors: "Your Name, Co-Author 2",
    link: "#",
    type: "Preprint",
  },
];

export function Publications() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <span className="text-primary">05.</span>
        Publications
        <div className="h-px flex-1 bg-border" />
      </h2>

      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card
            key={index}
            className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
          >
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="space-y-1 flex-1">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium group-hover:text-primary transition-colors inline-block"
                  >
                    {pub.title}
                  </a>
                  <p className="text-sm text-muted-foreground">{pub.authors}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={pub.type === "Conference" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {pub.type}
                  </Badge>
                  <span className="text-sm text-primary font-medium">{pub.venue}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center pt-2">
        <a href="#" className="hover:text-primary transition-colors">
          View all publications on Google Scholar →
        </a>
      </p>
    </section>
  );
}
