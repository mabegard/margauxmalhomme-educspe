import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Vineland II",
  description:
    "Vineland II : outil pour mieux comprendre le fonctionnement au quotidien (communication, autonomie, relations sociales).",
};

export default function VinelandPage() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Vineland II, c’est quoi ?
          </h1>
          <p className="mt-6 text-base leading-8 text-black/70">
            La Vineland II est un outil qui permet de mieux comprendre le
            fonctionnement d’un enfant dans sa vie quotidienne. Elle explore des
            compétences comme la communication, l’autonomie et les relations
            sociales.
          </p>
          <p className="mt-4 text-base leading-8 text-black/70">
            Les informations sont recueillies à partir d’un échange avec les
            parents (ou les personnes qui connaissent bien l’enfant), afin de
            décrire son fonctionnement dans son environnement habituel.
          </p>

          <h2 className="mt-10 font-semibold tracking-tight">À quoi ça sert ?</h2>
          <p className="mt-3 text-base leading-8 text-black/70">
            La Vineland II peut venir en complément d’observations médicales ou
            cliniques. Elle n’établit pas un diagnostic à elle seule, mais
            apporte des éléments concrets pour mieux comprendre le profil de
            l’enfant et affiner l’accompagnement.
          </p>

          <div className="mt-10">
            <ButtonLink href="/contact" variant="primary">
              Me contacter
            </ButtonLink>
          </div>
        </div>
      </div>
    </Container>
  );
}

