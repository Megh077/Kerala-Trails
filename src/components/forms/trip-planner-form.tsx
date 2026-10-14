"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useEnquiryHandoff, WhatsAppPreview } from "@/components/layout/whatsapp-link";
import { buttonVariants } from "@/components/ui/button";
import { SelectField } from "@/components/ui/select-field";
import { Dialog } from "@/components/ui/dialog";
import { destinations } from "@/data/destinations";
import { categoryOptions } from "@/data/packages";
import { formatEnquiryBlock } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a phone number")
    .max(20, "That phone number looks too long")
    .regex(/^[0-9+\-\s()]+$/, "Use digits, spaces, or + only"),
  destination: z.string().trim().min(1, "Tell us where you want to go"),
  departureCity: z.string().trim(),
  startDate: z.string(),
  days: z
    .number({ error: "Enter the number of days" })
    .int()
    .min(1, "A trip needs at least 1 day")
    .max(30, "For a longer journey, describe it in your notes"),
  adults: z.number({ error: "Enter the number of adults" }).int().min(1, "Add at least 1 adult").max(40),
  children: z.number({ error: "Enter 0 if no children are travelling" }).int().min(0).max(20),
  budget: z.string(),
  category: z.string(),
  preferences: z.string().trim(),
});

type FormValues = z.infer<typeof schema>;

export function TripPlannerForm() {
  const params = useSearchParams();
  const preset = params.get("destination") ?? "";
  const handoff = useEnquiryHandoff();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      destination: preset,
      departureCity: "",
      startDate: "",
      days: 4,
      adults: 2,
      children: 0,
      budget: "",
      category: "",
      preferences: "",
    },
  });

  function onSubmit(values: FormValues) {
    const message = [
      "Hi, I would like a custom trip plan.",
      "",
      formatEnquiryBlock([
        ["Name", values.name],
        ["Phone", values.phone],
        ["Destination", values.destination],
        ["Departure city", values.departureCity],
        ["Start date", values.startDate],
        ["Days", String(values.days)],
        ["Adults", String(values.adults)],
        ["Children", String(values.children)],
        ["Approximate budget", values.budget],
        ["Category", values.category],
        ["Preferences", values.preferences],
      ]),
    ].join("\n");
    handoff.send(message);
  }

  const errors = form.formState.errors;

  return (
    <>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <p className="text-sm leading-relaxed text-ink-soft">
          Optional fields can be left blank. Submitting prepares a WhatsApp message and does not confirm a booking or check availability.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Traveller name" error={errors.name?.message}>
            <input className="field" autoComplete="name" aria-invalid={Boolean(errors.name)} {...form.register("name")} />
          </Field>
          <Field label="Phone number" error={errors.phone?.message}>
            <input className="field" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} {...form.register("phone")} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred destination" error={errors.destination?.message}>
            <input
              className="field"
              list="destination-suggestions"
              aria-invalid={Boolean(errors.destination)}
              {...form.register("destination")}
            />
            <datalist id="destination-suggestions">
              {destinations.map((destination) => (
                <option key={destination.slug} value={destination.name} />
              ))}
            </datalist>
          </Field>
          <Field label="Departure city (optional)" error={errors.departureCity?.message}>
            <input className="field" {...form.register("departureCity")} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Travel start date (optional)">
            <input className="field" type="date" {...form.register("startDate")} />
          </Field>
          <Field label="Number of days" error={errors.days?.message}>
            <input className="field" type="number" min={1} max={30} {...form.register("days", { valueAsNumber: true })} />
          </Field>
          <Field label="Adults" error={errors.adults?.message}>
            <input className="field" type="number" min={1} max={40} {...form.register("adults", { valueAsNumber: true })} />
          </Field>
          <Field label="Children" error={errors.children?.message}>
            <input className="field" type="number" min={0} max={20} {...form.register("children", { valueAsNumber: true })} />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Approximate budget (optional)">
            <SelectField
              options={[
                { value: "", label: "Budget" },
                { value: "Under ₹20,000 per person", label: "Under ₹20,000 per person" },
                { value: "₹20,000–₹50,000 per person", label: "₹20,000–₹50,000 per person" },
                { value: "Above ₹50,000 per person", label: "Above ₹50,000 per person" },
              ]}
              {...form.register("budget")}
            />
          </Field>
          <Field label="Travel category (optional)">
            <SelectField
              options={[
                { value: "", label: "Trip style" },
                ...categoryOptions
                  .filter((option) => option.value)
                  .map((option) => ({ value: option.label, label: option.label })),
              ]}
              {...form.register("category")}
            />
          </Field>
        </div>
        <Field label="Additional preferences (optional)">
          <textarea
            className="field min-h-32 py-3"
            placeholder="Pace, stays, food, celebrations, or places to skip"
            {...form.register("preferences")}
          />
        </Field>
        <button type="submit" className={cn(buttonVariants(), "h-12 rounded-full px-8")}>
          Send trip request on WhatsApp
        </button>
      </form>
      <Dialog open={handoff.preview !== null} onOpenChange={(open) => !open && handoff.setPreview(null)}>
        {handoff.preview ? <WhatsAppPreview message={handoff.preview} /> : null}
      </Dialog>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      {children}
      {error ? (
        <span role="alert" className="mt-1 block text-sm text-destructive">
          {error}
        </span>
      ) : null}
    </label>
  );
}
