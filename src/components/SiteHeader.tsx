"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { InstagramIcon } from "@/components/InstagramIcon";

const INSTAGRAM_URL = "https://www.instagram.com/boost.educ/";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/qui-suis-je", label: "Qui suis‑je ?" },
  { href: "/bilans", label: "Bilans" },
  { href: "/tarifs", label: "Tarifs" },
] as const;

const SCROLL_THRESHOLD = 12;

function subscribeScroll(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}

function scrollPastThreshold() {
  return window.scrollY > SCROLL_THRESHOLD;
}

export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    scrollPastThreshold,
    () => false,
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  /** Bandeau « verre » en haut de page sur tout le site ; barre blanche après scroll */
  const glassTop = !scrolled;

  const navPillBase =
    "rounded-full px-3 py-2 text-sm font-medium transition-[color,background-color,border-color,box-shadow] duration-200 ease-out border";

  const navPillGlass =
    "border-white/40 bg-white/[0.08] text-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_1px_2px_rgba(0,0,0,0.06)] hover:border-white/55 hover:bg-black/[0.07] hover:text-black hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_2px_6px_rgba(0,0,0,0.08)]";

  const navPillSolid =
    "border-black/[0.12] bg-transparent text-black/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_1px_2px_rgba(0,0,0,0.04)] hover:border-black/[0.20] hover:bg-zinc-200/75 hover:text-black hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.07)]";

  const navPillActiveGlass =
    "border-[var(--sage)]/35 bg-white/[0.14] text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_1px_3px_rgba(47,107,87,0.12)]";

  const navPillActiveSolid =
    "border-[var(--sage)]/30 bg-[var(--sage-soft)]/35 text-[var(--fg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_3px_rgba(47,107,87,0.1)]";

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out",
        glassTop
          ? "border-b border-transparent bg-[var(--bg)]/35 backdrop-blur-md supports-[backdrop-filter]:bg-white/18"
          : "border-b border-black/[0.08] bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.03)]",
      ].join(" ")}
    >
      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          <Link
            href="/"
            className={[
              "group flex min-w-0 items-center gap-3 rounded-2xl border px-2 py-1.5 transition-[border-color,background-color,box-shadow] duration-200 ease-out",
              glassTop
                ? "border-white/45 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_1px_3px_rgba(0,0,0,0.06)] hover:border-white/60 hover:bg-black/[0.07] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                : "border-black/[0.12] bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(0,0,0,0.05)] hover:border-black/[0.18] hover:bg-zinc-200/80 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_10px_rgba(0,0,0,0.07)]",
            ].join(" ")}
          >
            <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--sage-soft)] text-[var(--sage)] ring-1 ring-black/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
              <span className="font-semibold tracking-tight">EL</span>
            </div>
            <div className="min-w-0 leading-tight">
              <div className="font-semibold tracking-tight text-[var(--fg)]">
                Éducatrice libérale
              </div>
              <div className="text-sm text-black/55">Margaux Malhomme</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Principal">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    navPillBase,
                    glassTop
                      ? active
                        ? navPillActiveGlass
                        : navPillGlass
                      : active
                        ? navPillActiveSolid
                        : navPillSolid,
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "inline-flex items-center justify-center rounded-full border p-2 transition-[border-color,background-color,box-shadow] duration-200 ease-out",
                glassTop
                  ? "border-white/45 bg-white/[0.08] text-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_1px_2px_rgba(0,0,0,0.06)] hover:border-white/60 hover:bg-black/[0.07] hover:text-black hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  : "border-black/[0.12] bg-white/60 text-black/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_2px_rgba(0,0,0,0.05)] hover:border-black/[0.18] hover:bg-zinc-200/85 hover:text-black hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)]",
              ].join(" ")}
              aria-label="Instagram (ouvre un nouvel onglet)"
              title="Instagram"
            >
              <InstagramIcon className="size-5" />
            </a>

            <div className="hidden md:inline-flex">
              <ButtonLink href="/contact" variant="primary" size="compact">
                Me contacter
              </ButtonLink>
            </div>

            <button
              type="button"
              className={[
                "inline-flex items-center justify-center rounded-full border p-2 transition-[border-color,background-color,box-shadow] duration-200 ease-out md:hidden",
                glassTop
                  ? "border-white/45 bg-white/[0.08] text-black/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_1px_2px_rgba(0,0,0,0.06)] hover:border-white/60 hover:bg-black/[0.07] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  : "border-black/[0.12] bg-white/60 text-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_2px_rgba(0,0,0,0.05)] hover:border-black/[0.18] hover:bg-zinc-200/85 hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)]",
              ].join(" ")}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-black/10 bg-white/98 backdrop-blur-md md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4 pb-6" aria-label="Mobile">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "rounded-xl border px-3 py-3 text-base font-medium transition-[border-color,background-color,box-shadow] duration-200 ease-out",
                      active
                        ? "border-[var(--sage)]/30 bg-[var(--sage-soft)]/40 text-[var(--fg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_3px_rgba(47,107,87,0.1)]"
                        : "border-black/[0.12] bg-transparent text-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_1px_2px_rgba(0,0,0,0.04)] hover:border-black/[0.18] hover:bg-zinc-200/75 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
                    ].join(" ")}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <ButtonLink
                href="/contact"
                variant="primary"
                className="mt-2 w-full justify-center text-center"
                onClick={() => setMobileOpen(false)}
              >
                Me contacter
              </ButtonLink>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
