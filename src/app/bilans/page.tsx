import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import {
  surfaceCard,
  surfaceCardMist,
  surfaceCardSage,
} from "@/lib/surfaceStyles";

export const metadata: Metadata = {
  title: "Bilans",
  description:
    "Bilans et repérage : Vineland II et profil sensoriel (Dunn). Déroulé, objectifs et restitution.",
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
    title: "Profil sensoriel (Dunn)",
    text: "Mieux comprendre comment votre enfant perçoit et réagit aux stimulations (bruit, lumière, toucher…).",
    tone: "mist",
  },
] as const;

const surfaceByTone = {
  white: surfaceCard,
  mist: surfaceCardMist,
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

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {cards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`block ${surfaceByTone[c.tone]} p-8`}
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

          <div className={`mt-14 p-10 ${surfaceCardSage}`}>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl tracking-tight">
              Déroulé
            </h2>
            <ol className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "1. Premier échange",
                  text: "Faire le point sur votre situation, vos questions et vos attentes.",
                },
                {
                  title: "2. Recueil & passation",
                  text: "Recueil des informations, outils adaptés aux besoins, observations si nécessaire.",
                },
                {
                  title: "3. Analyse & restitution",
                  text: "Synthèse, explications claires, recommandations concrètes et orientation si besoin.",
                },
              ].map((step) => (
                <li key={step.title} className={`${surfaceCard} p-6`}>
                  <div className="font-semibold">{step.title}</div>
                  <div className="mt-2 text-sm leading-6 text-black/70">
                    {step.text}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary">
                Me contacter
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

