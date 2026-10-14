import { isWhatsappConfigured, siteConfig } from "@/config/site";

export function packageEnquiryMessage(title: string) {
  return `Hi, I'm interested in the ${title} package. Could you please share more details and availability?`;
}

export function destinationEnquiryMessage(name: string) {
  return `Hi, I'm interested in a trip to ${name}. Could you please share suitable options and availability?`;
}

export function generalEnquiryMessage() {
  return "Hi, I'd like to plan a trip in Kerala or elsewhere in India. Could you help me with options?";
}

export function buildWhatsappUrl(message: string) {
  if (!isWhatsappConfigured()) return null;
  const number = siteConfig.contacts.whatsapp.trim();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function formatEnquiryBlock(lines: Array<[string, string]>) {
  return lines
    .filter(([, value]) => value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value.trim()}`)
    .join("\n");
}
