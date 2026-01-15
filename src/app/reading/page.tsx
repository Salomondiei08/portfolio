import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Reading | AI Engineer Portfolio",
  description: "Books I'm reading, have read, and recommend.",
};

const currentlyReading = [
  {
    title: "The Alignment Problem",
    author: "Brian Christian",
    progress: 65,
    thoughts: "Fascinating exploration of AI safety challenges and the history of alignment research.",
  },
  {
    title: "Designing Machine Learning Systems",
    author: "Chip Huyen",
    progress: 40,
    thoughts: "Practical guide to building production ML systems. Highly recommend for MLOps.",
  },
];

const completed = [
  {
    title: "Attention Is All You Need (Paper)",
    author: "Vaswani et al.",
    year: 2024,
    rating: 5,
    thoughts: "The foundational transformer paper. Re-read it annually and find new insights each time.",
    tags: ["AI", "Research"],
  },
  {
    title: "Deep Learning",
    author: "Goodfellow, Bengio, Courville",
    year: 2024,
    rating: 5,
    thoughts: "The deep learning bible. Essential reference for anyone in the field.",
    tags: ["AI", "Textbook"],
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: 2024,
    rating: 5,
    thoughts: "Changed how I think about decision-making. Relevant for understanding AI cognition.",
    tags: ["Psychology", "Decision-Making"],
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas, Andrew Hunt",
    year: 2023,
    rating: 4,
    thoughts: "Timeless advice on software craftsmanship. Still relevant after 20+ years.",
    tags: ["Programming", "Career"],
  },
  {
    title: "Superintelligence",
    author: "Nick Bostrom",
    year: 2023,
    rating: 4,
    thoughts: "Important philosophical foundation for thinking about advanced AI systems.",
    tags: ["AI Safety", "Philosophy"],
  },
  {
    title: "The Art of Statistics",
    author: "David Spiegelhalter",
    year: 2023,
    rating: 4,
    thoughts: "Excellent introduction to statistical thinking. Great for building intuition.",
    tags: ["Statistics", "Science"],
  },
];

const wantToRead = [
  { title: "Human Compatible", author: "Stuart Russell" },
  { title: "The Book of Why", author: "Judea Pearl" },
  { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter" },
  { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn" },
];

export default function ReadingPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Reading</h1>
        <p className="text-muted-foreground">
          Books, papers, and articles that have shaped my thinking about AI, technology, and life.
        </p>
      </div>

      {/* Currently Reading */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Currently Reading
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {currentlyReading.map((book, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-5 space-y-3">
                <div>
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{book.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">&quot;{book.thoughts}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Completed */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">01.</span>
          Completed
          <Badge variant="secondary" className="text-xs font-normal">
            {completed.length} books
          </Badge>
          <div className="h-px flex-1 bg-border" />
        </h2>

        <div className="space-y-4">
          {completed.map((book, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Book cover placeholder */}
                  <div className="w-16 h-20 rounded bg-secondary flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-muted-foreground/50">
                      {book.title.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="font-semibold">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${i < book.rating ? "text-primary" : "text-muted"}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{book.thoughts}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {book.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Want to Read */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <span className="text-primary">02.</span>
          Want to Read
          <div className="h-px flex-1 bg-border" />
        </h2>

        <Card className="bg-card border-border">
          <CardContent className="p-5">
            <div className="grid sm:grid-cols-2 gap-3">
              {wantToRead.map((book, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded hover:bg-secondary transition-colors"
                >
                  <div className="w-8 h-10 rounded bg-secondary flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-muted-foreground/50">
                      {book.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{book.title}</p>
                    <p className="text-xs text-muted-foreground">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recommendation */}
      <div className="p-6 rounded-lg border border-dashed border-border text-center">
        <p className="text-sm text-muted-foreground">
          Have a book recommendation?{" "}
          <a href="mailto:your.email@example.com" className="text-primary hover:underline">
            Let me know →
          </a>
        </p>
      </div>
    </div>
  );
}
