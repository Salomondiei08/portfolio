import type { Metadata } from "next";
import { Onest, Unbounded } from "next/font/google";
import Image from "next/image";
import type { ComponentType } from "react";
import { Globe, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TelegramIcon, TikTokIcon, YouTubeIcon } from "./BrandIcons";
import styles from "./links.module.css";
import { WhatsAppHelp } from "./WhatsAppHelp";

/*
 * Mobile bio page: a compact Academy catalogue and one primary action.
 * Keep campaign labels stable when editing copy so attribution remains comparable.
 */
const display = Unbounded({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-links-display" });
const text = Onest({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-links-text" });

const ACADEMY = "https://academy.reinvent-labs.com";
const academyReferral = "?utm_source=portfolio&utm_medium=referral&utm_campaign=bio_links";
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

/** Short catalogue labels; the destination pages carry the full course details. */
const courses = [
  { name: "Productivité avec l’IA", kind: "ChatGPT et agents", price: "Gratuit", href: `${ACADEMY}/cours/etre-plus-productif-grace-a-l-ia${academyReferral}&utm_content=course_productivity` },
  { name: "Vibe Coder Pro", kind: "Créer ton application", price: "35 000 FCFA", href: `${ACADEMY}/cours/vibe-coder-pro${academyReferral}&utm_content=course_vibe_coder_pro` },
  { name: "AI Agent Builder", kind: "Construire tes agents IA", price: "35 000 FCFA", href: `${ACADEMY}/cours/ai-agent-builder${academyReferral}&utm_content=course_ai_agent_builder` },
  { name: "AI in Business", kind: "L’IA dans ton activité", price: "35 000 FCFA", href: `${ACADEMY}/cours/ai-in-business${academyReferral}&utm_content=course_ai_in_business` },
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

      <section aria-labelledby="academy" className={`${styles.academy} mt-5`}>
        <h2 id="academy" className={styles.academyName}>
          <Image src="/images/reinvent-labs-mark.png" alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
          <span>Reinvent Labs <span className={styles.academyTitle}>Academy</span></span>
        </h2>
        <ul className={styles.courseList}>
          {courses.map((c) => (
            <li key={c.href}>
              <a href={c.href} {...external} className={`${styles.courseRow} ${focus}`}>
                <span className="min-w-0">
                  <span className={styles.courseName}>{c.name}</span>
                  <span className={styles.courseKind}>{c.kind}</span>
                </span>
                <span className={styles.price}>{c.price}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={`${ACADEMY}/cours/etre-plus-productif-grace-a-l-ia${academyReferral}&utm_content=start_free`} {...external} className={`${styles.cta} ${focus}`}>
          Commencer gratuitement
        </a>
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
