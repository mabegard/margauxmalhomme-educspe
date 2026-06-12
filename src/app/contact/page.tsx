import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { MailtoLink } from "@/components/MailtoLink";
import { contactMailtoHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";
import {
  surfaceCard,
  surfaceCardMist,
  surfaceCardSage,
} from "@/lib/surfaceStyles";

export const metadata: Metadata = pageMetadata(
  "/contact",
  "Contact — Éducatrice spécialisée Clermont-Ferrand (63)",
  "Contacter Margaux Malhomme, éducatrice spécialisée libérale à Clermont-Ferrand : téléphone, email, zone d'intervention Puy-de-Dôme et visio.",
);

export default function ContactPage() {
  return (
    <Container>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl tracking-tight">
            Contact
          </h1>
          <p className="mt-6 text-base leading-8 text-black/70">
            Vous avez un doute ? Une question ? Je vous propose un premier
            échange pour en discuter.
          </p>

          <div className="mt-10 grid gap-4">
            <a
              className={`flex items-center justify-between p-6 ${surfaceCardSage}`}
              href="tel:+33777005382"
            >
              <div>
                <div className="font-semibold tracking-tight">Appeler</div>
                <div className="mt-1 text-sm text-black/65">07 77 00 53 82</div>
              </div>
              <span className="text-sm text-black/50">Tel →</span>
            </a>

            <MailtoLink
              className={`flex items-center justify-between p-6 ${surfaceCard}`}
              href={contactMailtoHref()}
            >
              <div>
                <div className="font-semibold tracking-tight">Envoyer un email</div>
                <div className="mt-1 text-sm text-black/65">
                  margauxmalhomme@gmail.com
                </div>
              </div>
              <span className="text-sm text-black/50">Mail →</span>
            </MailtoLink>

            <div className={`p-6 ${surfaceCardMist}`}>
              <div className="font-semibold tracking-tight">Zone d’intervention</div>
              <div className="mt-2 text-sm leading-7 text-black/70">
                Clermont‑Ferrand et Puy‑de‑Dôme (63) à domicile, ou en visio
                partout en France.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

