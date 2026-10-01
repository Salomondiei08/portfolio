import { format, parseISO } from "date-fns";
import { PageHeader, Section } from "@/components/site/Section";
import { events } from "@/lib/events-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Salomon Diei",
  description: "Events and conferences I'm attending — ICML 2026 Seoul and more.",
};

/** Group events by ISO date, oldest day first. */
function groupByDate(evts: typeof events) {
  const groups: Record<string, typeof events> = {};
  for (const e of evts) {
    if (!groups[e.date]) groups[e.date] = [];
    groups[e.date].push(e);
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

/**
 * Events grouped by day. The date is the section label; each event is a
 * short entry with time, place and a link to its page.
 */
export default function EventsPage() {
  const grouped = groupByDate(events);

  return (
    <>
      <PageHeader eyebrow="Events" title="Conferences and gatherings">
        <p>Events I have attended or plan to attend, starting with ICML 2026 in Seoul.</p>
      </PageHeader>

      {grouped.map(([date, dayEvents]) => (
        <Section key={date} label={format(parseISO(date), "EEE, MMM d")} id={`d${date}`}>
          <ul className="max-w-[38rem] space-y-8">
            {dayEvents.map((event) => (
              <li key={event.id} className="space-y-1.5">
                <h3 className="text-lg font-bold leading-snug">
                  <a href={event.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {event.title}
                  </a>
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {[event.time, event.location, event.attendees ? `${event.attendees.toLocaleString()} attending` : null]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <p className="leading-relaxed text-foreground/85">{event.description}</p>
                <p className="font-sans text-sm text-muted-foreground">Hosted by {event.organizer}</p>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
