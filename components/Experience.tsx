"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { useLocale } from "./I18nProvider";
import { t, tArray } from "@/lib/translations";

interface ExpItem {
  role: string;
  company: string;
  period: string;
  description: string;
  metrics: string[];
  highlights: string[];
}

function ExperienceCard({
  exp,
  stack,
  index,
  defaultOpen,
}: {
  exp: ExpItem;
  stack: string[];
  index: number;
  defaultOpen: boolean;
}) {
  const { locale } = useLocale();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className={`border-glow group rounded-2xl border bg-white/[0.015] transition-colors ${
        open ? "border-white/20" : "border-white/10 hover:border-white/15"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start gap-6 rounded-2xl px-5 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 md:px-8 md:py-9"
      >
        <div className="hidden w-40 shrink-0 pt-1 font-mono text-xs uppercase tracking-[0.2em] text-white/50 md:block">
          {exp.period}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-light leading-tight text-white md:text-3xl">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm text-accent-teal/90">{exp.company}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 md:hidden">
                {exp.period}
              </p>
            </div>
            <span
              className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 group-hover:border-accent-teal/40 group-hover:text-accent-teal ${
                open ? "rotate-180 border-accent-teal/40 text-accent-teal" : ""
              }`}
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-white/60">{exp.description}</p>

          {/* Impact metrics — always visible */}
          {exp.metrics?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {exp.metrics.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-accent-teal/25 bg-accent-teal/10 px-3 py-1 font-mono text-xs font-medium text-accent-teal"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          {!open && (
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-white/45 transition group-hover:text-accent-teal">
              {t("experience.expand", locale)}
              <ChevronDown className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 px-5 pb-8 md:grid-cols-[10rem_1fr] md:gap-6 md:px-8 md:pb-10">
              <div className="hidden md:block" />
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
                <div>
                  <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                    {t("experience.achievements", locale)}
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                        <span className="mt-2 h-px w-5 shrink-0 bg-gradient-to-r from-accent-teal to-transparent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-44">
                  <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                    {t("experience.stackLabel", locale)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  const { locale } = useLocale();
  const items = tArray<ExpItem>("experience.items", locale);

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          kicker={t("experience.kicker", locale)}
          title={t("experience.title", locale)}
        />

        <div className="space-y-4">
          {items.map((exp, i) => (
            <ExperienceCard
              key={exp.role + exp.company}
              exp={exp}
              stack={experience[i]?.stack ?? []}
              index={i}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
