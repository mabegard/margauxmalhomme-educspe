import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { surfaceCard, surfaceCardMist, surfaceCardSage } from "@/lib/surfaceStyles";

export const metadata: Metadata = {
  title: "Qui suis‑je ?",
  description:
    "Présentation de Margaux Malhomme, éducatrice spécialisée à Clermont‑Ferrand (63) : parcours, valeurs et approche.",
};

/** Déposez votre portrait ici : public/portraits/margaux-malhomme.jpg (photo nette, sans légende fichier). */
const PORTRAIT_SRC = "/portraits/margaux-malhomme%202.jpg";

export default function QuiSuisJePage() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <section className={`p-8 md:p-10 ${surfaceCard}`}>
            <div className="grid gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:items-start md:gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="w-full max-w-[280px] text-center font-[family-name:var(--font-serif)] text-4xl tracking-tight md:max-w-[320px]">
                  Qui suis‑je ?
                </h1>

                <figure className="mt-10 w-full max-w-[280px] md:mt-12 md:max-w-[320px]">
                  <div className="rounded-3xl border border-white/90 bg-white/90 p-2 shadow-[0_10px_40px_-12px_rgba(31,41,51,0.16),0_4px_14px_-6px_rgba(31,41,51,0.07),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-black/[0.06]">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={PORTRAIT_SRC}
                        alt="Margaux Malhomme, éducatrice spécialisée à Clermont‑Ferrand"
                        fill
                        sizes="(max-width: 768px) min(280px, 100vw), 320px"
                        className="object-cover object-[center_15%]"
                        style={{
                          filter:
                            "brightness(1.03) contrast(1.10) saturate(0.95) sepia(0.06) hue-rotate(2deg)",
                        }}
                        priority
                      />
                      {/* Traitement type portrait pro : chaleur douce + léger voile sauge */}
                      <div
                        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                        style={{
                          background:
                            "linear-gradient(165deg, rgba(255,252,248,0.38) 0%, transparent 45%, rgba(47,107,87,0.11) 100%)",
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent_65%)]" />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[inherit]"
                        style={{
                          boxShadow:
                            "inset 0 0 72px rgba(31,41,51,0.07), inset 0 1px 0 rgba(255,255,255,0.5)",
                        }}
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-center text-xs text-black/50 md:text-left">
                    Margaux Malhomme — Éducatrice spécialisée
                  </figcaption>
                </figure>
              </div>

              <div className="min-w-0 space-y-6 text-justify hyphens-auto text-base leading-8 text-black/70 md:pt-0.5">
                <p>
                  Je m’appelle Margaux, je suis éducatrice spécialisée et j’accompagne
                  des familles et des enfants présentant des besoins spécifiques,
                  notamment dans le champ du neurodéveloppement.
                </p>
                <p>
                  Mon objectif est de faciliter votre parcours en apportant des repères
                  en amont, une compréhension du fonctionnement de votre enfant et des
                  pistes concrètes à mettre en place au quotidien.
                </p>
                <p>
                  J’ai travaillé plusieurs années en UEMA (Unité d’Enseignement en
                  Maternelle Autisme), dont une expérience particulièrement marquante :
                  la co‑ouverture de la première UEMA du département de la Lozère, au
                  sein de l’association Le Clos Du Nid. Cette étape a profondément
                  structuré ma pratique, en me permettant de participer à la
                  construction de dispositifs innovants, centrés sur l’inclusion
                  précoce et l’adaptation des accompagnements aux besoins spécifiques
                  des enfants.
                </p>
                <p>
                  Depuis maintenant deux ans, j’exerce au sein d’un dispositif DI‑TS,
                  où j’approfondis mon expertise dans l’accompagnement des situations
                  complexes et la coordination des parcours. En parallèle, je continue
                  de me former régulièrement afin d’actualiser mes connaissances et
                  d’affiner mes outils d’évaluation et d’intervention.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className={`p-8 ${surfaceCardMist}`}>
              <div className="font-semibold tracking-tight">Mon activité</div>
              <p className="mt-3 text-sm leading-7 text-black/70">
                En libéral, je propose des temps d’échange, des évaluations et un
                accompagnement structuré, à domicile dans le Puy‑de‑Dôme (63) ou
                en visio (partout en France).
              </p>
            </div>
            <div className={`p-8 ${surfaceCardSage}`}>
              <div className="font-semibold tracking-tight">Mon approche</div>
              <p className="mt-3 text-sm leading-7 text-black/70">
                Je m’appuie sur des outils standardisés et les recommandations
                de bonnes pratiques (HAS) pour proposer des bilans fiables et
                utiles, et orienter vers les professionnels adaptés si besoin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
