import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { MobileContactFab } from "@/components/MobileContactFab";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AudienceAnalytics } from "@/components/AudienceAnalytics";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_DESCRIPTION, sharedOpenGraph } from "@/lib/seo";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-serif", subsets: ["latin"] });

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";

export const metadata: Metadata = {
  title: {
    default: "Margaux Malhomme | Éducatrice spécialisée à Clermont‑Ferrand (63)",
    template: "%s | Margaux Malhomme",
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: sharedOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: "Éducatrice spécialisée à Clermont-Ferrand | Margaux Malhomme",
    description: DEFAULT_DESCRIPTION,
    images: ["/portraits/portrait-juin-26.png"],
  },
  keywords: [
    "éducatrice spécialisée Clermont-Ferrand",
    "éducateur spécialisé Clermont-Ferrand",
    "éducation spécialisée Puy-de-Dôme",
    "TSA Clermont-Ferrand",
    "TND",
    "bilan Vineland",
    "profil sensoriel",
    "accompagnement enfant autiste",
  ],
  icons: {
    icon: [
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="flex-1 pb-[7.25rem] md:pb-0">{children}</main>
        <MobileContactFab />
        {plausibleDomain ? (
          <AudienceAnalytics domain={plausibleDomain} />
        ) : null}
        <SiteFooter />
      </body>
    </html>
  );
}
