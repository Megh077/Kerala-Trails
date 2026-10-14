import { LegalDocument } from "@/components/layout/legal-document";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms and conditions",
  description: "Terms for using the Kerala Trails website and asking about a holiday.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      description="The terms that apply when you browse this website or send a trip enquiry."
    >
      <section>
        <h2 className="font-serif text-2xl text-ink">Using the website</h2>
        <p className="mt-3">
          {siteConfig.name} publishes Kerala and other Indian holiday ideas on this website. You may browse the pages for personal trip planning. Please do not copy the site, its photographs, or its itineraries for another business without permission.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">Packages are starting points</h2>
        <p className="mt-3">
          A package page describes a route, a length of stay, and what is usually included. Dates, hotels, houseboats, and vehicles are confirmed only after we reply to your enquiry and you agree. Sending a form or a WhatsApp message does not reserve anything.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">Prices</h2>
        <p className="mt-3">
          A price shown as “From” is a starting figure in Indian rupees, usually per person on twin sharing. The final amount depends on dates, stay category, group size, and what you ask us to add. Packages marked “Contact for price” are quoted when you enquire.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">Enquiries</h2>
        <p className="mt-3">
          Forms on this website open WhatsApp with your message filled in. You send that message yourself. We reply with availability and a plan you can still change. This website does not take payment and does not create a booking on its own.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">Your responsibility</h2>
        <p className="mt-3">
          Please share accurate names, phone numbers, and travel dates. Permits, park closures, weather, and transport rules can change a plan. We will tell you when something on a route needs to move.
        </p>
      </section>
    </LegalDocument>
  );
}
