import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site margauxmalhomme-educspe.fr.",
};

export default function MentionsLegalesPage() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Mentions légales
          </h1>

          <div className="mt-8 space-y-6 text-sm leading-7 text-black/70">
            <section>
              <h2 className="font-semibold text-black/85">Éditeur du site</h2>
              <p className="mt-2">
                Margaux Malhomme — Éducatrice spécialisée (activité libérale)
                <br />
                Clermont‑Ferrand (63), France
                <br />
                Email :{" "}
                <a
                  className="font-semibold text-[var(--sage)] hover:underline"
                  href="mailto:educ.liberale.malhomme@gmail.com"
                >
                  educ.liberale.malhomme@gmail.com
                </a>
              </p>
              <p className="mt-2 text-black/55">
                (À compléter : adresse professionnelle, n° SIRET, etc. si
                applicable.)
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Hébergement</h2>
              <p className="mt-2">
                Site hébergé sur Vercel (à confirmer lors de la mise en ligne).
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black/85">Responsabilité</h2>
              <p className="mt-2">
                Les informations diffusées sur ce site sont fournies à titre
                informatif. Elles ne remplacent pas un avis médical et ne
                constituent pas un diagnostic.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
}

