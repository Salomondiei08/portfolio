import { LinkRow, PageHeader, Section } from "@/components/site/Section";
import { appGalleryItems } from "@/lib/portfolio-data";

export const metadata = {
  title: "App Gallery | Salomon Diei",
  description: "A collection of production apps with real-world utility.",
  alternates: {
    canonical: "https://salomondiei.com/gallery/apps",
  },
};

type AppGalleryPageProps = {
  searchParams?: {
    q?: string | string[];
  };
};

/**
 * Small apps and experiments, with a server-side search (plain GET form,
 * so it works without JavaScript).
 */
export default function AppGalleryPage({ searchParams }: AppGalleryPageProps) {
  const rawQuery = Array.isArray(searchParams?.q) ? searchParams?.q[0] : (searchParams?.q ?? "");
  const query = rawQuery.trim().toLowerCase();
  const filteredApps = query.length === 0
    ? appGalleryItems
    : appGalleryItems.filter((app) =>
      `${app.title} ${app.description} ${app.tags.join(" ")}`.toLowerCase().includes(query)
    );

  return (
    <>
      <PageHeader eyebrow="Apps" title="Small apps and experiments">
        <p>Live tools I built quickly to scratch an itch. Some are useful, some are just fun.</p>
      </PageHeader>

      <Section label={`${filteredApps.length} apps`} id="apps">
        <form action="/gallery/apps" method="get" role="search" className="mb-10 flex max-w-md flex-col gap-2 sm:flex-row">
          <label htmlFor="gallery-search" className="sr-only">
            Search apps
          </label>
          <input
            id="gallery-search"
            name="q"
            type="search"
            defaultValue={rawQuery}
            placeholder="Search by name or tag"
            className="min-h-11 flex-1 rounded-md border border-input bg-background px-3.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 sm:text-sm"
          />
          <button
            type="submit"
            className="min-h-11 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Search
          </button>
        </form>

        {filteredApps.length === 0 ? (
          <p className="text-muted-foreground">No app matches this search.</p>
        ) : (
          <ul className="max-w-[38rem] space-y-8">
            {filteredApps.map((app) => {
              const links = [
                { label: app.href.includes("github.com") ? "Source" : "Open", href: app.href },
                ...(app.sourceHref ? [{ label: "Source", href: app.sourceHref }] : []),
              ];
              return (
                <li key={app.id} className="space-y-1.5">
                  <h3 className="text-lg font-bold leading-snug">{app.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground">{app.tags.join(" · ")}</p>
                  <p className="leading-relaxed text-foreground/85">{app.description}</p>
                  <LinkRow links={links} />
                </li>
              );
            })}
          </ul>
        )}
      </Section>
    </>
  );
}
