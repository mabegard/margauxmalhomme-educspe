import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import {
  surfaceCard,
  surfaceCardBlush,
  surfaceCardMist,
  surfaceCardSage,
} from "@/lib/surfaceStyles";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs des prestations : premier échange, bilan complet (Vineland II + profil sensoriel), bilan ciblé.",
};

function EmojiBadge({ emoji }: { emoji: string }) {
  return (
    <div
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/[0.07] bg-gradient-to-b from-white to-zinc-100/85 shadow-[inset_0_1px_2px_rgba(255,255,255,0.96),0_2px_6px_rgba(31,41,51,0.055)] ring-1 ring-white/65"
      aria-hidden
    >
      <span className="text-[1.28rem] leading-none grayscale opacity-[0.92] contrast-[1.03]">
        {emoji}
      </span>
    </div>
  );
}

function PriceBadge({ price }: { price: string }) {
  return (
    <div className="inline-flex items-center rounded-full border border-black/[0.10] bg-white/70 px-3 py-1 text-sm font-semibold tracking-tight text-[var(--sage)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_-14px_rgba(31,41,51,0.22)] ring-1 ring-white/70 backdrop-blur-sm">
      {price}
    </div>
  );
}

const offers = [
  {
    emoji: "💬",
    title: "Premier échange",
    price: "50 €",
    text: "Un temps pour faire le point sur votre situation et répondre à vos questions.",
    items: ["Écoute de vos besoins", "Réponses à vos questions", "Premier éclairage"],
    tone: "white",
  },
  {
    emoji: "🎯",
    title: "Bilan ciblé",
    price: "150 €",
    text: "Une évaluation complète, adaptée au besoin identifié.",
    items: [
      "Entretien initial",
      "Outil(s) adapté(s) (Vineland ou profil sensoriel)",
      "Analyse des résultats",
      "Préconisations personnalisées",
      "Compte‑rendu écrit",
      "Entretien de restitution",
    ],
    tone: "mist",
  },
  {
    emoji: "📋",
    title: "Bilan complet — Vineland + profil sensoriel",
    price: "290 €",
    text: "Une évaluation pour mieux comprendre le fonctionnement et adapter l’accompagnement.",
    items: [
      "Entretien initial",
      "Vineland + profil sensoriel",
      "Analyse des résultats",
      "Compte‑rendu écrit détaillé",
      "Préconisations",
      "Temps de restitution",
    ],
    tone: "sage",
  },
] as const;

const surfaceByTone = {
  white: surfaceCard,
  sage: surfaceCardSage,
  mist: surfaceCardMist,
} as const;

export default function TarifsPage() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Tarifs
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
            Un premier pas pour mieux comprendre le fonctionnement de votre enfant
            et savoir quelles sont les prochaines étapes.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.title}
                className={[
                  "group relative p-8 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1",
                  surfaceByTone[o.tone],
                  o.tone === "sage"
                    ? "shadow-[0_20px_50px_-16px_rgba(31,41,51,0.18),0_8px_22px_-8px_rgba(31,41,51,0.1),inset_0_1px_0_rgba(255,255,255,0.78)]"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <EmojiBadge emoji={o.emoji} />
                    <div className="min-w-0 pt-0.5">
                      <div className="font-semibold leading-snug tracking-tight">
                        {o.title}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 pt-0.5">
                    <PriceBadge price={o.price} />
                  </div>
                </div>
                <div className="mt-3 text-sm leading-7 text-black/70">{o.text}</div>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-black/70">
                  {o.items.map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`mt-10 p-8 ${surfaceCardBlush}`}>
            <div className="font-semibold tracking-tight">Réservation / contact</div>
            <p className="mt-3 text-sm leading-7 text-black/70">
              Pour toute question ou pour convenir d’un premier échange, vous
              pouvez me contacter par téléphone ou par email.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="tel:+33777005382" variant="primary">
                Appeler
              </ButtonLink>
              <ButtonLink
                href="mailto:educ.liberale.malhomme@gmail.com?subject=Demande%20de%20rendez-vous"
                variant="secondary"
              >
                Envoyer un email
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Page Contact
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

