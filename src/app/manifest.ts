import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Margaux Malhomme — Éducatrice spécialisée",
    short_name: "Margaux Malhomme",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f0",
    theme_color: "#2f6b57",
    icons: [
      {
        src: "/favicon-96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
