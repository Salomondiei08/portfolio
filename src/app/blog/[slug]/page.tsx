import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/lib/markdown";
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
 * Individual blog post page. One reading column on every screen size;
 * newsletter signup and related posts follow the article instead of
 * competing with it in a sidebar.
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  const baseUrl = "https://salomondiei.com";
  const ogImage = post.coverImage
    ? `${baseUrl}${post.coverImage}`
    : `${baseUrl}/images/salomon.JPG`;

  // A few other posts to suggest after the article (exclude current)
  const otherPosts = getAllPosts("blog")
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  return (
    <>
      {/* BlogPosting structured data for Article rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${baseUrl}/blog/${slug}#article`,
            headline: post.title,
            description: post.description,
            datePublished: new Date(post.date).toISOString(),
            dateModified: new Date(post.date).toISOString(),
            url: `${baseUrl}/blog/${slug}`,
            image: ogImage,
            author: {
              "@type": "Person",
              "@id": `${baseUrl}/#person`,
              name: "Salomon Diei",
            },
            publisher: {
              "@type": "Person",
              "@id": `${baseUrl}/#person`,
              name: "Salomon Diei",
            },
            isPartOf: {
              "@type": "Blog",
              "@id": `${baseUrl}/blog#blog`,
            },
            ...(post.tags && post.tags.length > 0 ? { keywords: post.tags.join(", ") } : {}),
            inLanguage: "en-US",
            timeRequired: `PT${post.readingTime}M`,
          }),
        }}
      />

      {/* BreadcrumbList for SERP breadcrumb display */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: `${baseUrl}/blog/${slug}` },
            ],
          }),
        }}
      />

      {/* Single measure-limited column: ~70 characters per line at body size */}
      <article className="mx-auto max-w-[40rem] pt-8 md:pt-14">
        <Link
          href="/blog"
          className="inline-flex min-h-11 items-center font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← All writing
        </Link>

        <header className="mb-10 mt-6 space-y-4">
          <p className="tabular font-sans text-sm text-muted-foreground">
            <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
            {" · "}
            {post.readingTime} min read
          </p>
          <h1 className="text-[2rem] font-bold leading-tight tracking-tight sm:text-[2.5rem]">{post.title}</h1>
          {post.description && (
            <p className="text-xl leading-relaxed text-muted-foreground">{post.description}</p>
          )}
          {post.tags && post.tags.length > 0 && (
            <p className="font-sans text-sm text-muted-foreground">{post.tags.join(" · ")}</p>
          )}
        </header>

        {post.coverImage && (
          <div className="relative mb-10 aspect-[2/1] w-full overflow-hidden rounded-md bg-muted">
            <Image
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 680px"
              priority
            />
          </div>
        )}

        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <footer className="mt-16 space-y-12 border-t border-border pt-10">
          <BlogNewsletterWidget />

          {otherPosts.length > 0 && (
            <nav aria-label="More writing" className="space-y-4">
              <h2 className="eyebrow">Keep reading</h2>
              <ul className="divide-y divide-border">
                {otherPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group block py-3">
                      <span className="block leading-snug group-hover:text-primary transition-colors">{p.title}</span>
                      <span className="tabular font-sans text-sm text-muted-foreground">
                        {format(new Date(p.date), "MMM d, yyyy")} · {p.readingTime} min
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </footer>
      </article>
    </>
  );
}
