import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";
import ReadingProgress from "@/components/ReadingProgress";
import Providers from "@/components/Providers";
import SkipLink from "@/components/SkipLink";

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
  "Ian Holender — Data Engineer. Scalable pipelines on Microsoft Fabric & Azure. Portafolio personal / Personal portfolio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Data Engineer",
    "Microsoft Fabric",
    "Azure",
    "Ian Holender",
    "Portfolio",
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
    alternateLocale: ["en_US"],
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

// Inline script to set locale from localStorage before first paint (prevents flash)
const localeScript = `(function(){try{var l=localStorage.getItem('locale');if(l==='en')document.documentElement.lang='en';}catch(e){}})()`;

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeScript }} />
      </head>
      <body className="font-sans selection:bg-accent-violet/40">
        <Providers>
          <SkipLink />
          <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-fade" />
          <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern [background-size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <ReadingProgress />
          <CustomCursor />
          <CommandPalette />
          {children}
        </Providers>
      </body>
    </html>
  );
}
