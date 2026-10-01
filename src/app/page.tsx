import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterForm } from "@/components/portfolio/NewsletterForm";
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-data";
import { getAllPosts } from "@/lib/markdown";

const nowItems = [
  { title: "Assistant Researcher, KOREATECH", detail: "DICE Lab, working on memory systems for AI agents" },
  { title: "M.S. in Artificial Intelligence, KOREATECH", detail: "Since September 2024" },
  { title: "Open source", detail: "Kernel and Oh My Hermes (850+ stars on GitHub)" },
];

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
 * Home page in the original sidebar-and-cards layout. Deliberately plain:
 * a real photo, first-person copy, real screenshots and no decorative
 * effects, so it reads as a person's site rather than a template.
 */
export default function Home() {
  const recentPosts = getAllPosts("blog").slice(0, 4);

  // Kernel is the project closest to my research, so it is featured
  const featured = portfolioProjects.find((p) => p.id === "kernel") ?? portfolioProjects[0];
  const otherProjects = portfolioProjects.filter((p) => p.id !== featured.id).slice(0, 3);

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

      {/* 01 Now + 02 Writing */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="h-full border-border bg-card">
          <CardHeader className="pb-0">
            <NumberedTitle index="01">Now</NumberedTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <ul className="space-y-4">
              {nowItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="text-[0.95rem] text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex min-h-11 items-center text-base text-primary hover:underline">
              Full background →
            </Link>
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

      {/* Featured project, with a real screenshot */}
      <Card className="overflow-hidden border-border bg-card py-0">
        <div className="grid md:grid-cols-[1fr_1.1fr]">
          <a href={featured.links[0]?.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="relative block aspect-[16/10] border-b border-border bg-muted md:aspect-auto md:border-b-0 md:border-r">
            {featured.cover && (
              <Image src={featured.cover} alt="" fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover object-top" />
            )}
          </a>
          <div className="space-y-3 p-6">
            <p className="text-sm font-medium text-primary">Featured project</p>
            <h3 className="text-2xl font-bold">{featured.title}</h3>
            <p className="text-base leading-relaxed text-foreground/90">{featured.description}</p>
            <p className="text-sm text-muted-foreground">{featured.tags.join(", ")}</p>
            <div className="flex flex-wrap gap-x-5">
              {featured.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-base font-medium text-primary hover:underline">
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* 03 Research + 04 More projects */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="h-full border-border bg-card">
          <CardHeader className="pb-0">
            <NumberedTitle index="03">Research</NumberedTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base leading-relaxed text-foreground/90">
              I look at how AI agents store, retrieve and learn from what happened in earlier sessions, and how they
              can judge their own work well enough to improve without a human checking every step.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              DICE Lab, KOREATECH, with Prof. Oh Heung Son.
            </p>
            <Link href="/research" className="inline-flex min-h-11 items-center text-base text-primary hover:underline">
              More about my research →
            </Link>
          </CardContent>
        </Card>

        <Card className="h-full border-border bg-card">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <NumberedTitle index="04">More projects</NumberedTitle>
              <Link href="/projects" className="inline-flex min-h-11 items-center text-[0.95rem] text-muted-foreground hover:text-primary transition-colors">
                View all →
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {otherProjects.map((project) => (
                <li key={project.id}>
                  <Link href={`/projects#${project.id}`} className="group flex items-center gap-4 rounded-lg py-2.5">
                    <ProjectThumb project={project} className="h-12 w-20" />
                    <span className="min-w-0">
                      <span className="block text-base font-semibold group-hover:text-primary transition-colors">{project.title}</span>
                      <span className="block text-sm text-muted-foreground">{project.summary}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Newsletter */}
      <section className="border-t border-border pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="mb-1 text-xl font-bold">Get new posts by email</h2>
            <p className="text-base text-muted-foreground">Usually about agents, research, or something I built.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
