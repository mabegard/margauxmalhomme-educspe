import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site margauxmalhomme.com.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Politique de confidentialité
          </h1>

          <div className="mt-8 space-y-6 text-sm leading-7 text-black/70">
            <section>
              <h2 className="font-semibold text-black/85">
                Données collectées
              </h2>
              <p className="mt-2">
                Ce site ne propose pas de création de compte. Les données
                personnelles ne sont collectées que lorsque vous contactez
                volontairement l’éditrice (par téléphone ou par email).
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Finalités</h2>
              <p className="mt-2">
                Les informations partagées (email, numéro de téléphone, contenu
                du message) sont utilisées uniquement pour répondre à votre
                demande et organiser un éventuel premier échange.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Conservation</h2>
              <p className="mt-2">
                Les échanges sont conservés le temps nécessaire au traitement de
                votre demande, puis archivés ou supprimés selon les obligations
                légales et la nécessité de suivi.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Vos droits</h2>
              <p className="mt-2">
                Conformément au RGPD, vous pouvez demander l’accès, la
                rectification ou la suppression de vos données, en écrivant à{" "}
                <a
                  className="font-semibold text-[var(--sage)] hover:underline"
                  href="mailto:margauxmalhomme@gmail.com"
                >
                  margauxmalhomme@gmail.com
                </a>
                .
              </p>
            </section>

            <section id="mesure-audience">
              <h2 className="font-semibold text-black/85">
                Mesure d’audience (volontaire)
              </h2>
              <p className="mt-2">
                Si vous acceptez via le bandeau affiché lors de votre première
                visite, un script de l’outil{" "}
                <a
                  className="font-semibold text-[var(--sage)] hover:underline"
                  href="https://plausible.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plausible Analytics
                </a>{" "}
                est chargé. Il permet de connaître des statistiques agrégées
                (pages consultées, provenance générale du trafic, type
                d’appareil), sans publicité ni profilage marketing. Le script
                n’est jamais chargé sans votre accord préalable.
              </p>
              <p className="mt-2">
                Votre choix (accepter ou refuser) est enregistré dans le stockage
                local de votre navigateur ; vous pouvez le modifier à tout moment
                via le lien « Modifier le choix statistiques » en pied de page
                (la page se recharge alors pour appliquer votre nouveau choix).
              </p>
              <p className="mt-2">
                Politique de confidentialité de l’éditeur de l’outil :{" "}
                <a
                  className="font-semibold text-[var(--sage)] hover:underline"
                  href="https://plausible.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  plausible.io/privacy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Cookies</h2>
              <p className="mt-2">
                Ce site ne dépose pas de cookies publicitaires. La mesure
                d’audience décrite ci‑dessus repose sur un script chargé
                uniquement après consentement ; Plausible ne vise pas la
                publicité comportementale.
              </p>
              <p className="mt-2">
                Des cookies ou traceurs strictement nécessaires au
                fonctionnement du site ou à l’hébergement peuvent toutefois être
                utilisés par l’hébergeur, sans finalité marketing.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">
                Conditions d’utilisation du site
              </h2>
              <p className="mt-2">
                L’accès et la navigation sur ce site sont également encadrés par
                les{" "}
                <Link
                  className="font-semibold text-[var(--sage)] hover:underline"
                  href="/cgu"
                >
                  conditions générales d’utilisation
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
}

