"use client";

import { ChevronRight, Compass, Home, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Logo } from "@/components/layout/logo";
import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { buttonVariants } from "@/components/ui/button";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { generalEnquiryMessage } from "@/lib/whatsapp";

const mobileNav = [
  { href: "/", label: "Home", hint: "Begin the journey", icon: Home },
  { href: "/destinations", label: "Destinations", hint: "Hills, water, and coast", icon: MapPin },
  { href: "/packages", label: "Tour Packages", hint: "Routes ready to shape", icon: Compass },
  { href: "/about", label: "About Us", hint: "How we plan a trip", icon: Sparkles },
  { href: "/contact", label: "Contact", hint: "Talk to the travel desk", icon: Phone },
] as const;

export function MobileNav() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function close() {
    setOpenPath(null);
  }

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const items = panel?.querySelectorAll<HTMLElement>("a, button");
    items?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>("a, button"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-full border border-forest/15 bg-card text-forest"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpenPath(open ? null : pathname)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      {open && mounted
        ? createPortal(
            <div className="fixed inset-0 z-[70] lg:hidden">
              <button type="button" className="absolute inset-0 bg-forest-deep/55" aria-label="Close menu" onClick={close} />
              <motion.div
                ref={panelRef}
                id={panelId}
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                initial={reduce ? false : { x: 24 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col overflow-hidden bg-ivory shadow-2xl"
              >
                <div className="flex items-center justify-between gap-3 px-5 pt-5">
                  <Logo />
                  <button
                    type="button"
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-forest/15 bg-card text-forest shadow-sm"
                    onClick={close}
                  >
                    <X aria-hidden="true" />
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>
                <div className="px-4 pt-4">
                  <div className="relative h-28 overflow-hidden rounded-3xl shadow-[0_16px_40px_rgba(16,38,29,0.18)]">
                    <Image
                      src="/images/destinations/munnar.jpg"
                      alt=""
                      fill
                      sizes="(max-width: 448px) 100vw, 448px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/25 to-forest-deep/10" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="font-serif text-2xl tracking-tight text-ivory">Where next?</p>
                      <p className="mt-0.5 font-serif text-sm text-[#f3e6cf] italic">Kerala, slowly.</p>
                    </div>
                  </div>
                </div>
                <nav className="flex-1 overflow-auto px-4 py-4" aria-label="Mobile">
                  <ul className="overflow-hidden rounded-3xl border border-forest/10 bg-card shadow-sm">
                    {mobileNav.map((item) => {
                      const active = isActivePath(pathname, item.href);
                      const Icon = item.icon;
                      return (
                        <li key={item.href} className="border-b border-forest/8 last:border-b-0">
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "flex w-full items-center gap-3 px-3.5 py-3 text-ink",
                              active && "bg-sage",
                            )}
                          >
                            <span
                              className={cn(
                                "inline-flex size-10 shrink-0 items-center justify-center rounded-2xl",
                                active ? "bg-forest text-ivory" : "bg-sage text-forest",
                              )}
                            >
                              <Icon aria-hidden="true" className="size-4" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className={cn("block font-serif text-lg leading-tight", active && "text-forest")}>
                                {item.label}
                              </span>
                              <span className="mt-0.5 block text-xs text-ink-soft">{item.hint}</span>
                            </span>
                            <ChevronRight aria-hidden="true" className={cn("size-4 shrink-0", active ? "text-forest" : "text-gold")} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="border-t border-forest/10 bg-sage/80 px-5 py-4">
                  <p className="mb-3 text-center font-serif text-sm text-forest italic">Tell us the dates. We will shape the route.</p>
                  <div className="flex flex-col gap-2.5">
                    <Link href="/plan-your-trip" className={cn(buttonVariants(), "h-12 rounded-full")}>
                      Plan Your Trip
                    </Link>
                    <WhatsAppLink
                      message={generalEnquiryMessage()}
                      className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full bg-card")}
                    >
                      WhatsApp
                    </WhatsAppLink>
                  </div>
                </div>
              </motion.div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
