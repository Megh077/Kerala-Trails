import { CalendarDays, Heart, Mountain, PenLine, Users, UsersRound } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { travelCategories } from "@/data/packages";

const icons = {
  honeymoon: Heart,
  family: Users,
  adventure: Mountain,
  weekend: CalendarDays,
  group: UsersRound,
  custom: PenLine,
} as const;

export function TravelCategories() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="categories-heading">
      <Container>
        <SectionHeading
          id="categories-heading"
          eyebrow="How you want to travel"
          title="Pick a feeling, then the place"
          description="Honeymoons, family holidays, short breaks, or a route we build from scratch."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {travelCategories.map((category) => {
            const Icon = icons[category.slug];
            return (
              <li key={category.slug}>
                <Link
                  href={category.href}
                  className="flex h-full flex-col rounded-[1.5rem] bg-sage/70 p-6 transition-colors hover:bg-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-ivory text-forest">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-ink">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{category.description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
