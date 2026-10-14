"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { isActivePath, mainNav } from "@/lib/navigation";
import { generalEnquiryMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
      {mainNav.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-sage hover:text-forest",
              active && "bg-sage text-forest",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <Container className="pt-3">
      <div className="flex h-16 items-center justify-between gap-3 rounded-full border border-white/80 bg-ivory/85 px-3 shadow-[0_10px_30px_rgba(16,38,29,0.08)] backdrop-blur-xl sm:px-4 lg:h-[4.25rem]">
        <Link href="/" className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
          <Logo />
          <span className="sr-only">Home</span>
        </Link>
        <Suspense fallback={<div className="hidden h-11 flex-1 lg:block" aria-hidden="true" />}>
          <DesktopNav />
        </Suspense>
        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppLink
            message={generalEnquiryMessage()}
            className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-4")}
          >
            WhatsApp
          </WhatsAppLink>
          <Link href="/plan-your-trip" className={cn(buttonVariants(), "h-11 rounded-full px-5")}>
            Plan Your Trip
          </Link>
        </div>
        <Suspense fallback={<div className="size-11 lg:hidden" aria-hidden="true" />}>
          <MobileNav />
        </Suspense>
      </div>
      </Container>
    </header>
  );
}
