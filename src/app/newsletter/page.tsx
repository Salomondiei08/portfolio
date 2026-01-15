"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call - replace with actual newsletter service
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For demo purposes, always succeed
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Newsletter</h1>
        <p className="text-muted-foreground">
          Get updates on AI research, new projects, and interesting finds delivered to your inbox.
        </p>
      </div>

      {/* Subscribe Form */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg">Subscribe</CardTitle>
        </CardHeader>
        <CardContent>
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">You&apos;re subscribed!</h3>
              <p className="text-sm text-muted-foreground">
                Thanks for subscribing. You&apos;ll receive updates soon.
              </p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => setStatus("idle")}
              >
                Subscribe another email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </CardContent>
      </Card>

      {/* What to expect */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg">What to expect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary text-sm font-bold">1</span>
            </div>
            <div>
              <h3 className="font-medium">Research Highlights</h3>
              <p className="text-sm text-muted-foreground">
                Breakdowns of interesting papers and research developments in AI/ML.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary text-sm font-bold">2</span>
            </div>
            <div>
              <h3 className="font-medium">Project Updates</h3>
              <p className="text-sm text-muted-foreground">
                News about my latest projects, experiments, and open source work.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary text-sm font-bold">3</span>
            </div>
            <div>
              <h3 className="font-medium">Curated Resources</h3>
              <p className="text-sm text-muted-foreground">
                Links to interesting articles, tools, and resources I&apos;ve found.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Archive hint */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Want to see past issues?{" "}
          <a href="#" className="text-primary hover:underline">
            View the archive →
          </a>
        </p>
      </div>
    </div>
  );
}
