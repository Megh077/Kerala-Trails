import Image from "next/image";
import Link from "next/link";

import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { generalEnquiryMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function PlanCta({
  title = "Your Next Adventure Starts Here.",
  description = "Tell us the place, the dates, and who is coming. We will reply with a route you can still change.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20" aria-labelledby="plan-cta-heading">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] px-6 py-14 text-ivory sm:px-12 sm:py-16">
          <Image
            src="/images/experiences/houseboat.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-deep/72" />
          <div className="relative max-w-2xl">
            <p className="font-serif text-lg text-ivory/90 italic">Whenever you are ready</p>
            <h2 id="plan-cta-heading" className="mt-2 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/85">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/plan-your-trip" className={cn(buttonVariants({ variant: "secondary" }), "h-12 rounded-full px-6")}>
                Plan My Trip
              </Link>
              <WhatsAppLink
                message={generalEnquiryMessage()}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full border-ivory/40 bg-transparent px-6 text-ivory hover:bg-ivory hover:text-forest",
                )}
              >
                WhatsApp Enquiry
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
