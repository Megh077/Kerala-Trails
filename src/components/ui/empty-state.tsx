import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  description,
  actionHref,
  actionLabel,
}: {
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="rounded-3xl border border-dashed border-gold/40 bg-card px-6 py-14 text-center">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">{description}</p>
      {actionHref && actionLabel ? (
        <Link href={actionHref} className={cn(buttonVariants(), "mt-6 h-11 rounded-full px-5")}>
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
