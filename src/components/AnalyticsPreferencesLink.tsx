"use client";

import { resetAnalyticsConsent } from "@/lib/analyticsConsent";

export function AnalyticsPreferencesLink() {
  if (!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) return null;

  return (
    <button
      type="button"
      onClick={() => {
        resetAnalyticsConsent();
        window.location.reload();
      }}
      className="w-fit cursor-pointer border-0 bg-transparent p-0 text-left text-[var(--sage-soft)] underline decoration-transparent underline-offset-2 transition-colors hover:text-white hover:decoration-white"
    >
      Modifier le choix statistiques
    </button>
  );
}
