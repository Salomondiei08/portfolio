import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import { PageHeader, Section } from "@/components/site/Section";
import type { PostMeta } from "@/lib/markdown";
import { format } from "date-fns";

export const metadata = {
  title: "AI, Agents & Engineering — Salomon Diei's Blog",
  description: "Writing about AI research, autonomous agents, and building intelligent systems.",
  alternates: {
    canonical: "https://salomondiei.com/blog",
  },
};

/** Group posts (already sorted newest first) by publication year. */
function groupByYear(posts: PostMeta[]): [string, PostMeta[]][] {
  const groups = new Map<string, PostMeta[]>();
  for (const post of posts) {
    const year = format(new Date(post.date), "yyyy");
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return Array.from(groups.entries());
}

/**
 * Blog index: an archive grouped by year. Each entry shows date, title
 * and summary. No thumbnails, so the list reads like a table of contents.
 */
export default function BlogPage() {
  const posts = getAllPosts("blog");
  const years = groupByYear(posts);

  return (
    <>
      {/* Blog entity schema + breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://salomondiei.com/blog#blog",
            name: "AI, Agents & Engineering — Salomon Diei's Blog",
            description: "Writing about AI research, autonomous agents, and building intelligent systems.",
            url: "https://salomondiei.com/blog",
            author: { "@type": "Person", "@id": "https://salomondiei.com/#person", name: "Salomon Diei" },
            inLanguage: "en-US",
            isPartOf: { "@type": "WebSite", "@id": "https://salomondiei.com/#website" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://salomondiei.com" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://salomondiei.com/blog" },
            ],
          }),
        }}
      />
      <PageHeader eyebrow="Writing" title="Notes on AI, agents and engineering">
        <p>Essays on research I am doing, papers I am reading, and what I learn building agents in production.</p>
      </PageHeader>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        years.map(([year, yearPosts]) => (
          <Section key={year} label={year} id={`y${year}`}>
            <ol className="max-w-[38rem] space-y-8">
              {yearPosts.map((post) => (
                <li key={post.slug}>
                  <article>
                    <Link href={`/blog/${post.slug}`} className="group block space-y-1.5">
                      <p className="tabular font-sans text-sm text-muted-foreground">
                        <time dateTime={post.date}>{format(new Date(post.date), "MMMM d")}</time>
                        {" · "}
                        {post.readingTime} min read
                      </p>
                      <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="leading-relaxed text-foreground/80">{post.description}</p>
                    </Link>
                  </article>
                </li>
              ))}
            </ol>
          </Section>
        ))
      )}
    </>
  );
}
