import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-data";
import { getAllPosts } from "@/lib/markdown";

/** Card title in the site's numbered style: "01. Now" */
function NumberedTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <CardTitle className="flex items-center gap-2.5 font-display text-xl font-bold">
      <span className="text-base text-primary">{index}.</span>
      {children}
    </CardTitle>
  );
}

/** Small real screenshot of a project, used in place of letter tiles. */
function ProjectThumb({ project, className = "" }: { project: PortfolioProject; className?: string }) {
  if (!project.cover) return null;
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-md border border-border bg-muted ${className}`}>
      <Image src={project.cover} alt="" fill sizes="160px" className="object-cover object-top" />
    </span>
  );
}

/**
 * Home page in the original sidebar-and-cards layout, kept short on
 * purpose: who I am (photo and two paragraphs), then three projects and
 * three posts. Everything else lives on its own page.
 */
export default function Home() {
  const recentPosts = getAllPosts("blog").slice(0, 3);

  // Kernel first: it is the project closest to my research
  const projects = ["kernel", "oh-my-hermes", "aya"]
    .map((id) => portfolioProjects.find((p) => p.id === id))
    .filter((p): p is PortfolioProject => Boolean(p));

  return (
    <div className="space-y-10">
      {/* Intro */}
      <section className="grid items-center gap-8 pt-2 md:grid-cols-[1fr_auto] md:gap-12">
        <div className="space-y-5">
          <p className="text-lg text-muted-foreground">Hello, I&apos;m</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Salomon Diei</h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <p className="font-display text-xl text-muted-foreground">AI Researcher</p>
          </div>
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
            <p>
              I&apos;m a researcher at KOREATECH in South Korea, where I work on memory for AI agents. Put simply:
              how do you get an agent to remember what it did yesterday, so it stops repeating the same mistakes?
            </p>
            <p className="text-muted-foreground">
              Before this I was CTO at Sikili and built mobile apps in Côte d&apos;Ivoire. I still build a lot.
              Most of my side projects are tools for coding agents, and I{" "}
              <Link href="/blog" className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                write about what I learn
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-base">
            <a href="mailto:salomondiei08@gmail.com" className="inline-flex min-h-11 items-center text-primary hover:underline">Email</a>
            <a href="https://github.com/salomondiei08" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/salomondiei" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="/Salomon_Academic_Resume.pdf" download="Salomon_Diei_Resume.pdf" className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground transition-colors">Resume</a>
          </div>
        </div>

        <Image
          src="/images/salomon.JPG"
          alt="Salomon Diei"
          width={480}
          height={600}
          priority
          sizes="(max-width: 768px) 176px, 240px"
          className="order-first aspect-[4/5] w-44 rounded-xl object-cover md:order-none md:w-60"
        />
      </section>

      {/* 01 Projects + 02 Writing: the only two blocks under the intro */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="h-full border-border bg-card">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <NumberedTitle index="01">Projects</NumberedTitle>
              <Link href="/projects" className="inline-flex min-h-11 items-center text-[0.95rem] text-muted-foreground hover:text-primary transition-colors">
                View all →
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.links[0]?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border-b border-border/60 py-3 last:border-0"
                  >
                    <ProjectThumb project={project} className="h-12 w-20" />
                    <span className="min-w-0">
                      <span className="block text-base font-semibold group-hover:text-primary transition-colors">{project.title}</span>
                      <span className="block text-sm text-muted-foreground">{project.summary}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="h-full border-border bg-card">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <NumberedTitle index="02">Writing</NumberedTitle>
              <Link href="/blog" className="inline-flex min-h-11 items-center text-[0.95rem] text-muted-foreground hover:text-primary transition-colors">
                View all →
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <ul>
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block border-b border-border/60 py-3 last:border-0">
                    <span className="block text-base leading-snug group-hover:text-primary transition-colors">{post.title}</span>
                    <span className="text-sm text-muted-foreground">{format(new Date(post.date), "MMMM d, yyyy")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
