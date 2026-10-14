"use client";

import { MessageCircle } from "lucide-react";

import { WhatsAppLink } from "@/components/layout/whatsapp-link";
import { generalEnquiryMessage } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <WhatsAppLink
      message={generalEnquiryMessage()}
      className="fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-forest text-ivory shadow-lg ring-1 ring-white/20 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <MessageCircle aria-hidden="true" className="size-6" />
      <span className="sr-only">
        Enquire on WhatsApp
      </span>
    </WhatsAppLink>
  );
}
