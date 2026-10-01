/**
 * Site navigation. Lives outside the client header component so server
 * components (the footer) can import it too.
 */
export type NavItem = { name: string; href: string };

/** Primary destinations shown in the header. */
export const primaryNav: NavItem[] = [
  { name: "Research", href: "/research" },
  { name: "Writing", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

/** Secondary pages, shown in the footer and the mobile menu only. */
export const secondaryNav: NavItem[] = [
  { name: "Reading", href: "/reading" },
  { name: "Events", href: "/events" },
  { name: "Apps", href: "/gallery/apps" },
];
