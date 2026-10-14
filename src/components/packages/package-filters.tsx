"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { SelectField } from "@/components/ui/select-field";
import { destinations } from "@/data/destinations";
import { budgetOptions, categoryOptions, durationOptions, hasActiveFilters } from "@/data/packages";
import { cn } from "@/lib/utils";
import type { PackageFilters } from "@/types/travel";

export function PackageFilters({ filters }: { filters: PackageFilters }) {
  const router = useRouter();
  const active = hasActiveFilters(filters);

  function apply(form: HTMLFormElement) {
    const data = new FormData(form);
    const params = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      const text = String(value).trim();
      if (text) params.set(key, text);
    }
    const search = params.toString();
    router.push(search ? `/packages?${search}` : "/packages", { scroll: false });
  }

  return (
    <form
      key={`${filters.destination}|${filters.category}|${filters.duration}|${filters.budget}|${filters.q}`}
      action="/packages"
      method="get"
      className="rounded-[1.75rem] bg-card p-4 shadow-[0_16px_40px_rgba(16,38,29,0.06)] sm:p-5"
      onSubmit={(event) => {
        event.preventDefault();
        apply(event.currentTarget);
      }}
      onChange={(event) => {
        if (event.target instanceof HTMLInputElement && event.target.type === "hidden") {
          apply(event.currentTarget);
        }
      }}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        <label className="xl:col-span-2">
          <span className="field-label">Search</span>
          <input
            name="q"
            defaultValue={filters.q}
            placeholder="Package or destination"
            className="field"
            autoComplete="off"
          />
        </label>
        <label>
          <span className="field-label">Place</span>
          <SelectField
            name="destination"
            defaultValue={filters.destination}
            options={[
              { value: "", label: "Place" },
              ...destinations.map((destination) => ({ value: destination.slug, label: destination.name })),
            ]}
          />
        </label>
        <label>
          <span className="field-label">Trip style</span>
          <SelectField
            name="category"
            defaultValue={filters.category}
            options={categoryOptions.map((option) => ({ value: option.value, label: option.label }))}
          />
        </label>
        <label>
          <span className="field-label">Duration</span>
          <SelectField
            name="duration"
            defaultValue={filters.duration}
            options={durationOptions.map((option) => ({ value: option.value, label: option.label }))}
          />
        </label>
        <label>
          <span className="field-label">Budget</span>
          <SelectField
            name="budget"
            defaultValue={filters.budget}
            options={budgetOptions.map((option) => ({ value: option.value, label: option.label }))}
          />
        </label>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-ink-soft">
        Budget uses the starting price on each package. Packages without a listed price stay under Contact for price.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="submit" className={cn(buttonVariants(), "h-11 rounded-full px-5")}>
          Apply filters
        </button>
        {active ? (
          <Link href="/packages" className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-full px-5")}>
            Clear filters
          </Link>
        ) : null}
      </div>
    </form>
  );
}
