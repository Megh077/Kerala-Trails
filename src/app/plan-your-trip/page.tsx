import { Suspense } from "react";

import { TripPlannerForm } from "@/components/forms/trip-planner-form";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Skeleton } from "@/components/ui/skeleton";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Plan your trip",
  description:
    "Request a custom Kerala or domestic India itinerary. The planner builds a WhatsApp message from the details you choose to share.",
  path: "/plan-your-trip",
  image: "/images/destinations/vagamon.jpg",
  imageAlt: "Meadows at Vagamon, Kerala",
});

export default function PlanYourTripPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom trips"
        title="Plan your trip"
        description="Share as much as you know. Dates, budget, and preferences can wait if you are still deciding."
        image="/images/destinations/vagamon.jpg"
        imageAlt="Green meadows at Vagamon"
      />
      <Container className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:py-16">
        <section className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-forest/10 sm:p-7">
          <h2 className="font-serif text-3xl text-ink">Trip details</h2>
          <div className="mt-5">
            <Suspense fallback={<Skeleton className="h-96 rounded-3xl" />}>
              <TripPlannerForm />
            </Suspense>
          </div>
        </section>
        <aside className="h-fit rounded-3xl bg-sage p-6">
          <h2 className="font-serif text-2xl text-ink">What happens next</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink-soft">
            <li>The form checks the required fields.</li>
            <li>A message is prepared with only the details you filled in.</li>
            <li>WhatsApp opens so you can send it yourself.</li>
            <li>The travel team replies with options. Availability is not checked by this page.</li>
          </ol>
        </aside>
      </Container>
    </>
  );
}
