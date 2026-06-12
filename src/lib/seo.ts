import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const BUSINESS_NAME = "Margaux Malhomme — Éducatrice spécialisée";
export const BUSINESS_PHONE = "+33777005382";
export const BUSINESS_EMAIL = "margauxmalhomme@gmail.com";

export const INSTAGRAM_URL = "https://www.instagram.com/boost.educ/";
export const LINKEDIN_URL =
  "https://fr.linkedin.com/in/margaux-malhomme-2548141ba";

export const DEFAULT_DESCRIPTION =
  "Éducatrice spécialisée libérale à Clermont-Ferrand (Puy-de-Dôme, 63). Repérage TSA, bilans Vineland II, profil sensoriel Dunn 2, accompagnement éducatif et guidance parentale.";

/** URLs à demander en indexation dans Google Search Console. */
export const SEARCH_CONSOLE_INDEX_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/qui-suis-je`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/tarifs`,
  `${SITE_URL}/bilans`,
] as const;

/** Texte suggéré pour la fiche Google Business Profile. */
export const GOOGLE_BUSINESS_PROFILE_DESCRIPTION = `Margaux Malhomme, éducatrice spécialisée libérale à Clermont-Ferrand et dans le Puy-de-Dôme (63). Accompagnement éducatif, repérage TSA/TND, bilans Vineland II et profil sensoriel Dunn 2, guidance parentale. Interventions à domicile, en visio ou sur rendez-vous. Premier échange téléphonique gratuit.`;

/** Texte suggéré pour la bio Instagram / LinkedIn. */
export const SOCIAL_BIO_SUGGESTION = `Éducatrice spécialisée libérale · Clermont-Ferrand (63)\nTSA / TND · bilans · accompagnement éducatif\nmargauxmalhomme.com`;

export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path === "/" ? "" : path}`,
    },
  };
}

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

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

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
        serviceType: [
          "Accompagnement éducatif",
          "Bilan de repérage TSA",
          "Guidance parentale",
          "Bilan Vineland II",
          "Profil sensoriel",
        ],
        areaServed: [
          { "@type": "City", name: "Clermont-Ferrand" },
          { "@type": "AdministrativeArea", name: "Puy-de-Dôme" },
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
          "éduc spé",
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
        sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
        knowsAbout: ["TSA", "TND", "accompagnement éducatif", "éduc spé"],
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
