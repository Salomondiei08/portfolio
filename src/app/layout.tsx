import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { Sidebar } from "@/components/portfolio";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";

// Lazy-load ChatWidget — it's not needed on initial render and adds JS weight to every page
const ChatWidget = dynamic(
  () => import("@/components/portfolio/ChatWidget").then((m) => ({ default: m.ChatWidget })),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Salomon Diei | AI Engineer & Autonomous Agents Researcher",
  description: "Salomon Diei, AI Engineer and CTO at Sikili, researching autonomous agents and work automation. Google Cloud Certified, GKS Scholar based in South Korea.",
  metadataBase: new URL("https://salomondiei.com"),
  authors: [{ name: "Salomon Diei", url: "https://github.com/salomondiei08" }],
  creator: "Salomon Diei",
  publisher: "Salomon Diei",
  alternates: {
    canonical: "https://salomondiei.com",
  },
  openGraph: {
    title: "Salomon Diei | AI Engineer & Autonomous Agents Researcher",
    description: "AI Engineer and CTO at Sikili, researching efficient AI agents that automate human work. Focused on autonomous agent systems and autonomous coding.",
    type: "website",
    locale: "en_US",
    url: "https://salomondiei.com",
    siteName: "Salomon Diei Portfolio",
    images: [
      {
        url: "https://salomondiei.com/images/salomon.JPG",
        width: 1200,
        height: 630,
        alt: "Salomon Diei - AI Engineer & Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salomon Diei | AI Engineer & Researcher",
    description: "AI Engineer at Sikili focused on autonomous agents, work automation, and efficient AI systems.",
    images: ["https://salomondiei.com/images/salomon.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification tokens once you connect Google Search Console and Bing Webmaster Tools
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Do NOT set maximumScale or userScalable=false — Google penalises sites that block pinch-zoom.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Blocking theme script — runs before any CSS/render to prevent dark/light flash.
            Reads localStorage and sets the class on <html> before React hydrates. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.classList.add(t,'no-transitions');requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.remove('no-transitions')})});}catch(e){}`,
          }}
        />

        {/* Structured Data — Person entity with @id for cross-page linkage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://salomondiei.com/#person",
              name: "Salomon Diei",
              alternateName: "Salomon DIEI",
              url: "https://salomondiei.com",
              image: "https://salomondiei.com/images/salomon.JPG",
              email: "salomondiei08@gmail.com",
              sameAs: [
                "https://github.com/salomondiei08",
                "https://linkedin.com/in/salomondiei",
              ],
              jobTitle: "AI Engineer & Researcher",
              worksFor: {
                "@type": "Organization",
                name: "Sikili",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Korea University of Technology and Education",
                  alternateName: "KOREATECH",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Institut Ivoirien de Technologie",
                },
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Flutter Development",
                "Python Programming",
                "Mobile Development",
                "Cloud Computing",
                "FastAPI",
                "Computer Vision",
                "Natural Language Processing",
              ],
              award: [
                "Gorange 5G Hackathon 1st Place",
                "GDG DevFest Hackathon Top 10",
                "Korean Government Scholarship (GKS) Recipient",
                "Google Cloud Certified Associate Cloud Engineer",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cheonan-si",
                addressCountry: "South Korea",
              },
            }),
          }}
        />

        {/* WebSite entity — links the Person to a canonical web presence */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://salomondiei.com/#website",
              name: "Salomon Diei",
              url: "https://salomondiei.com",
              description: "AI Engineer and autonomous agents researcher. Writing about AI, machine learning, and building intelligent systems.",
              author: {
                "@type": "Person",
                "@id": "https://salomondiei.com/#person",
              },
              inLanguage: "en-US",
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 min-w-0">
              <div className="min-h-screen px-4 py-6 pt-16 lg:px-8 lg:py-8 lg:pt-8 max-w-5xl mx-auto">
                {children}

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Made with ❤️ by{" "}
                    <a
                      href="https://github.com/salomondiei08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition-colors"
                    >
                      Salomon DIEI
                    </a>
                  </p>
                </footer>
              </div>
            </main>
          </div>
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
