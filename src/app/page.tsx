import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/portfolio/NewsletterForm";
import { FadeIn } from "@/components/portfolio/animations";
import { HeroGlow, SpotlightGroup } from "@/components/portfolio/Spotlight";
import { BookOpenText, Boxes, FlaskConical } from "lucide-react";
import { portfolioProjects } from "@/lib/portfolio-data";
import { getAllPosts } from "@/lib/markdown";

/** The three things I do, research first. Shown as one strip under the hero. */
const focusAreas = [
  {
    label: "Research",
    Icon: FlaskConical,
    title: "Memory for AI agents",
    body: "At KOREATECH's DICE Lab I study how agents keep what they learn across sessions and get better at a task over time.",
    href: "/research",
    cta: "Research",
  },
  {
    label: "Build",
    Icon: Boxes,
    title: "Open-source agent tools",
    body: "Kernel gives coding agents shared memory. Oh My Hermes turns Hermes Agent into a workflow for shipping apps.",
    href: "/projects",
    cta: "Projects",
  },
  {
    label: "Write",
    Icon: BookOpenText,
    title: "Notes from the field",
    body: "Essays on agents, papers I am reading and what breaks when you put AI into production.",
    href: "/blog",
    cta: "Blog",
  },
];

const nowItems = [
  { title: "Assistant Researcher — KOREATECH", detail: "DICE Lab · memory systems for AI agents", strong: true },
  { title: "M.S. Artificial Intelligence — KOREATECH", detail: "Since September 2024", strong: true },
  { title: "Open source", detail: "Kernel · Oh My Hermes (850+ stars)", strong: false },
];

const researchTopics = ["Agent memory", "Continual learning", "Self-evaluation", "LLM systems"];

/** Hero statement, split so each word can blur in on its own beat. */
const statementBefore = "I research";
const statementKey = "memory for AI agents";
const statementAfter = ": how an agent keeps what it learns from one task and does the next one better.";

function Words({ text, offset }: { text: string; offset: number }) {
  return (
    <>
      {text.split(" ").filter(Boolean).map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="word" style={{ ["--i" as string]: offset + index }}>
            {word}
          </span>{" "}
        </span>
      ))}
    </>
  );
}

/** Card title in the site's numbered style: "01. Now" */
function NumberedTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <CardTitle className="flex items-center gap-2.5 font-display text-xl font-bold">
      <span className="text-base text-primary">{index}.</span>
      {children}
    </CardTitle>
  );
}

/**
 * Home page in the original sidebar-and-cards layout, tuned for reading:
 * a hero that says plainly what I research, a three-part "what I do"
 * strip, then the numbered cards. All body copy is 16px or larger.
 */
