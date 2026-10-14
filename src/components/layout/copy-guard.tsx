"use client";

import { useEffect } from "react";

function isEditable(target: EventTarget | null) {
  return target instanceof HTMLElement && Boolean(target.closest("input, textarea, [contenteditable='true']"));
}

export function CopyGuard() {
  useEffect(() => {
    function blockClipboard(event: ClipboardEvent) {
      if (isEditable(event.target)) return;
      event.preventDefault();
    }

    document.addEventListener("copy", blockClipboard);
    document.addEventListener("cut", blockClipboard);
    return () => {
      document.removeEventListener("copy", blockClipboard);
      document.removeEventListener("cut", blockClipboard);
    };
  }, []);

  return null;
}
