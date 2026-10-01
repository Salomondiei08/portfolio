import { Entry, PageHeader, Section } from "@/components/site/Section";
import { researchInterests } from "@/lib/profile-data";

export const metadata = {
  title: "Research | Salomon Diei - Autonomous Agents",
  description: "Research focused on building AI agent memory systems that enable agents to learn, continuously improve, and operate autonomously over time.",
  alternates: {
    canonical: "https://salomondiei.com/research",
  },
};

/** Open questions that guide the work. Order matters: each builds on the last. */
const openQuestions = [
  "What should an agent remember from a task, and in what form, so that it is still useful weeks later?",
  "How can the right memory be surfaced at the right moment without flooding the context window?",
  "Can an agent score its own outputs reliably enough to change its strategy without human feedback?",
  "What does it take for an agent to plan, execute and learn from tasks that span several days?",
];

/**
 * Research page written as a short research statement: motivation,
 * open questions, themes, projects and lab. Prose first, lists second.
 */
export default function ResearchPage() {
  return (
    <>
      <PageHeader eyebrow="Research" title="Agents that learn from experience">
        <p>
          Today&apos;s AI agents are capable but forgetful. Each session starts from zero, and the same mistake
          can be made a hundred times. I work on giving agents memory, so they can retain what they learn,
          correct themselves and improve over time.
        </p>
      </PageHeader>

      <Section label="Statement" id="statement">
        <div className="max-w-[38rem] space-y-5 leading-relaxed">
          <p>
            Most progress in agents has come from better models and better tools. Much less attention has gone
            to what an agent keeps between runs. A human engineer who fixes a bug remembers the fix, the context
            and the dead ends. An agent usually remembers none of it.
          </p>
          <p>
            My research treats memory as a first-class part of the agent. I study architectures that persist
            knowledge across sessions, retrieval methods that bring back the right experience at the right time,
            and evaluation loops in which agents judge their own work and adjust. The long-term goal is agents
            that are not only reactive, but measurably better at a job after doing it many times.
          </p>
          <p>
            I approach this from both sides. In the lab I build and evaluate memory systems. In industry I deploy
            agents on real operational work, which keeps the research grounded in failures that actually happen.
          </p>
        </div>
      </Section>

      <Section label="Open questions" id="questions">
        <ol className="max-w-[38rem] space-y-4">
          {openQuestions.map((question, index) => (
            <li key={question} className="grid grid-cols-[2rem_1fr] gap-2 leading-relaxed">
              <span className="tabular font-sans text-sm text-primary pt-1">{String(index + 1).padStart(2, "0")}</span>
              <span>{question}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section label="Themes" id="themes">
        <dl className="max-w-[38rem] space-y-6">
          {researchInterests.map((interest) => (
            <div key={interest.title} className="space-y-1">
              <dt className="font-sans font-bold">{interest.title}</dt>
              <dd className="leading-relaxed text-foreground/85">{interest.description}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Projects" id="projects">
        <div className="max-w-[38rem] space-y-8">
          <Entry
            title="The AI Researcher"
            meta="Autonomous agents · Memory · Experimentation"
            links={[{ label: "GitHub", href: "https://github.com/Salomondiei08/The-AI-Researcher" }]}
          >
            <p>
              An end-to-end research assistant that takes a problem statement, proposes hypotheses, runs
              structured experiments and writes up the results, retaining what it learns across runs.
            </p>
          </Entry>
          <Entry
            title="Kernel"
            meta="Agent memory · Open source"
            links={[
              { label: "Website", href: "https://www.usekernel.dev/" },
              { label: "GitHub", href: "https://github.com/Salomondiei08/kernel-agent-memory" },
            ]}
          >
            <p>
              A shared memory layer for AI agents. Kernel gives agents persistent, structured memory so they can
              recall context and collaborate across sessions.
            </p>
          </Entry>
        </div>
      </Section>

      <Section label="Lab" id="lab">
        <div className="max-w-[38rem] space-y-2 leading-relaxed">
          <p className="font-sans font-bold">DICE Lab, KOREATECH</p>
          <p className="text-foreground/85">
            Korea University of Technology and Education, Cheonan, South Korea. Advised by Prof. Oh Heung Son.
          </p>
          <p className="text-foreground/85">
            If you work on agent memory or continual learning and would like to compare notes, please{" "}
            <a href="mailto:salomondiei08@gmail.com" className="text-link">write to me</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
