"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/portfolio/NewsletterForm";
import { FadeIn, SlideIn } from "@/components/portfolio/animations";

const technologies = {
  languages: ["Python", "Dart", "JavaScript", "TypeScript", "Java", "C#"],
  frameworks: ["Flutter", "FastAPI", "Vue.js", "Express.js", ".NET"],
  tools: ["Docker", "Terraform", "Firebase", "GCP", "MongoDB", "PostgreSQL"],
};

const recentPosts = [
  { title: "Understanding Transformers: A Visual Guide", date: "Jan 20", href: "/blog/understanding-transformers" },
  { title: "Welcome to My Blog", date: "Jan 15", href: "/blog/welcome-to-my-blog" },
];

const featuredProject = {
  title: "Alladjai",
  description: "A comprehensive home service mobile application connecting users with service providers. Features real-time booking, secure payments, and AI-powered recommendations.",
  tags: ["Flutter", "FastAPI", "MongoDB", "AI"],
  href: "/projects",
};

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <SlideIn direction="down">
        <section className="space-y-4 pb-4">
          <p className="text-muted-foreground">Hello, I&apos;m</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Salomon Diei
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <h2 className="text-xl text-muted-foreground">AI Engineer & Researcher</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Building intelligent systems and innovative mobile applications. Currently pursuing
            a Master&apos;s in AI at Korea University of Technology and Education while leading tech at Sikili.
          </p>
        </section>
      </SlideIn>

      {/* Bento Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* About Card */}
        <FadeIn delay={100}>
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group card-hover h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <span className="text-primary text-sm">01.</span>
                About
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                CTO & AI researcher with expertise in mobile development and machine learning.
                GKS scholarship recipient and Google Cloud Certified Associate Cloud Engineer.
              </p>
              <div className="flex items-center gap-3">
                <Link href="/about" className="inline-flex text-sm text-primary hover:underline">
                  Learn more →
                </Link>
                <a
                  href="/Salomon_Academic_Resume.pdf"
                  download="Salomon_Diei_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Tech Stack Card */}
        <FadeIn delay={200}>
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <span className="text-primary text-sm">02.</span>
                Tech Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(technologies).map(([category, techs]) => (
                <div key={category}>
                  <p className="text-xs text-muted-foreground capitalize mb-1.5">{category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </FadeIn>

        {/* Recent Writing Card */}
        <FadeIn delay={300}>
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover h-full">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <span className="text-primary text-sm">03.</span>
                  Writing
                </CardTitle>
                <Link href="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  View all →
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentPosts.map((post) => (
                  <Link key={post.href} href={post.href} className="block group/post">
                    <div className="flex items-center justify-between py-2 border-b border-border/50 group-hover/post:border-primary/30 transition-colors">
                      <span className="text-sm group-hover/post:text-primary transition-colors line-clamp-1 pr-2">
                        {post.title}
                      </span>
                      <span className="text-xs text-muted-foreground shrink-0">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Featured Project - Full Width */}
      <SlideIn direction="up" delay={400}>
        <Link href={featuredProject.href} className="block group">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden card-hover">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 h-24 md:h-auto rounded-lg bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center shrink-0">
                  <span className="text-4xl font-bold text-primary/50">A</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs border-primary/50 text-primary">Featured Project</Badge>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {featuredProject.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{featuredProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </SlideIn>

      {/* Gallery & Research Row */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Gallery Banner */}
        <FadeIn delay={500}>
          <Link href="/gallery/apps" className="block group">
            <Card className="h-full bg-gradient-to-br from-primary/10 via-card to-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden card-hover">
              <CardContent className="p-6 relative">
                <Badge className="mb-3">Visual</Badge>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  App Gallery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Production apps, experiments, and practical tools.
                </p>
                <span className="inline-block mt-3 text-sm text-primary">
                  Explore →
                </span>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              </CardContent>
            </Card>
          </Link>
        </FadeIn>

        {/* Research Card */}
        <FadeIn delay={600}>
          <Link href="/research" className="block group">
            <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">Research</Badge>
                  <span className="text-xs text-muted-foreground">AI & ML</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Research & Learning
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Exploring artificial intelligence and machine learning as part of my Master&apos;s studies at KOREATECH.
                </p>
                <span className="text-sm text-primary">View research →</span>
              </CardContent>
            </Card>
          </Link>
        </FadeIn>
      </div>

      {/* Quick Links Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Notes", href: "/notes", desc: "Quick tips" },
          { label: "Reading", href: "/reading", desc: "Book list" },
          { label: "Projects", href: "/projects", desc: "All work" },
          { label: "About", href: "/about", desc: "Bio & contact" },
        ].map((link, index) => (
          <FadeIn key={link.href} delay={700 + index * 50}>
            <Link href={link.href}>
              <Card className="bg-card border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group card-hover h-full">
                <CardContent className="p-4">
                  <p className="font-medium group-hover:text-primary transition-colors">{link.label}</p>
                  <p className="text-xs text-muted-foreground">{link.desc}</p>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* Newsletter Section */}
      <FadeIn delay={900}>
        <section className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold mb-1">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Get notified about new research, projects, and blog posts.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </FadeIn>

      {/* Footer Links */}
      <FadeIn delay={1000}>
        <section className="flex flex-wrap gap-4 pt-4 text-sm">
          <a href="https://github.com/salomondiei08" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/salomondiei" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="mailto:salomondiei08@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            Email
          </a>
        </section>
      </FadeIn>
    </div>
  );
}
