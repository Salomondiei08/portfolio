"use client";

import { useState } from "react";

/**
 * Newsletter subscription form.
 * Calls POST /api/newsletter → Buttondown.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="flex items-center gap-2 font-sans text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <span className="text-sm font-medium">You&apos;re subscribed!</span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          autoComplete="email"
          required
          className="min-h-11 flex-1 rounded-md border border-input bg-background px-3.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 sm:text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-11 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p role="alert" className="font-sans text-sm text-destructive">{errorMsg}</p>
      )}
    </div>
  );
}
