import { Suspense } from "react";

import { CopyGuard } from "@/components/layout/copy-guard";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BackToTop } from "@/components/layout/back-to-top";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl, siteConfig } from "@/config/site";
import { travelAgencyJsonLd } from "@/lib/seo";
import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";

import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const origin = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: origin ? new URL(origin) : undefined,
  title: {
    default: "Kerala Tour Packages & Domestic Holidays",
    template: "%s | Kerala Trails",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    title: "Kerala Tour Packages & Domestic Holidays",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sourceSans.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <CopyGuard />
        <JsonLd data={travelAgencyJsonLd()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Suspense fallback={<div className="h-[4.75rem] lg:h-[5.25rem]" />}>
          <Header />
        </Suspense>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  );
}
