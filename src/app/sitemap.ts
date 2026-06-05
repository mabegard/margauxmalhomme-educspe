import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = SITE_URL;
  const now = new Date();

  const routes = [
    "/",
    "/qui-suis-je",
    "/bilans",
    "/bilans/vineland",
    "/bilans/profil-sensoriel",
    "/bilans/outils",
    "/tarifs",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
    "/cgu",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

