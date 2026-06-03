import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Toaster } from "sonner";
import { siteConfig } from "@/data/siteConfig";
import { AudioWelcome } from "@/components/AudioWelcome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// ============================================
// FULL SEO METADATA (SSOT driven)
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL("https://www.gladbilist.dk"),
  title: {
    default: siteConfig.metadata.title,
    template: siteConfig.metadata.titleTemplate,
  },
  description: siteConfig.metadata.description,
  keywords: [...siteConfig.metadata.keywords],
  authors: [{ name: "Morten Larsen", url: "https://www.gladbilist.dk" }],
  creator: "Morten Larsen – Mortens Køreskole",
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: [...siteConfig.metadata.openGraph.images],
    url: "https://www.gladbilist.dk",
    siteName: "Gladbilist – Mortens Køreskole",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: [siteConfig.metadata.openGraph.images[0].url],
  },
  alternates: {
    canonical: "https://www.gladbilist.dk",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD for LocalBusiness + rich results (SEO gold)
  const jsonLd = {
    ...siteConfig.schema,
    "@id": "https://www.gladbilist.dk",
  };

  return (
    <html
      lang="da"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LenisProvider>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />

          {/* Velkomst lyd – forsøger auto-play, viser knap hvis browser blokerer */}
          <AudioWelcome />

          {/* Sonner toast notifications – beautiful & accessible */}
          <Toaster position="top-center" richColors closeButton />

          {/* Structured Data – Schema.org LocalBusiness */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </LenisProvider>
      </body>
    </html>
  );
}
