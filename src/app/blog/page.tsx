import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export const metadata = {
  title: "Blog | Salomon Diei",
  description: "Thoughts on AI, machine learning, autonomous agents, and building intelligent systems.",
};

/**
 * Blog index — first post shown as a featured hero, the rest as a clean list.
 */
export default function BlogPage() {
  const posts = getAllPosts("blog");
  const [hero, ...rest] = posts;

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground">
          Writing about AI research, autonomous agents, and what I&apos;m learning.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No posts yet. Check back soon.
        </div>
      ) : (
        <>
          {/* Featured / hero post */}
          <article>
            <Link href={`/blog/${hero.slug}`} className="group block space-y-4">
              {hero.coverImage && (
                <div className="relative w-full aspect-[2/1] overflow-hidden rounded-xl border border-border bg-secondary/40">
                  <Image
                    src={hero.coverImage}
                    alt={hero.coverAlt || hero.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority
                  />
                </div>
              )}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <time dateTime={hero.date}>
                    {format(new Date(hero.date), "MMMM d, yyyy")}
                  </time>
                  <span>·</span>
                  <span>{hero.readingTime} min read</span>
                  {hero.tags && hero.tags.length > 0 && (
                    <>
                      <span>·</span>
                      <div className="flex gap-1.5 flex-wrap">
                        {hero.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors leading-snug">
                  {hero.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{hero.description}</p>
                <span className="inline-block text-sm text-primary font-medium">
                  Read article →
                </span>
              </div>
            </Link>
          </article>

          {/* Divider */}
          {rest.length > 0 && (
            <hr className="border-border" />
          )}

          {/* Remaining posts */}
          <div className="space-y-0 divide-y divide-border">
            {rest.map((post) => (
              <article key={post.slug} className="py-6 first:pt-0">
                <Link href={`/blog/${post.slug}`} className="group flex gap-5 items-start">
                  {post.coverImage && (
                    <div className="relative w-24 h-16 sm:w-32 sm:h-20 shrink-0 overflow-hidden rounded-lg border border-border bg-secondary/40">
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt || post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="128px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <time dateTime={post.date}>
                        {format(new Date(post.date), "MMM d, yyyy")}
                      </time>
                      <span>·</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                    <h2 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-1.5 flex-wrap pt-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
