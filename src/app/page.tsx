import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { format } from "date-fns";
import { NewsletterForm } from "@/components/portfolio/NewsletterForm";
import { ProjectCard } from "@/components/site/ProjectCard";
import { portfolioProjects } from "@/lib/portfolio-data";
import { contactLinks, researchInterests, resumeHref } from "@/lib/profile-data";
import { getAllPosts } from "@/lib/markdown";

/** Projects shown on the home page, in this order. The rest live on /projects. */
const SELECTED_PROJECT_IDS = ["kernel", "oh-my-hermes", "aya"];

/** Headline numbers. Each one is backed by something stated elsewhere on the site. */
const highlights = [
  { value: "850+", label: "GitHub stars on Oh My Hermes" },
  { value: "$0 → $200K", label: "ARR built as CTO at Sikili" },
  { value: "200", label: "Aya learners in 3 days, no ads" },
  { value: "GKS", label: "Global Korea Scholarship, 2024" },
];

/**
 * Home-page section with a large heading and an optional "see all" link.
 * Interior pages use the quieter margin-label Section instead.
 */
function HomeSection({
  eyebrow,
  title,
  action,
  children,
}: {
  eyebrow: string;
  title: string;
  action?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border py-14 md:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 md:mb-10">
        <div className="space-y-2">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight sm:text-3xl">{title}</h2>
        </div>
        {action && (
          <Link
            href={action.href}
            className="inline-flex min-h-11 items-center font-sans text-sm text-primary hover:underline underline-offset-4"
          >
            {action.label} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

/**
 * Home page. Hero with portrait, headline numbers, research themes,
 * project cards with real screenshots, latest writing and a contact band.
 */
export default function Home() {
  const [latestPost, ...olderPosts] = getAllPosts("blog");
  const selectedProjects = SELECTED_PROJECT_IDS.map((id) =>
    portfolioProjects.find((project) => project.id === id)
  ).filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <>
      {/* Hero */}
      <section className="grid items-center gap-8 pb-14 pt-8 md:grid-cols-[1fr_16rem] md:gap-14 md:pb-20 md:pt-20 lg:grid-cols-[1fr_18rem]">
        <div className="order-2 min-w-0 space-y-7 md:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-sans text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            AI researcher · KOREATECH DICE Lab
          </p>

          <div className="space-y-5">
            <h1 className="text-[2.75rem] font-bold leading-[1.02] tracking-tight sm:text-6xl">Salomon Diei</h1>
            <p className="max-w-[34rem] font-sans text-xl leading-snug text-foreground sm:text-2xl">
              I study memory for AI agents: how an agent can keep what it learns from one task and do the next
              one better.
            </p>
          </div>

          <p className="max-w-[34rem] leading-relaxed text-muted-foreground">
            M.S. student in Artificial Intelligence at KOREATECH, working with Prof. Oh Heung Son. Previously CTO
            at Sikili and a mobile engineering lead in Côte d&apos;Ivoire.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/research"
              className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 font-sans text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Read my research
            </Link>
            <a
              href="mailto:salomondiei08@gmail.com"
              className="inline-flex min-h-11 items-center rounded-md border border-border px-5 font-sans text-sm font-medium hover:border-foreground/30 hover:bg-secondary transition-colors"
            >
              Get in touch
            </a>
            <ul className="flex flex-wrap gap-x-4 font-sans text-sm sm:ml-2">
              {contactLinks
                .filter((link) => link.external)
                .map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              <li>
                <a
                  href={resumeHref}
                  download="Salomon_Diei_Resume.pdf"
                  className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground"
                >
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src="/images/salomon.JPG"
            alt="Portrait of Salomon Diei"
            width={576}
            height={720}
            priority
            sizes="(max-width: 768px) 160px, 288px"
            className="aspect-[4/5] w-36 rounded-2xl border border-border object-cover sm:w-44 md:w-full"
          />
        </div>
      </section>

      {/* Highlights */}
      <dl className="mb-14 grid grid-cols-2 overflow-hidden rounded-xl border border-border md:mb-20 md:grid-cols-4">
        {highlights.map((item, index) => (
          <div
            key={item.label}
            className={`space-y-1 p-5 md:p-6 ${index % 2 === 1 ? "border-l border-border" : ""} ${
              index >= 2 ? "border-t border-border md:border-t-0" : ""
            } ${index === 2 ? "md:border-l" : ""}`}
          >
            <dt className="sr-only">{item.label}</dt>
            <dd className="font-sans text-2xl font-bold tracking-tight sm:text-3xl">{item.value}</dd>
            <dd className="font-sans text-sm leading-snug text-muted-foreground">{item.label}</dd>
          </div>
        ))}
      </dl>

      <HomeSection eyebrow="Research" title="Agents that remember" action={{ href: "/research", label: "Research statement" }}>
        <div className="grid gap-4 sm:grid-cols-2">
          {researchInterests.map((interest, index) => (
            <div key={interest.title} className="space-y-2 rounded-xl border border-border bg-card p-6">
              <p className="tabular font-sans text-sm text-primary">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-lg font-bold">{interest.title}</h3>
              <p className="leading-relaxed text-foreground/85">{interest.description}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection eyebrow="Selected work" title="Things I have built" action={{ href: "/projects", label: "All projects" }}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </HomeSection>

      {latestPost && (
        <HomeSection eyebrow="Writing" title="Latest notes" action={{ href: "/blog", label: "All posts" }}>
          <div className="grid gap-8 md:grid-cols-[1.25fr_1fr] md:gap-10">
            <Link href={`/blog/${latestPost.slug}`} className="group block space-y-4">
              {latestPost.coverImage && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
                  <Image
                    src={latestPost.coverImage}
                    alt={latestPost.coverAlt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
              )}
              <div className="space-y-2">
                <p className="tabular font-sans text-sm text-muted-foreground">
                  {format(new Date(latestPost.date), "MMMM d, yyyy")} · {latestPost.readingTime} min read
                </p>
                <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors sm:text-2xl">
                  {latestPost.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{latestPost.description}</p>
              </div>
            </Link>

            <ol className="divide-y divide-border border-y border-border md:self-start">
              {olderPosts.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block space-y-1 py-4">
                    <p className="tabular font-sans text-sm text-muted-foreground">
                      {format(new Date(post.date), "MMM yyyy")}
                    </p>
                    <p className="leading-snug group-hover:text-primary transition-colors">{post.title}</p>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </HomeSection>
      )}

      {/* Contact band */}
      <section className="mt-6 grid gap-8 rounded-2xl border border-border bg-card p-6 sm:p-10 md:grid-cols-2 md:items-center md:gap-12">
        <div className="space-y-3">
          <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight sm:text-3xl">Let&apos;s talk about agents</h2>
          <p className="leading-relaxed text-muted-foreground">
            I am happy to discuss agent memory, research collaborations, or anything I have written. Email is the
            fastest way to reach me.
          </p>
          <a href="mailto:salomondiei08@gmail.com" className="inline-flex min-h-11 items-center text-link font-sans">
            salomondiei08@gmail.com
          </a>
        </div>
        <div className="space-y-3">
          <p className="font-sans font-bold">Get new posts by email</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
