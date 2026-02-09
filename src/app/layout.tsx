import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Sidebar } from "@/components/portfolio";
import { ChatWidget } from "@/components/portfolio/ChatWidget";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";

export const metadata: Metadata = {
  title: "Salomon Diei | AI Engineer & Autonomous Agents Researcher",
  description: "Salomon Diei - AI Engineer, CTO at Sikili, and researcher focused on making AI agents more efficient and automating human work. Primary focus: autonomous agent researcher and autonomous coding.",
  keywords: [
    // Name variations
    "Salomon Diei", "Salomon DIEI", "salomondiei", "salomondiei08",
    // Current roles
    "AI Engineer", "AI Researcher", "Autonomous Agents Researcher", "CTO Sikili",
    // Education
    "KOREATECH", "Korea University of Technology and Education", "KOREATECH AI", "GKS Scholar", "Korean Government Scholarship",
    // Location
    "Cheonan South Korea", "Côte d'Ivoire", "Ivorian Software Engineer",
    // Skills
    "Flutter Developer", "Python Developer", "FastAPI", "Mobile Development", "Cloud Engineer",
    "Google Cloud Certified", "GCP", "Docker", "Terraform", "Vue.js",
    // Projects
    "Autonomous AI Agent Researcher", "TourCI", "Help AI", "Sikili Platform",
    // Achievements
    "Gorange 5G Hackathon Winner",
    // Previous work
    "Futurafric", "BUI Corporation", "Casys Technologies",
    // Education background
    "Institut Ivoirien de Technologie", "Software Engineering Ivory Coast",
  ],
  authors: [{ name: "Salomon Diei", url: "https://github.com/salomondiei08" }],
  creator: "Salomon Diei",
  publisher: "Salomon Diei",
  openGraph: {
    title: "Salomon Diei | AI Engineer & Autonomous Agents Researcher",
    description: "AI Engineer and CTO at Sikili, researching efficient AI agents that automate human work. Focused on autonomous agent researcher systems and autonomous coding.",
    type: "website",
    locale: "en_US",
    url: "https://salomondiei.com",
    siteName: "Salomon Diei Portfolio",
    images: [
      {
        url: "/images/salomon.JPG",
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
    images: ["/images/salomon.JPG"],
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
    // Add these once you verify with Google/Bing
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Salomon Diei",
              alternateName: "Salomon DIEI",
              url: "https://salomondiei.com",
              image: "https://salomondiei.com/images/salomon.JPG",
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
