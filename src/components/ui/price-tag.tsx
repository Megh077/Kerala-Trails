import { formatInr } from "@/data/packages";
import { cn } from "@/lib/utils";

export function PriceTag({
  amount,
  compact = false,
  tone = "default",
}: {
  amount: number | null;
  compact?: boolean;
  tone?: "default" | "inverse";
}) {
  const primary = tone === "inverse" ? "text-ivory" : "text-ink";
  const muted = tone === "inverse" ? "text-ivory/75" : "text-ink-soft";
  const contact = tone === "inverse" ? "text-ivory" : "text-forest";

  if (amount == null) {
    return (
      <p className={cn("text-sm font-semibold", contact)}>
        Contact for price
        <span className={cn("mt-1 block text-xs font-normal", muted)}>Ask when you enquire</span>
      </p>
    );
  }

  return (
    <p>
      <span className="block text-sm text-gold">From</span>
      <span className={cn("mt-1 block font-serif text-2xl", primary)}>{formatInr(amount)}</span>
      {compact ? null : (
        <span className={cn("mt-1 block text-xs leading-relaxed", muted)}>Per person on twin sharing</span>
      )}
    </p>
  );
}
