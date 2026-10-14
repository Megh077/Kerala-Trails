import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SelectField } from "@/components/ui/select-field";
import { destinations } from "@/data/destinations";
import { categoryOptions, durationOptions } from "@/data/packages";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative isolate min-h-[78svh] overflow-hidden sm:min-h-[84svh]">
        <Image
          src="/images/hero.jpg"
          alt="Tea gardens and clouded hills at Echo Point, Munnar"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 42%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/35 to-forest-deep/10" />
        <Container className="relative flex min-h-[78svh] flex-col justify-end pb-24 sm:min-h-[84svh] sm:pb-28">
          <p className="font-serif text-lg text-ivory/90 italic">Kerala, slowly</p>
          <h1 className="mt-2 max-w-4xl font-serif text-[2.7rem] leading-[1.02] tracking-tight text-balance text-ivory sm:text-7xl">
            Discover Kerala. Explore Incredible India.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
            Unforgettable journeys, breathtaking destinations, and personalized travel experiences crafted just for you.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/packages" className={cn(buttonVariants(), "h-12 rounded-full px-6")}>
              Explore Packages
            </Link>
            <Link
              href="/plan-your-trip"
              className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full border-white/30 bg-white/15 px-6 text-ivory backdrop-blur-md hover:bg-white hover:text-forest")}
            >
              Plan Your Trip
            </Link>
          </div>
        </Container>
      </div>

      <Container className="relative z-10 -mt-14 pb-2">
        <form
          action="/packages"
          method="get"
          className="grid gap-3 rounded-[1.75rem] bg-card p-4 shadow-[0_18px_50px_rgba(16,38,29,0.14)] sm:p-5 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-end"
        >
          <label>
            <span className="field-label">Place</span>
            <SelectField
              name="destination"
              options={[
                { value: "", label: "Place" },
                ...destinations.map((destination) => ({ value: destination.slug, label: destination.name })),
              ]}
            />
          </label>
          <label>
            <span className="field-label">Trip style</span>
            <SelectField
              name="category"
              options={categoryOptions.map((option) => ({
                value: option.value,
                label: option.label,
              }))}
            />
          </label>
          <label>
            <span className="field-label">Duration</span>
            <SelectField
              name="duration"
              options={durationOptions.map((option) => ({
                value: option.value,
                label: option.label,
              }))}
            />
          </label>
          <button type="submit" className={cn(buttonVariants(), "h-12 rounded-full px-6")}>
            Find trips
          </button>
        </form>
      </Container>
    </section>
  );
}
