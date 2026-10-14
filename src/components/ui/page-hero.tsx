import Image from "next/image";

import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "center",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/45 to-forest-deep/15" />
      </div>
      <Container className="relative flex min-h-72 flex-col justify-end py-12 sm:min-h-96 sm:py-16">
        {eyebrow ? <p className="font-serif text-lg text-ivory/90 italic">{eyebrow}</p> : null}
        <h1 className="mt-2 max-w-3xl font-serif text-4xl tracking-tight text-balance text-ivory sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/85 sm:text-lg">{description}</p>
      </Container>
    </section>
  );
}
