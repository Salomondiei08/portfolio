"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "GH" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "IN" },
  { name: "Twitter/X", url: "https://twitter.com/yourusername", icon: "X" },
  { name: "Google Scholar", url: "https://scholar.google.com/citations?user=yourid", icon: "GS" },
];

export function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <span className="text-primary">06.</span>
        Get in Touch
        <div className="h-px flex-1 bg-border" />
      </h2>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Let&apos;s Connect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m always interested in discussing new research collaborations,
            interesting projects, or opportunities in AI/ML. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="mailto:your.email@example.com">
                Send me an email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Find me elsewhere</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-secondary hover:border-primary hover:text-primary transition-colors"
                  title={link.name}
                >
                  <span className="text-sm font-medium">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
