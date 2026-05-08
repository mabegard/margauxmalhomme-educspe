import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://margauxmalhomme-educspe.fr";
  const now = new Date();

  const routes = [
    "/",
    "/qui-suis-je",
    "/bilans",
    "/bilans/vineland",
    "/bilans/profil-sensoriel",
    "/tarifs",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

