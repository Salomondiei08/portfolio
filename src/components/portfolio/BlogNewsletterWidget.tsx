"use client";

import { NewsletterForm } from "./NewsletterForm";

/**
 * Newsletter call-to-action shown at the end of an article. Reuses the
 * shared NewsletterForm so both signup points behave identically.
 */
export function BlogNewsletterWidget() {
  return (
    <section aria-labelledby="newsletter-heading" className="space-y-3">
      <h2 id="newsletter-heading" className="text-lg font-bold">
        Get new posts by email
      </h2>
      <p className="leading-relaxed text-muted-foreground">
        New research notes and essays on AI agents. Unsubscribe anytime.
      </p>
      <NewsletterForm />
    </section>
  );
}
