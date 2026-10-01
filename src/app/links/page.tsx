import type { Metadata } from "next";
import Image from "next/image";
import {
  Facebook,
  Globe,
  ArrowUpRight,
  MessageCircle,
  Instagram,
  Linkedin,
  Mail,
  Music2,
  Youtube,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Liens | Salomon Diei",
  description:
    "Tous les liens de Salomon Diei: TikTok, Instagram, YouTube, LinkedIn, Facebook et email.",
  alternates: {
    canonical: "https://salomon.reinvent-labs.com/links",
  },
  openGraph: {
    title: "Salomon Diei | Liens",
    description:
      "Ingénieur IA, chercheur et créateur de contenu sur l'intelligence artificielle, les agents IA, la programmation et la tech.",
    url: "https://salomon.reinvent-labs.com/links",
    type: "profile",
    images: [
      {
        url: "https://salomon.reinvent-labs.com/images/salomon-social-profile.jpg",
        width: 720,
        height: 720,
        alt: "Salomon Diei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salomon Diei | Liens",
    description:
      "Retrouve Salomon Diei sur TikTok, Instagram, YouTube, LinkedIn, Facebook et email.",
    images: ["https://salomon.reinvent-labs.com/images/salomon-social-profile.jpg"],
  },
};

type SocialLink = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  {
    name: "Site web",
    description: "Mon portfolio",
    href: "https://salomon.reinvent-labs.com/",
    icon: Globe,
  },
  {
    name: "TikTok",
    description: "Contenus courts sur l'IA, les agents et la tech",
    href: "https://www.tiktok.com/@salomondiei",
    icon: Music2,
  },
  {
    name: "Instagram",
    description: "Coulisses, projets et contenus tech",
    href: "https://www.instagram.com/salomon.codes/",
    icon: Instagram,
  },
  {
    name: "YouTube",
    description: "Vidéos, formations et démonstrations",
    href: "https://www.youtube.com/@Reinvent-Labs",
    icon: Youtube,
  },
  {
    name: "LinkedIn",
    description: "Parcours, recherche, projets et actualités professionnelles",
    href: "https://linkedin.com/in/salomondiei",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    description: "Publications et contenus en français",
    href: "https://www.facebook.com/salomon.diei/",
    icon: Facebook,
  },
  {
    name: "Email",
    description: "Pour les collaborations, conférences et projets",
    href: "mailto:salomondiei08@gmail.com",
    icon: Mail,
  },
];

const topics = [
  "Intelligence artificielle",
  "Agents IA",
  "Programmation",
  "Recherche",
  "Entrepreneuriat tech",
  "Outils et actualités IA",
];

/**
 * Standalone bio-link page for social profiles. It is intentionally not linked
 * from the main navigation so it can be used as a clean social bio URL.
 */
export default function LinksPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[36rem] flex-col px-0 py-8 sm:py-12">
      <header className="flex flex-col items-center text-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-border bg-secondary shadow-sm">
          <Image
            src="/images/salomon-social-profile.jpg"
            alt="Salomon Diei"
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </div>

        <h1 className="mt-6 font-sans text-3xl font-bold leading-tight">
          Salomon Diei
        </h1>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          Ingénieur IA · Chercheur · Créateur de contenu
        </p>
        <p className="mt-4 max-w-[31rem] text-base leading-relaxed text-muted-foreground sm:text-lg">
          Je partage du contenu sur l'intelligence artificielle, les agents IA, la programmation
          et les nouvelles technologies.
        </p>
      </header>

      <section aria-labelledby="social-links-title" className="mt-8">
        <h2 id="social-links-title" className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Retrouve-moi ici
        </h2>
        <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-7">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={`${link.name}: ${link.description}`}
                className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-md px-2 py-3 text-center transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-colors group-hover:border-primary/60 group-hover:bg-primary/10">
                  <link.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-sans text-sm font-bold leading-tight text-foreground">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <a
        href="https://chat.whatsapp.com/IpV1ED1SUaZFUepV5SzUkM?mode=gi_t"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex min-h-24 items-center gap-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-4 transition-colors hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MessageCircle className="h-7 w-7 shrink-0 text-emerald-500" aria-hidden="true" />
        <span className="min-w-0 flex-1">
          <span className="block font-sans text-base font-bold">AI Connect</span>
          <span className="mt-1 block text-sm leading-relaxed text-foreground">
            Tu veux apprendre l&apos;IA ? Rejoins notre communauté AI Connect.
          </span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
      </a>

      <section aria-labelledby="topics-title" className="mt-8">
        <h2 id="topics-title" className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Mes sujets
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <li key={topic}>
              <span className="inline-flex min-h-11 items-center rounded-md border border-border bg-background px-3 font-sans text-sm text-foreground">
                {topic}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
