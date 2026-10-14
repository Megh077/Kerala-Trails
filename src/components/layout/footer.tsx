import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { isHttpUrl, isNonEmpty, siteConfig } from "@/config/site";
import { footerCompany, footerExplore, footerLegal } from "@/lib/navigation";

function FooterColumn({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-ivory">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-ivory/70 transition-colors hover:text-ivory">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const phone = siteConfig.contacts.phone.trim();
  const email = siteConfig.contacts.email.trim();
  const address = siteConfig.contacts.address.trim();
  const hours = siteConfig.contacts.hours.trim();
  const instagram = isHttpUrl(siteConfig.social.instagram) ? siteConfig.social.instagram : "";
  const facebook = isHttpUrl(siteConfig.social.facebook) ? siteConfig.social.facebook : "";

  return (
    <footer className="relative overflow-hidden bg-forest-deep text-ivory">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute top-0 left-1/4 size-80 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 size-80 rounded-full bg-white/10 blur-3xl" />
      </div>
      <Container className="relative py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="sm:col-span-2">
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/70">{siteConfig.tagline}</p>
            {phone || email || address || hours ? (
              <ul className="mt-5 space-y-2 text-sm text-ivory/70">
                {phone ? (
                  <li>
                    <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-ivory">
                      {phone}
                    </a>
                  </li>
                ) : null}
                {email ? (
                  <li>
                    <a href={`mailto:${email}`} className="hover:text-ivory">
                      {email}
                    </a>
                  </li>
                ) : null}
                {address ? <li>{address}</li> : null}
                {isNonEmpty(hours) ? <li>{hours}</li> : null}
              </ul>
            ) : null}
            {instagram || facebook ? (
              <ul className="mt-6 flex gap-3">
                {instagram ? (
                  <li>
                    <a
                      href={instagram}
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-ivory/70 hover:bg-white/20 hover:text-ivory"
                    >
                      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  </li>
                ) : null}
                {facebook ? (
                  <li>
                    <a
                      href={facebook}
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-ivory/70 hover:bg-white/20 hover:text-ivory"
                    >
                      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
                        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
                      </svg>
                    </a>
                  </li>
                ) : null}
              </ul>
            ) : null}
          </div>
          <FooterColumn title="Explore" links={footerExplore} />
          <FooterColumn title="Company" links={footerCompany} />
          <FooterColumn title="Legal" links={footerLegal} />
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          {email ? (
            <a href={`mailto:${email}`} className="hover:text-ivory">
              {email}
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
