"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { useLocale } from "./I18nProvider";
import { t, tArray } from "@/lib/translations";

interface ExpItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
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

        <div className="space-y-2">
          {items.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-glow group grid grid-cols-12 gap-6 rounded-2xl border border-white/10 px-4 py-8 transition-colors hover:bg-white/[0.015] md:px-6 md:py-10"
            >
              <div className="col-span-12 font-mono text-xs uppercase tracking-[0.25em] text-white/60 md:col-span-3">
                {exp.period}
              </div>

              <div className="col-span-12 md:col-span-6">
                <h3 className="font-display text-2xl font-light text-white transition group-hover:text-gradient md:text-3xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm text-white/50">{exp.company}</p>
                <p className="mt-4 max-w-xl text-white/60">{exp.description}</p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-white/60"
                      >
                        <span className="mt-2 h-px w-6 shrink-0 bg-gradient-to-r from-accent-violet to-transparent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="col-span-12 flex flex-wrap items-start gap-2 md:col-span-3 md:justify-end">
                {experience[i]?.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
