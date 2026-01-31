import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

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

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

/**
 * Individual blog post page with optional cover image.
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors mb-12 font-medium"
      >
        ← Back to Blog
      </Link>

      {post.coverImage && (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border-2 border-border bg-secondary/40 mb-16 shadow-xl shadow-black/20">
          <Image
            src={post.coverImage}
            alt={post.coverAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>
      )}

      {/* Header - Centered, professional */}
      <header className="mb-20 pb-12 border-b-2 border-border text-center">
        <div className="text-lg text-muted-foreground mb-8">
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-10 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {post.description}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-base px-5 py-2">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
