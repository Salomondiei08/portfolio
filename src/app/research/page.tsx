import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Research | AI Engineer Portfolio",
  description: "Academic publications, preprints, and research work in AI and machine learning.",
};

const publications = [
  {
    title: "Efficient Attention Mechanisms for Long-Context Language Models",
    authors: ["Your Name", "Co-Author One", "Co-Author Two"],
    venue: "NeurIPS 2024",
    year: 2024,
    type: "conference",
    abstract:
      "We propose a novel attention mechanism that reduces computational complexity from O(n²) to O(n log n) while maintaining model quality on long-context tasks.",
    links: {
      paper: "#",
      code: "#",
      arxiv: "#",
    },
    tags: ["Attention", "Transformers", "Efficiency"],
  },
  {
    title: "Cross-Modal Learning with Vision-Language Transformers",
    authors: ["Co-Author One", "Your Name", "Co-Author Three"],
    venue: "CVPR 2024",
    year: 2024,
    type: "conference",
    abstract:
      "A unified framework for learning joint representations across vision and language modalities, achieving state-of-the-art results on multiple benchmarks.",
    links: {
      paper: "#",
      code: "#",
    },
    tags: ["Multimodal", "Vision-Language", "Transformers"],
  },
  {
    title: "A Survey on Parameter-Efficient Fine-Tuning of Large Language Models",
    authors: ["Your Name", "Co-Author Two"],
    venue: "arXiv",
    year: 2024,
    type: "preprint",
    abstract:
      "A comprehensive survey covering LoRA, adapters, prompt tuning, and other parameter-efficient methods for adapting large language models to downstream tasks.",
    links: {
      arxiv: "#",
    },
    tags: ["LLMs", "PEFT", "Survey"],
  },
  {
    title: "Scaling Laws for Neural Machine Translation",
    authors: ["Your Name", "Co-Author One", "Co-Author Four"],
    venue: "EMNLP 2023",
    year: 2023,
    type: "conference",
    abstract:
      "An empirical study of how translation quality scales with model size, data size, and compute budget across multiple language pairs.",
    links: {
      paper: "#",
      arxiv: "#",
    },
    tags: ["NMT", "Scaling", "Empirical"],
  },
];

const stats = [
  { label: "Publications", value: "12" },
  { label: "Citations", value: "450+" },
  { label: "h-index", value: "8" },
];

export default function ResearchPage() {
  const conferences = publications.filter((p) => p.type === "conference");
  const preprints = publications.filter((p) => p.type === "preprint");

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Research</h1>
        <p className="text-muted-foreground max-w-2xl">
          My research focuses on making AI systems more efficient, interpretable, and capable.
          I work on large language models, multimodal learning, and efficient training techniques.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-card border-border">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Research Interests */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Research Interests</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-medium text-primary">Efficient AI</h3>
              <p className="text-sm text-muted-foreground">
                Developing methods to train and deploy large models more efficiently,
                including attention optimization and model compression.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-primary">Multimodal Learning</h3>
              <p className="text-sm text-muted-foreground">
                Building systems that can understand and generate content across
                text, images, audio, and video modalities.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-primary">Language Models</h3>
              <p className="text-sm text-muted-foreground">
                Understanding scaling laws, emergent capabilities, and alignment
                of large language models.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-primary">AI Safety</h3>
              <p className="text-sm text-muted-foreground">
                Ensuring AI systems are safe, interpretable, and aligned with
                human values and intentions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conference Papers */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">01.</span>
          Conference Papers
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="space-y-4">
          {conferences.map((paper, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{paper.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {paper.authors.join(", ")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary border-0">
                      {paper.venue}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{paper.abstract}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex gap-2">
                    {paper.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex-1" />
                  <div className="flex gap-2">
                    {paper.links.paper && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={paper.links.paper} target="_blank" rel="noopener noreferrer">
                          Paper
                        </a>
                      </Button>
                    )}
                    {paper.links.arxiv && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">
                          arXiv
                        </a>
                      </Button>
                    )}
                    {paper.links.code && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={paper.links.code} target="_blank" rel="noopener noreferrer">
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Preprints */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">02.</span>
          Preprints
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="space-y-4">
          {preprints.map((paper, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-semibold">{paper.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {paper.authors.join(", ")}
                    </p>
                  </div>
                  <Badge variant="secondary">{paper.venue}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{paper.abstract}</p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {paper.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex-1" />
                  {paper.links.arxiv && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">
                        arXiv
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Google Scholar link */}
      <div className="text-center pt-4">
        <a
          href="https://scholar.google.com/citations?user=yourid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          View all publications on Google Scholar →
        </a>
      </div>
    </div>
  );
}
