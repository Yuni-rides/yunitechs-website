import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Inter_Tight } from "next/font/google";
import { Footer, Navbar } from "@/components/layout";
import { JsonLd } from "@/components/shared";
import { siteConfig } from "@/config/site";
import {
  organizationSchema,
  professionalServiceSchema,
  webSiteSchema,
} from "@/lib/schema";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Narrow cut of Inter, used for large display figures and headings. Inter's
// own digits run ~18% wider than the design's; Inter Tight lands within 4%
// while keeping the same family, so the page still reads as one typeface.
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Digital Solutions for Growth`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // No `keywords`: Google has ignored the meta keywords tag for years, and
  // publishing a target list helps only competitors. The terms each page aims
  // at live in src/config/seo-pages.ts instead.
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#091D40",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${archivo.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        {/* Entity data for Google and for the AI assistants that read the same
            markup. Site-wide, so it is here rather than on each page. */}
        <JsonLd
          data={[
            organizationSchema(),
            webSiteSchema(),
            professionalServiceSchema(),
          ]}
        />
        <a
          href="#main-content"
          className="focus:bg-brand-secondary sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
