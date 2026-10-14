"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 700);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="fixed bottom-4 left-4 z-40 inline-flex size-12 items-center justify-center rounded-full border border-forest/15 bg-ivory text-forest shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      <ArrowUp aria-hidden="true" className="size-5" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
