"use client";

import type { ComponentProps } from "react";

type Props = ComponentProps<"a"> & {
  href: string;
};

/**
 * Lien mailto fiable sur mobile (iOS/Android) :
 * Next.js Link et certains navigateurs mobiles bloquent les mailto longs.
 */
export function MailtoLink({ href, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        window.location.href = href;
      }}
    />
  );
}
