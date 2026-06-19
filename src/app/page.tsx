import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { contactMailtoHref } from "@/lib/contact";
import {
  surfaceCard,
  surfaceCardBlush,
  surfaceCardSage,
} from "@/lib/surfaceStyles";
import { DEFAULT_DESCRIPTION, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata(
    "/",
    "Éducatrice spécialisée à Clermont-Ferrand (63) | Margaux Malhomme — TND / TSA",
    DEFAULT_DESCRIPTION,
  ),
  title: {
    absolute:
      "Éducatrice spécialisée à Clermont-Ferrand (63) | Margaux Malhomme — TND / TSA",
  },
};

const PORTRAIT_SRC = "/portraits/portrait-juin-26.png";

function HeroPortrait() {
  return (
    <figure className="mx-auto w-full max-w-[220px] sm:max-w-[260px] md:mx-0 md:max-w-[280px] lg:max-w-[300px]">
      <div className="rounded-3xl border border-white/90 bg-white/90 p-2 shadow-[0_10px_40px_-12px_rgba(31,41,51,0.16),0_4px_14px_-6px_rgba(31,41,51,0.07),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-black/[0.06]">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src={PORTRAIT_SRC}
            alt="Margaux Malhomme, éducatrice spécialisée à Clermont‑Ferrand"
            fill
            sizes="(max-width: 768px) 260px, 300px"
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{
              background:
                "linear-gradient(165deg, rgba(255,252,248,0.28) 0%, transparent 50%, rgba(47,107,87,0.08) 100%)",
            }}
          />
        </div>
      </div>
    </figure>
  );
}

/** Pastille plus petite que le hero : même style que les cartes du bandeau */
function JourneyEmojiBadge({ emoji }: { emoji: string }) {
  return (
    <div
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/[0.07] bg-gradient-to-b from-white to-zinc-100/85 shadow-[inset_0_1px_2px_rgba(255,255,255,0.96),0_2px_6px_rgba(31,41,51,0.055)] ring-1 ring-white/65"
      aria-hidden
    >
      <span className="text-[1.28rem] leading-none">{emoji}</span>
    </div>
  );
}

const journeySteps = [
  {
    emoji: "💬",
    surface: surfaceCard,
    title: "Premier échange",
    items: [
      "Exprimer vos inquiétudes",
      "Poser vos questions",
      "Obtenir un premier éclairage professionnel",
    ],
  },
  {
    emoji: "📋",
    surface: surfaceCardSage,
    title: "Bilan de repérage",
    items: [
      "Mieux comprendre le développement de votre enfant",
      "Repérer d’éventuels signes",
      "Identifier besoins et points d’appui",
    ],
    listClass: "text-black/75",
  },
  {
    emoji: "🎯",
    surface: surfaceCardBlush,
    title: "Comprendre et agir",
    paragraph:
      "À l’issue du bilan, un temps de restitution vous permet d’identifier des pistes concrètes et de repartir avec des recommandations adaptées au quotidien.",
  },
] as const;

