"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useEnquiryHandoff, WhatsAppPreview } from "@/components/layout/whatsapp-link";
import { buttonVariants } from "@/components/ui/button";
import { SelectField } from "@/components/ui/select-field";
import { Dialog } from "@/components/ui/dialog";
import { destinations } from "@/data/destinations";
import { formatEnquiryBlock } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a phone number")
    .max(20, "That phone number looks too long")
    .regex(/^[0-9+\-\s()]+$/, "Use digits, spaces, or + only"),
  email: z
    .string()
    .trim()
    .refine((value) => value.length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), "Enter a valid email address"),
  destination: z.string().trim().min(1, "Choose a destination"),
  travelDate: z.string(),
  travellers: z
    .number({ error: "Enter the number of travellers" })
    .int()
    .min(1, "Add at least 1 traveller")
    .max(30, "For a larger group, write the number in your message"),
  message: z.string().trim().min(10, "Add a short note about the trip"),
});

type FormValues = z.infer<typeof schema>;

export function EnquiryForm() {
  const handoff = useEnquiryHandoff();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      destination: "",
      travelDate: "",
      travellers: 2,
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    const message = [
      "Hi, I would like to enquire about a trip.",
      "",
      formatEnquiryBlock([
        ["Name", values.name],
        ["Phone", values.phone],
        ["Email", values.email],
        ["Destination", values.destination],
        ["Travel date", values.travelDate],
        ["Travellers", String(values.travellers)],
        ["Message", values.message],
      ]),
    ].join("\n");
    handoff.send(message);
  }

  const errors = form.formState.errors;

  return (
    <>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <p className="text-sm leading-relaxed text-ink-soft">
          This form does not save your details on the website. It prepares a WhatsApp message so you can send the enquiry yourself.
        </p>
        <Field label="Full name" error={errors.name?.message}>
          <input className="field" autoComplete="name" aria-invalid={Boolean(errors.name)} {...form.register("name")} />
        </Field>
        <Field label="Phone number" error={errors.phone?.message}>
          <input className="field" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} {...form.register("phone")} />
        </Field>
        <Field label="Email (optional)" error={errors.email?.message}>
          <input className="field" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} {...form.register("email")} />
        </Field>
        <Field label="Interested destination" error={errors.destination?.message}>
          <SelectField
            invalid={Boolean(errors.destination)}
            options={[
              { value: "", label: "Place" },
              ...destinations.map((destination) => ({ value: destination.name, label: destination.name })),
              { value: "Not sure yet", label: "Not sure yet" },
              { value: "Somewhere else in India", label: "Somewhere else in India" },
            ]}
            {...form.register("destination")}
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Travel date (optional)" error={errors.travelDate?.message}>
            <input className="field" type="date" {...form.register("travelDate")} />
          </Field>
          <Field label="Number of travellers" error={errors.travellers?.message}>
            <input
              className="field"
              type="number"
              min={1}
              max={30}
              aria-invalid={Boolean(errors.travellers)}
              {...form.register("travellers", { valueAsNumber: true })}
            />
          </Field>
        </div>
        <Field label="Message" error={errors.message?.message}>
          <textarea className="field min-h-32 py-3" aria-invalid={Boolean(errors.message)} {...form.register("message")} />
        </Field>
        <button type="submit" className={cn(buttonVariants(), "h-12 w-full rounded-full sm:w-auto sm:px-8")}>
          Continue on WhatsApp
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
