import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Conditions générales d’utilisation",
  description:
    "Conditions générales d’utilisation du site margauxmalhomme-educspe.fr.",
};

export default function CguPage() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Conditions générales d’utilisation
          </h1>

          <div className="mt-8 space-y-6 text-sm leading-7 text-black/70">
            <section>
              <h2 className="font-semibold text-black/85">Objet</h2>
              <p className="mt-2">
                Les présentes conditions générales d’utilisation (CGU) encadrent
                l’accès et la consultation du site internet édité par Margaux
                Malhomme. En naviguant sur ce site, vous acceptez ces conditions
                sans réserve.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Contenu du site</h2>
              <p className="mt-2">
                Les informations publiées (textes, tarifs, présentation des
                bilans et de l’accompagnement) sont fournies à titre informatif.
                Elles ne constituent pas un diagnostic médical ni un engagement
                contractuel tant qu’aucune convention écrite n’a été conclue entre
                les parties.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Propriété intellectuelle</h2>
              <p className="mt-2">
                L’ensemble des contenus du site (textes, visuels, structure) est
                protégé. Toute reproduction ou diffusion non autorisée est
                interdite sauf autorisation écrite préalable de l’éditrice.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Comportement des utilisateurs</h2>
              <p className="mt-2">
                Vous vous engagez à ne pas porter atteinte au bon fonctionnement
                du site (tentatives d’intrusion, surcharge, contenus illicites ou
                diffamatoires transmis via les moyens de contact mis à disposition).
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Données personnelles</h2>
              <p className="mt-2">
                Le traitement des données personnelles est décrit dans la{" "}
                <Link
                  className="font-semibold text-[var(--sage)] hover:underline"
                  href="/politique-de-confidentialite"
                >
                  politique de confidentialité
                </Link>
                , notamment la section relative à la mesure d’audience
                volontaire. Lorsque celle-ci est proposée, un bandeau permet
                d’accepter ou de refuser le chargement du script d’analyse avant
                toute collecte statistique.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Modification des CGU</h2>
              <p className="mt-2">
                Les CGU peuvent être mises à jour à tout moment. La version en
                ligne prévaut sur les versions antérieures.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Contact</h2>
              <p className="mt-2">
                Pour toute question relative aux présentes CGU :{" "}
                <a
                  className="font-semibold text-[var(--sage)] hover:underline"
                  href="mailto:educ.liberale.malhomme@gmail.com"
                >
                  educ.liberale.malhomme@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
}
