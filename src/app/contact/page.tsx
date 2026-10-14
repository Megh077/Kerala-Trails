import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { isHttpUrl, isWhatsappConfigured, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";
import { generalEnquiryMessage } from "@/lib/whatsapp";
import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Send a Kerala or India trip enquiry. The form prepares a WhatsApp message and does not store it on the website.",
  path: "/contact",
  image: "/images/destinations/kochi.jpg",
  imageAlt: "Chinese fishing nets at Fort Kochi",
});

export default function ContactPage() {
  const phone = siteConfig.contacts.phone.trim();
  const email = siteConfig.contacts.email.trim();
  const address = siteConfig.contacts.address.trim();
  const mapsUrl = isHttpUrl(siteConfig.contacts.mapsUrl) ? siteConfig.contacts.mapsUrl : "";
  const hours = siteConfig.contacts.hours.trim();
  const showMap = address.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the travel desk"
        description="Ask about a package, a date, or a route you have not seen on the site. The enquiry continues on WhatsApp."
        image="/images/destinations/kochi.jpg"
        imageAlt="Shore and fishing nets at Fort Kochi"
        imagePosition="72% center"
      />
      <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-16">
        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-ink">Contact information</h2>
          <dl className="space-y-4 text-sm leading-relaxed">
            <InfoItem label="Phone" value={phone} href={phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : undefined} />
            <InfoItem label="WhatsApp" value={isWhatsappConfigured() ? `+${siteConfig.contacts.whatsapp}` : ""} />
            <InfoItem label="Email" value={email} href={email ? `mailto:${email}` : undefined} />
            <InfoItem label="Office address" value={address} />
            <InfoItem label="Office hours" value={hours} />
          </dl>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink
              message={generalEnquiryMessage()}
              className={cn(buttonVariants(), "h-12 rounded-full px-5")}
            >
              WhatsApp enquiry
            </WhatsAppLink>
            {phone ? (
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-5")}
              >
                Call
              </a>
            ) : null}
            {email ? (
              <a href={`mailto:${email}`} className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-5")}>
                Email
              </a>
            ) : null}
          </div>
        </section>
        <section className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-forest/10 sm:p-7">
          <h2 className="font-serif text-3xl text-ink">Enquiry form</h2>
          <div className="mt-5">
            <EnquiryForm />
          </div>
        </section>
      </Container>
      <Container className="pb-16">
        {showMap ? (
          <section>
            <h2 className="font-serif text-3xl text-ink">Location</h2>
            <p className="mt-2 text-sm text-ink-soft">{address}</p>
            <iframe
              title={`Map showing ${address}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`}
              className="mt-4 h-80 w-full rounded-3xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {mapsUrl ? (
              <a href={mapsUrl} className="mt-3 inline-block text-sm font-semibold text-forest" target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            ) : null}
          </section>
        ) : null}
      </Container>
    </>
  );
}

function InfoItem({ label, value, href }: { label: string; value: string; href?: string }) {
  if (!value) return null;

  return (
    <div>
      <dt className="font-semibold text-ink">{label}</dt>
      <dd className="mt-1 text-ink-soft">
        {href ? (
          <a href={href} className="text-forest underline-offset-2 hover:underline">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
