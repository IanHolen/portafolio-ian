"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Circle, X } from "lucide-react";
import { products, type Product } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { useLocale } from "./I18nProvider";
import { t, tArray } from "@/lib/translations";

interface ProductTranslation {
  blurb: string;
}

const STATUS_STYLES: Record<
  string,
  { dot: string; text: string; ring: string; pulse: boolean }
> = {
  live: { dot: "bg-accent-green", text: "text-accent-green", ring: "border-accent-green/30 bg-accent-green/10", pulse: false },
  internal: { dot: "bg-white/50", text: "text-white/60", ring: "border-white/15 bg-white/[0.04]", pulse: false },
  wip: { dot: "bg-accent-orange", text: "text-accent-orange", ring: "border-accent-orange/40 bg-accent-orange/10", pulse: true },
};

export default function Products() {
  const { locale } = useLocale();
  const texts = tArray<ProductTranslation>("products.items", locale);
  const [wip, setWip] = useState<Product | null>(null);

  const statusLabel = (s: string) =>
    s === "live"
      ? t("products.status.live", locale)
      : s === "internal"
      ? t("products.status.internal", locale)
      : t("products.status.wip", locale);

  return (
    <section id="products" className="relative px-6 py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[440px] w-[440px] rounded-full bg-accent-green/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[380px] w-[380px] rounded-full bg-accent-emerald/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          kicker={t("products.kicker", locale)}
          title={t("products.title", locale)}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {products.map((p, i) => {
            const status = STATUS_STYLES[p.status];
            const featured = i === 0; // MeshCode spans full width on desktop
            const isWip = p.status === "wip";

            const cardClass = `border-glow group relative flex w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-8 text-left transition-all duration-500 hover:border-white/20 md:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
              featured ? "md:col-span-2" : ""
            }`;

            const inner = (
              <>
                <div
                  className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                      {String(i + 1).padStart(2, "0")} · {p.role}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${status.ring} ${status.text}`}
                    >
                      <Circle
                        className={`h-1.5 w-1.5 rounded-full ${status.dot} ${status.pulse ? "animate-pulse" : ""}`}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                      {statusLabel(p.status)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-3xl font-light leading-tight tracking-tight text-white md:text-4xl">
                      {p.name}
                    </h3>
                    {(p.href || isWip) && (
                      <ArrowUpRight
                        className={`h-6 w-6 shrink-0 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                          isWip ? "group-hover:text-accent-orange" : "group-hover:text-accent-green"
                        }`}
                      />
                    )}
                  </div>
                  <p className="mt-1 font-mono text-xs text-white/40">{p.domain}</p>

                  <p className={`mt-5 text-white/60 ${featured ? "max-w-3xl" : "max-w-md"}`}>
                    {texts[i]?.blurb}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-8">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(p.href || isWip) && (
                    <span
                      className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                        isWip ? "text-accent-orange" : "text-accent-green"
                      }`}
                    >
                      {isWip ? t("products.status.wip", locale) : t("products.visit", locale)}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </>
            );

            const anim = {
              initial: { opacity: 0, y: 28 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-70px" },
              transition: { duration: 0.7, delay: (i % 2) * 0.08 },
            } as const;

            // WIP (NotarIA): open popup instead of navigating
            if (isWip) {
              return (
                <motion.button key={p.name} type="button" onClick={() => setWip(p)} className={cardClass} {...anim}>
                  {inner}
                </motion.button>
              );
            }
            // Live/internal with link
            if (p.href) {
              return (
                <motion.a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={cardClass} {...anim}>
                  {inner}
                </motion.a>
              );
            }
            return (
              <motion.div key={p.name} className={cardClass} {...anim}>
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* WIP popup */}
      <AnimatePresence>
        {wip && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setWip(null)}
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              role="dialog"
              aria-modal="true"
              className="fixed left-1/2 top-1/2 z-[91] w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-accent-orange/25 bg-ink-900 p-8 shadow-2xl"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-orange/15 blur-3xl" />
              <button
                onClick={() => setWip(null)}
                aria-label={t("products.wip.close", locale)}
                className="absolute right-5 top-5 text-white/40 transition hover:text-white focus-visible:outline-none"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-orange/40 bg-accent-orange/10 px-3 py-1 text-[11px] font-medium text-accent-orange">
                <Circle className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-orange" fill="currentColor" strokeWidth={0} />
                {t("products.status.wip", locale)}
              </span>

              <h3 className="mt-5 font-display text-2xl font-light text-white">
                {wip.name} — {t("products.wip.title", locale)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {t("products.wip.body", locale)}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <a
                  href={wip.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent-orange px-5 py-2.5 text-sm font-medium text-black transition hover:bg-accent-orange/90"
                >
                  {t("products.wip.visit", locale)}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <button
                  onClick={() => setWip(null)}
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  {t("products.wip.close", locale)}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
