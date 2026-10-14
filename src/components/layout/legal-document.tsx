import { Shield } from "lucide-react";

import { Container } from "@/components/ui/container";

export function LegalDocument({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-ivory pt-16 pb-10 sm:pt-20 sm:pb-14">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-1/4 size-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 size-80 rounded-full bg-forest/10 blur-3xl" />
        </div>
        <Container className="relative text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-card px-4 py-2 text-sm font-semibold text-ink">
            <Shield className="size-4 text-forest" aria-hidden="true" />
            Legal
          </p>
          <h1 className="mt-6 font-serif text-4xl tracking-tight text-balance text-ink sm:text-6xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{description}</p>
        </Container>
      </section>
      <Container className="max-w-3xl space-y-8 py-12 text-base leading-relaxed text-ink-soft sm:py-16">
        {children}
      </Container>
    </>
  );
}
