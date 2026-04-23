import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";
import ReadingProgress from "@/components/ReadingProgress";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://ianholender.com";
const SITE_TITLE = "Ian Holender — Data Engineer";
const SITE_DESCRIPTION =
  "Portafolio personal de Ian Holender. Data Engineer especializado en arquitecturas event-driven sobre Microsoft Fabric y Azure.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Data Engineer",
    "Microsoft Fabric",
    "Azure",
    "Ian Holender",
    "Portafolio",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Ian Holender",
    locale: "es_MX",
    type: "website",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: SITE_TITLE },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} has-custom-cursor`}
    >
      <body className="font-sans selection:bg-accent-violet/40">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent-violet focus:px-6 focus:py-3 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
        >
          Ir al contenido principal
        </a>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-fade" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern [background-size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <Providers>
          <ReadingProgress />
          <CustomCursor />
          <CommandPalette />
          {children}
        </Providers>
      </body>
    </html>
  );
}
