import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { surfaceCard } from "@/lib/surfaceStyles";

export const metadata: Metadata = {
  title: "Outils & supports",
  description:
    "Galerie d’outils et supports utilisés dans le cadre des bilans et de l’accompagnement.",
};

const gallery = [
  { src: "/outils/outil-01.jpg", alt: "Outil 1 (exemple)" },
  { src: "/outils/outils%20enfant.png", alt: "Outil 2 (exemple)" },
  { src: "/outils/outil-03.jpg", alt: "Outil 3 (exemple)" },
  { src: "/outils/outil-04.jpg", alt: "Outil 4 (exemple)" },
  { src: "/outils/outil-05.jpg", alt: "Outil 5 (exemple)" },
  { src: "/outils/outil-06.jpg", alt: "Outil 6 (exemple)" },
  {
    src: "/outils/A402441F-D280-43B9-8143-F01AD24143B1.JPG",
    alt: "Pictogrammes et supports visuels type PECS (exemple)",
  },
  {
    src: "/outils/IMG_2598.PNG",
    alt: "Tableau de choix et pictogrammes (exemple)",
  },
  { src: "/outils/outil-09.jpg", alt: "Outil 9 (exemple)" },
] as const;

export default function OutilsPage() {
  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Outils &amp; supports
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
            Quelques exemples d’outils et de supports utilisés lors des temps
            d’échange, des bilans et de l’accompagnement. Les photos sont
            illustratives et ne concernent pas un enfant en particulier.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.src} className={`${surfaceCard} overflow-hidden p-2`}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/60">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