export default function Home() {
  return (
    <div className="bg-[var(--bg)]">
      {/* Chevauche le header sticky : fond visible sous le « verre » sans photo */}
      <section className="relative -mt-[5.25rem] overflow-hidden pt-[5.25rem]">
        <div className="absolute inset-x-0 top-0 -z-10 h-[min(92vh,720px)] bg-[var(--sage-soft)] md:h-[680px]" />
        <div className="absolute inset-x-0 top-[min(80vh,600px)] -z-10 h-32 bg-[radial-gradient(closest-side,rgba(255,255,255,.9),transparent)] md:top-[620px]" />

        <Container>
          <div className="relative py-16 md:py-24">
            <div
              className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center overflow-hidden pt-2 opacity-[0.1] sm:pt-4 sm:opacity-[0.12] md:pt-6 md:opacity-[0.14]"
              aria-hidden
            >
              <Image
                src="/logo-libellules-transparent.png"
                alt=""
                width={880}
                height={560}
                className="max-h-[min(42vh,400px)] w-auto max-w-[min(94vw,38rem)] translate-y-[6%] rotate-[-6deg] object-contain sm:max-h-[min(46vh,440px)] sm:max-w-[40rem] md:translate-y-[8%]"
                unoptimized
                priority
              />
            </div>

            <div className="relative z-10">
              <p className="text-center text-sm font-semibold tracking-wide text-black/60">
                Clermont‑Ferrand · Puy‑de‑Dôme (63) · Visio possible
              </p>

              <div className="mx-auto mt-8 grid max-w-5xl items-center gap-10 md:mt-10 md:grid-cols-[minmax(0,280px)_1fr] md:gap-12 md:gap-x-14 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-x-16">
                <HeroPortrait />

                <div className="text-center md:text-left">
                  <h1 className="font-[family-name:var(--font-serif)] text-4xl leading-[1.15] tracking-tight text-[var(--fg)] md:text-5xl lg:text-6xl">
                    <span className="block">Margaux Malhomme</span>
                    <span className="mt-3 block text-xl leading-snug md:mt-4 md:text-2xl lg:text-3xl">
                      Éducatrice spécialisée libérale à Clermont-Ferrand
                    </span>
                    <span className="mt-2 block text-lg font-normal text-black/70 md:text-xl lg:text-2xl">
                      TND / TSA · Puy-de-Dôme (63)
                    </span>
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-8 text-black/70 md:mt-7 md:text-lg md:leading-9">
                    Repérage précoce des signes du trouble du spectre de l’autisme,
                    observations, bilans standardisés, accompagnement éducatif, temps
                    de répit ponctuel et pistes concrètes.
                  </p>

                  <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                    <ButtonLink variant="primary" href="/contact">
                      Me contacter
                    </ButtonLink>
                    <ButtonLink variant="secondary" href="/bilans">
                      Découvrir les bilans
                    </ButtonLink>
                  </div>
                </div>
              </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
              {[
                {
                  emoji: "🤝",
                  title: "Approche bienveillante",
                  text: "Une démarche individualisée, centrée sur vos besoins et ceux de votre enfant.",
                },
                {
                  emoji: "🔍",
                  title: "Outils reconnus",
                  text: "Des outils d’évaluation standardisés et reconnus (Vineland II, profil sensoriel).",
                },
                {
                  emoji: "✨",
                  title: "Pistes concrètes",
                  text: "Des recommandations et outils simples à mettre en place au quotidien.",
                },
              ].map((card) => (
                <div key={card.title} className={`${surfaceCard} p-6`}>
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div
                      className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-gradient-to-b from-white to-zinc-50/90 shadow-[inset_0_2px_4px_rgba(255,255,255,0.95),0_4px_12px_rgba(31,41,51,0.1),0_1px_2px_rgba(31,41,51,0.06)] ring-1 ring-white/80"
                      aria-hidden
                    >
                      <span className="text-[1.65rem] leading-none">
                        {card.emoji}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="font-semibold leading-snug tracking-tight text-[var(--fg)]">
                        {card.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-black/65">
                        {card.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="mx-auto max-w-3xl text-center font-[family-name:var(--font-serif)] text-2xl leading-snug tracking-tight text-[var(--fg)] md:text-3xl">
            Je vous propose une prise en charge personnalisée
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:items-stretch md:gap-10">
            {journeySteps.map((step) => (
              <div
                key={step.title}
                className={`flex h-full flex-col p-8 ${step.surface}`}
              >
                <div className="flex items-start gap-3">
                  <JourneyEmojiBadge emoji={step.emoji} />
                  <h3 className="min-w-0 flex-1 pt-0.5 font-[family-name:var(--font-serif)] text-xl leading-snug tracking-tight md:text-2xl">
                    {step.title}
                  </h3>
                </div>
                {"items" in step ? (
                  <ul
                    className={`mt-4 flex-1 space-y-2 text-sm leading-6 ${"listClass" in step && step.listClass ? step.listClass : "text-black/70"}`}
                  >
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-4 flex-1">
                    <p className="text-sm leading-6 text-black/70">
                      {step.paragraph}
                    </p>
                  </div>
                )}
                <div className="mt-6 flex justify-center">
                  <ButtonLink href="/bilans" variant="outline">
                    En savoir plus
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className={`p-10 md:p-12 ${surfaceCard}`}>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
              Mon approche
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-black/70">
              Je m’appuie sur les recommandations de bonnes pratiques
              professionnelles (HAS), les connaissances scientifiques récentes et
              des outils d’évaluation standardisés afin de proposer des bilans
              utiles pour la suite du parcours. L’objectif est de mieux
              comprendre le fonctionnement de votre enfant et de vous orienter
              dans les prochaines étapes, si nécessaire&nbsp;:{" "}
              <a
                href="https://www.has-sante.fr/jcms/p_3448980/fr/trouble-du-spectre-de-l-autisme-interventions-et-parcours-de-vie-du-nourrisson-de-l-enfant-et-de-l-adolescent"
                target="_blank"
                rel="noopener noreferrer"
                title="Trouble du spectre de l’autisme : interventions et parcours de vie — HAS (nouvel onglet)"
                className="font-medium text-[var(--sage)] underline decoration-black/25 underline-offset-[3px] transition-colors hover:text-[var(--fg)] hover:decoration-[var(--sage)]/80"
              >
                Haute Autorité de Santé — TSA
              </a>.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                variant="secondary"
                href={contactMailtoHref()}
              >
                Écrire un email
              </ButtonLink>
              <ButtonLink variant="primary" href="tel:+33777005382">
                Appeler
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-black/[0.06] pb-16 md:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-serif)] text-xl leading-snug tracking-tight text-[var(--fg)] md:text-2xl">
              Éducatrice spécialisée libérale à Clermont-Ferrand et dans le
              Puy-de-Dôme (63)
            </h2>
            <p className="mt-5 text-sm leading-7 text-black/65 md:text-base md:leading-8">
              Repérage TSA/TND, bilans Vineland II et profil sensoriel, accompagnement
              éducatif et guidance parentale pour les enfants et les familles à
              Clermont-Ferrand et dans le Puy-de-Dôme. Consultations à domicile, en
              visio ou sur rendez-vous.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
