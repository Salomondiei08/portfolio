import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/portfolio";
import { ChatWidget } from "@/components/portfolio/ChatWidget";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salomon Diei | AI Engineer & Researcher",
  description: "Portfolio of Salomon Diei - AI Engineer, CTO at Sikili, and Master's student in AI at KOREATECH. Specializing in mobile development, machine learning, and innovative solutions.",
  keywords: ["Salomon Diei", "AI", "Machine Learning", "Flutter", "Mobile Development", "KOREATECH", "Software Engineer"],
  authors: [{ name: "Salomon Diei" }],
  openGraph: {
    title: "Salomon Diei | AI Engineer & Researcher",
    description: "Portfolio of Salomon Diei - AI Engineer, CTO at Sikili, and Master's student in AI at KOREATECH.",
    type: "website",
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
      <body className={`${geistMono.variable} antialiased min-h-screen`}>
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
