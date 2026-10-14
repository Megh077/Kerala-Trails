import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Destination } from "@/types/travel";

export function DestinationCard({
  destination,
  packageCount,
  featured = false,
}: {
  destination: Destination;
  packageCount: number;
  featured?: boolean;
}) {
  const countLabel =
    packageCount === 0 ? "Custom trip" : packageCount === 1 ? "1 trip" : `${packageCount} trips`;

  return (
    <article className={featured ? "h-full sm:col-span-2 lg:row-span-2" : "h-full"}>
      <Link
        href={`/destinations/${destination.slug}`}
        className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-[1.75rem] bg-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${featured ? "min-h-[26rem] lg:min-h-[38rem]" : "min-h-80"}`}
      >
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-[1.04]"
          style={{ objectPosition: destination.imagePosition ?? "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/15 to-transparent" />
        <div className="relative p-5 text-ivory">
          <p className="text-sm text-ivory/80">{destination.state}</p>
          <h3 className={`mt-1 font-serif tracking-tight ${featured ? "text-4xl" : "text-3xl"}`}>{destination.name}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/85">{destination.summary}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
            {countLabel}
            <ArrowRight className="size-4 motion-safe:transition motion-safe:group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
