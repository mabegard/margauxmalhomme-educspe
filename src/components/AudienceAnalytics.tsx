"use client";

import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import {
  ANALYTICS_CONSENT_KEY,
  ANALYTICS_CONSENT_RESET_EVENT,
  type AnalyticsConsentValue,
} from "@/lib/analyticsConsent";

type Props = {
  domain: string;
};

export function AudienceAnalytics({ domain }: Props) {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<AnalyticsConsentValue | null>(null);

  const syncFromStorage = useCallback(() => {
    if (typeof window === "undefined") return;
    const v = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (v === "granted" || v === "denied") setConsent(v);
    else setConsent(null);
  }, []);

  useEffect(() => {
    syncFromStorage();
    setMounted(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === ANALYTICS_CONSENT_KEY || e.key === null) syncFromStorage();
    };
    const onReset = () => syncFromStorage();
    window.addEventListener("storage", onStorage);
    window.addEventListener(ANALYTICS_CONSENT_RESET_EVENT, onReset);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(ANALYTICS_CONSENT_RESET_EVENT, onReset);
    };
  }, [syncFromStorage]);

  useEffect(() => {
    if (!mounted) return;
    if (consent === null) {
      document.body.style.paddingBottom = "min(9rem, 28vh)";
    } else {
      document.body.style.paddingBottom = "";
    }
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [mounted, consent]);

  if (!mounted) return null;

  const grant = () => {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, "granted");
    setConsent("granted");
  };

  const deny = () => {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, "denied");
    setConsent("denied");
  };

  return (
    <>
      {consent === "granted" ? (
        <Script
          defer
          data-domain={domain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}

      {consent === null ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-black/[0.08] bg-[var(--sage-soft)]/95 px-4 py-4 shadow-[0_-8px_32px_-8px_rgba(31,41,51,0.18)] backdrop-blur-md md:px-6"
          role="dialog"
          aria-labelledby="consent-banner-title"
          aria-describedby="consent-banner-desc"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="min-w-0 text-sm leading-6 text-black/80">
              <p id="consent-banner-title" className="font-semibold text-[var(--fg)]">
                Statistiques de visite
              </p>
              <p id="consent-banner-desc" className="mt-1">
                Nous proposons une mesure d’audience anonymisée (outil{" "}
                <span className="whitespace-nowrap">Plausible</span>), sans
                publicité ni revente de données. Le script n’est chargé qu’après
                votre accord.{" "}
                <Link
                  href="/politique-de-confidentialite#mesure-audience"
                  className="font-semibold text-[var(--sage)] underline decoration-black/20 underline-offset-2 hover:decoration-[var(--sage)]"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-2 md:justify-end">
              <button
                type="button"
                onClick={deny}
                className="rounded-full border border-black/[0.12] bg-white/80 px-4 py-2 text-sm font-semibold text-black/80 transition-colors hover:bg-white"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={grant}
                className="rounded-full border border-[#326b58] bg-[var(--sage)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:opacity-95"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
