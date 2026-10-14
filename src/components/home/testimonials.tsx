import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: "anjana-menon",
    quote:
      "We wanted Munnar without a rushed checklist. The two nights felt easy, the tea-estate stop was well timed, and the stay matched what we had asked for.",
    name: "Anjana Menon",
    trip: "Munnar Romantic Escape",
    from: "Kochi",
  },
  {
    id: "sreejith-namboothiri",
    quote:
      "The houseboat night from Alleppey was the part my parents still talk about. Boarding was clear, lunch on board was proper, and the pace on the water was unhurried.",
    name: "Sreejith Namboothiri",
    trip: "Alleppey Houseboat Retreat",
    from: "Thrissur",
  },
  {
    id: "devika-warrier",
    quote:
      "Our honeymoon moved from Munnar to Thekkady and then the backwaters. Each change of place was explained in advance, and we still had time to ourselves.",
    name: "Devika Warrier",
    trip: "Kerala Honeymoon Experience",
    from: "Kozhikode",
  },
];

const boardTilt = ["lg:-rotate-1", "lg:mt-8 lg:rotate-1", "lg:-rotate-[0.5deg]"];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-sage/60 py-16 sm:py-24" aria-labelledby="stories-heading">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 0%, rgba(255,255,255,0.7), transparent 34%), radial-gradient(circle at 88% 100%, rgba(166,124,61,0.08), transparent 30%)",
        }}
      />
      <Container className="relative">
        <SectionHeading
          id="stories-heading"
          eyebrow="From the road"
          title="Stories from recent travellers"
          description="Notes from guests who planned Kerala holidays with us."
        />
        <ul className="mt-12 grid items-start gap-6 lg:grid-cols-3 lg:gap-7">
          {reviews.map((item, index) => (
            <li key={item.id} className={cn("min-w-0", boardTilt[index])}>
              <figure
                className="relative rounded-[1.35rem] border border-gold/25 p-3 shadow-[0_16px_36px_-22px_rgba(27,67,50,0.45)]"
                style={{
                  backgroundColor: "#f6efe3",
                  backgroundImage: [
                    "linear-gradient(90deg, rgba(166,124,61,0.14), transparent 14%, transparent 86%, rgba(166,124,61,0.16))",
                    "repeating-linear-gradient(180deg, rgba(166,124,61,0.07) 0 1px, transparent 1px 13px)",
                    "linear-gradient(180deg, #fbf7f1 0%, #f3e7d4 48%, #ead9bf 100%)",
                  ].join(", "),
                }}
              >
                <span
                  aria-hidden
                  className="absolute top-2 left-1/2 z-10 size-3 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#f4e7c4] to-gold shadow-[0_1px_2px_rgba(27,67,50,0.25)] ring-2 ring-white/70"
                />
                <blockquote className="relative mt-3.5 rounded-[0.95rem] border border-white/80 bg-card px-5 pt-4 pb-5">
                  <span aria-hidden className="block font-serif text-3xl leading-none text-gold">
                    “
                  </span>
                  <p className="mt-1 font-serif text-base leading-relaxed text-ink">{item.quote}</p>
                </blockquote>
                <figcaption className="mx-0.5 mt-3 mb-0.5 rounded-lg bg-white/55 px-3 py-2.5">
                  <p className="text-sm font-semibold text-forest">{item.name}</p>
                  <p className="mt-0.5 text-xs text-ink-soft">
                    {item.from}
                    <span className="px-1.5 text-gold">·</span>
                    {item.trip}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
