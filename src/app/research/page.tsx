import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Research | Salomon Diei - Autonomous Agents",
  description: "Research focused on building AI agent memory systems that enable agents to learn, continuously improve, and operate autonomously over time.",
  alternates: {
    canonical: "https://salomondiei.com/research",
  },
};

export default function ResearchPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Research</h1>
        <p className="text-muted-foreground max-w-2xl">
          I am researching how to make AI agents truly autonomous — not just reactive, but capable of
          learning from their own experience and improving over time. The focus is on memory, self-correction,
          and long-horizon reasoning.
        </p>
      </div>

      {/* Current Focus */}
      <Card className="bg-gradient-to-br from-primary/10 via-card to-card border-border">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">AG</span>
            </div>
            <div>
              <Badge className="mb-2">Active Focus</Badge>
              <h2 className="text-xl font-semibold">Agent Memory & Continuous Learning</h2>
              <p className="text-primary">Making agents that learn, retain, and self-improve</p>
              <p className="text-sm text-muted-foreground mt-2">
                Researching memory architectures that allow agents to retain knowledge across sessions,
                learn from past decisions, and continuously improve their own reasoning and execution quality.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Research Interests */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">01.</span>
          Research Interests
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Agent Memory Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Building persistent memory layers that let agents retain context, recall past experiences,
                  and apply learned knowledge to new situations without starting from scratch.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Continuous Self-Improvement</h3>
                <p className="text-sm text-muted-foreground">
                  Designing feedback loops where agents evaluate their own outputs, identify failure patterns,
                  and update their behavior over time without human intervention.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Agent Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Improving latency, tool usage, and decision quality so agents complete
                  long-horizon tasks with higher reliability and fewer failures.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Autonomous Agent Researcher</h3>
                <p className="text-sm text-muted-foreground">
                  Designing agents that can generate hypotheses, run experiments, evaluate results,
                  and produce research outputs with minimal human intervention.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Applied Research */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">02.</span>
          Applied Research Projects
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="space-y-4">
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg">Autonomous AI Agent Researcher</h3>
                  <p className="text-primary text-sm">End-to-end autonomous research assistant</p>
                </div>
                <Badge variant="secondary">Agentic Research Automation</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                An end-to-end AI research assistant designed to take a problem statement,
                propose hypotheses, run structured experiments, and produce research outputs.
                The goal is to give agents the ability to conduct meaningful research independently,
                retaining what they learn across runs.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Autonomous Agents</Badge>
                <Badge variant="secondary" className="text-xs">Memory Systems</Badge>
                <Badge variant="secondary" className="text-xs">Experimentation</Badge>
                <Badge variant="secondary" className="text-xs">AI Systems</Badge>
              </div>
              <a
                href="https://github.com/Salomondiei08/The-AI-Researcher"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-1"
              >
                View on GitHub →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Direction */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">Next Direction</h3>
          <p className="text-sm text-muted-foreground">
            The next steps in my research push toward agents that genuinely grow over time:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              Memory architectures that persist across sessions and surface the right knowledge at the right moment
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              Self-evaluation loops where agents score their own outputs and adjust strategy accordingly
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              Long-horizon agents that can plan, execute, and learn from multi-day tasks autonomously
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
