import { LegalDocument } from "@/components/layout/legal-document";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Refund policy",
  description: "How Kerala Trails handles cancellations and refunds after a trip is confirmed.",
  path: "/refund",
});

export default function RefundPage() {
  return (
    <LegalDocument
      title="Refund Policy"
      description="How cancellations and refunds work once a trip has been agreed."
    >
      <section>
        <h2 className="font-serif text-2xl text-ink">No payment on this website</h2>
        <p className="mt-3">
          {siteConfig.name} does not collect card payments or booking fees through this website. An enquiry, including a WhatsApp message, is not a paid booking and nothing is charged for sending it.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">After a trip is confirmed</h2>
        <p className="mt-3">
          If you go ahead, the travel desk confirms the stays, houseboat, and transport with you, along with the amount and how it is to be paid. Any advance is taken only after that confirmation, not by this website on its own.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">Cancellations</h2>
        <p className="mt-3">
          Refunds follow the conditions of the hotels, houseboats, and vehicles held for your dates. Those conditions are shared with you before you pay. Closer dates, peak season, and private boats are often harder to refund in full.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Tell us as soon as your plans change, on the same WhatsApp thread as the booking.</li>
          <li>We pass the cancellation to the stay or operator and confirm what can be returned.</li>
          <li>Amounts already paid to a property that cannot be recovered are not refunded by us.</li>
        </ul>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">Changes by us</h2>
        <p className="mt-3">
          If a confirmed stay or departure cannot go ahead, we will offer another date, a similar stay, or a refund of the amount we still hold for that part of the trip.
        </p>
      </section>
    </LegalDocument>
  );
}
