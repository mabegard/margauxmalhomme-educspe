/** Clé localStorage : consentement mesure d’audience (Plausible), sans cookies publicitaires. */
export const ANALYTICS_CONSENT_KEY = "mm-audience-consent";

export const ANALYTICS_CONSENT_RESET_EVENT = "mm-analytics-consent-reset";

export type AnalyticsConsentValue = "granted" | "denied";

export function readAnalyticsConsent(): AnalyticsConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  if (v === "granted" || v === "denied") return v;
  return null;
}

export function resetAnalyticsConsent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
  window.dispatchEvent(new Event(ANALYTICS_CONSENT_RESET_EVENT));
}
