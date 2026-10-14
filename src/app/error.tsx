"use client";

import { useEffect } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error.digest ?? "Page render error");
  }, [error]);

  return (
    <Container className="py-20">
      <h1 className="font-serif text-4xl text-ink">Something went wrong</h1>
      <p className="mt-3 max-w-lg text-ink-soft">
        The page did not finish loading. You can try again. If it keeps happening, use the packages list or the trip planner.
      </p>
      <button type="button" className={cn(buttonVariants(), "mt-6 h-12 rounded-full px-6")} onClick={() => reset()}>
        Try again
      </button>
    </Container>
  );
}
