"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const ICON_COLORS: Record<string, string> = {
  azure: "#0078d4",
  fabric: "#742774",
};

export default function Certifications() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="05" kicker="Certificaciones" title="Credenciales." />

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, i) => {
            const Tag = cert.credentialUrl ? motion.a : motion.div;
            return (
              <Tag
                key={cert.title}
                {...(cert.credentialUrl ? { href: cert.credentialUrl, target: "_blank", rel: "noopener noreferrer" } : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${!cert.credentialUrl ? "cursor-default" : ""}`}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{ backgroundColor: ICON_COLORS[cert.icon] ?? "#666" }}
                >
                  {cert.issuer[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-white group-hover:text-accent-violet transition">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.credentialUrl && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-accent-violet/70 group-hover:text-accent-violet transition">
                      Ver credencial <ExternalLink className="h-3 w-3" />
                    </span>
                  )}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
