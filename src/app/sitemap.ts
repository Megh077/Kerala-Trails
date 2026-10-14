import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/config/site";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  if (!origin) return [];

  const paths = [
    "/",
    "/destinations",
    "/packages",
    "/about",
    "/contact",
    "/plan-your-trip",
    "/privacy-policy",
    "/terms",
    "/refund",
    ...destinations.map((destination) => `/destinations/${destination.slug}`),
    ...packages.map((travelPackage) => `/packages/${travelPackage.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, origin).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
