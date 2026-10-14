import Image from "next/image";

import { Container } from "@/components/ui/container";

const experiences = [
  {
    title: "Tea plantations",
    text: "Walk the contours of the high ranges, where tea covers entire hillsides.",
    image: "/images/experiences/tea.jpg",
    alt: "Tea workers with harvest baskets beside a plantation",
    className: "sm:col-span-2 sm:row-span-2 min-h-72",
  },
  {
    title: "Houseboats",
    text: "Drift through canals and open lake on the backwaters.",
    image: "/images/experiences/houseboat.jpg",
    alt: "A houseboat on the Kerala backwaters",
    className: "min-h-56",
  },
  {
    title: "Hill stations",
    text: "Cool mornings in Munnar, Wayanad, and Vagamon.",
    image: "/images/experiences/hills.jpg",
    alt: "Tea-covered hills in the Western Ghats",
    className: "min-h-56",
  },
  {
    title: "Beaches",
    text: "Cliff paths and crescent shores on the Arabian Sea.",
    image: "/images/experiences/beach.jpg",
    alt: "A beach along the Kerala coast",
    className: "min-h-56",
  },
  {
    title: "Wildlife",
    text: "Periyar and the forest edge, with sightings left to the day itself.",
    image: "/images/experiences/wildlife.jpg",
    alt: "Forest and wildlife country in Kerala",
    className: "min-h-56",
  },
  {
    title: "Culture and cuisine",
    text: "Temple towns, performances, and meals that belong to the place.",
    image: "/images/experiences/culture.jpg",
    alt: "A cultural scene from Kerala",
    className: "min-h-56 sm:col-span-2",
  },
];

export function KeralaExperience() {
  return (
    <section className="bg-forest-deep py-16 text-ivory sm:py-20" aria-labelledby="kerala-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="font-serif text-lg text-gold italic">The Kerala feeling</p>
          <h2 id="kerala-heading" className="mt-2 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
            Hills, water, and the long coastline
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
            Plantation mornings, a night on the water, forest lakes, and beaches close enough for a long weekend.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) => (
            <li key={experience.title} className={`relative overflow-hidden rounded-3xl ${experience.className}`}>
              <Image
                src={experience.image}
                alt={experience.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-5">
                <h3 className="font-serif text-2xl">{experience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/80">{experience.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
