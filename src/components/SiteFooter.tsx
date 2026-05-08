import Link from "next/link";
import { Container } from "@/components/Container";

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
                href="mailto:educ.liberale.malhomme@gmail.com"
              >
                educ.liberale.malhomme@gmail.com
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
            </div>
          </div>
        </div>

        <div
          className="border-t border-white/10 py-6 text-xs"
          style={{ color: "var(--footer-faint)" }}
        >
          <div>© {new Date().getFullYear()} Margaux Malhomme — Tous droits réservés.</div>
          <div className="mt-2 text-[11px] opacity-70">
            Propulsé par Beg&apos;s Project
          </div>
        </div>
      </Container>
    </footer>
  );
}
