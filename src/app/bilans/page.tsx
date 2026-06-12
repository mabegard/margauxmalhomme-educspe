import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { surfaceCard, surfaceCardBlush, surfaceCardMist } from "@/lib/surfaceStyles";

export const metadata: Metadata = pageMetadata(
  "/bilans",
  "Bilans TSA / TND — Clermont-Ferrand",
  "Bilans et repérage TSA/TND à Clermont-Ferrand : Vineland II, profil sensoriel Dunn 2, observations et restitution pour les familles.",
);

const cards = [
  {
    href: "/bilans/vineland",
    title: "Vineland II",
    text: "Mieux comprendre le fonctionnement au quotidien (communication, autonomie, relations sociales).",
    tone: "white",
  },
  {
    href: "/bilans/profil-sensoriel",
    title: "Profil sensoriel (Dunn 2)",
    text: "Mieux comprendre comment votre enfant perçoit et réagit aux stimulations (bruit, lumière, toucher…).",
    tone: "mist",
  },
  {
    href: "/bilans/outils",
    title: "Outils & supports",
    text: "Une galerie d’illustrations des supports et outils utilisés lors des bilans et de l’accompagnement.",
    tone: "blush",
  },
] as const;

const surfaceByTone = {
  white: surfaceCard,
  mist: surfaceCardMist,
  blush: surfaceCardBlush,
} as const;

export default function BilansPage() {
  return (
    <Container>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Bilans", path: "/bilans" },
        ]}
      />
      <div className="pt-14 md:pt-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Bilans et repérage
          </h1>
          <p className="mt-6 text-base leading-8 text-black/70">
            L’objectif est de mieux comprendre le fonctionnement de votre enfant,
            identifier ses besoins et ses points d’appui, et vous proposer des
            pistes concrètes adaptées. Cela ne constitue pas un diagnostic.
          </p>
          <p className="mt-5 text-base leading-8 text-black/70">
            Les bilans peuvent servir de base pour&nbsp;:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-2 pl-1 text-base leading-8 text-black/70">
            <li>appuyer un futur diagnostic&nbsp;;</li>
            <li>accompagner un dossier MDPH.</li>
          </ul>

          <div className="mt-10 grid justify-items-stretch gap-4 md:grid-cols-2">
            {cards.map((c, i) => (
              <Link
                key={c.href}
                href={c.href}
                className={[
                  `block ${surfaceByTone[c.tone]} p-8`,
                  i === 2
                    ? "md:col-span-2 md:w-full md:max-w-md md:justify-self-center"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="font-semibold tracking-tight">{c.title}</div>
                  <span className="text-sm text-black/45 group-hover:text-black/70">
                    Voir →
                  </span>
                </div>
                <div className="mt-3 text-sm leading-7 text-black/70">
                  {c.text}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-4xl pb-6 text-base leading-8 text-black/70 md:mt-20 md:pb-8">
          <span className="font-semibold text-[var(--fg)]">Important :</span>{" "}
          Je ne réalise pas de diagnostic médical. Les observations et bilans
          standardisés ont pour objectif de mieux comprendre le fonctionnement de
          votre enfant, de repérer d’éventuels signes d’alerte et d’orienter les
          familles vers les ressources adaptées. Ils peuvent également apporter des
          éléments d’observation utiles au médecin traitant, au pédiatre ou à
          l’équipe réalisant l’évaluation diagnostique.
        </p>
      </div>
    </Container>
  );
}

