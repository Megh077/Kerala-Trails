import Link from "next/link";
import { notFound } from "next/navigation";

import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { PackageCard } from "@/components/packages/package-card";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { getDestination, destinations } from "@/data/destinations";
import { getPackagesForDestination } from "@/data/packages";
import { createPageMetadata } from "@/lib/seo";
import { destinationEnquiryMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: PageProps<"/destinations/[slug]">) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return { title: "Destination" };
  return createPageMetadata({
    title: `${destination.name} travel guide`,
    description: `${destination.summary} See ${destination.name} packages and a short guide to the best time to visit.`,
    path: `/destinations/${destination.slug}`,
    image: destination.image,
    imageAlt: destination.imageAlt,
  });
}

export default async function DestinationPage({ params }: PageProps<"/destinations/[slug]">) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const related = getPackagesForDestination(destination.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.overview,
    touristType: destination.region === "kerala" ? "Kerala holiday" : "Domestic India holiday",
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow={destination.state}
        title={destination.name}
        description={destination.tagline}
        image={destination.image}
        imageAlt={destination.imageAlt}
        imagePosition={destination.imagePosition}
      />
      <Container className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-16">
        <article className="space-y-10">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-forest">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/destinations" className="hover:text-forest">
                  Destinations
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {destination.name}
              </li>
            </ol>
          </nav>
          <section>
            <h2 className="font-serif text-3xl text-ink">Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{destination.overview}</p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-ink">Best time to visit</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{destination.bestTimeToVisit}</p>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-ink">Popular attractions</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {destination.attractions.map((attraction) => (
                <li key={attraction} className="rounded-2xl bg-sage px-4 py-3 text-sm text-ink">
                  {attraction}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-ink">Recommended experiences</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-soft">
              {destination.experiences.map((experience) => (
                <li key={experience}>{experience}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-ink">Available tour packages</h2>
            {related.length > 0 ? (
              <div className="mt-6 grid gap-5">
                {related.map((travelPackage) => (
                  <PackageCard key={travelPackage.id} travelPackage={travelPackage} />
                ))}
              </div>
            ) : (
              <p className="mt-3 text-ink-soft">
                Tell us your dates and we will build a {destination.name} plan around your group.
              </p>
            )}
          </section>
        </article>
        <aside className="h-fit rounded-3xl bg-card p-6 shadow-sm ring-1 ring-forest/10 lg:sticky lg:top-28">
          <h2 className="font-serif text-2xl text-ink">Plan a trip to {destination.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Ask for dates and a route. An enquiry does not reserve stays or confirm that a season is open.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <WhatsAppLink
              message={destinationEnquiryMessage(destination.name)}
              className={cn(buttonVariants(), "h-12 rounded-full")}
            >
              Enquire on WhatsApp
            </WhatsAppLink>
            <Link
              href={`/plan-your-trip?destination=${encodeURIComponent(destination.name)}`}
              className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full")}
            >
              Plan a similar trip
            </Link>
            <Link href={`/packages?destination=${destination.slug}`} className="text-center text-sm font-semibold text-forest">
              See packages for {destination.name}
            </Link>
          </div>
        </aside>
      </Container>
    </>
  );
}
