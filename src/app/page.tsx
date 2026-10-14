import { DestinationCard } from "@/components/destinations/destination-card";
import { Hero } from "@/components/home/hero";
import { KeralaExperience } from "@/components/home/kerala-experience";
import { PlanCta } from "@/components/home/plan-cta";
import { Testimonials } from "@/components/home/testimonials";
import { TravelCategories } from "@/components/home/travel-categories";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { PackageCard } from "@/components/packages/package-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { destinations } from "@/data/destinations";
import { getFeaturedPackages, getPackagesForDestination } from "@/data/packages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kerala Tour Packages & Domestic Holidays",
  description: siteConfig.description,
  path: "/",
  image: "/images/hero.jpg",
  imageAlt: "Tea gardens and hills at Munnar, Kerala",
});

export default function HomePage() {
  const kerala = destinations.filter((destination) => destination.region === "kerala");
  const india = destinations.filter((destination) => destination.region === "india");
  const featured = getFeaturedPackages();

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kerala destinations",
    itemListElement: kerala.map((destination, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: destination.name,
      description: destination.summary,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <Hero />

      <section className="py-16 sm:py-20" aria-labelledby="destinations-heading">
        <Container>
          <SectionHeading
            id="destinations-heading"
            eyebrow="Where to begin"
            title="Popular destinations"
            description="Tea hills, backwaters, wildlife, and the coast. Start with the place that already feels like the trip."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kerala.map((destination, index) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
                packageCount={getPackagesForDestination(destination.slug).length}
                featured={index === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sage/70 py-16 sm:py-20" aria-labelledby="featured-heading">
        <Container>
          <SectionHeading
            id="featured-heading"
            eyebrow="Ready to go"
            title="Featured tour packages"
            description="Hill stays, houseboat nights, and family routes. Tell us your dates and we will shape the days around you."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((travelPackage) => (
              <PackageCard key={travelPackage.id} travelPackage={travelPackage} />
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <TravelCategories />
      <KeralaExperience />

      <section className="py-16 sm:py-20" aria-labelledby="india-heading">
        <Container>
          <SectionHeading
            id="india-heading"
            eyebrow="A change of scene"
            title="Elsewhere in India"
            description="Kerala stays at the centre. These are a few other holidays we plan the same way."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {india.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
                packageCount={getPackagesForDestination(destination.slug).length}
              />
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <PlanCta />
    </>
  );
}
