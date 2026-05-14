import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { surfaceCard, surfaceCardBlush, surfaceCardMist } from "@/lib/surfaceStyles";

export const metadata: Metadata = {
  title: "Bilans",
  description:
    "Bilans et repérage : Vineland II et profil sensoriel (Dunn 2), objectifs et restitution.",
};

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
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Bilans et repérage
          </h1>
          <p className="mt-6 text-base leading-8 text-black/70">
            L’objectif est de mieux comprendre le fonctionnement de votre enfant,
            identifier ses besoins et ses points d’appui, et vous proposer des
            pistes concrètes adaptées. Cela ne constitue pas un diagnostic.
          </p>

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
      </div>
    </Container>
  );
}

