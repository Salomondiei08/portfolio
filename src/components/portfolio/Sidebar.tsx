"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navigation = {
  main: [
    { name: "Home", href: "/", icon: "H" },
    { name: "About", href: "/about", icon: "A" },
  ],
  create: [
    { name: "Blog", href: "/blog", icon: "B" },
    { name: "Projects", href: "/projects", icon: "P" },
    { name: "Research", href: "/research", icon: "R" },
  ],
  explore: [
    { name: "Photo Gallery", href: "/photo-gallery", icon: "PH" },
    { name: "App Gallery", href: "/gallery/apps", icon: "AP" },
    { name: "Notes", href: "/notes", icon: "N" },
    { name: "Reading", href: "/reading", icon: "L" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/salomondiei08", icon: "GH" },
  { name: "LinkedIn", href: "https://linkedin.com/in/salomondiei", icon: "IN" },
  { name: "Email", href: "mailto:salomondiei08@gmail.com", icon: "@" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isExpanded = isHovered;

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [isHovered]);

  const NavLink = ({ href, name, icon }: { href: string; name: string; icon: string }) => {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
    return (
      <Link
        href={href}
        className={`
          relative flex items-center gap-3 px-3 py-2 text-sm rounded-lg overflow-hidden group
          ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"}
          ${!isExpanded ? "justify-center" : ""}
          ${isActive && !isExpanded ? "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-6 before:bg-primary before:rounded-r-full" : ""}
        `}
        style={{
          transition: "background-color 0.15s cubic-bezier(0.32, 0.72, 0, 1), color 0.15s cubic-bezier(0.32, 0.72, 0, 1)"
        }}
        onClick={() => setMobileMenuOpen(false)}
        title={!isExpanded ? name : undefined}
      >
        <span
          className="w-5 h-5 flex items-center justify-center text-xs font-medium shrink-0"
          style={{
            transition: "transform 0.15s cubic-bezier(0.32, 0.72, 0, 1)",
            transform: isActive ? "scale(1.1)" : "scale(1)"
          }}
        >
          {icon}
        </span>
        <span
          className="whitespace-nowrap"
          style={{
            opacity: isExpanded ? 1 : 0,
            maxWidth: isExpanded ? "200px" : "0px",
            transform: isExpanded ? "translateX(0)" : "translateX(-8px)",
            transition: "opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1), max-width 0.3s cubic-bezier(0.32, 0.72, 0, 1), transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",
            transitionDelay: isExpanded ? "0.05s" : "0s",
            overflow: "hidden"
          }}
        >
          {name}
        </span>
      </Link>
    );
  };

  const NavSection = ({ title, items }: { title: string; items: typeof navigation.main }) => (
    <div className="mb-4">
      <p
        className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider overflow-hidden"
        style={{
          opacity: isExpanded ? 0.7 : 0,
          maxHeight: isExpanded ? "24px" : "0px",
          transform: isExpanded ? "translateY(0)" : "translateY(-4px)",
          transition: "opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1), max-height 0.3s cubic-bezier(0.32, 0.72, 0, 1), transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",
          transitionDelay: isExpanded ? "0.08s" : "0s"
        }}
      >
        {title}
      </p>
      <nav className="space-y-0.5">
        {items.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-card border border-border lg:hidden active:scale-95 transition-transform"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {/* Mobile theme toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-lg bg-card border border-border lg:hidden active:scale-95 transition-transform"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          fixed top-0 left-0 h-full
          bg-card/95 backdrop-blur-xl border-r border-border/50 z-40
          lg:translate-x-0
          ${mobileMenuOpen ? "translate-x-0 w-64" : "-translate-x-full"}
        `}
        style={{
          width: isExpanded ? "16rem" : "4rem",
          transition: "width 0.3s cubic-bezier(0.32, 0.72, 0, 1), box-shadow 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
          boxShadow: isExpanded
            ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            : "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          willChange: isTransitioning ? "width" : "auto"
        }}
      >
        <div className="flex flex-col h-full p-3">
          {/* Profile */}
          <Link
            href="/"
            className={`flex items-center gap-3 p-2 mb-4 rounded-lg group hover:bg-secondary/50 overflow-hidden ${!isExpanded ? "justify-center" : ""}`}
            style={{
              transition: "background-color 0.15s cubic-bezier(0.32, 0.72, 0, 1)"
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/20 shrink-0"
              style={{
                transition: "box-shadow 0.15s cubic-bezier(0.32, 0.72, 0, 1)"
              }}
            >
              <Image
                src="/images/salomon.JPG"
                alt="Salomon Diei"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className="min-w-0"
              style={{
                opacity: isExpanded ? 1 : 0,
                maxWidth: isExpanded ? "200px" : "0px",
                transform: isExpanded ? "translateX(0)" : "translateX(-8px)",
                transition: "opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1), max-width 0.3s cubic-bezier(0.32, 0.72, 0, 1), transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",
                transitionDelay: isExpanded ? "0.06s" : "0s",
                overflow: "hidden"
              }}
            >
              <p className="font-semibold text-foreground text-sm truncate">
                Salomon Diei
              </p>
              <p className="text-xs text-muted-foreground truncate">
                AI Engineer & Researcher
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <NavSection title="Main" items={navigation.main} />
            <NavSection title="Create" items={navigation.create} />
            <NavSection title="Explore" items={navigation.explore} />
          </div>

          {/* Bottom section */}
          <div className="pt-3 border-t border-border space-y-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`hidden lg:flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 ${!isExpanded ? "justify-center" : ""}`}
              style={{
                transition: "background-color 0.15s cubic-bezier(0.32, 0.72, 0, 1), color 0.15s cubic-bezier(0.32, 0.72, 0, 1)"
              }}
              title={!isExpanded ? (theme === "dark" ? "Light mode" : "Dark mode") : undefined}
            >
              <span className="shrink-0">
                {theme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </span>
              <span
                className="whitespace-nowrap"
                style={{
                  opacity: isExpanded ? 1 : 0,
                  maxWidth: isExpanded ? "200px" : "0px",
                  transform: isExpanded ? "translateX(0)" : "translateX(-8px)",
                  transition: "opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1), max-width 0.3s cubic-bezier(0.32, 0.72, 0, 1), transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",
                  transitionDelay: isExpanded ? "0.05s" : "0s",
                  overflow: "hidden"
                }}
              >
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            </button>

            {/* Social Links */}
            <div
              className="flex gap-1 pt-2"
              style={{
                justifyContent: isExpanded ? "center" : "flex-start",
                flexDirection: isExpanded ? "row" : "column",
                transition: "flex-direction 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className={`p-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md ${!isExpanded ? "flex justify-center" : ""}`}
                  style={{
                    transition: "background-color 0.15s cubic-bezier(0.32, 0.72, 0, 1), color 0.15s cubic-bezier(0.32, 0.72, 0, 1), transform 0.15s cubic-bezier(0.32, 0.72, 0, 1)"
                  }}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Download Resume */}
            <a
              href="/Salomon_Academic_Resume.pdf"
              download="Salomon_Diei_Resume.pdf"
              className={`flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg ${!isExpanded ? "justify-center" : ""}`}
              style={{
                transition: "background-color 0.15s cubic-bezier(0.32, 0.72, 0, 1), color 0.15s cubic-bezier(0.32, 0.72, 0, 1)"
              }}
              title={!isExpanded ? "Download Resume" : undefined}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span
                className="whitespace-nowrap"
                style={{
                  opacity: isExpanded ? 1 : 0,
                  maxWidth: isExpanded ? "200px" : "0px",
                  transform: isExpanded ? "translateX(0)" : "translateX(-8px)",
                  transition: "opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1), max-width 0.3s cubic-bezier(0.32, 0.72, 0, 1), transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",
                  transitionDelay: isExpanded ? "0.05s" : "0s",
                  overflow: "hidden"
                }}
              >
                Download Resume
              </span>
            </a>

            {/* Source Code Link */}
            <a
              href="https://github.com/salomondiei08/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg ${!isExpanded ? "justify-center" : ""}`}
              style={{
                transition: "background-color 0.15s cubic-bezier(0.32, 0.72, 0, 1), color 0.15s cubic-bezier(0.32, 0.72, 0, 1)"
              }}
              title={!isExpanded ? "View Source" : undefined}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <span
                className="whitespace-nowrap"
                style={{
                  opacity: isExpanded ? 1 : 0,
                  maxWidth: isExpanded ? "200px" : "0px",
                  transform: isExpanded ? "translateX(0)" : "translateX(-8px)",
                  transition: "opacity 0.25s cubic-bezier(0.32, 0.72, 0, 1), max-width 0.3s cubic-bezier(0.32, 0.72, 0, 1), transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)",
                  transitionDelay: isExpanded ? "0.05s" : "0s",
                  overflow: "hidden"
                }}
              >
                View Source
              </span>
            </a>
          </div>
        </div>
      </aside>

      {/* Spacer for main content */}
      <div
        className="hidden lg:block shrink-0"
        style={{
          width: isExpanded ? "16rem" : "4rem",
          transition: "width 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
        }}
      />
    </>
  );
}
