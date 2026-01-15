import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentPosts = [
  {
    title: "Understanding Transformers: A Visual Guide",
    date: "Jan 20, 2024",
    href: "/blog/understanding-transformers",
  },
  {
    title: "Welcome to My Blog",
    date: "Jan 15, 2024",
    href: "/blog/welcome-to-my-blog",
  },
];

const featuredProjects = [
  {
    title: "Neural Architecture Search",
    description: "Automated neural network design using evolutionary algorithms.",
    tags: ["PyTorch", "AutoML"],
    href: "/projects",
  },
  {
    title: "LLM Fine-tuning Pipeline",
    description: "Production-ready pipeline for fine-tuning large language models.",
    tags: ["LLMs", "MLOps"],
    href: "/projects",
  },
];

const quickLinks = [
  { label: "Blog", href: "/blog", count: "2 posts" },
  { label: "Projects", href: "/projects", count: "6 projects" },
  { label: "Research", href: "/research", count: "4 papers" },
  { label: "Gallery", href: "/gallery", count: "8 apps" },
];

export default function Home() {
  return (
    <div className="max-w-4xl space-y-12">
      {/* Hero */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-muted-foreground">Hello, I&apos;m</p>
          <h1 className="text-4xl md:text-5xl font-bold">Your Name</h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <p className="text-xl text-muted-foreground">AI Engineer & Researcher</p>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Building intelligent systems and pushing the boundaries of what&apos;s possible
          with machine learning. Currently focused on large language models,
          computer vision, and multimodal AI systems.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-3">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Badge
                variant="secondary"
                className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {link.label}
                <span className="ml-2 text-muted-foreground text-xs">{link.count}</span>
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Writing */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Writing</h2>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View all →
          </Link>
        </div>

        <div className="space-y-2">
          {recentPosts.map((post) => (
            <Link key={post.href} href={post.href} className="block group">
              <div className="flex items-center justify-between py-3 border-b border-border hover:border-primary/50 transition-colors">
                <span className="font-medium group-hover:text-primary transition-colors">
                  {post.title}
                </span>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <Link key={project.title} href={project.href}>
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery Banner */}
      <Link href="/gallery" className="block group">
        <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-6 hover:border-primary/50 transition-all">
          <div className="relative z-10">
            <Badge className="mb-2">Vibe Coded</Badge>
            <h2 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              App Gallery
            </h2>
            <p className="text-sm text-muted-foreground">
              Quick experiments, creative tools, and fun side projects →
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        </div>
      </Link>

      {/* Connect */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Connect</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
