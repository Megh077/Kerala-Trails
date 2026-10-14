export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerExplore = [
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/plan-your-trip", label: "Plan Your Trip" },
] as const;

export const footerCompany = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLegal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund", label: "Refund Policy" },
] as const;

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
