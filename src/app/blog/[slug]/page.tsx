import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { BlogNewsletterWidget } from "@/components/portfolio/BlogNewsletterWidget";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);
  const baseUrl = "https://salomondiei.com";

  if (!post) {
    return { title: "Post Not Found" };
  }

  const ogImage = post.coverImage
    ? `${baseUrl}${post.coverImage}`
    : `${baseUrl}/images/salomon.JPG`;

  return {
    title: `${post.title} | Salomon Diei`,
    description: post.description,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "Salomon Diei",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.coverAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

/**
 * Individual blog post page.
 * Desktop: two-column layout — prose content (left) + sticky sidebar (right).
 * Mobile: single column with newsletter below the article.
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  // Fetch a few other posts to show in the sidebar (exclude current)
  const otherPosts = getAllPosts("blog")
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Cover image — full width above the columns */}
      {post.coverImage && (
        <div className="relative w-full aspect-[2/1] overflow-hidden rounded-xl border border-border bg-secondary/40 mb-8 shadow-lg shadow-black/10">
          <Image
            src={post.coverImage}
            alt={post.coverAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority
          />
        </div>
      )}

      {/* Article header */}
      <header className="mb-8 pb-8 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {post.description}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      {/* Two-column content layout on desktop */}
      <div className="lg:grid lg:grid-cols-[1fr_272px] lg:gap-12">

        {/* Article prose */}
        <div
          className="blog-content min-w-0"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Sticky sidebar — desktop only */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 space-y-6">
            {/* Newsletter */}
            <BlogNewsletterWidget />

            {/* More posts */}
            {otherPosts.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                <p className="font-semibold text-sm">More posts</p>
                <ul className="space-y-3">
                  {otherPosts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="group block space-y-0.5"
                      >
                        <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {p.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {format(new Date(p.date), "MMM d, yyyy")} · {p.readingTime} min
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Mobile: newsletter + more posts below the article */}
      <div className="lg:hidden mt-12 space-y-6">
        <BlogNewsletterWidget />
        {otherPosts.length > 0 && (
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <p className="font-semibold text-sm">More posts</p>
            <ul className="space-y-3">
              {otherPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block"
                  >
                    <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                      {p.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
