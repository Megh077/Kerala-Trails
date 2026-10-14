import { LegalDocument } from "@/components/layout/legal-document";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy policy",
  description: "How Kerala Trails handles the details you share when you ask about a trip.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      description="How we handle the details you share when you ask about a trip."
    >
      <section>
        <h2 className="font-serif text-2xl text-ink">Who this site is</h2>
        <p className="mt-3">
          This website is published by {siteConfig.name}. It shows Kerala and other Indian holidays and receives trip enquiries.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">What we receive</h2>
        <p className="mt-3">
          The contact form and the trip planner do not save your details in a website database. When you submit, the page prepares a message and opens WhatsApp so you can send it yourself.
        </p>
        <p className="mt-3">
          The message can include your name, phone number, email address, destination, dates, group size, budget, and anything you write. After you send it, WhatsApp delivers it to our travel desk.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">How we use it</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>We use the message to reply about routes, stays, and availability.</li>
          <li>We do not sell enquiry details.</li>
          <li>This website does not create a customer account and does not take payment.</li>
          <li>An enquiry is a conversation. It does not by itself reserve a room, boat, or vehicle.</li>
        </ul>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">Technical data</h2>
        <p className="mt-3">
          The host may keep ordinary server logs, such as browser type and the page requested. This site does not run advertising cookies or a mailing list.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-2xl text-ink">Questions</h2>
        <p className="mt-3">
          If you want us to stop using an enquiry, message the travel desk on WhatsApp and include the phone number you used.
        </p>
      </section>
    </LegalDocument>
  );
}
