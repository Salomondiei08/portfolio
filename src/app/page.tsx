import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/portfolio/NewsletterForm";
import { FadeIn, SlideIn } from "@/components/portfolio/animations";
import { featuredProject, portfolioProjects } from "@/lib/portfolio-data";
import { getAllPosts } from "@/lib/markdown";

export default function Home() {
  const recentPosts = getAllPosts("blog").slice(0, 4).map((post) => ({
    title: post.title,
    date: format(new Date(post.date), "MMM d"),
    href: `/blog/${post.slug}`,
  }));

  const otherProjects = portfolioProjects.filter((p) => p.id !== featuredProject.id).slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="space-y-4 pb-2">
        <p className="text-muted-foreground">Hello, I&apos;m</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Salomon Diei</h1>
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-xl text-muted-foreground">AI Engineer & Researcher</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Building intelligent systems and researching memory for self-learning, evolving agents.
        </p>
        <div className="flex gap-4 text-sm pt-1">
          <a href="https://github.com/salomondiei08" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/salomondiei" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          <a href="mailto:salomondiei08@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Email</a>
          <a href="/Salomon_Academic_Resume.pdf" download="Salomon_Diei_Resume.pdf" className="text-muted-foreground hover:text-primary transition-colors">Resume</a>
        </div>
      </section>

      {/* Now + Writing */}
      <div className="grid md:grid-cols-2 gap-4">
        <FadeIn delay={100}>
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <span className="text-primary text-sm">01.</span>
                Now
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Assistant Researcher — KOREATECH</p>
                    <p className="text-xs text-muted-foreground">DICE Lab · memory systems for AI agents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">CTO — Sikili</p>
                    <p className="text-xs text-muted-foreground">Seed $800K · $0 → $200K ARR</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Open-source</p>
                    <p className="text-xs text-muted-foreground">Oh My Hermes · 400+ stars · Kernel</p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="inline-flex text-sm text-primary hover:underline">
                Full background →
              </Link>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={200}>
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <span className="text-primary text-sm">02.</span>
                  Writing
                </CardTitle>
                <Link href="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  View all →
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
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

      {/* Featured Project */}
      <SlideIn direction="up" delay={300}>
        <Link href={`/projects#${featuredProject.id}`} className="block group">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-base">OM</span>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs border-primary/50 text-primary">Featured</Badge>
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                      {featuredProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{featuredProject.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </SlideIn>

      {/* Research + More Projects */}
      <div className="grid md:grid-cols-2 gap-4">
        <FadeIn delay={400}>
          <Link href="/research" className="block group h-full">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <span className="text-primary text-sm">03.</span>
                  Research
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focused on agent memory — how AI systems retain, retrieve, and learn from context across sessions. Working in the DICE Lab with Prof. Oh Heung Son at KOREATECH.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Agent Memory", "Continuous Learning", "LLM Systems"].map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs px-1.5 py-0">{t}</Badge>
                  ))}
                </div>
                <span className="text-sm text-primary">View research →</span>
              </CardContent>
            </Card>
          </Link>
        </FadeIn>

        <FadeIn delay={450}>
          <Card className="bg-card border-border h-full">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <span className="text-primary text-sm">04.</span>
                  More Projects
                </CardTitle>
                <Link href="/projects" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  View all →
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {otherProjects.map((project) => (
                  <Link key={project.id} href={`/projects#${project.id}`} className="flex items-center gap-3 group/p">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
                      <span className="text-primary text-xs font-bold">
                        {project.title.split(" ").map((w: string) => w[0]).join("").slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium group-hover/p:text-primary transition-colors truncate">{project.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{project.tags.slice(0, 2).join(" · ")}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Newsletter */}
      <FadeIn delay={500}>
        <section className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold mb-1">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">New research, projects, and writing.</p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
