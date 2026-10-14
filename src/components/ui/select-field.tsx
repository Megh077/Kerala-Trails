"use client";

import { ChevronDown } from "lucide-react";
import { forwardRef, useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  name?: string;
  options: readonly SelectOption[];
  defaultValue?: string;
  invalid?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

export const SelectField = forwardRef<HTMLInputElement, SelectFieldProps>(function SelectField(
  { name, options, defaultValue = "", invalid = false, disabled = false, onChange, onBlur },
  ref,
) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(defaultValue);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const selected = options.find((option) => option.value === current) ?? options[0];

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function choose(value: string) {
    setCurrent(value);
    setOpen(false);
    const input = inputRef.current;
    if (input) {
      const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
      setter?.call(input, value);
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
    onChange?.({
      target: { name: name ?? "", value },
      currentTarget: { name: name ?? "", value },
    } as React.ChangeEvent<HTMLInputElement>);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={invalid || undefined}
        className={cn(
          "field flex cursor-pointer items-center justify-between gap-3 rounded-2xl text-left",
          open && "border-forest ring-3 ring-forest/15",
          invalid && "border-destructive",
        )}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="truncate">{selected?.label}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn("size-4 shrink-0 text-forest transition-transform", open && "rotate-180")}
        />
      </button>
      <input
        ref={(node) => {
          inputRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        type="hidden"
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
      />
      {open ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute top-[calc(100%+0.4rem)] right-0 left-0 z-50 max-h-64 overflow-auto rounded-2xl border border-forest/10 bg-card p-1.5 shadow-[0_18px_40px_rgba(16,38,29,0.16)]"
        >
          {options.map((option) => {
            const active = option.value === current;
            return (
              <li key={`${option.value}-${option.label}`} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={cn(
                    "flex w-full rounded-xl px-3 py-2.5 text-left text-sm text-ink hover:bg-sage",
                    active && "bg-sage font-semibold text-forest",
                  )}
                  onClick={() => choose(option.value)}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
});
