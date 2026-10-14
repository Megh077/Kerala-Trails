import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src={siteConfig.logo}
        alt=""
        width={40}
        height={40}
        unoptimized
        className={cn("size-10 rounded-2xl", inverted && "bg-ivory")}
      />
      {siteConfig.logoIncludesWordmark ? null : (
        <span className={cn("font-serif text-xl tracking-tight", inverted ? "text-ivory" : "text-forest")}>
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
