import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { appGalleryItems } from "@/lib/portfolio-data";

export const metadata = {
  title: "App Gallery | AI Engineer Portfolio",
  description: "A collection of production apps with real-world utility.",
};

type AppGalleryPageProps = {
  searchParams?: {
    q?: string | string[];
  };
};

export default function AppGalleryPage({ searchParams }: AppGalleryPageProps) {
  const rawQuery = Array.isArray(searchParams?.q) ? searchParams?.q[0] : (searchParams?.q ?? "");
  const query = rawQuery.trim().toLowerCase();
  const filteredApps = query.length === 0
    ? appGalleryItems
    : appGalleryItems.filter((app) =>
      `${app.title} ${app.description} ${app.tags.join(" ")}`.toLowerCase().includes(query)
    );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <Link
          href="/photo-gallery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Photo Gallery
        </Link>
        <h1 className="text-3xl font-bold">App Gallery</h1>
        <p className="text-muted-foreground">
          A focused list of live apps and tools.
        </p>
      </div>

      <section className="space-y-4">
        <form action="/gallery/apps" method="get" className="space-y-2">
          <label htmlFor="gallery-search" className="text-sm font-medium text-foreground">
            Search projects
          </label>
          <div className="flex gap-2">
            <input
              id="gallery-search"
              name="q"
              defaultValue={rawQuery}
              placeholder="Search by title, description, or tag..."
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity min-w-20"
            >
              Search
            </button>
          </div>
        </form>

        <h2 className="text-lg font-semibold flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Live Apps
          <Badge variant="secondary" className="text-xs font-normal">
            {filteredApps.length} apps
          </Badge>
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredApps.map((app) => (
            <a key={app.id} href={app.href} target="_blank" rel="noopener noreferrer">
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

        {filteredApps.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No app matches this search.
          </p>
        )}
      </section>
    </div>
  );
}
