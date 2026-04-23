"use client";

import { motion } from "framer-motion";
import { useLocale } from "./I18nProvider";
import { t, tArray } from "@/lib/translations";

interface EdItem { title: string; institution: string; period: string; }
interface LangItem { name: string; level: string; }

export default function Education() {
  const { locale } = useLocale();
  const educationItems = tArray<EdItem>("education.items", locale);
  const languageItems = tArray<LangItem>("languages.items", locale);

  return (
    <section id="education" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <div className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-accent-violet">
            07 — {t("education.kicker", locale)}
          </div>
          <div className="space-y-6">
            {educationItems.map((ed, i) => (
              <motion.div
                key={ed.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-l border-white/10 pl-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/60">
                  {ed.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-light text-white">
                  {ed.title}
                </h3>
                <p className="mt-1 text-white/60">{ed.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-accent-violet">
            08 — {t("languages.kicker", locale)}
          </div>
          <div className="space-y-4">
            {languageItems.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-baseline justify-between border-b border-white/10 pb-4"
              >
                <span className="font-display text-2xl text-white">
                  {lang.name}
                </span>
                <span className="text-sm text-white/50">{lang.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
