"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Circle, Github, Gamepad2, Sprout, Headset, GraduationCap } from "lucide-react";
import { academicDevs, type AcademicDev } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import SwipeHint from "./SwipeHint";
import { useLocale } from "./I18nProvider";
import { t, tArray } from "@/lib/translations";

interface AcademicTranslation {
  blurb: string;
}

const TYPE_META: Record<
  AcademicDev["type"],
  { icon: typeof Gamepad2; labelKey: "academic.type.game" | "academic.type.ai" | "academic.type.callcenter" }
> = {
  game: { icon: Gamepad2, labelKey: "academic.type.game" },
  ai: { icon: Sprout, labelKey: "academic.type.ai" },
  callcenter: { icon: Headset, labelKey: "academic.type.callcenter" },
};

export default function AcademicDev() {
  const { locale } = useLocale();
  const texts = tArray<AcademicTranslation>("academic.items", locale);

  return (
    <section id="academic" className="relative px-6 py-32">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-sky-500/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 h-[360px] w-[360px] rounded-full bg-accent-green/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          kicker={t("academic.kicker", locale)}
          title={t("academic.title", locale)}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="-mt-8 mb-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-ink-600">{t("academic.subtitle", locale)}</p>
          <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-ink-900/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-ink-600">
            <GraduationCap className="h-3.5 w-3.5 text-accent-green" />
            {t("academic.badge", locale)}
          </span>
        </motion.div>

        {/* Mobile: swipeable carousel. Desktop: 3-col grid. */}
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {academicDevs.map((d, i) => {
            const isLive = d.status === "live";
            const typeMeta = TYPE_META[d.type];
            const TypeIcon = typeMeta.icon;
            const ctaLabel = isLive
              ? d.type === "game"
                ? t("academic.play", locale)
                : t("academic.visit", locale)
              : t("academic.study", locale);

            return (
              <motion.article
                key={d.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="border-glow group relative flex w-[86vw] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-card p-8 text-left transition-all duration-500 hover:border-ink-900/15 md:w-full md:shrink md:snap-align-none md:p-9"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${d.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Preview */}
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${d.name} — ${ctaLabel}`}
                    className="relative mb-6 block overflow-hidden rounded-xl border border-ink-900/10 bg-ink-950 aspect-[16/10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.image}
                      alt={`${d.name} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </a>

                  {/* Type + status */}
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-black/[0.03] px-2.5 py-1 text-[11px] font-medium text-ink-600">
                      <TypeIcon className="h-3.5 w-3.5" />
                      {t(typeMeta.labelKey, locale)}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                        isLive
                          ? "border-accent-green/30 bg-accent-green/10 text-accent-green"
                          : "border-sky-500/30 bg-sky-500/10 text-sky-600"
                      }`}
                    >
                      <Circle
                        className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-accent-green" : "bg-sky-500"}`}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                      {isLive ? t("academic.status.live", locale) : t("academic.status.case", locale)}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-2">
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-[1.7rem] font-light leading-tight tracking-tight text-ink-900 transition-colors hover:text-accent-green focus-visible:outline-none"
                    >
                      {d.name}
                    </a>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-green" />
                  </div>
                  <p className="mt-1 font-mono text-xs text-ink-400">
                    {d.year} · {d.domain}
                  </p>

                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-600">{texts[i]?.blurb}</p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {d.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink-900/10 bg-black/[0.03] px-2.5 py-1 text-[11px] text-ink-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex items-center gap-3 pt-7">
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                        isLive
                          ? "bg-accent-green text-paper hover:bg-accent-green/90 focus-visible:ring-accent-green"
                          : "bg-sky-600 text-white hover:bg-sky-600/90 focus-visible:ring-sky-500"
                      }`}
                    >
                      {ctaLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={d.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/15 px-4 py-2 text-sm text-ink-700 transition hover:border-ink-900/25 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                    >
                      <Github className="h-4 w-4" />
                      {t("academic.repo", locale)}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <SwipeHint className="mt-7" />
      </div>
    </section>
  );
}
