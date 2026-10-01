import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { format } from "date-fns";
import { NewsletterForm } from "@/components/portfolio/NewsletterForm";
import { MemoryGraph } from "@/components/portfolio/MemoryGraph";
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-data";
import { getAllPosts } from "@/lib/markdown";

/** Headline numbers, shown as a log-style readout under the hero. */
const readout = [
  { value: "850+", label: "GitHub stars, Oh My Hermes" },
  { value: "$0 → $200K", label: "ARR built as CTO, Sikili" },
  { value: "5+ years", label: "Shipping software since 2021" },
  { value: "FR · EN · KO", label: "Languages I work in" },
];

const researchThemes = [
  {
    title: "Agent memory",
    body: "Persistent memory that lets an agent keep context, recall past episodes and reuse what it learned instead of starting from scratch.",
  },
  {
    title: "Continual self-improvement",
    body: "Feedback loops where agents judge their own work, notice repeated failures and change their behaviour over time.",
  },
  {
    title: "Agent efficiency",
    body: "Better tool use and fewer wasted steps, so long tasks finish reliably and at lower cost.",
  },
  {
    title: "Autonomous research agents",
    body: "Agents that propose hypotheses, run experiments and write up what they found, with little supervision.",
  },
];

/**
 * Numbered section heading in the site's original "01. Title" style,
 * with a rule that runs to the edge and an optional "view all" link.
 */
