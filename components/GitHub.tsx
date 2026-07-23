"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

interface Profile {
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

interface Language {
  name: string;
  count: number;
  pct: number;
}

interface ReposPayload {
  languages: Language[];
  totalStars: number;
  ownedRepos: number;
}

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface Contributions {
  total: number;
  days: Day[];
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  "C#": "#178600",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#2f74c0",
  Java: "#b07219",
  Go: "#00ADD8",
  Shell: "#89e051",
  Vue: "#41b883",
};

// GitHub-style green scale
const LEVEL_COLORS = ["rgba(24,24,15,0.06)", "#0e4429", "#006d32", "#26a641", "#39d353"];
const MONTHS_ES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();
    function step(now: number) {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, value]);
  return <span ref={ref}>{display.toLocaleString()}</span>;
}

function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-black/[0.06] ${className ?? ""}`} />;
}

function buildWeeks(days: Day[]) {
  const weeks: (Day | null)[][] = [];
  let col: (Day | null)[] = new Array(7).fill(null);
  days.forEach((d) => {
    const dow = new Date(d.date + "T00:00:00").getDay(); // 0 Sun .. 6 Sat
    col[dow] = d;
    if (dow === 6) {
      weeks.push(col);
      col = new Array(7).fill(null);
    }
  });
  if (col.some(Boolean)) weeks.push(col);
  return weeks;
}

function Heatmap({ days, locale }: { days: Day[]; locale: string }) {
  const weeks = buildWeeks(days);
  const months = locale === "es" ? MONTHS_ES : MONTHS_EN;

  // month labels: show month name at the week where the month first appears
  const monthLabels = weeks.map((col, i) => {
    const first = col.find(Boolean);
    if (!first) return "";
    const m = new Date(first.date + "T00:00:00").getMonth();
    const prev = i > 0 ? weeks[i - 1].find(Boolean) : null;
    const prevM = prev ? new Date(prev.date + "T00:00:00").getMonth() : -1;
    return m !== prevM ? months[m] : "";
  });

  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="inline-flex flex-col gap-1">
        {/* month row */}
        <div className="flex gap-[3px] pl-0">
          {monthLabels.map((lbl, i) => (
            <div key={i} className="w-[13px] text-[9px] text-ink-400" style={{ minWidth: 13 }}>
              {lbl}
            </div>
          ))}
        </div>
        {/* 7 rows × weeks columns */}
        <div className="flex gap-[3px]">
          {weeks.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-[3px]">
              {col.map((d, ri) => (
                <motion.div
                  key={ri}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: Math.min(ci * 0.006, 1.2) }}
                  title={d ? `${d.count} · ${d.date}` : ""}
                  className="h-[13px] w-[13px] rounded-[3px]"
                  style={{ backgroundColor: d ? LEVEL_COLORS[d.level] : LEVEL_COLORS[0] }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GitHub() {
  const { locale } = useLocale();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [repos, setRepos] = useState<ReposPayload | null>(null);
  const [contrib, setContrib] = useState<Contributions | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("/api/github/profile").then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch("/api/github/repos").then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch("/api/github/contributions").then((r) => (r.ok ? r.json() : null)).catch(() => null),
    ])
      .then(([p, r, c]) => {
        setProfile(p);
        setRepos(r);
        setContrib(c);
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <section id="github" className="relative px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeader index="06" kicker={t("github.kicker", locale)} title={t("github.title", locale)} />
          <p className="mt-8 text-center text-ink-400">{t("github.unavailable", locale)}</p>
        </div>
      </section>
    );
  }

  const stats = profile
    ? [
        { label: t("github.stat.repos", locale), value: profile.public_repos },
        { label: t("github.stat.followers", locale), value: profile.followers },
        { label: t("github.stat.following", locale), value: profile.following },
        { label: t("github.stat.stars", locale), value: repos?.totalStars ?? 0 },
      ]
    : [];

  return (
    <section id="github" className="relative px-6 py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-green/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="06" kicker={t("github.kicker", locale)} title={t("github.title", locale)} />

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6"
        >
          {profile ? (
            <>
              <Image
                src={profile.avatar_url}
                alt={profile.name}
                width={56}
                height={56}
                className="rounded-full border border-ink-900/10"
              />
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {stats.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-8">
                    {i > 0 && <div className="hidden h-8 w-px bg-black/[0.06] md:block" />}
                    <div>
                      <p className="font-mono text-2xl font-light text-ink-900">
                        <AnimatedCounter value={s.value} />
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-ink-400">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-8">
              <Skeleton className="h-14 w-14 rounded-full" />
              <Skeleton className="h-10 w-64" />
            </div>
          )}
        </motion.div>

        {/* Contribution heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl border border-ink-900/10 bg-card p-6 md:p-8"
        >
          {contrib ? (
            <>
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-mono text-2xl font-light text-ink-900">
                  <AnimatedCounter value={contrib.total} />
                </span>
                <span className="text-sm text-ink-500">{t("github.contributions", locale)}</span>
              </div>
              <Heatmap days={contrib.days} locale={locale} />
              <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-ink-400">
                <span>{t("github.less", locale)}</span>
                {LEVEL_COLORS.map((c, i) => (
                  <span key={i} className="h-[11px] w-[11px] rounded-[3px]" style={{ backgroundColor: c }} />
                ))}
                <span>{t("github.more", locale)}</span>
              </div>
            </>
          ) : (
            <Skeleton className="h-28 w-full rounded-xl" />
          )}
        </motion.div>

        {/* Top languages */}
        <div className="mt-14">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-400">
            {t("github.topLanguages", locale)}
          </h3>
          {repos ? (
            <div className="space-y-4">
              <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-black/[0.04]">
                {repos.languages.map((l) => (
                  <div
                    key={l.name}
                    style={{ width: `${l.pct}%`, backgroundColor: LANG_COLORS[l.name] ?? "#8b98a5" }}
                    className="h-full"
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {repos.languages.map((l) => (
                  <span key={l.name} className="flex items-center gap-2 text-sm text-ink-600">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: LANG_COLORS[l.name] ?? "#8b98a5" }} />
                    {l.name}
                    <span className="text-ink-400">{l.pct}%</span>
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <Skeleton className="h-14 w-full rounded-xl" />
          )}
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-ink-400">
            {t("github.privateNote", locale)}
          </p>
        </div>
      </div>
    </section>
  );
}
