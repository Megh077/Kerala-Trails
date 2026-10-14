import Link from "next/link";

import { PlanCta } from "@/components/home/plan-cta";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About us",
  description:
    "Kerala Trails plans Kerala holidays and other trips across India, with routes shaped around the people travelling.",
  path: "/about",
  image: "/images/experiences/hills.jpg",
  imageAlt: "Hills in the Western Ghats",
});

const services = [
  "Kerala tour packages",
  "Honeymoon and family holidays",
  "Weekend getaways",
  "Group trips",
  "Domestic Indian holidays",
  "Custom itineraries",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`About ${siteConfig.name}`}
        description="We plan Kerala holidays first, and domestic trips across India when a journey needs a change of scene."
        image="/images/experiences/hills.jpg"
        imageAlt="Tea hills in the Western Ghats"
      />
      <Container className="space-y-14 py-12 sm:py-16">
        <section className="max-w-3xl">
          <h2 className="font-serif text-3xl text-ink">A Kerala-first way of planning</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {siteConfig.name} helps people plan time in Kerala, and, when they want a change of scene, a holiday elsewhere in India. The work is personal: dates, pace, stays, and the people travelling all shape the route.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Tell us where you want to go and we will reply on WhatsApp with a plan you can adjust. A published package is a starting route. Rooms, houseboats, and vehicles are confirmed with you before the trip.
          </p>
        </section>
        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl bg-sage p-6">
            <h2 className="font-serif text-2xl text-ink">Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              To make Kerala and other Indian trips easy to picture and easy to adjust, with clear routes and a direct way to ask questions.
            </p>
          </article>
          <article className="rounded-3xl bg-card p-6 ring-1 ring-forest/10">
            <h2 className="font-serif text-2xl text-ink">Travel philosophy</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Leave room in the day. Match the route to the people travelling. Say what is included, and say just as clearly what is not. Agree the plan with you before anything is held.
            </p>
          </article>
        </section>
        <section>
          <h2 className="font-serif text-3xl text-ink">Where we plan trips</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">
            Most of our journeys stay in Kerala — Munnar, Wayanad, the backwaters, Thekkady, the hills, and the coast. We also plan domestic holidays to Goa, Manali, Jaipur, and the Nilgiris.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service} className="rounded-2xl bg-forest px-4 py-3 text-sm font-medium text-ivory">
                {service}
              </li>
            ))}
          </ul>
        </section>
      </Container>
      <WhyChooseUs />
      <PlanCta
        title="Talk through a route."
        description="Share a destination and a rough date. The next step is a conversation, not an automatic booking."
      />
      <Container className="pb-16">
        <Link href="/contact" className="text-sm font-semibold text-forest">
          Go to the contact page
        </Link>
      </Container>
    </>
  );
}
