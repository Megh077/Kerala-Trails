"use client";

import { useState } from "react";

import { isWhatsappConfigured } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buildWhatsappUrl } from "@/lib/whatsapp";

export function WhatsAppLink({
  message,
  className,
  children,
}: {
  message: string;
  className?: string;
  children: React.ReactNode;
}) {
  const href = buildWhatsappUrl(message);

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Dialog>
      <DialogTrigger type="button" className={className}>
        {children}
      </DialogTrigger>
      <WhatsAppPreview message={message} />
    </Dialog>
  );
}

export function WhatsAppPreview({ message }: { message: string }) {
  const [copied, setCopied] = useState(false);
  const configured = isWhatsappConfigured();

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle className="font-serif text-xl">Your WhatsApp message</DialogTitle>
        <DialogDescription className="text-sm leading-relaxed">
          {configured
            ? "If WhatsApp did not open, copy this message and send it to us."
            : "Copy this message and send it to our travel desk on WhatsApp."}
        </DialogDescription>
      </DialogHeader>
      <textarea readOnly value={message} rows={8} className="field min-h-40 py-3" aria-label="Enquiry message" />
      <Button type="button" className="h-11 rounded-full" onClick={copyMessage}>
        {copied ? "Copied" : "Copy message"}
      </Button>
    </DialogContent>
  );
}

export function openWhatsapp(message: string) {
  const href = buildWhatsappUrl(message);
  if (!href) return { href: null, opened: false };
  const popup = window.open(href, "_blank", "noopener,noreferrer");
  return { href, opened: Boolean(popup) };
}

export function useEnquiryHandoff() {
  const [preview, setPreview] = useState<string | null>(null);

  function send(message: string) {
    const result = openWhatsapp(message);
    setPreview(result.href ? null : message);
  }

  return { preview, setPreview, send };
}
