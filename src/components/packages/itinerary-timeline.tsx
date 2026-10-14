import type { ItineraryDay } from "@/types/travel";

export function ItineraryTimeline({ days }: { days: ItineraryDay[] }) {
  return (
    <ol className="space-y-0">
      {days.map((day, index) => (
        <li key={day.day} className="relative grid grid-cols-[auto_1fr] gap-4 pb-8 last:pb-0">
          {index < days.length - 1 ? (
            <span className="absolute top-10 left-5 h-[calc(100%-2.5rem)] w-px bg-gold/50" aria-hidden="true" />
          ) : null}
          <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-forest font-semibold text-ivory">
            {day.day}
          </span>
          <div className="pt-1">
            <h3 className="font-serif text-xl text-ink">
              Day {day.day} — {day.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">{day.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
