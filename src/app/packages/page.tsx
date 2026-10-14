import { Suspense } from "react";
import Link from "next/link";

import { PackageCard } from "@/components/packages/package-card";
import { PackageFilters } from "@/components/packages/package-filters";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import { filterPackages, hasActiveFilters, packages, parsePackageFilters } from "@/data/packages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kerala and India tour packages",
  description:
    "Kerala tour packages, honeymoon routes, family holidays, weekend getaways, and domestic trips across India.",
  path: "/packages",
  image: "/images/destinations/alleppey.jpg",
  imageAlt: "Houseboat on the Alleppey backwaters",
});

export default function PackagesPage({ searchParams }: PageProps<"/packages">) {
  return (
    <>
      <PageHero
        eyebrow="Journeys"
        title="Tour packages"
        description="Filter by place, category, length, or budget, then open a route and ask us to shape it around your dates."
        image="/images/destinations/alleppey.jpg"
        imageAlt="Houseboats on the Kerala backwaters"
      />
      <Suspense fallback={<PackageSkeleton />}>
        <PackageResults searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function PackageResults({
  searchParams,
}: {
  searchParams: PageProps<"/packages">["searchParams"];
}) {
  const filters = parsePackageFilters(await searchParams);
  const results = filterPackages(packages, filters);

  return (
    <Container className="py-10 sm:py-14">
      <PackageFilters filters={filters} />
      <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
        Showing {results.length} {results.length === 1 ? "package" : "packages"}
        {hasActiveFilters(filters) ? " for the current filters" : ""}.
      </p>
      {results.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            title="No packages match these filters"
            description="Clear the filters, or tell us what you want and a route can be drafted from scratch."
            actionHref="/plan-your-trip"
            actionLabel="Plan a custom trip"
          />
          <p className="mt-4 text-center">
            <Link href="/packages" className="text-sm font-semibold text-forest">
              Clear filters
            </Link>
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {results.map((travelPackage) => (
            <PackageCard key={travelPackage.id} travelPackage={travelPackage} />
          ))}
        </div>
      )}
    </Container>
  );
}

function PackageSkeleton() {
  return (
    <Container className="py-10">
      <Skeleton className="h-48 rounded-3xl" />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-96 rounded-3xl" />
        ))}
      </div>
    </Container>
  );
}
