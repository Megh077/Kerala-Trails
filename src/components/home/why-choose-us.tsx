import { BedDouble, Compass, Headphones, MapPinned, Route, Sparkles } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  {
    title: "Personalized travel planning",
    description: "Routes are shaped around your dates, pace, and the kind of trip you actually want.",
    icon: Compass,
  },
  {
    title: "Carefully selected stays",
    description: "Stay options are discussed with you, from houseboats to hill hotels, before anything is held.",
    icon: BedDouble,
  },
  {
    title: "Local destination knowledge",
    description: "Plans draw on how Kerala and other Indian destinations actually feel on the ground.",
    icon: MapPinned,
  },
  {
    title: "Flexible itineraries",
    description: "Days can be swapped, shortened, or extended. Every published route can be reshaped around your group.",
    icon: Route,
  },
  {
    title: "Dedicated travel assistance",
    description: "Questions go to a person on WhatsApp, from the first enquiry through the trip details.",
    icon: Headphones,
  },
  {
    title: "Memorable travel experiences",
    description: "The aim is a journey you will remember, with time left over rather than a packed checklist.",
    icon: Sparkles,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-sage py-16 sm:py-20" aria-labelledby="why-heading">
      <Container>
        <SectionHeading
          id="why-heading"
          eyebrow="Why travel with us"
          title="Planning that stays personal"
          description="Routes, stays, and timing are planned with you, from the first message to the day you travel."
        />
        <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="border-t border-forest/15 pt-6">
              <benefit.icon aria-hidden="true" className="size-5 text-gold" />
              <h3 className="mt-4 font-serif text-2xl text-ink">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
