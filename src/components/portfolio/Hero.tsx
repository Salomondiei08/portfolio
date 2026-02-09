"use client";

import { useState } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg">
            Hello, I&apos;m
          </p>

          {/* Name with hover effect */}
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight cursor-pointer transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={`inline-block transition-all duration-500 ${isHovered ? 'text-primary scale-105' : 'text-foreground'}`}>
              Salomon DIEI
            </span>
          </h1>

          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI Engineer & Researcher
            </h2>
          </div>

          {/* Brief intro */}
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Building intelligent systems and pushing the boundaries of what&apos;s possible
            with machine learning. Currently focused on large language models,
            computer vision, and multimodal AI systems.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
