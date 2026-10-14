import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { PriceTag } from "@/components/ui/price-tag";
import { formatDuration } from "@/data/packages";
import { packageEnquiryMessage } from "@/lib/whatsapp";
import type { TravelPackage } from "@/types/travel";

export function PackageCard({ travelPackage }: { travelPackage: TravelPackage }) {
  const href = `/packages/${travelPackage.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-card shadow-[0_16px_40px_rgba(16,38,29,0.06)]">
      <Link href={href} aria-label={`${travelPackage.title} photograph`} className="relative block aspect-[4/3] overflow-hidden bg-sage">
        <Image
          src={travelPackage.image}
          alt={travelPackage.imageAlt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-ivory/95 px-3 py-1 text-xs font-semibold text-forest">
          {formatDuration(travelPackage.days, travelPackage.nights)}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-ink-soft">{travelPackage.locationLabel}</p>
        <h3 className="mt-1 font-serif text-[1.65rem] leading-tight tracking-tight text-ink">
          <Link href={href} className="hover:text-forest">
            {travelPackage.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">{travelPackage.summary}</p>
        <div className="mt-4">
          <PriceTag amount={travelPackage.startingPrice} compact />
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <Link href={href} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-forest">
            See the trip
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <WhatsAppLink
            message={packageEnquiryMessage(travelPackage.title)}
            className="inline-flex min-h-11 items-center text-sm font-semibold text-ink-soft underline-offset-4 hover:text-forest hover:underline"
          >
            Ask on WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}
