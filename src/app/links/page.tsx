import type { Metadata } from "next";
import Image from "next/image";
import type { ComponentType } from "react";
import { ArrowUpRight, Globe, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TelegramIcon, TikTokIcon, YouTubeIcon } from "./BrandIcons";
import styles from "./links.module.css";
import { WhatsAppHelp } from "./WhatsAppHelp";

/*
 * Bio-link page (s.reinvent-labs.com). Visitors arrive from a TikTok or Instagram bio, on a phone,
 * curious about AI. The page is ordered by what they should do, not by who Salomon is:
 *   1. a compact profile so they know whose page this is;
 *   2. the free course, the one-tap way in (the only loud block on the page);
 *   3. the paid courses as a price list: name and promise on the left, price on the right;
 *   4. the community (WhatsApp channel, Telegram group);
 *   5. social profiles, small;
 *   6. partnership contact.
 * Colours come from the Reinvent Labs logo (green #00DC82, deep teal #005653).
 */

const ACADEMY = "https://academy.reinvent-labs.com";
const whatsappChannelUrl = "https://whatsapp.com/channel/0029Vabuc5aCMY0MaUTXzJ1F";
/** Invite link of the AI Connect community group on Telegram (no member limit, unlike WhatsApp groups). */
const telegramGroupUrl = "https://t.me/+v3gpomcWB4RjMjU0";

export const metadata: Metadata = {
  title: "Liens | Salomon Diei",
  description:
    "Formations IA de Reinvent Labs Academy, communauté AI Connect et réseaux de Salomon Diei.",
  alternates: {
    canonical: "https://salomon.reinvent-labs.com/links",
  },
  openGraph: {
    title: "Salomon Diei | Liens",
    description:
      "Apprends l'IA avec Reinvent Labs Academy : une première formation gratuite, puis des formations pour construire ton appli et tes agents IA.",
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
    description: "Formations IA, communauté AI Connect et réseaux de Salomon Diei.",
    images: ["https://salomon.reinvent-labs.com/images/salomon-social-profile.jpg"],
  },
};

/** The free entry course, shown as the main call to action. Figures are the academy's own. */
const freeCourse = {
  title: "Être plus productif grâce à l'IA",
  promise: "Comprendre l'IA, ChatGPT et les agents, puis passer à la pratique sur deux cas réels.",
  facts: ["14 leçons", "1 h 52", "Certificat", "128 élèves"],
  href: `${ACADEMY}/cours/etre-plus-productif-grace-a-l-ia`,
};

type PaidCourse = { title: string; promise: string; price: string; was: string; href: string };

