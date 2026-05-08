import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site margauxmalhomme-educspe.fr.",
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
                  href="mailto:educ.liberale.malhomme@gmail.com"
                >
                  educ.liberale.malhomme@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Cookies</h2>
              <p className="mt-2">
                Ce site n’utilise pas de cookies publicitaires. (À ajuster si
                vous ajoutez des outils de mesure d’audience.)
              </p>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
}

