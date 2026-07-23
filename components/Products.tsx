"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";
import { products } from "@/lib/data";
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
  live: { dot: "bg-accent-teal", text: "text-accent-teal", ring: "border-accent-teal/30 bg-accent-teal/10", pulse: false },
  internal: { dot: "bg-white/50", text: "text-white/60", ring: "border-white/15 bg-white/[0.04]", pulse: false },
  wip: { dot: "bg-accent-amber", text: "text-accent-amber", ring: "border-accent-amber/30 bg-accent-amber/10", pulse: true },
};

export default function Products() {
  const { locale } = useLocale();
  const texts = tArray<ProductTranslation>("products.items", locale);

  const statusLabel = (s: string) =>
    s === "live"
      ? t("products.status.live", locale)
      : s === "internal"
      ? t("products.status.internal", locale)
      : t("products.status.wip", locale);

  return (
    <section id="products" className="relative px-6 py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[440px] w-[440px] rounded-full bg-accent-teal/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[380px] w-[380px] rounded-full bg-accent-cyan/10 blur-[150px]" />

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
            const Wrapper = p.href ? motion.a : motion.div;
            return (
              <Wrapper
                key={p.name}
                {...(p.href
                  ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08 }}
                className={`border-glow group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-8 transition-all duration-500 hover:border-white/20 md:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
                  featured ? "md:col-span-2" : ""
                }`}
              >
                {/* accent wash on hover */}
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
                    {p.href && (
                      <ArrowUpRight className="h-6 w-6 shrink-0 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-teal" />
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

                  {p.href && (
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {t("products.visit", locale)}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
