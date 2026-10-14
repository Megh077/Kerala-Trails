/**
 * All agency-specific branding and contact details live in this file.
 * Replace the sample values before sharing the site as a live business website.
 *
 * Kerala Trails is a fictional demonstration name.
 */

export const siteConfig = {
  name: "Kerala Trails",
  tagline: "Kerala journeys and domestic Indian holidays",
  description:
    "Kerala Trails plans Kerala tour packages, honeymoon stays, family holidays, weekend getaways, and other domestic Indian trips with personal itinerary support.",
  /**
   * Public site origin, without a trailing slash.
   * Used for canonical URLs, Open Graph links, and the sitemap.
   * Leave empty until the production domain is known.
   * Example: "https://www.example.com"
   */
  productionUrl: "",
  logo: "/images/branding/logo.svg",
  /** Set to true when the logo file already contains the agency name. */
  logoIncludesWordmark: false,
  contacts: {
    /**
     * Display phone number. Leave empty until the agency number is available.
     * Example: "+91 98765 43210"
     */
    phone: "+91 98765 54432",
    /**
     * WhatsApp number in international format, digits only, without + or spaces.
     * India numbers need the 91 country code so wa.me opens the right chat.
     */
    whatsapp: "919876554432",
    /** Example: "hello@example.com" */
    email: "keralatrails@gmail.com",
    /** Street address. Leave empty until a real office address is confirmed. */
    address: "",
    /**
     * Full Google Maps URL for the office. A map is shown only when this is set.
     * Example: "https://maps.google.com/?q=..."
     */
    mapsUrl: "",
    /** Example: "Monday to Saturday, 9:30 am – 6:00 pm IST" */
    hours: "",
  },
  social: {
    /** Full profile URLs. Icons are hidden until these are set. */
    instagram: "",
    facebook: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function getSiteUrl() {
  const configured = siteConfig.productionUrl.trim().replace(/\/$/, "");
  if (configured) return configured;

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return `https://${vercelProduction.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }

  return "";
}

export function isNonEmpty(value: string) {
  return value.trim().length > 0;
}

export function isWhatsappConfigured() {
  return /^[1-9]\d{7,14}$/.test(siteConfig.contacts.whatsapp.trim());
}

export function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}
