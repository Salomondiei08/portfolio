"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";

const ChatWidget = dynamic(
  () => import("./ChatWidget").then((module) => ({ default: module.ChatWidget })),
  { ssr: false }
);

/** Keeps the social bio page independent of the portfolio navigation. */
export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/links") {
    return <main className="min-h-screen px-4">{children}</main>;
  }

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="min-h-screen px-4 py-6 pt-16 lg:px-8 lg:py-8 lg:pt-8 max-w-5xl mx-auto">
            {children}
            <footer className="mt-16 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Made with {"\u2764\uFE0F"} by{" "}
                <a
                  href="https://github.com/salomondiei08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-primary hover:underline transition-colors"
                >
                  Salomon DIEI
                </a>
              </p>
            </footer>
          </div>
        </main>
      </div>
      <ChatWidget />
    </>
  );
}
