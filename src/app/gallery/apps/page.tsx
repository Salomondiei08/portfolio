import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "App Gallery | AI Engineer Portfolio",
  description: "A collection of vibe-coded apps, experiments, and creative projects.",
};

const apps = [
  {
    title: "AI Chat Playground",
    description: "A minimal chat interface for experimenting with different LLM APIs.",
    tags: ["Next.js", "AI", "Chat"],
    href: "#",
    status: "live",
  },
  {
    title: "Markdown Editor",
    description: "A distraction-free markdown editor with live preview and syntax highlighting.",
    tags: ["React", "Editor"],
    href: "#",
    status: "live",
  },
  {
    title: "Color Palette Generator",
    description: "Generate beautiful color palettes using AI-powered color theory.",
    tags: ["Design", "AI"],
    href: "#",
    status: "live",
  },
  {
    title: "Pomodoro Timer",
    description: "A beautiful, minimal pomodoro timer with ambient sounds.",
    tags: ["Productivity", "Audio"],
    href: "#",
    status: "live",
  },
  {
    title: "Code Snippet Manager",
    description: "Save, organize, and share code snippets with syntax highlighting.",
    tags: ["DevTools", "Database"],
    href: "#",
    status: "wip",
  },
  {
    title: "Weather Dashboard",
    description: "A clean weather app with 7-day forecasts and beautiful visualizations.",
    tags: ["API", "Charts"],
    href: "#",
    status: "live",
  },
  {
    title: "Habit Tracker",
    description: "Track daily habits with streaks, statistics, and insights.",
    tags: ["Productivity", "Charts"],
    href: "#",
    status: "wip",
  },
  {
    title: "Music Visualizer",
    description: "Real-time audio visualization using Web Audio API and Canvas.",
    tags: ["Audio", "Canvas"],
    href: "#",
    status: "live",
  },
];

export default function AppGalleryPage() {
  const liveApps = apps.filter((app) => app.status === "live");
  const wipApps = apps.filter((app) => app.status === "wip");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Gallery
        </Link>
        <h1 className="text-3xl font-bold">App Gallery</h1>
        <p className="text-muted-foreground">
          Apps built through vibe coding sessions. Quick experiments, creative tools, and fun side projects.
        </p>
      </div>

      {/* Live Apps */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Live
          <Badge variant="secondary" className="text-xs font-normal">
            {liveApps.length} apps
          </Badge>
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveApps.map((app, index) => (
            <a key={index} href={app.href} target="_blank" rel="noopener noreferrer">
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all group active:scale-[0.98]">
                <CardContent className="p-5 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                    {app.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {app.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {app.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Work in Progress */}
      {wipApps.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            Work in Progress
            <Badge variant="secondary" className="text-xs font-normal">
              {wipApps.length} apps
            </Badge>
            <div className="h-px flex-1 bg-border" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wipApps.map((app, index) => (
              <Card key={index} className="h-full bg-card border-border opacity-70">
                <CardContent className="p-5 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-xl font-bold text-muted-foreground">
                    {app.title.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{app.title}</h3>
                      <Badge variant="outline" className="text-xs text-yellow-500 border-yellow-500/50">
                        WIP
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {app.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {app.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Hint */}
      <div className="p-5 rounded-lg border border-dashed border-border text-center">
        <p className="text-sm text-muted-foreground">
          Edit <code className="text-primary">src/app/gallery/apps/page.tsx</code> to add your apps
        </p>
      </div>
    </div>
  );
}
