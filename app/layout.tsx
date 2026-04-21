import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

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

export const metadata: Metadata = {
  title: "Ian Holender — Data Engineer",
  description:
    "Portafolio personal de Ian Holender. Data Engineer especializado en arquitecturas event-driven sobre Microsoft Fabric y Azure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} has-custom-cursor`}
    >
      <body className="font-sans selection:bg-accent-violet/40">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-fade" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern [background-size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
