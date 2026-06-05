import { ButtonLink } from "@/components/ButtonLink";
import { contactMailtoHref } from "@/lib/contact";

/**
 * Pastille d’action rapide — visible uniquement sur petit écran (< md).
 */
export function MobileContactFab() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] md:hidden"
      aria-label="Contact rapide"
    >
      <div className="pointer-events-auto mx-auto max-w-md rounded-2xl border border-black/[0.08] bg-white/93 px-3 py-3 shadow-[0_-6px_28px_rgba(31,41,51,0.09),0_12px_40px_-12px_rgba(47,107,87,0.18)] ring-1 ring-white/80 backdrop-blur-md">
        <div className="flex gap-2">
          <ButtonLink
            href={contactMailtoHref()}
            variant="outline"
            size="compact"
            className="min-h-[2.5rem] min-w-0 flex-1 text-center text-[0.8125rem]"
          >
            Mail
          </ButtonLink>
          <ButtonLink
            href="tel:+33777005382"
            variant="primary"
            size="compact"
            className="min-h-[2.5rem] min-w-0 flex-1 text-center text-[0.8125rem]"
          >
            Appeler
          </ButtonLink>
        </div>
        <p className="mt-2.5 text-center text-xs italic leading-snug text-black/55">
          Je vous contacte rapidement
        </p>
      </div>
    </div>
  );
}
