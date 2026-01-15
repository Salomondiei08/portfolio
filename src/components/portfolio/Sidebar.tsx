"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ],
  create: [
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Research", href: "/research" },
  ],
  explore: [
    { name: "Gallery", href: "/gallery" },
    { name: "Notes", href: "/notes" },
    { name: "Reading", href: "/reading" },
  ],
  connect: [
    { name: "Newsletter", href: "/newsletter" },
    { name: "Chatbot", href: "/chatbot" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yourusername", icon: "GH" },
  { name: "Twitter", href: "https://twitter.com/yourusername", icon: "X" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "IN" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, name }: { href: string; name: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
          isActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {name}
      </Link>
    );
  };

  const NavSection = ({ title, items }: { title: string; items: typeof navigation.main }) => (
    <div className="mb-6">
      <p className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {title}
      </p>
      <nav className="space-y-1">
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
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-card border border-border lg:hidden"
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

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Profile */}
          <Link href="/" className="flex items-center gap-3 p-3 mb-6" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold">YN</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Your Name</p>
              <p className="text-xs text-muted-foreground">AI Engineer</p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <NavSection title="Main" items={navigation.main} />
            <NavSection title="Create" items={navigation.create} />
            <NavSection title="Explore" items={navigation.explore} />
            <NavSection title="Connect" items={navigation.connect} />
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-border">
            <div className="flex justify-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
