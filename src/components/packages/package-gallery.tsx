"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import type { GalleryImage } from "@/types/travel";

export function PackageGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const current = images[index] ?? images[0];
  if (!current) return null;

  function show(nextIndex: number) {
    setIndex((nextIndex + images.length) % images.length);
  }

  return (
    <div
      className="space-y-3"
      tabIndex={0}
      aria-label="Package photographs"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          show(index - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          show(index + 1);
        }
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-sage">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
        {images.length > 1 ? (
          <div className="absolute inset-x-3 bottom-3 flex justify-between">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full bg-ivory/95 text-forest shadow"
              onClick={() => show(index - 1)}
            >
              <ChevronLeft aria-hidden="true" />
              <span className="sr-only">Previous photograph</span>
            </button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full bg-ivory/95 text-forest shadow"
              onClick={() => show(index + 1)}
            >
              <ChevronRight aria-hidden="true" />
              <span className="sr-only">Next photograph</span>
            </button>
          </div>
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="grid grid-cols-3 gap-3">
          {images.map((image, imageIndex) => {
            const selected = imageIndex === index;
            return (
              <button
                key={`${image.src}-${imageIndex}`}
                type="button"
                aria-label={`Show photograph ${imageIndex + 1}: ${image.alt}`}
                aria-current={selected ? "true" : undefined}
                className={`relative aspect-[16/10] overflow-hidden rounded-2xl ring-2 ring-offset-2 ring-offset-background ${selected ? "ring-forest" : "ring-transparent"}`}
                onClick={() => setIndex(imageIndex)}
              >
                <Image src={image.src} alt="" fill sizes="180px" className="object-cover" />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
