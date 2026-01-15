import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs("notes");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const note = await getPostBySlug("notes", slug);

  if (!note) {
    return { title: "Note Not Found" };
  }

  return {
    title: `${note.title} | Notes`,
    description: note.description,
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = await getPostBySlug("notes", slug);

  if (!note) {
    notFound();
  }

  return (
    <article className="max-w-3xl">
      {/* Back link */}
      <Link
        href="/notes"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        ← Back to Notes
      </Link>

      {/* Header */}
      <header className="mb-8 pb-8 border-b border-border">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <time dateTime={note.date}>
            {format(new Date(note.date), "MMMM d, yyyy")}
          </time>
        </div>
        <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
        {note.tags && note.tags.length > 0 && (
          <div className="flex gap-2">
            {note.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div
        className="prose prose-invert prose-green max-w-none
          prose-headings:text-foreground prose-headings:font-semibold
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground
          prose-code:text-primary prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-secondary prose-pre:border prose-pre:border-border
          prose-ul:text-muted-foreground prose-ol:text-muted-foreground
          prose-li:marker:text-primary"
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
    </article>
  );
}
