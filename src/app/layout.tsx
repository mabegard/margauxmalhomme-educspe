import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { MobileContactFab } from "@/components/MobileContactFab";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AudienceAnalytics } from "@/components/AudienceAnalytics";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-serif", subsets: ["latin"] });

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";

export const metadata: Metadata = {
  title: {
    default: "Margaux Malhomme | Éducatrice spécialisée à Clermont‑Ferrand (63)",
    template: "%s | Margaux Malhomme",
  },
  description:
    "Éducatrice spécialisée à Clermont‑Ferrand (Puy‑de‑Dôme). Repérage précoce des signes du TSA, bilans (Vineland II, profil sensoriel Dunn 2) et pistes concrètes adaptées.",
  metadataBase: new URL("https://margauxmalhomme-educspe.fr"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
    ],
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
