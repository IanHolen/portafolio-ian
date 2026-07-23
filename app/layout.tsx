import type { Metadata } from "next";
// Self-hosted variable fonts (no external fetch — works offline and on Vercel)
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/fraunces";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";
import ReadingProgress from "@/components/ReadingProgress";
import Providers from "@/components/Providers";
import SkipLink from "@/components/SkipLink";

const SITE_URL = "https://ianholender.com";
const SITE_TITLE = "Ian Holender — Fullstack Developer & Data Engineer";
const SITE_DESCRIPTION =
  "Ian Holender — Fullstack Developer & Data Engineer. Productos end-to-end con React/Node.js e IA, y arquitecturas de datos sobre Microsoft Fabric & Azure. Portafolio personal / Personal portfolio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Fullstack Developer",
    "Data Engineer",
    "React",
    "Next.js",
    "Node.js",
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
      className="has-custom-cursor"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeScript }} />
      </head>
      <body className="font-sans selection:bg-accent-green/30">
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
