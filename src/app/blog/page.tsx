import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export const metadata = {
  title: "Blog | AI Engineer Portfolio",
  description: "Thoughts on AI, machine learning, research, and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts("blog");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts on AI, machine learning, research, and building intelligent systems.
        </p>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="block space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {format(new Date(post.date), "MMMM d, yyyy")}
                  </time>
                  {post.tags && post.tags.length > 0 && (
                    <>
                      <span>·</span>
                      <div className="flex gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">{post.description}</p>
                <span className="inline-block text-sm text-primary">
                  Read more →
                </span>
              </Link>
            </article>
          ))}
        </div>
      )}

    </div>
  );
}
