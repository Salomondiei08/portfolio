import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Research | Salomon Diei - Autonomous Agents",
  description: "Research focused on building efficient AI agents that automate human work, with emphasis on autonomous agent researcher systems and autonomous coding.",
};

export default function ResearchPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Research</h1>
        <p className="text-muted-foreground max-w-2xl">
          I am researching how to make AI agents more efficient and how to make them automate human work.
          My primary focus is autonomous agent researcher systems and autonomous coding.
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
              <h2 className="text-xl font-semibold">Autonomous Agents for Work Automation</h2>
              <p className="text-primary">Efficiency, reliability, and end-to-end execution</p>
              <p className="text-sm text-muted-foreground mt-2">
                Researching practical agent architectures that can reason, run tasks, and deliver measurable outcomes.
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
                <h3 className="font-medium text-primary">Autonomous Agent Researcher</h3>
                <p className="text-sm text-muted-foreground">
                  Designing agents that can generate hypotheses, run experiments, evaluate results,
                  and produce research outputs with minimal human intervention.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Autonomous Coding</h3>
                <p className="text-sm text-muted-foreground">
                  Building coding agents that can plan implementation steps, write code,
                  execute validations, and iterate toward production-ready solutions.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Agent Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Improving latency, tool usage, memory strategies, and decision quality
                  so agents complete tasks faster with higher reliability.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-primary">Work Automation Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Applying agentic systems to automate high-friction workflows across
                  engineering, operations, and customer-facing processes.
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
                  <h3 className="font-semibold text-lg">Help AI</h3>
                  <p className="text-primary text-sm">Open-source customer service agent</p>
                </div>
                <Badge variant="secondary">GPT-3/GPT-4 + LangChain + Pinecone</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Help AI is an open-source Python project that uses OpenAI GPT models with LangChain
                to create a customer-service AI agent. It vectorizes and stores help-center data in Pinecone,
                then performs similarity retrieval on user queries to provide grounded, accurate responses.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Python</Badge>
                <Badge variant="secondary" className="text-xs">OpenAI</Badge>
                <Badge variant="secondary" className="text-xs">LangChain</Badge>
                <Badge variant="secondary" className="text-xs">Pinecone</Badge>
                <Badge variant="secondary" className="text-xs">RAG</Badge>
              </div>
            </CardContent>
          </Card>

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
                The goal is to automate high-value research workflows with stronger consistency and speed.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Autonomous Agents</Badge>
                <Badge variant="secondary" className="text-xs">Experimentation</Badge>
                <Badge variant="secondary" className="text-xs">Research Automation</Badge>
                <Badge variant="secondary" className="text-xs">AI Systems</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Direction */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">Next Direction</h3>
          <p className="text-sm text-muted-foreground">
            I am continuing to push agent efficiency and autonomous execution quality in two directions:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              Autonomous researcher agents with stronger experiment loops and result validation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              Autonomous coding agents that can plan, implement, test, and iterate reliably
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
