import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { NewsletterForm } from "@/components/portfolio/NewsletterForm";
import { Entry, Section } from "@/components/site/Section";
import { portfolioProjects } from "@/lib/portfolio-data";
import { contactLinks, nowItems, researchInterests, resumeHref } from "@/lib/profile-data";
import { getAllPosts } from "@/lib/markdown";

/** Projects shown on the home page, in this order. The rest live on /projects. */
const SELECTED_PROJECT_IDS = ["kernel", "oh-my-hermes", "aya"];

/**
 * Home page, laid out like an academic homepage: who I am and what I
 * study first, then current roles, research themes, selected work and
 * recent writing. Each block is a labelled Section in one reading column.
 */
export default function Home() {
  const recentPosts = getAllPosts("blog").slice(0, 5);
  const selectedProjects = SELECTED_PROJECT_IDS.map((id) =>
    portfolioProjects.find((project) => project.id === id)
  ).filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <>
      {/* Introduction */}
      <section className="grid gap-6 pb-12 pt-8 md:grid-cols-[9rem_1fr] md:gap-10 md:pb-16 md:pt-16">
        <div>
          <Image
            src="/images/salomon.JPG"
            alt="Portrait of Salomon Diei"
            width={144}
            height={144}
            priority
            className="h-24 w-24 rounded-full object-cover md:h-36 md:w-36"
          />
        </div>
        <div className="min-w-0 space-y-6">
          <div className="space-y-2">
            <h1 className="text-[2.25rem] font-bold leading-[1.1] tracking-tight sm:text-5xl">Salomon Diei</h1>
            <p className="font-sans text-muted-foreground">AI researcher · KOREATECH DICE Lab</p>
          </div>

          <p className="max-w-[36rem] text-xl leading-relaxed sm:text-[1.375rem]">
            I study memory for AI agents: how an agent can keep what it learns from one task and use it to do
            the next one better.
          </p>

          <div className="max-w-[36rem] space-y-4 leading-relaxed text-foreground/85">
            <p>
              I am an M.S. student in Artificial Intelligence at KOREATECH in South Korea, where I work in the
              DICE Lab with Prof. Oh Heung Son. My research looks at memory architectures, self-evaluation and
              long-horizon behaviour in autonomous agents.
            </p>
            <p>
              Until 2026 I was CTO at Sikili, where I built the agentic tools and automation that took the
              company from $0 to $200K ARR in its first year. Before that I built mobile and backend software in
              Côte d&apos;Ivoire. I write about what I learn on{" "}
              <Link href="/blog" className="text-link">my blog</Link>.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-5 font-sans text-sm">
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex min-h-11 items-center text-primary hover:underline underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeHref}
                download="Salomon_Diei_Resume.pdf"
                className="inline-flex min-h-11 items-center text-primary hover:underline underline-offset-4"
              >
                CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Section label="Now" id="now">
        <ul className="space-y-5">
          {nowItems.map((item) => (
            <li key={item.role}>
              <p className="font-sans font-bold">
                {item.role}
                <span className="font-normal text-muted-foreground">, {item.place}</span>
              </p>
              <p className="text-foreground/85">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Research" id="research" action={{ href: "/research", label: "Research statement" }}>
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {researchInterests.map((interest) => (
            <div key={interest.title} className="space-y-1">
              <dt className="font-sans font-bold">{interest.title}</dt>
              <dd className="leading-relaxed text-foreground/85">{interest.description}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Selected work" id="work" action={{ href: "/projects", label: "All projects" }}>
        <div className="space-y-8">
          {selectedProjects.map((project) => (
            <Entry
              key={project.id}
              title={project.title}
              meta={project.tags.slice(0, 3).join(" · ")}
              links={project.links}
            >
              <p>{project.description}</p>
            </Entry>
          ))}
        </div>
      </Section>

      <Section label="Writing" id="writing" action={{ href: "/blog", label: "All posts" }}>
        <ol className="divide-y divide-border">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-x-6 gap-y-1 py-3 sm:grid-cols-[6.5rem_1fr] sm:items-baseline"
              >
                <time dateTime={post.date} className="tabular font-sans text-sm text-muted-foreground">
                  {format(new Date(post.date), "MMM yyyy")}
                </time>
                <span className="leading-snug group-hover:text-primary transition-colors">{post.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Contact" id="contact">
        <div className="max-w-[36rem] space-y-6">
          <p className="leading-relaxed text-foreground/85">
            Email is the best way to reach me. I am always happy to talk about agent memory, possible research
            collaborations, or anything I have written. You can also get new posts and research notes by email.
          </p>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}
