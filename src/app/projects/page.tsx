import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Projects by Salomon Diei | Alladjai, TourCI, Helper AI & More",
  description: "Explore projects by Salomon Diei: Alladjai, TourCI (360° tourism app), Helper AI (GPT-4 chatbot), ResiCar, and more. Flutter, Python, FastAPI, AI-powered mobile applications.",
  keywords: [
    "Salomon Diei projects",
    "Alladjai app",
    "Alladjai home services",
    "TourCI tourism app",
    "TourCI 360 degree",
    "Helper AI chatbot",
    "GPT-4 chatbot Flutter",
    "ResiCar rental app",
    "Sikili platform",
    "Gorange 5G hackathon project",
    "Flutter mobile apps",
    "AI mobile applications",
    "Côte d'Ivoire tech projects",
  ],
};

const featuredProjects = [
  {
    title: "SmartHome Automation System",
    description:
      "Developed an IoT-enabled smart home system using Arduino and Raspberry Pi. Integrated sensors for temperature, motion, and light control with a mobile app interface for remote monitoring and control. Improved energy efficiency by 30% through automated scheduling.",
    tags: ["Arduino", "Raspberry Pi", "IoT", "Python", "Mobile App"],
    github: "https://github.com/salomondiei08",
    image: "/projects/smarthome.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Implemented RESTful APIs with FastAPI and developed responsive frontend using Vue.js. Deployed on cloud infrastructure with CI/CD pipeline.",
    tags: ["Vue.js", "FastAPI", "PostgreSQL", "Docker", "GCP"],
    github: "https://github.com/salomondiei08",
    image: "/projects/ecommerce.png",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "Created an intelligent conversational agent using natural language processing and machine learning. Trained on custom datasets for domain-specific responses. Integrated with multiple platforms for seamless user interaction and automated customer support.",
    tags: ["Python", "NLP", "Machine Learning", "TensorFlow", "FastAPI"],
    github: "https://github.com/salomondiei08",
    image: "/projects/chatbot.png",
  },
];

const otherProjects = [
  {
    title: "Image Classification System",
    description: "Developed a CNN-based image classifier for recognizing objects in real-time with 95% accuracy.",
    tags: ["Python", "TensorFlow", "Computer Vision", "CNN"],
    github: "https://github.com/salomondiei08",
  },
  {
    title: "Weather Forecasting App",
    description: "Mobile application providing real-time weather data with 7-day forecasts and interactive maps.",
    tags: ["Flutter", "API Integration", "Maps"],
    github: "https://github.com/salomondiei08",
  },
  {
    title: "Personal Finance Tracker",
    description: "Web application for managing personal finances with budget tracking and expense analytics.",
    tags: ["React", "Node.js", "MongoDB", "Charts"],
    github: "https://github.com/salomondiei08",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    tags: ["Vue.js", "WebSocket", "PostgreSQL"],
    github: "https://github.com/salomondiei08",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          A collection of mobile applications, AI projects, and innovative solutions.
        </p>
      </div>

      {/* Gallery Banner */}
      <Link href="/gallery/apps" className="block group">
        <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/20 via-card to-card p-8 hover:border-primary/50 transition-all duration-300">
          <div className="relative z-10">
            <Badge className="mb-4">Vibe Coded</Badge>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              App Gallery
            </h2>
            <p className="text-muted-foreground mb-4 max-w-xl">
              A curated collection of apps I&apos;ve built through vibe coding sessions.
              Quick experiments, creative tools, and fun side projects.
            </p>
            <span className="inline-flex items-center text-primary font-medium">
              Explore the gallery →
            </span>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        </div>
      </Link>

      {/* Featured Projects */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">01.</span>
          Featured Projects
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Project Image Placeholder */}
                  <div className="lg:w-48 h-32 lg:h-auto rounded-lg bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center shrink-0">
                    <span className="text-4xl font-bold text-primary/50">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">02.</span>
          Other Projects
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-5 space-y-2">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors pt-2"
                >
                  View on GitHub →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hackathon Wins */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">03.</span>
          Hackathon Achievements
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary/50">
                <Badge className="mb-2">1st Place</Badge>
                <h4 className="font-semibold">Gorange 5G Hackathon</h4>
                <p className="text-sm text-muted-foreground">Innovation Challenge - 2022</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <Badge className="mb-2">1st Place</Badge>
                <h4 className="font-semibold">Djamo x Epitech Hackathon</h4>
                <p className="text-sm text-muted-foreground">FinTech Innovation - 2022</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <Badge variant="secondary" className="mb-2">Top 10</Badge>
                <h4 className="font-semibold">GDG DevFest Hackathon</h4>
                <p className="text-sm text-muted-foreground">Developer Community - 2022</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
