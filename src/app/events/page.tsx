import { format, parseISO } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/portfolio/animations";
import { events } from "@/lib/events-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Salomon Diei",
  description: "Events and conferences I'm attending — ICML 2026 Seoul and more.",
};

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

function groupByDate(evts: typeof events) {
  const groups: Record<string, typeof events> = {};
  for (const e of evts) {
    if (!groups[e.date]) groups[e.date] = [];
    groups[e.date].push(e);
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

export default function EventsPage() {
  const grouped = groupByDate(events);

  return (
    <div className="space-y-8">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground">
            Conferences and gatherings I&apos;m attending.{" "}
            <span className="text-primary font-medium">ICML 2026 — Seoul, Korea.</span>
          </p>
        </div>
      </FadeIn>

      <div className="space-y-10">
        {grouped.map(([date, dayEvents], i) => (
          <FadeIn key={date} delay={i * 80}>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <CalendarIcon />
                  {format(parseISO(date), "EEEE, MMMM d, yyyy")}
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="space-y-3 pl-2">
                {dayEvents.map((event) => (
                  <a
                    key={event.id}
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-2 flex-1 min-w-0">
                            <div className="flex items-start gap-2 flex-wrap">
                              <h3 className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                                {event.title}
                              </h3>
                              <ExternalIcon />
                            </div>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                              {event.time && (
                                <span className="flex items-center gap-1">
                                  <span className="text-primary">⏰</span>
                                  {event.time}
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                <LocationIcon />
                                {event.location}
                              </span>
                              {event.attendees && (
                                <span className="text-muted-foreground">
                                  {event.attendees.toLocaleString()} attending
                                </span>
                              )}
                            </div>

                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {event.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-0.5">
                              {event.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
