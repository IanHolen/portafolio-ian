"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Languages } from "lucide-react";
import SectionHeader from "./SectionHeader";
import HighlightText from "./HighlightText";
import { useLocale } from "./I18nProvider";
import { t, tArray } from "@/lib/translations";

const HIGHLIGHT_TERMS = ["Fullstack Developer", "AI Engineer", "Data Engineer", "React/Node.js", "Microsoft Fabric", "Azure", "MCP", "LLMs", "producción"];

function highlightIntro(text: string) {
  const parts: (string | JSX.Element)[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliest = -1;
    let matchedTerm = "";
    for (const term of HIGHLIGHT_TERMS) {
      const idx = remaining.indexOf(term);
      if (idx !== -1 && (earliest === -1 || idx < earliest)) {
        earliest = idx;
        matchedTerm = term;
      }
    }
    if (earliest === -1) {
      parts.push(remaining);
      break;
    }
    if (earliest > 0) parts.push(remaining.slice(0, earliest));
    parts.push(<HighlightText key={key++}>{matchedTerm}</HighlightText>);
    remaining = remaining.slice(earliest + matchedTerm.length);
  }
  return parts;
}

export default function About() {
  const { locale } = useLocale();
  const bullets = tArray<string>("about.bullets", locale);

  const info = [
    { Icon: Briefcase, label: t("about.info.role", locale), value: t("about.info.roleValue", locale) },
    {
      Icon: GraduationCap,
      label: t("about.info.education", locale),
      value: t("about.info.educationValue", locale),
      sub: t("about.info.educationSub", locale),
    },
    { Icon: MapPin, label: t("about.info.location", locale), value: t("about.info.locationValue", locale) },
    { Icon: Languages, label: t("about.info.languages", locale), value: t("about.info.languagesValue", locale) },
  ];

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-emerald/15 blur-[140px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01" kicker={t("about.kicker", locale)} title={t("about.title", locale)} />

        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="text-justify font-display text-2xl font-light leading-snug text-ink-700 md:text-3xl"
            >
              {highlightIntro(t("about.intro", locale))}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-xl text-justify text-lg leading-relaxed text-ink-600"
            >
              {t("about.intro2", locale)}
            </motion.p>

            {/* Quick facts — compact info cards, right after the intro */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {info.map((it, i) => (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-ink-900/10 bg-card p-5"
                >
                  <div className="mb-3 flex items-center gap-2 text-accent-green">
                    <it.Icon className="h-4 w-4" strokeWidth={1.75} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                      {it.label}
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug text-ink-900">{it.value}</p>
                  {it.sub && <p className="mt-1 text-xs leading-snug text-ink-500">{it.sub}</p>}
                </motion.div>
              ))}
            </div>
          </div>

          <ul className="md:col-span-5 space-y-5">
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="flex items-start gap-3 text-ink-600"
              >
                <span className="mt-2 h-px w-6 bg-gradient-to-r from-accent-green to-transparent" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
