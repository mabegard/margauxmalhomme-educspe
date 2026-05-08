import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Profil sensoriel (Dunn)",
  description:
    "Profil sensoriel (Dunn) : mieux comprendre la perception sensorielle et les réactions de l’enfant aux stimulations du quotidien.",
};

export default function ProfilSensorielPage() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Profil sensoriel (Dunn), c’est quoi ?
          </h1>
          <p className="mt-6 text-base leading-8 text-black/70">
            Le profil sensoriel de Dunn est un outil qui permet de mieux
            comprendre comment un enfant perçoit et réagit aux informations de
            son environnement à travers ses sens (bruit, lumière, toucher,
            mouvements, odeurs, etc.).
          </p>
          <p className="mt-4 text-base leading-8 text-black/70">
            Il met en évidence la manière dont l’enfant réagit à son
            environnement : recherche de sensations, hypersensibilités, ou
            difficultés à organiser et traiter certaines informations du
            quotidien.
          </p>

          <h2 className="mt-10 font-semibold tracking-tight">À quoi ça sert ?</h2>
          <p className="mt-3 text-base leading-8 text-black/70">
            Cet outil ne pose pas de diagnostic. Il permet surtout de mieux
            comprendre le fonctionnement sensoriel de l’enfant au quotidien et
            d’identifier des adaptations concrètes à la maison, à l’école et
            dans les accompagnements proposés.
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

