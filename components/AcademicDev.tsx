"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Circle, Github, Gamepad2, Sprout, Headset, GraduationCap } from "lucide-react";
import { academicDevs, type AcademicDev } from "@/lib/data";
import SectionHeader from "./SectionHeader";
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
          className="-mt-8 mb-16 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
        >
          <p className="max-w-3xl text-lg leading-relaxed text-ink-600">{t("academic.subtitle", locale)}</p>
          <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-ink-900/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-ink-600">
            <GraduationCap className="h-3.5 w-3.5 text-accent-green" />
            {t("academic.badge", locale)}
          </span>
        </motion.div>

        {/* Large horizontal cards, alternating image side. */}
        <div className="flex flex-col gap-8 md:gap-10">
          {academicDevs.map((d, i) => {
            const isLive = d.status === "live";
            const typeMeta = TYPE_META[d.type];
            const TypeIcon = typeMeta.icon;
            const reversed = i % 2 === 1;
            const ctaLabel = isLive
              ? d.type === "game"
                ? t("academic.play", locale)
                : t("academic.visit", locale)
              : t("academic.study", locale);

            return (
              <motion.article
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className={`border-glow group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-ink-900/10 bg-card transition-all duration-500 hover:border-ink-900/15 md:items-stretch ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${d.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />

                {/* Preview */}
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${d.name} — ${ctaLabel}`}
                  className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-green md:aspect-auto md:w-[47%]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={`${d.name} preview`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/10" />
                </a>

                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col p-8 md:p-11">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-ink-600">
                      <TypeIcon className="h-4 w-4" />
                      {t(typeMeta.labelKey, locale)}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
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

                  <div className="flex items-start gap-2.5">
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-3xl font-light leading-tight tracking-tight text-ink-900 transition-colors hover:text-accent-green focus-visible:outline-none md:text-4xl"
                    >
                      {d.name}
                    </a>
                    <ArrowUpRight className="mt-1.5 h-6 w-6 shrink-0 text-ink-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-green" />
                  </div>
                  <p className="mt-2 font-mono text-xs text-ink-400">
                    {d.year} · {d.domain}
                  </p>

                  <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-600">{texts[i]?.blurb}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {d.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink-900/10 bg-black/[0.03] px-3 py-1 text-xs text-ink-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-9">
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
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
                      className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-ink-900/15 px-5 py-2.5 text-sm text-ink-700 transition hover:border-ink-900/25 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
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
      </div>
    </section>
  );
}
