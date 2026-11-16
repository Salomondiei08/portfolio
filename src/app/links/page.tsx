import type { Metadata } from "next";
import { Onest, Unbounded } from "next/font/google";
import Image from "next/image";
import type { ComponentType } from "react";
import { Globe, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TelegramIcon, TikTokIcon, YouTubeIcon } from "./BrandIcons";
import styles from "./links.module.css";
import { WhatsAppHelp } from "./WhatsAppHelp";

/*
 * Bio-link page (s.reinvent-labs.com), opened from a TikTok or Instagram bio on a phone.
 * Rule: everything that matters fits on one phone screen, no scrolling. Only what makes
 * people act stays: who this is, the academy (one main button, the paid courses as names),
 * the community, the networks, a partnership link. The WhatsApp help sits below the fold.
 * Type: Unbounded for display, Onest for text. Colour: the Reinvent Labs logo green.
 */
const display = Unbounded({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-links-display" });
const text = Onest({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-links-text" });

const ACADEMY = "https://academy.reinvent-labs.com";
const whatsappChannelUrl = "https://whatsapp.com/channel/0029Vabuc5aCMY0MaUTXzJ1F";
/** Invite link of the AI Connect community group on Telegram (no member limit, unlike WhatsApp groups). */
const telegramGroupUrl = "https://t.me/+v3gpomcWB4RjMjU0";

export const metadata: Metadata = {
  title: "Liens | Salomon Diei",
  description: "Formations IA de Reinvent Labs Academy, communauté AI Connect et réseaux de Salomon Diei.",
  alternates: { canonical: "https://salomon.reinvent-labs.com/links" },
  openGraph: {
    title: "Salomon Diei | Liens",
    description: "Apprends l'IA avec Reinvent Labs Academy. La première formation est gratuite.",
    url: "https://salomon.reinvent-labs.com/links",
    type: "profile",
    images: [{ url: "https://salomon.reinvent-labs.com/images/salomon-social-profile.jpg", width: 720, height: 720, alt: "Salomon Diei" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salomon Diei | Liens",
    description: "Apprends l'IA avec Reinvent Labs Academy. La première formation est gratuite.",
    images: ["https://salomon.reinvent-labs.com/images/salomon-social-profile.jpg"],
  },
};

/** The paid courses, each with what it teaches in a few words and its launch price (was 50 000). */
const courses = [
  { name: "Vibe Coder Pro", kind: "Crée ton appli ou ton SaaS comme un pro, sans savoir coder", price: "35 000 FCFA", href: `${ACADEMY}/cours/vibe-coder-pro` },
  { name: "AI Agent Builder", kind: "Crée et déploie de vrais agents en production", price: "35 000 FCFA", href: `${ACADEMY}/cours/ai-agent-builder` },
  { name: "AI in Business", kind: "Utilise l'IA pour accélérer ton business", price: "35 000 FCFA", href: `${ACADEMY}/cours/ai-in-business` },
];

type SocialLink = { name: string; href: string; icon: ComponentType<{ className?: string }> };

const socialLinks: SocialLink[] = [
  { name: "TikTok", href: "https://www.tiktok.com/@salomondiei", icon: TikTokIcon },
  { name: "Instagram", href: "https://www.instagram.com/salomon.codes/", icon: InstagramIcon },
  { name: "YouTube", href: "https://www.youtube.com/@Reinvent-Labs", icon: YouTubeIcon },
  { name: "LinkedIn", href: "https://linkedin.com/in/salomondiei", icon: LinkedInIcon },
  { name: "Facebook", href: "https://www.facebook.com/salomon.diei/", icon: FacebookIcon },
  { name: "Site web", href: "https://salomon.reinvent-labs.com/", icon: Globe },
  { name: "Email", href: "mailto:salomondiei08@gmail.com", icon: Mail },
];

const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function LinksPage() {
  return (
    <div className={`${styles.page} ${display.variable} ${text.variable} mx-auto flex min-h-[100svh] w-full max-w-[26rem] flex-col px-0 pb-8 pt-5`}>
      <header className="flex items-center gap-3 pr-12">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image src="/images/salomon-social-profile.jpg" alt="" fill sizes="48px" className="object-cover" priority />
        </div>
        <div className="min-w-0">
          <h1 className={styles.name}>Salomon Diei</h1>
          <p className={styles.role}>Ingénieur IA, je t&apos;apprends l&apos;IA</p>
        </div>
      </header>

      {/* The academy: the one big block, one main action. */}
      <section aria-labelledby="academy" className={`${styles.academy} mt-5`}>
        <p className={styles.academyName}>
          <Image src="/images/reinvent-labs-mark.png" alt="" width={24} height={24} className="h-6 w-6" />
          Reinvent Labs Academy
        </p>
        <h2 id="academy" className={styles.headline}>
          Apprends l&apos;IA en pratique.
        </h2>
        {/* Paid courses first, so people see what they get; the free course is the button at the end. */}
        <ul className={styles.courseList}>
          {courses.map((c) => (
            <li key={c.href}>
              <a href={c.href} {...external} className={`${styles.courseRow} ${focus}`}>
                <span className="min-w-0">
                  <span className={styles.courseName}>{c.name}</span>
                  <span className={styles.courseKind}>{c.kind}</span>
                </span>
                <span className={styles.priceBox} aria-label={`${c.price} au lieu de 50 000 FCFA`}>
                  <s className={styles.priceWas}>50 000</s>
                  <span className={styles.price}>{c.price}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a href={`${ACADEMY}/cours/etre-plus-productif-grace-a-l-ia`} {...external} className={`${styles.cta} ${focus}`}>
          Commencer gratuitement
        </a>
        <p className={styles.ctaNote}>Ton premier cours est offert.</p>
      </section>

      {/* The community: two doors, one row. */}
      <p className={styles.communityLabel}>Rejoins la communauté AI Connect</p>
      <nav aria-label="Communauté AI Connect" className="mt-2 grid grid-cols-2 gap-3">
        <a href={whatsappChannelUrl} className={`${styles.door} ${focus}`}>
          <span className={styles.waIcon} aria-hidden="true" />
          WhatsApp
        </a>
        <a href={telegramGroupUrl} className={`${styles.door} ${focus}`}>
          <TelegramIcon className="h-6 w-6 shrink-0" />
          Telegram
        </a>
      </nav>

      {/* Networks: icons only, names for screen readers. */}
      <ul aria-label="Mes réseaux" className="mt-5 grid grid-cols-7 justify-items-center">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(link.href.startsWith("mailto:") ? {} : external)}
              aria-label={link.name}
              title={link.name}
              data-platform={link.name}
              className={`${styles.social} ${focus}`}
            >
              <span className={styles.socialDisc} data-platform={link.name}>
                <link.icon className="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a href="https://wa.me/2250152375828" className={`${styles.partner} ${focus}`}>
        Un partenariat ? Écris-moi sur WhatsApp
      </a>

      <div className={styles.help}>
        <WhatsAppHelp channelUrl={whatsappChannelUrl} phone="+2250152375828" />
      </div>
    </div>
  );
}
