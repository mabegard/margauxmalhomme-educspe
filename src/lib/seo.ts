import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const BUSINESS_NAME = "Margaux Malhomme — Éducatrice spécialisée";
export const BUSINESS_PHONE = "+33777005382";
export const BUSINESS_EMAIL = "margauxmalhomme@gmail.com";

export const DEFAULT_DESCRIPTION =
  "Éducatrice spécialisée libérale à Clermont-Ferrand (Puy-de-Dôme, 63). Repérage TSA, bilans Vineland II, profil sensoriel Dunn 2, accompagnement éducatif et guidance parentale.";

export const sharedOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "fr_FR",
  url: SITE_URL,
  siteName: "Margaux Malhomme",
  title: "Éducatrice spécialisée à Clermont-Ferrand | Margaux Malhomme",
  description: DEFAULT_DESCRIPTION,
  images: [
    {
      url: "/portraits/portrait-juin-26.png",
      width: 1086,
      height: 1448,
      alt: "Margaux Malhomme, éducatrice spécialisée à Clermont-Ferrand",
    },
  ],
};

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professionnel`,
        name: BUSINESS_NAME,
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/portraits/portrait-juin-26.png`,
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        priceRange: "€€",
        areaServed: [
          {
            "@type": "City",
            name: "Clermont-Ferrand",
          },
          {
            "@type": "AdministrativeArea",
            name: "Puy-de-Dôme",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Clermont-Ferrand",
          addressRegion: "Auvergne-Rhône-Alpes",
          postalCode: "63000",
          addressCountry: "FR",
        },
        knowsAbout: [
          "éducation spécialisée",
          "trouble du spectre de l'autisme",
          "TND",
          "bilan Vineland II",
          "profil sensoriel",
        ],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Margaux Malhomme",
        jobTitle: "Éducatrice spécialisée libérale",
        worksFor: { "@id": `${SITE_URL}/#professionnel` },
        url: SITE_URL,
        image: `${SITE_URL}/portraits/portrait-juin-26.png`,
        email: BUSINESS_EMAIL,
        telephone: BUSINESS_PHONE,
        knowsAbout: ["TSA", "TND", "accompagnement éducatif"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Margaux Malhomme — Éducatrice spécialisée à Clermont-Ferrand",
        description: DEFAULT_DESCRIPTION,
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#professionnel` },
      },
    ],
  };
}
