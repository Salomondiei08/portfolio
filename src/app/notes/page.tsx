import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export const metadata = {
  title: "Notes | AI Engineer Portfolio",
  description: "Quick notes, tips, and snippets on AI, ML, and programming.",
};

export default function NotesPage() {
  const notes = getAllPosts("notes");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Notes</h1>
        <p className="text-muted-foreground">
          Quick notes, tips, and snippets. Shorter than blog posts, but hopefully just as useful.
        </p>
      </div>

      {/* Notes List */}
      {notes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No notes yet. Check back soon!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="block group"
            >
              <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="font-medium group-hover:text-primary transition-colors">
                      {note.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {note.description}
                    </p>
                  </div>
                  <time
                    dateTime={note.date}
                    className="text-xs text-muted-foreground whitespace-nowrap"
                  >
                    {format(new Date(note.date), "MMM d")}
                  </time>
                </div>
                {note.tags && note.tags.length > 0 && (
                  <div className="flex gap-2 mt-3">
                    {note.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Add note hint */}
      <div className="p-6 rounded-lg border border-dashed border-border">
        <p className="text-sm text-muted-foreground text-center">
          Add new notes by creating <code className="text-primary">.md</code> files in{" "}
          <code className="text-primary">content/notes/</code>
        </p>
      </div>
    </div>
  );
}