/** Paid courses at their launch price (FCFA), in the order a beginner would take them. */
const paidCourses: PaidCourse[] = [
  {
    title: "Vibe Coder Pro",
    promise: "Crée ton application avec l'IA, de l'idée à la mise en ligne, sans être développeur.",
    price: "35 000",
    was: "50 000",
    href: `${ACADEMY}/cours/vibe-coder-pro`,
  },
  {
    title: "AI Agent Builder",
    promise: "Construis des agents IA qui utilisent des outils et automatisent de vraies tâches.",
    price: "35 000",
    was: "50 000",
    href: `${ACADEMY}/cours/ai-agent-builder`,
  },
  {
    title: "AI in Business",
    promise: "Utilise l'IA pour ta communication, tes ventes, ton service client et ton administration.",
    price: "35 000",
    was: "50 000",
    href: `${ACADEMY}/cours/ai-in-business`,
  },
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

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function LinksPage() {
  return (
    <div className={`${styles.page} mx-auto flex min-h-screen w-full max-w-[34rem] flex-col px-0 pb-10 pt-6 sm:pt-10`}>
      {/* 1. Whose page this is: compact, so the courses are visible without scrolling on a phone. */}
      <header className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border bg-secondary">
          <Image src="/images/salomon-social-profile.jpg" alt="Salomon Diei" fill sizes="64px" className="object-cover" priority />
        </div>
        <div className="min-w-0">
          <h1 className="font-sans text-2xl font-bold leading-tight">Salomon Diei</h1>
          <p className="mt-1 text-[0.95rem] leading-snug text-muted-foreground">
            Ingénieur IA. J&apos;enseigne l&apos;IA en pratique avec Reinvent Labs Academy.
          </p>
        </div>
      </header>

      {/* 2. The way in: the free course. The only loud block on the page. */}
      <section aria-labelledby="free-course" className={`${styles.free} mt-7 rounded-[1.75rem] p-6 sm:p-7`}>
        <div className="flex items-center gap-3">
          <Image src="/images/reinvent-labs-mark.png" alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
          <p className="font-sans text-[0.95rem] font-bold text-white/90">Reinvent Labs Academy</p>
        </div>
        <p className={`${styles.freeTag} mt-6 inline-flex rounded-full px-3 py-1 font-sans text-sm font-bold`}>Formation gratuite</p>
        <h2 id="free-course" className="mt-3 font-sans text-[1.75rem] font-bold leading-[1.12] text-white sm:text-[2.1rem]">
          {freeCourse.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/85">{freeCourse.promise}</p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2" aria-label="Contenu de la formation">
          {freeCourse.facts.map((fact) => (
            <li key={fact} className="font-sans text-[0.95rem] font-bold text-white">
              {fact}
            </li>
          ))}
        </ul>
        <a
          href={freeCourse.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.freeButton} mt-6 flex min-h-14 items-center justify-center whitespace-nowrap rounded-2xl px-5 font-sans text-[1.05rem] font-bold ${focusRing}`}
        >
          Commencer gratuitement
        </a>
        <p className="mt-3 text-center text-sm text-white/75">Sans carte bancaire. Sur téléphone ou ordinateur.</p>
      </section>

      {/* 3. Then go further: a price list, so the offer and the price read in one glance. */}
      <section aria-labelledby="paid-courses" className="mt-10">
        <h2 id="paid-courses" className="font-sans text-xl font-bold">Aller plus loin</h2>
        <p className={`${styles.launch} mt-1 font-sans text-[0.95rem] font-bold`}>Prix de lancement : −30 % sur chaque formation</p>
        <ul className={`${styles.priceList} mt-4`}>
          {paidCourses.map((course) => (
            <li key={course.href}>
              <a
                href={course.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.priceRow} block py-5 ${focusRing}`}
              >
                <span className="flex items-baseline justify-between gap-4">
                  <span className="font-sans text-lg font-bold leading-snug">{course.title}</span>
                  <span className="shrink-0 whitespace-nowrap font-sans tabular-nums">
                    <span className="mr-2 text-sm text-muted-foreground line-through">{course.was}</span>
                    <span className="text-lg font-bold">{course.price}</span>
                    <span className="ml-1 text-sm font-bold text-muted-foreground">FCFA</span>
                  </span>
                </span>
                <span className="mt-1 block text-[0.95rem] leading-relaxed text-muted-foreground">{course.promise}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={`${styles.sprint} mt-5 rounded-2xl p-5`}>
          <p className="font-sans text-lg font-bold leading-snug">Build Sprint : ton projet en ligne en 14 jours</p>
          <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">
            Deux semaines en direct avec nos ingénieurs, en groupe de 5.
          </p>
          <a href={`${ACADEMY}/#sprint`} target="_blank" rel="noopener noreferrer" className={`mt-3 inline-flex min-h-11 items-center gap-1 font-sans text-[0.95rem] font-bold underline underline-offset-4 ${focusRing}`}>
            Découvrir le Build Sprint
          </a>
        </div>
        <a
          href={`${ACADEMY}/cours`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border font-sans text-base font-bold hover:bg-secondary ${focusRing}`}
        >
          Voir toutes les formations
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>

      {/* 4. Learn together: the community, two equal doors. */}
      <section aria-labelledby="community" className="mt-10">
        <h2 id="community" className="font-sans text-xl font-bold">Apprendre ensemble</h2>
        <p className="mt-1 text-[0.95rem] text-muted-foreground">La communauté AI Connect, gratuite.</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <a href={whatsappChannelUrl} className={`${styles.community} ${styles.whatsapp} flex min-h-28 flex-col justify-between rounded-2xl p-4 ${focusRing}`}>
            <span className={styles.whatsappBadge} aria-hidden="true"><span className={styles.whatsappIcon} /></span>
            <span>
              <span className="block font-sans text-base font-bold">Chaîne WhatsApp</span>
              <span className="block text-sm text-muted-foreground">Actus et astuces IA</span>
            </span>
          </a>
          <a href={telegramGroupUrl} className={`${styles.community} ${styles.telegram} flex min-h-28 flex-col justify-between rounded-2xl p-4 ${focusRing}`}>
            <TelegramIcon className="h-10 w-10" />
            <span>
              <span className="block font-sans text-base font-bold">Groupe Telegram</span>
              <span className="block text-sm text-muted-foreground">Échanges et lives</span>
            </span>
          </a>
        </div>
      </section>

      {/* 5. Follow: icons only, the names are in each label for screen readers. */}
      <section aria-labelledby="follow" className="mt-10">
        <h2 id="follow" className="font-sans text-xl font-bold">Me suivre</h2>
        <ul className="mt-4 grid grid-cols-7 justify-items-center gap-1">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={link.name}
                title={link.name}
                className={`${styles.socialIcon} flex h-11 w-11 items-center justify-center rounded-full ${focusRing}`}
                data-platform={link.name}
              >
                <link.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Contact. */}
      <section aria-labelledby="partnership" className="mt-10 border-t border-border pt-6">
        <h2 id="partnership" className="font-sans text-lg font-bold">Un partenariat, une conférence&nbsp;?</h2>
        <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">Écris-moi directement sur WhatsApp.</p>
        <a
          href="https://wa.me/2250152375828"
          className={`mt-3 inline-flex min-h-11 items-center gap-3 rounded-xl px-1 font-sans text-[0.95rem] font-bold underline underline-offset-4 ${focusRing}`}
        >
          <span className={styles.whatsappIcon} aria-hidden="true" />
          Me contacter sur WhatsApp
        </a>
      </section>
      <WhatsAppHelp channelUrl={whatsappChannelUrl} phone="+2250152375828" />
    </div>
  );
}
