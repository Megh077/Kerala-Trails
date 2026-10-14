import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Minus } from "lucide-react";

import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { ItineraryTimeline } from "@/components/packages/itinerary-timeline";
import { PackageCard } from "@/components/packages/package-card";
import { PackageGallery } from "@/components/packages/package-gallery";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PriceTag } from "@/components/ui/price-tag";
import { categoryList, formatDuration, getPackage, getRelatedPackages, packages } from "@/data/packages";
import { createPageMetadata } from "@/lib/seo";
import { packageEnquiryMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return packages.map((travelPackage) => ({ slug: travelPackage.slug }));
}

export async function generateMetadata({ params }: PageProps<"/packages/[slug]">) {
  const { slug } = await params;
  const travelPackage = getPackage(slug);
  if (!travelPackage) return { title: "Package" };
  return createPageMetadata({
    title: travelPackage.title,
    description: `${travelPackage.summary} ${formatDuration(travelPackage.days, travelPackage.nights)} in ${travelPackage.locationLabel}.`,
    path: `/packages/${travelPackage.slug}`,
    image: travelPackage.image,
    imageAlt: travelPackage.imageAlt,
  });
}

export default async function PackageDetailPage({ params }: PageProps<"/packages/[slug]">) {
  const { slug } = await params;
  const travelPackage = getPackage(slug);
  if (!travelPackage) notFound();

  const related = getRelatedPackages(travelPackage);
  const message = packageEnquiryMessage(travelPackage.title);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: travelPackage.title,
    description: travelPackage.summary,
    itinerary: {
      "@type": "ItemList",
      itemListElement: travelPackage.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `Day ${day.day} — ${day.title}`,
        description: day.description,
      })),
    },
  };

  return (
    <article className="pb-24 lg:pb-0">
      <JsonLd data={jsonLd} />
      <Container className="py-8 sm:py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-forest">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/packages" className="hover:text-forest">
                Tour packages
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {travelPackage.title}
            </li>
          </ol>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
              {categoryList(travelPackage.categories)}
            </p>
            <h1 className="mt-2 font-serif text-4xl tracking-tight text-balance text-ink sm:text-5xl">
              {travelPackage.title}
            </h1>
            <p className="mt-3 text-ink-soft">
              {travelPackage.locationLabel} · {formatDuration(travelPackage.days, travelPackage.nights)}
            </p>
            <div className="mt-6">
              <PackageGallery images={travelPackage.gallery} />
            </div>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">{travelPackage.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {travelPackage.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl bg-sage px-4 py-3 text-sm text-ink">
                  {highlight}
                </li>
              ))}
            </ul>

            <section className="mt-12">
              <h2 className="font-serif text-3xl text-ink">Day-by-day itinerary</h2>
              <div className="mt-6">
                <ItineraryTimeline days={travelPackage.itinerary} />
              </div>
            </section>

            <section className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-serif text-2xl text-ink">Inclusions</h2>
                <ul className="mt-4 space-y-3">
                  {travelPackage.inclusions.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <Check className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-ink">Exclusions</h2>
                <ul className="mt-4 space-y-3">
                  {travelPackage.exclusions.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <Minus className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-12 rounded-3xl bg-card p-6 ring-1 ring-forest/10">
              <h2 className="font-serif text-2xl text-ink">Additional information</h2>
              <dl className="mt-4 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-ink">Pickup</dt>
                  <dd className="mt-1 text-ink-soft">{travelPackage.pickup}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Travel notes</dt>
                  <dd className="mt-1 text-ink-soft">
                    <ul className="list-disc space-y-1 pl-5">
                      {travelPackage.travelNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Important conditions</dt>
                  <dd className="mt-1 text-ink-soft">
                    <ul className="list-disc space-y-1 pl-5">
                      {travelPackage.conditions.map((condition) => (
                        <li key={condition}>{condition}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Customization</dt>
                  <dd className="mt-1 text-ink-soft">
                    Nights, hotel category, meals, and the order of places can be changed. Use Plan a similar trip to describe what you want instead.
                  </dd>
                </div>
              </dl>
            </section>
          </div>

          <aside className="h-fit rounded-3xl bg-forest p-6 text-ivory lg:sticky lg:top-28">
            <PriceTag amount={travelPackage.startingPrice} tone="inverse" />
            <p className="mt-4 text-sm leading-relaxed text-ivory/75">
              Share your dates on WhatsApp and we will confirm stays and availability.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <WhatsAppLink message={message} className={cn(buttonVariants({ variant: "secondary" }), "h-12 rounded-full")}>
                Enquire on WhatsApp
              </WhatsAppLink>
              <Link
                href={`/plan-your-trip?destination=${encodeURIComponent(travelPackage.locationLabel)}`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full border-ivory/30 bg-transparent text-ivory hover:bg-white/10 hover:text-ivory",
                )}
              >
                Plan a similar trip
              </Link>
            </div>
          </aside>
        </div>

        {related.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-serif text-3xl text-ink">Related packages</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <PackageCard key={item.id} travelPackage={item} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-forest/10 bg-ivory/95 p-3 pr-20 backdrop-blur lg:hidden">
        <WhatsAppLink message={message} className={cn(buttonVariants(), "h-12 w-full rounded-full")}>
          Enquire on WhatsApp
        </WhatsAppLink>
      </div>
    </article>
  );
}
