"use client";

import { useEffect, useState, useRef, useCallback, MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

function MagneticWrap({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const onMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 80) {
      const f = (1 - dist / 80) * 6;
      setOffset({ x: (dx / dist) * f, y: (dy / dist) * f });
    }
  }, []);
  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      <div style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, transition: "transform 0.2s ease-out" }}>
        {children}
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.35 + i * 0.03, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [display, setDisplay] = useState(value);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); setDisplay(0); }, []);
  useEffect(() => {
    if (!mounted || !isInView) return;
    const duration = 1400;
    const start = performance.now();
    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round((1 - Math.pow(1 - progress, 3)) * value));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [mounted, isInView, value]);
  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  const { locale } = useLocale();

  const stats = [
    { value: 5, suffix: "", label: t("hero.stat.platforms", locale) },
    { value: 3, suffix: "+", label: t("hero.stat.years", locale) },
  ];

  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-14 md:grid-cols-[1.35fr_1fr] md:items-end">
          {/* Left: identity */}
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="mb-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-green"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
              {t("hero.available", locale)}
            </motion.div>

            <h1 className="font-display text-[clamp(3.2rem,8.5vw,7.5rem)] font-medium leading-[0.92] tracking-tight">
              <SplitText text={profile.firstName} className="block text-ink-900" />
              <SplitText text={profile.lastName} className="block text-ink-400" />
            </h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="mt-7 font-mono text-sm uppercase tracking-[0.18em] text-ink-600"
            >
              {t("hero.role", locale)}
            </motion.p>
          </div>

          {/* Right: pitch + CTA + stats */}
          <div className="md:pb-3">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2.6}
              className="text-lg leading-relaxed text-ink-700"
            >
              {t("hero.tagline", locale)}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3.1}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticWrap>
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-paper transition hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  {t("hero.cta", locale)}
                  <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
                </a>
              </MagneticWrap>
              <MagneticWrap>
                <a
                  href={profile.cvUrl}
                  download
                  className="group inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3.5 text-sm text-ink-800 transition hover:border-ink-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
                  {t("hero.downloadCv", locale)}
                </a>
              </MagneticWrap>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3.5}
              className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink-900/10 pt-7 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-medium text-ink-900">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Worked-at strip — fills the lower space + adds credibility */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="mt-20 flex flex-col gap-4 border-t border-ink-900/10 pt-8 md:mt-28 md:flex-row md:items-baseline md:gap-10"
        >
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
            {t("hero.workedAt", locale)}
          </span>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 font-display text-xl text-ink-500 md:text-2xl">
            <span className="transition-colors hover:text-ink-800">eShip / Segmail</span>
            <span className="text-ink-300">·</span>
            <span className="transition-colors hover:text-ink-800">Corporativo Tiendas 3B</span>
            <span className="text-ink-300">·</span>
            <span className="transition-colors hover:text-ink-800">IBSO</span>
            <span className="text-ink-300">·</span>
            <span className="transition-colors hover:text-ink-800">Shoplogix</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
