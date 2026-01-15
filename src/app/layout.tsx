import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/portfolio";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Engineer & Researcher | Portfolio",
  description: "Portfolio of an AI Engineer and Researcher specializing in machine learning, deep learning, and artificial intelligence research.",
  keywords: ["AI", "Machine Learning", "Deep Learning", "Research", "Engineer", "Portfolio"],
  authors: [{ name: "AI Engineer" }],
  openGraph: {
    title: "AI Engineer & Researcher | Portfolio",
    description: "Portfolio of an AI Engineer and Researcher specializing in machine learning, deep learning, and artificial intelligence research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} antialiased min-h-screen`}>
        <Sidebar />
        <main className="lg:pl-64">
          <div className="min-h-screen p-6 lg:p-10 pt-16 lg:pt-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
