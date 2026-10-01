import Image from "next/image";
import { PageHeader, Section } from "@/components/site/Section";
import { awards, contactLinks, education, experience, languages, resumeHref } from "@/lib/profile-data";

export const metadata = {
  title: "About Salomon Diei | AI Engineer & Autonomous Agents Researcher",
  description: "Salomon Diei is an AI researcher at KOREATECH working on memory for autonomous agents, and former CTO at Sikili.",
  alternates: {
    canonical: "https://salomondiei.com/about",
  },
};

/**
 * About page, structured like a short CV: a prose bio, then dated rows
 * for experience, education and awards. Dates sit in a narrow column so
 * the eye can run down them.
 */
export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Salomon Diei">
        <p>
          AI researcher and engineer based in Cheonan, South Korea. I work on making AI agents more capable and
          more efficient, so they can take on real human work.
        </p>
      </PageHeader>

      <Section label="Biography" id="bio">
        <div className="grid gap-8 sm:grid-cols-[1fr_9rem]">
          <div className="max-w-[36rem] space-y-5 leading-relaxed">
            <p>
              I started out in Côte d&apos;Ivoire, where I studied software engineering and spent several years
              shipping mobile and backend products, leading a mobile team and winning a few hackathons along the
              way. In 2024 I moved to South Korea on a Global Korea Scholarship to study artificial intelligence
              at KOREATECH.
            </p>
            <p>
              Today I focus on research. In the DICE Lab I study memory for autonomous agents. Until 2026 I was CTO
              at Sikili, where I led technical strategy and built the agentic systems the company ran on. That
              work showed me where agents fail in production, and it shapes the problems I study now.
            </p>
            <p>
              I am a Google Cloud Certified Associate Cloud Engineer, and I speak {languages.join(", ").replace(/, ([^,]*)$/, " and $1")}.
            </p>
          </div>
          <Image
            src="/images/salomon.JPG"
            alt="Portrait of Salomon Diei"
            width={144}
            height={180}
            className="hidden h-44 w-36 rounded-md object-cover sm:block"
          />
        </div>
      </Section>

      <Section label="Experience" id="experience">
        <ol className="space-y-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="grid gap-x-6 gap-y-1 sm:grid-cols-[7rem_1fr]">
              <p className="tabular font-sans text-sm text-muted-foreground sm:pt-1">{job.period}</p>
              <div className="space-y-1">
                <h3 className="font-bold leading-snug">
                  {job.role}
                  <span className="font-normal text-muted-foreground">, {job.company}</span>
                </h3>
                <p className="font-sans text-sm text-muted-foreground">{job.location}</p>
                <p className="max-w-[36rem] leading-relaxed text-foreground/85">{job.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Education" id="education">
        <ol className="space-y-6">
          {education.map((item) => (
            <li key={item.degree} className="grid gap-x-6 gap-y-1 sm:grid-cols-[7rem_1fr]">
              <p className="tabular font-sans text-sm text-muted-foreground sm:pt-1">{item.period}</p>
              <div className="space-y-1">
                <h3 className="font-bold leading-snug">{item.degree}</h3>
                <p className="text-foreground/85">{item.school}</p>
                <p className="font-sans text-sm text-muted-foreground">{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Honours" id="honours">
        <ol className="space-y-3">
          {awards.map((award) => (
            <li key={award.title} className="grid gap-x-6 sm:grid-cols-[7rem_1fr]">
              <p className="tabular font-sans text-sm text-muted-foreground sm:pt-0.5">{award.year}</p>
              <p className="leading-relaxed">{award.title}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Contact" id="contact">
        <ul className="space-y-1">
          {contactLinks.map((link) => (
            <li key={link.href} className="grid gap-x-6 sm:grid-cols-[7rem_1fr] sm:items-baseline">
              <p className="font-sans text-sm text-muted-foreground">{link.label}</p>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex min-h-11 items-center text-link sm:min-h-0 sm:py-1.5"
              >
                {link.handle}
              </a>
            </li>
          ))}
          <li className="grid gap-x-6 sm:grid-cols-[7rem_1fr] sm:items-baseline">
            <p className="font-sans text-sm text-muted-foreground">CV</p>
            <a href={resumeHref} download="Salomon_Diei_Resume.pdf" className="inline-flex min-h-11 items-center text-link sm:min-h-0 sm:py-1.5">
              Download PDF
            </a>
          </li>
        </ul>
      </Section>
    </>
  );
}
