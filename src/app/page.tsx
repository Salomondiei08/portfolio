import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/portfolio/NewsletterForm";
import { FadeIn, SlideIn } from "@/components/portfolio/animations";
import { featuredProject } from "@/lib/portfolio-data";
import { getAllPosts } from "@/lib/markdown";

export default function Home() {
  const recentPosts = getAllPosts("blog").slice(0, 4).map((post) => ({
    title: post.title,
    date: format(new Date(post.date), "MMM d"),
    href: `/blog/${post.slug}`,
  }));

  return (
    <div className="space-y-8">
      {/* Hero Section — rendered immediately (no animation wrapper) so the h1 is the LCP element */}
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
          Building intelligent systems and researching memory for self-learning, evolving agents.
        </p>
      </section>

      {/* Top Cards: About + Writing */}
      <div className="grid md:grid-cols-2 gap-4">
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
                Passionate about building impactful tech. Focused on making AI agents truly autonomous — one agent at a time.
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

        {/* Recent Writing Card */}
        <FadeIn delay={200}>
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover h-full">
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
      <SlideIn direction="up" delay={300}>
        <Link href={`/projects#${featuredProject.id}`} className="block group">
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

      {/* Research Card */}
      <FadeIn delay={400}>
        <Link href="/research" className="block group">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">Research</Badge>
                <span className="text-xs text-muted-foreground">AI & ML</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Autonomous Agent Research
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Researching how to make AI agents more efficient and automate human work, with focus on autonomous researcher and coding agents.
              </p>
              <span className="text-sm text-primary">View research →</span>
            </CardContent>
          </Card>
        </Link>
      </FadeIn>

      {/* Newsletter Section */}
      <FadeIn delay={500}>
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
      <FadeIn delay={600}>
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
