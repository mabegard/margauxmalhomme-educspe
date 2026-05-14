import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import {
  surfaceCardBlush,
  surfaceCardMist,
  surfaceCardSage,
} from "@/lib/surfaceStyles";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs : accompagnement, bilan complet (Vineland II + profil sensoriel), bilan ciblé.",
};

function EmojiBadge({ emoji }: { emoji: string }) {
  return (
    <div
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/[0.07] bg-gradient-to-b from-white to-zinc-100/85 shadow-[inset_0_1px_2px_rgba(255,255,255,0.96),0_2px_6px_rgba(31,41,51,0.055)] ring-1 ring-white/65"
      aria-hidden
    >
      <span className="text-[1.28rem] leading-none">{emoji}</span>
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

function DurationBadge({ main, sub }: { main: string; sub?: string }) {
  return (
    <div className="flex w-full min-h-[5.5rem] min-w-0 flex-col items-center justify-center gap-0.5 rounded-full border border-black/[0.10] bg-white/70 px-4 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_-14px_rgba(31,41,51,0.22)] ring-1 ring-white/70 backdrop-blur-sm">
      <span className="text-xs font-semibold leading-tight tracking-tight text-[var(--sage)] sm:text-sm">
        {main}
      </span>
      {sub ? (
        <span className="whitespace-pre-line px-1 text-[0.65rem] font-medium leading-snug text-black/70 sm:text-xs">
          {sub}
        </span>
      ) : null}
    </div>
  );
}

const offers = [
  {
    emoji: "💬",
    title: "Accompagnement",
    price: "50 €",
    duration: { main: "1 h" },
    text: "Un temps pour faire le point sur votre situation et répondre à vos questions.",
    items: ["Écoute de vos besoins", "Réponses à vos questions", "Premier éclairage"],
    tone: "blush",
  },
  {
    emoji: "🎯",
    title: "Bilan ciblé",
    price: "150 €",
    duration: {
      main: "1 h à 1 h 30",
      sub: "+ 30 min de restitution sous 2 semaines",
    },
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
    title: "Bilan complet\nVineland + profil sensoriel",
    price: "290 €",
    duration: {
      main: "3 h sur 2 séances",
      sub: "+ 30 min de restitution sous 2 semaines",
    },
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
  blush: surfaceCardBlush,
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
        </div>

        <div
          className="mt-8 w-full rounded-2xl border border-white/95 bg-white px-5 py-4 shadow-[0_8px_28px_-14px_rgba(31,41,51,0.12),0_2px_10px_-6px_rgba(31,41,51,0.06),inset_0_1px_0_rgba(255,255,255,1)] ring-1 ring-black/[0.05] md:rounded-3xl md:px-8 md:py-5"
          role="region"
          aria-label="Premier échange téléphonique gratuit"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto">
              <EmojiBadge emoji="📞" />
              <ButtonLink
                href="/contact"
                variant="outline"
                size="compact"
                className="border-[#326b58] bg-transparent shadow-none hover:shadow-[0_2px_12px_-6px_rgba(47,107,87,0.18)]"
              >
                Me contacter
              </ButtonLink>
            </div>
            <div className="min-w-0 flex-1 text-left sm:pt-0.5">
              <div className="font-semibold tracking-tight text-[var(--fg)] md:text-lg">
                Premier échange téléphonique gratuit
              </div>
              <p className="mt-2 max-w-4xl text-sm leading-relaxed text-black/70 md:text-base md:leading-7">
                Prise de contact par téléphone, jusqu’à 30 minutes, pour faire
                connaissance, recueillir quelques informations et échanger sur votre
                situation — sans engagement.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="grid justify-items-stretch gap-4 md:grid-cols-3 md:items-stretch">
            {offers.map((o) => (
              <div
                key={o.title}
                className={[
                  "relative flex h-full min-h-0 flex-col items-stretch p-8 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1",
                  surfaceByTone[o.tone],
                ].join(" ")}
              >
                <div className="flex w-full flex-col items-stretch gap-4">
                  <div className="flex w-full justify-end">
                    <PriceBadge price={o.price} />
                  </div>
                  <div className="flex min-h-[5.25rem] w-full items-center md:min-h-[7.5rem]">
                    <div className="flex w-full min-w-0 justify-center">
                      <div className="inline-flex max-w-full flex-nowrap items-center gap-x-2.5">
                        <EmojiBadge emoji={o.emoji} />
                        <div className="min-w-0 max-w-[min(15rem,calc(100%-3.25rem))] whitespace-pre-line text-balance text-center font-semibold leading-snug tracking-tight">
                          {o.title}
                        </div>
                      </div>
                    </div>
                  </div>
                  <DurationBadge
                    main={o.duration.main}
                    sub={"sub" in o.duration ? o.duration.sub : undefined}
                  />
                </div>
                <div className="mt-4 w-full text-left text-sm leading-7 text-black/70">
                  {o.text}
                </div>
                <ul className="mt-5 w-full space-y-2 text-left text-sm leading-6 text-black/70">
                  {o.items.map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-black/70 md:text-base md:leading-8">
            Je me déplace dans un rayon de 20&nbsp;km autour de Clermont-Ferrand ;
            au-delà, des frais kilométriques s’appliquent. Sinon, je propose une
            visio.
          </p>

          <div className={`mt-10 p-8 ${surfaceCardMist}`}>
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
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

