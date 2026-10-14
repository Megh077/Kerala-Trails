import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="font-serif text-lg text-gold italic">{eyebrow}</p> : null}
      <h2 id={id} className="mt-2 font-serif text-4xl tracking-tight text-balance text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
