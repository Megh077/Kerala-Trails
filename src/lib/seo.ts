import type { Metadata } from "next";

import { getSiteUrl, siteConfig } from "@/config/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: PageMetaInput): Metadata {
  const origin = getSiteUrl();
  const canonical = origin ? path : undefined;
  const imageUrl = origin && image ? new URL(image, origin).toString() : undefined;

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_IN",
      url: origin ? new URL(path, origin).toString() : undefined,
      images: imageUrl
        ? [{ url: imageUrl, alt: imageAlt ?? title, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export function travelAgencyJsonLd() {
  const origin = getSiteUrl();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    areaServed: ["Kerala", "India"],
  };

  if (origin) {
    data.url = origin;
    data.logo = new URL(siteConfig.logo, origin).toString();
  }
  if (siteConfig.contacts.email.trim()) data.email = siteConfig.contacts.email.trim();
  if (siteConfig.contacts.phone.trim()) data.telephone = siteConfig.contacts.phone.trim();
  if (siteConfig.contacts.address.trim()) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contacts.address.trim(),
      addressCountry: "IN",
    };
  }

  return data;
}
