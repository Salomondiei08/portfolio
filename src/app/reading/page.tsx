import { PageHeader, Section } from "@/components/site/Section";

export const metadata = {
  title: "Reading | Salomon Diei",
  description: "Books I'm reading, have read, and recommend — with notes on what stuck.",
  alternates: {
    canonical: "https://salomondiei.com/reading",
  },
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

/**
 * Reading list as an annotated bibliography: author, title, a sentence
 * on why it mattered. No cover placeholders or progress bars.
 */
export default function ReadingPage() {
  return (
    <>
      <PageHeader eyebrow="Reading" title="Books and papers">
        <p>Books, papers and articles that have shaped how I think about AI, technology and life.</p>
      </PageHeader>

      <Section label="Now reading" id="current">
        <ul className="max-w-[38rem] space-y-6">
          {currentlyReading.map((book) => (
            <li key={book.title} className="space-y-1">
              <p>
                <cite className="font-sans font-bold not-italic">{book.title}</cite>
                <span className="text-muted-foreground">, {book.author}</span>
              </p>
              <p className="leading-relaxed text-foreground/85">{book.thoughts}</p>
              <p className="tabular font-sans text-sm text-muted-foreground">{book.progress}% read</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Finished" id="finished">
        <ul className="max-w-[38rem] space-y-6">
          {completed.map((book) => (
            <li key={book.title} className="space-y-1">
              <p>
                <cite className="font-sans font-bold not-italic">{book.title}</cite>
                <span className="text-muted-foreground">, {book.author}</span>
              </p>
              <p className="leading-relaxed text-foreground/85">{book.thoughts}</p>
              <p className="font-sans text-sm text-muted-foreground">
                <span className="tabular">{book.year}</span> · {book.tags.join(" · ")} ·{" "}
                <span aria-label={`Rated ${book.rating} out of 5`}>{"★".repeat(book.rating)}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Up next" id="next">
        <ul className="max-w-[38rem] space-y-2">
          {wantToRead.map((book) => (
            <li key={book.title}>
              <cite className="not-italic">{book.title}</cite>
              <span className="text-muted-foreground">, {book.author}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-sans text-sm text-muted-foreground">
          Have a recommendation?{" "}
          <a href="mailto:salomondiei08@gmail.com" className="text-link">Send it to me</a>.
        </p>
      </Section>
    </>
  );
}
