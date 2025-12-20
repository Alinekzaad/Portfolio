import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Nekzad | Webbutvecklare & IT-tekniker",
  description:
    "Portfolio för Ali Nekzad – webbutvecklare och IT-tekniker som bygger moderna, responsiva lösningar med Next.js, React, TypeScript och Tailwind CSS.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ali Nekzad | Webbutvecklare & IT-tekniker",
    description:
      "Utforska projekt, erfarenheter och kontaktuppgifter för Ali Nekzad. Modern portfolio med fokus på Next.js, React, TypeScript och Tailwind.",
    url: "https://example.com",
    siteName: "Ali Nekzad Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 bg-radial" />
          <div className="pointer-events-none fixed inset-0 bg-grid opacity-50" />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
