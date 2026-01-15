import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About | AI Engineer Portfolio",
  description: "Learn more about my background, experience, and what drives me.",
};

const experience = [
  {
    role: "Senior AI Engineer",
    company: "Tech Company",
    period: "2023 - Present",
    description:
      "Leading development of LLM-based applications and ML infrastructure. Building scalable systems for training and deploying large models.",
    highlights: ["Led team of 5 engineers", "Reduced inference costs by 40%", "Shipped 3 major products"],
  },
  {
    role: "ML Research Engineer",
    company: "Research Lab",
    period: "2021 - 2023",
    description:
      "Published research on multimodal learning and transformer architectures. Collaborated with academic partners on cutting-edge projects.",
    highlights: ["4 publications", "2 patents filed", "Open-sourced 3 projects"],
  },
  {
    role: "AI Research Intern",
    company: "AI Startup",
    period: "2020 - 2021",
    description:
      "Developed computer vision models for real-time object detection. Gained hands-on experience with production ML systems.",
    highlights: ["60 FPS on edge devices", "Deployed to 100K+ users"],
  },
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "University Name",
    year: "2021",
    focus: "Machine Learning & AI",
  },
  {
    degree: "B.S. Computer Science",
    school: "University Name",
    year: "2019",
    focus: "Mathematics Minor",
  },
];

const skills = {
  languages: ["Python", "TypeScript", "C++", "Rust", "SQL"],
  frameworks: ["PyTorch", "TensorFlow", "JAX", "Hugging Face", "LangChain"],
  tools: ["Docker", "Kubernetes", "AWS", "GCP", "MLflow", "Weights & Biases"],
  areas: ["LLMs", "Computer Vision", "NLP", "Multimodal AI", "MLOps", "Distributed Training"],
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <span className="text-3xl font-bold text-primary">YN</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Your Name</h1>
            <p className="text-lg text-primary">AI Engineer & Researcher</p>
            <p className="text-muted-foreground mt-2">
              Your City, Country
            </p>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m an AI engineer and researcher passionate about building intelligent systems
            that push the boundaries of what&apos;s possible. My work spans from theoretical
            research to production deployments.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently focused on large language models, multimodal AI, and making these
            technologies more accessible and beneficial. I believe in open research and
            sharing knowledge with the community.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I&apos;m not training models, you&apos;ll find me reading papers, contributing
            to open source, or exploring new ideas through side projects.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="flex gap-4">
          <Button asChild>
            <a href="mailto:your.email@example.com">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">01.</span>
          Experience
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="space-y-4">
          {experience.map((job, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold">{job.role}</h3>
                    <p className="text-primary">{job.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.highlights.map((highlight, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">02.</span>
          Education
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-5">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-primary text-sm">{edu.school}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-muted-foreground">{edu.focus}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">03.</span>
          Skills & Technologies
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-6 space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-sm text-muted-foreground capitalize mb-2">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Connect */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">04.</span>
          Connect
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">@</span>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">your.email@example.com</p>
                </div>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">GH</span>
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">@yourusername</p>
                </div>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">X</span>
                </div>
                <div>
                  <p className="font-medium">Twitter / X</p>
                  <p className="text-sm text-muted-foreground">@yourusername</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">IN</span>
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">in/yourusername</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
