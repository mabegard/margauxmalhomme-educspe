import Link from "next/link";
import { AnalyticsPreferencesLink } from "@/components/AnalyticsPreferencesLink";
import { Container } from "@/components/Container";
import { CONTACT_EMAIL, contactMailtoHref } from "@/lib/contact";
import { InstagramIcon } from "@/components/InstagramIcon";
import { LinkedInIcon } from "@/components/LinkedInIcon";

const INSTAGRAM_URL = "https://www.instagram.com/boost.educ/";
const LINKEDIN_URL = "https://fr.linkedin.com/in/margaux-malhomme-2548141ba";

export function SiteFooter() {
  return (
    <footer
      className="mt-16 border-t border-white/10 bg-[var(--footer-bg)] text-[var(--footer-text)] shadow-[0_-12px_40px_-16px_rgba(23,41,36,0.35)]"
      style={{
        backgroundImage: `linear-gradient(180deg, var(--footer-bg-mid) 0%, var(--footer-bg) 100%)`,
      }}
    >
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="font-semibold tracking-tight text-[var(--footer-text)]">
              Margaux Malhomme
            </div>
            <div className="mt-1 text-sm" style={{ color: "var(--footer-muted)" }}>
              Éducatrice spécialisée — Clermont‑Ferrand (63)
            </div>
            <div className="mt-4 flex flex-col items-start gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[var(--sage-soft)] transition-colors hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon className="size-4" />
                <span>Instagram : @boost.educ</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[var(--sage-soft)] transition-colors hover:bg-white/10 hover:text-white"
              >
                <LinkedInIcon className="size-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="text-sm" style={{ color: "var(--footer-muted)" }}>
            <div className="font-semibold text-[var(--footer-text)]">Contact</div>
            <div className="mt-2 grid gap-1">
              <a
                className="text-[var(--sage-soft)] transition-colors hover:text-white hover:underline"
                href="tel:+33777005382"
              >
                07 77 00 53 82
              </a>
              <a
                className="break-all text-[var(--sage-soft)] transition-colors hover:text-white hover:underline"
                href={contactMailtoHref()}
              >
                {CONTACT_EMAIL}
              </a>
              <div style={{ color: "var(--footer-muted)" }}>
                À domicile (Puy‑de‑Dôme) ou en visio (France)
              </div>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-[var(--footer-text)]">Informations</div>
            <div className="mt-2 grid gap-1">
              <Link
                className="w-fit text-[var(--sage-soft)] transition-colors hover:text-white hover:underline"
                href="/mentions-legales"
              >
                Mentions légales
              </Link>
              <Link
                className="w-fit text-[var(--sage-soft)] transition-colors hover:text-white hover:underline"
                href="/politique-de-confidentialite"
              >
                Politique de confidentialité
              </Link>
              <Link
                className="w-fit text-[var(--sage-soft)] transition-colors hover:text-white hover:underline"
                href="/cgu"
              >
                Conditions générales d’utilisation
              </Link>
              <AnalyticsPreferencesLink />
            </div>
          </div>
        </div>

        <div
          className="border-t border-white/10 py-6 text-xs"
          style={{ color: "var(--footer-faint)" }}
        >
          <div>© {new Date().getFullYear()} Margaux Malhomme — Tous droits réservés.</div>
          <div className="mt-1">SIREN&nbsp;: 105&nbsp;121&nbsp;495</div>
          <div className="mt-2 text-center text-[11px] opacity-70">
            Propulsé par Beg&apos;s Project
          </div>
        </div>
      </Container>
    </footer>
  );
}
