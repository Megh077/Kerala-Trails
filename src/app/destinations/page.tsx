import { Suspense } from "react";
import Link from "next/link";

import { DestinationCard } from "@/components/destinations/destination-card";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import { destinations, getDestinationsByRegion } from "@/data/destinations";
import { getPackagesForDestination } from "@/data/packages";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { SearchParams } from "@/types/travel";

export const metadata = createPageMetadata({
  title: "Destinations in Kerala and India",
  description:
    "Explore Kerala destinations such as Munnar, Wayanad, Alleppey, and Varkala, plus a smaller set of domestic Indian holidays.",
  path: "/destinations",
  image: "/images/destinations/munnar.jpg",
  imageAlt: "Tea hills in Munnar, Kerala",
});

const tabs = [
  { href: "/destinations", label: "All destinations", value: "all" },
  { href: "/destinations?region=kerala", label: "Kerala", value: "kerala" },
  { href: "/destinations?region=india", label: "Other India", value: "india" },
] as const;

export default function DestinationsPage({ searchParams }: PageProps<"/destinations">) {
  return (
    <>
      <PageHero
        eyebrow="Places"
        title="Destinations"
        description="Start with a place. Each page has a short guide and the packages that visit it."
        image="/images/hero.jpg"
        imageAlt="Hills and tea country in Kerala"
      />
      <Suspense fallback={<DestinationSkeleton />}>
        <DestinationResults searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function DestinationResults({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const raw = Array.isArray(params.region) ? params.region[0] : params.region;
  const region = raw === "kerala" || raw === "india" ? raw : "all";
  const items = getDestinationsByRegion(region);

  return (
    <Container className="py-10 sm:py-14">
      <div className="flex flex-wrap gap-2" role="navigation" aria-label="Filter destinations">
        {tabs.map((tab) => {
          const active = tab.value === region;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex h-11 items-center rounded-full px-4 text-sm font-semibold",
                active ? "bg-forest text-ivory" : "bg-card text-ink ring-1 ring-forest/10",
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
        Showing {items.length} {items.length === 1 ? "destination" : "destinations"}
        {region === "kerala" ? " in Kerala" : region === "india" ? " outside Kerala" : ""}.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((destination) => (
          <DestinationCard
            key={destination.slug}
            destination={destination}
            packageCount={getPackagesForDestination(destination.slug).length}
          />
        ))}
      </div>
      {region === "all" ? (
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {destinations.filter((item) => item.region === "kerala").length} of these places are in Kerala. The others are domestic Indian holidays.
        </p>
      ) : null}
    </Container>
  );
}

function DestinationSkeleton() {
  return (
    <Container className="py-10">
      <div className="flex gap-2">
        <Skeleton className="h-11 w-36 rounded-full" />
        <Skeleton className="h-11 w-24 rounded-full" />
        <Skeleton className="h-11 w-28 rounded-full" />
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="aspect-[3/4] rounded-3xl" />
        ))}
      </div>
    </Container>
  );
}
