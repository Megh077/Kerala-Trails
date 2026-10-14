import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">404</p>
      <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">That page is not on this route</h1>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
        The link may be out of date. Browse destinations, open a package, or start a custom plan.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={cn(buttonVariants(), "h-12 rounded-full px-6")}>
          Back home
        </Link>
        <Link href="/packages" className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-6")}>
          View packages
        </Link>
      </div>
    </Container>
  );
}