function SectionHeading({ index, title, href, linkLabel }: { index: string; title: string; href?: string; linkLabel?: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="flex items-baseline gap-3 text-2xl font-bold sm:text-[1.75rem]">
        <span className="mono text-base font-normal text-primary">{index}</span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" aria-hidden="true" />
      {href && (
        <Link href={href} className="inline-flex min-h-11 items-center text-[0.95rem] text-muted-foreground hover:text-primary transition-colors">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

/** Shared surface for panels: neutral card, hairline border, no green fills. */
function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-card ${className}`}>{children}</div>;
}

function ProjectLinks({ project }: { project: PortfolioProject }) {
  return (
    <div className="flex flex-wrap gap-x-5">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-[0.95rem] font-medium text-primary hover:underline underline-offset-4"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

/** CSS custom property for the staged hero entrance (see .rise in globals.css). */
const step = (i: number) => ({ ["--i" as string]: i });

/**
 * Home page as a research notebook: a hero with a live figure of agent
 * memory, a readout of numbers, then numbered sections. Body text is kept
 * at 16 to 18px with high-contrast greys so everything reads easily.
 */
export default function Home() {
  const [latestPost, ...olderPosts] = getAllPosts("blog");
  const byId = (id: string) => portfolioProjects.find((project) => project.id === id);
  const kernel = byId("kernel");
  const secondary = ["oh-my-hermes", "aya"].map(byId).filter((p): p is PortfolioProject => Boolean(p));

  return (
    <div className="space-y-20 pb-8 sm:space-y-24">
      {/* Hero */}
      <section className="grid items-center gap-10 pt-4 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-10">
        <div className="space-y-7">
          <p className="rise inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-muted-foreground" style={step(0)}>
            <span className="status-dot" aria-hidden="true" />
            Assistant Researcher · KOREATECH DICE Lab
          </p>

          <h1 className="rise text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl" style={step(1)}>
            Salomon Diei
          </h1>

          <p className="rise max-w-[34rem] text-xl leading-relaxed text-foreground sm:text-[1.375rem]" style={step(2)}>
            I research <span className="text-primary">memory for AI agents</span>: how an agent keeps what it learns
            from one task and does the next one better.
          </p>

          <p className="rise max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted-foreground" style={step(3)}>
            M.S. student in Artificial Intelligence at KOREATECH. Before research I was CTO at Sikili and led
            mobile teams in Côte d&apos;Ivoire, so I study agents with production failures in mind.
          </p>

          <div className="rise flex flex-wrap items-center gap-3" style={step(4)}>
            <Link
              href="/research"
              className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 text-[0.95rem] font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Read the research
            </Link>
            <a
              href="mailto:salomondiei08@gmail.com"
              className="inline-flex min-h-11 items-center rounded-lg border border-border bg-card px-5 text-[0.95rem] font-medium hover:border-foreground/30 transition-colors"
            >
              Email me
            </a>
            <div className="flex gap-4 pl-1 text-[0.95rem] text-muted-foreground">
              <a href="https://github.com/salomondiei08" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-foreground">GitHub</a>
              <a href="https://linkedin.com/in/salomondiei" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-foreground">LinkedIn</a>
              <a href="/Salomon_Academic_Resume.pdf" download="Salomon_Diei_Resume.pdf" className="inline-flex min-h-11 items-center hover:text-foreground">CV</a>
            </div>
          </div>
        </div>

        {/* Fig. 1 */}
        <figure className="rise" style={step(3)}>
          <Panel className="overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="eyebrow">Fig. 1</span>
              <span className="mono text-xs text-muted-foreground">agent.memory / live</span>
            </div>
            <MemoryGraph className="aspect-[4/3] w-full" />
          </Panel>
          <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Episodes form across four sessions. Each <span className="text-primary">green arc</span> is the agent
            recalling an earlier episode to solve a new one. That recall is what my research tries to make reliable.
          </figcaption>
        </figure>
      </section>

      {/* Readout */}
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
        {readout.map((item) => (
          <div key={item.label} className="bg-card px-5 py-5 sm:px-6">
            <dt className="sr-only">{item.label}</dt>
            <dd className="font-display text-2xl font-bold tracking-tight sm:text-[1.75rem]">{item.value}</dd>
            <dd className="mt-1 text-sm text-muted-foreground">{item.label}</dd>
          </div>
        ))}
      </dl>

      {/* 01 Research */}
      <section>
        <SectionHeading index="01" title="Research" href="/research" linkLabel="Research statement" />
        <div className="grid gap-4 sm:grid-cols-2">
          {researchThemes.map((theme, index) => (
            <Panel key={theme.title} className="p-6">
              <p className="mono text-sm text-primary">R{index + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{theme.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{theme.body}</p>
            </Panel>
          ))}
        </div>
      </section>

      {/* 02 Selected work */}
      <section>
        <SectionHeading index="02" title="Selected work" href="/projects" linkLabel="All projects" />
        <div className="space-y-4">
          {kernel && (
            <Panel className="grid overflow-hidden md:grid-cols-[1.15fr_1fr]">
              <a href={kernel.links[0]?.href} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[16/10] overflow-hidden border-b border-border bg-muted md:aspect-auto md:min-h-[300px] md:border-b-0 md:border-r" tabIndex={-1} aria-hidden="true">
                {kernel.cover && (
                  <Image src={kernel.cover} alt="" fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none" />
                )}
              </a>
              <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
                <p className="eyebrow">Featured · Agent memory</p>
                <h3 className="text-2xl font-bold">{kernel.title}</h3>
                <p className="text-[1.0625rem] leading-relaxed text-foreground/90">{kernel.description}</p>
                <p className="text-sm text-muted-foreground">{kernel.tags.join(" · ")}</p>
                <ProjectLinks project={kernel} />
              </div>
            </Panel>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {secondary.map((project) => (
              <Panel key={project.id} className="flex flex-col overflow-hidden">
                <a href={project.links[0]?.href} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[16/9] overflow-hidden border-b border-border bg-muted" tabIndex={-1} aria-hidden="true">
                  {project.cover && (
                    <Image src={project.cover} alt="" fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none" />
                  )}
                </a>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="leading-relaxed text-foreground/90">{project.summary}</p>
                  <p className="text-sm text-muted-foreground">{project.tags.slice(0, 3).join(" · ")}</p>
                  <div className="mt-auto">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Writing */}
      {latestPost && (
        <section>
          <SectionHeading index="03" title="Writing" href="/blog" linkLabel="All posts" />
          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <Link href={`/blog/${latestPost.slug}`} className="group block">
              <Panel className="h-full overflow-hidden transition-colors group-hover:border-foreground/25">
                {latestPost.coverImage && (
                  <div className="relative aspect-[16/8] overflow-hidden border-b border-border bg-muted">
                    <Image src={latestPost.coverImage} alt={latestPost.coverAlt || ""} fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
                  </div>
                )}
                <div className="space-y-2 p-6">
                  <p className="mono text-sm text-muted-foreground">
                    {format(new Date(latestPost.date), "yyyy-MM-dd")} · {latestPost.readingTime} min
                  </p>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">{latestPost.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{latestPost.description}</p>
                </div>
              </Panel>
            </Link>

            <Panel className="p-2">
              <ol>
                {olderPosts.slice(0, 4).map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group block rounded-xl px-4 py-4 hover:bg-secondary transition-colors">
                      <p className="mono text-sm text-muted-foreground">{format(new Date(post.date), "yyyy-MM-dd")}</p>
                      <p className="mt-1 text-[1.0625rem] font-medium leading-snug group-hover:text-primary transition-colors">{post.title}</p>
                    </Link>
                  </li>
                ))}
              </ol>
            </Panel>
          </div>
        </section>
      )}

      {/* Contact */}
      <Panel className="grid gap-8 p-6 sm:p-10 md:grid-cols-2 md:items-center">
        <div className="space-y-3">
          <p className="eyebrow">04 · Contact</p>
          <h2 className="text-2xl font-bold sm:text-3xl">Working on agent memory too?</h2>
          <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">
            I am always happy to compare notes, collaborate or talk about anything I have written.
          </p>
          <a href="mailto:salomondiei08@gmail.com" className="inline-flex min-h-11 items-center text-[1.0625rem] font-medium text-primary hover:underline underline-offset-4">
            salomondiei08@gmail.com
          </a>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">New posts and research notes by email</p>
          <NewsletterForm />
        </div>
      </Panel>
    </div>
  );
}
