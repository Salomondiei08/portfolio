import Link from "next/link";
import { primaryNav, secondaryNav } from "@/lib/site-nav";
import { contactLinks, resumeHref } from "@/lib/profile-data";

/**
 * Footer: every page in one place plus contact links. Secondary pages
 * (reading, events, apps) are reachable here without crowding the header.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 font-sans text-sm sm:px-6 md:grid-cols-[9rem_1fr_1fr] md:gap-10">
        <p className="eyebrow">Salomon Diei</p>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6">
            {[...primaryNav, ...secondaryNav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ul>
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={resumeHref} download="Salomon_Diei_Resume.pdf" className="inline-flex min-h-11 items-center text-muted-foreground hover:text-foreground">
                CV (PDF)
              </a>
            </li>
          </ul>
          <p className="mt-6 text-muted-foreground">Cheonan, South Korea · © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