export default function Home() {
  const recentPosts = getAllPosts("blog").slice(0, 4).map((post) => ({
    title: post.title,
    date: format(new Date(post.date), "yyyy-MM-dd"),
    href: `/blog/${post.slug}`,
  }));

  // Kernel is the project closest to the research focus, so it is featured
  const featured = portfolioProjects.find((p) => p.id === "kernel") ?? portfolioProjects[0];
  const otherProjects = portfolioProjects.filter((p) => p.id !== featured.id).slice(0, 3);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <HeroGlow>
        <section className="space-y-5 pb-2 pt-2">
          <p className="rise text-lg text-muted-foreground" style={{ ["--i" as string]: 0 }}>Hello, I&apos;m</p>
          <h1 className="rise text-5xl font-bold tracking-[-0.03em] md:text-7xl" style={{ ["--i" as string]: 1 }}>
            Salomon Diei
          </h1>
          <div className="rise flex items-center gap-3" style={{ ["--i" as string]: 2 }}>
            <div className="grow-rule h-0.5 w-12 rounded-full bg-primary" />
            <p className="font-display text-xl text-muted-foreground">AI Researcher · Agent Memory</p>
          </div>
          <p className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.01em] text-foreground md:text-[2rem] md:leading-[1.25]">
            <span className="sr-only">{statementBefore} {statementKey}{statementAfter}</span>
            <span aria-hidden="true">
              <Words text={statementBefore} offset={0} />
              <span className="word draw-underline text-primary" style={{ ["--i" as string]: 2 }}>{statementKey}</span>
              <span className="word" style={{ ["--i" as string]: 3 }}>:</span>{" "}
              <Words text={statementAfter.replace(/^:\s*/, "")} offset={4} />
            </span>
          </p>
          <p className="rise max-w-2xl text-lg leading-relaxed text-muted-foreground" style={{ ["--i" as string]: 8 }}>
            M.S. student at KOREATECH, previously CTO at Sikili. I also build open-source tools for agents and write
            about what I learn.
          </p>
          <div className="rise flex flex-wrap items-center gap-x-6 gap-y-1 text-base" style={{ ["--i" as string]: 9 }}>
            <Link
              href="/research"
              className="mr-1 inline-flex min-h-11 items-center rounded-lg bg-primary px-5 font-semibold text-primary-foreground shadow-[0_0_0_1px_rgb(74_222_128/0.4),0_8px_24px_-8px_rgb(74_222_128/0.45)] hover:brightness-110 transition"
            >
              Read the research →
            </Link>
            <a href="https://github.com/salomondiei08" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/salomondiei" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:salomondiei08@gmail.com" className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground transition-colors">Email</a>
            <a href="/Salomon_Academic_Resume.pdf" download="Salomon_Diei_Resume.pdf" className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground transition-colors">Resume</a>
          </div>
        </section>
      </HeroGlow>

      {/* What I do: research leads, building and writing support it */}
      <SpotlightGroup className="space-y-10">
      <section aria-label="What I do" className="rise grid gap-4 md:grid-cols-3" style={{ ["--i" as string]: 10 }}>
        {focusAreas.map(({ Icon, ...area }, index) => (
          <Link
            key={area.label}
            href={area.href}
            className={`spotlight group block rounded-xl border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 ${
              index === 0 ? "border-primary/45" : "border-border"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="mono text-sm font-medium uppercase tracking-wider text-primary">{area.label}</p>
            </div>
            <h2 className="mt-2 text-xl font-bold">{area.title}</h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{area.body}</p>
            <p className="mt-4 text-base font-medium text-primary">
              {area.cta} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </p>
          </Link>
        ))}
      </section>

      {/* 01 Now + 02 Writing */}
      <div className="grid gap-4 md:grid-cols-2">
        <FadeIn delay={100}>
          <Card className="spotlight h-full border-border bg-card">
            <CardHeader className="pb-2">
              <NumberedTitle index="01">Now</NumberedTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <ul className="space-y-4">
                {nowItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${item.strong ? "bg-primary" : "bg-primary/40"}`} />
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
        </FadeIn>

        <FadeIn delay={200}>
          <Card className="spotlight h-full border-border bg-card">
            <CardHeader className="pb-2">
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
                  <li key={post.href}>
                    <Link href={post.href} className="group/post block border-b border-border/60 py-3 last:border-0">
                      <span className="block text-base leading-snug group-hover/post:text-primary transition-colors">
                        {post.title}
                      </span>
                      <span className="mono text-sm text-muted-foreground">{post.date}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Featured project */}
      <FadeIn delay={250}>
        <Card className="spotlight border-border bg-card">
          <CardContent className="p-6">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary">
                <span className="font-display text-lg font-bold text-primary">
                  {featured.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="border-primary/50 text-sm text-primary">Featured</Badge>
                  <h3 className="text-xl font-bold">{featured.title}</h3>
                </div>
                <p className="max-w-3xl text-base leading-relaxed text-foreground/90">{featured.description}</p>
                <p className="text-sm text-muted-foreground">{featured.tags.join(" · ")}</p>
                <div className="flex flex-wrap gap-x-5">
                  {featured.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-base font-medium text-primary hover:underline">
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* 03 Research + 04 More projects */}
      <div className="grid gap-4 md:grid-cols-2">
        <FadeIn delay={300}>
          <Link href="/research" className="group block h-full">
            <Card className="spotlight h-full border-border bg-card">
              <CardHeader className="pb-2">
                <NumberedTitle index="03">Research</NumberedTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base leading-relaxed text-foreground/90">
                  How AI systems retain, retrieve and learn from context across sessions. Working in the DICE Lab
                  with Prof. Oh Heung Son at KOREATECH.
                </p>
                <div className="flex flex-wrap gap-2">
                  {researchTopics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="px-2.5 py-1 text-sm font-normal">{topic}</Badge>
                  ))}
                </div>
                <span className="inline-flex min-h-11 items-center text-base text-primary">View research →</span>
              </CardContent>
            </Card>
          </Link>
        </FadeIn>

        <FadeIn delay={350}>
          <Card className="spotlight h-full border-border bg-card">
            <CardHeader className="pb-2">
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
                    <Link href={`/projects#${project.id}`} className="group/p flex min-h-14 items-center gap-3 rounded-lg py-2">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                        <span className="font-display text-sm font-bold text-primary">
                          {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-semibold group-hover/p:text-primary transition-colors">{project.title}</span>
                        <span className="block text-sm text-muted-foreground">{project.summary}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      </SpotlightGroup>

      {/* Newsletter */}
      <section className="border-t border-border pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="mb-1 text-xl font-bold">Stay updated</h2>
            <p className="text-base text-muted-foreground">New research, projects and writing.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
