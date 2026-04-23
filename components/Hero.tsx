"use client";

import { useEffect, useState, useRef, useCallback, MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import { profile } from "@/lib/data";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });

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
    transition: {
      duration: 0.9,
      delay: 0.1 + i * 0.1,
      ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4 + i * 0.03, ease: [0.2, 0.8, 0.2, 1] },
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
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();
    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}{suffix}
    </span>
  );
}

const statLabelKeys = [
  "hero.stat.stores",
  "hero.stat.faster",
  "hero.stat.regions",
  "hero.stat.stakeholders",
] as const;

export default function Hero() {
  const { locale } = useLocale();

  const stats = [
    { value: 3400, suffix: "+", label: t(statLabelKeys[0], locale) },
    { value: 35, suffix: "%", label: t(statLabelKeys[1], locale) },
    { value: 21, suffix: "", label: t(statLabelKeys[2], locale) },
    { value: 570, suffix: "+", label: t(statLabelKeys[3], locale) },
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
    >
      <ParticleCanvas />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60"
        >
          <Sparkles className="h-3 w-3 text-accent-violet" />
          {t("hero.available", locale)}
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-light leading-[0.95] tracking-tight">
          <SplitText text={profile.firstName} className="block text-white/90" />
          <SplitText text={profile.lastName} className="block italic text-gradient" />
        </h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          {t("hero.tagline", locale)}{" "}
          <span className="text-white/90">{profile.title}</span> {t("hero.basedIn", locale)}{" "}
          {profile.location}.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticWrap>
            <a
              href="#work"
              className="group relative overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {t("hero.cta", locale)}
                <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
              </span>
            </a>
          </MagneticWrap>
          <MagneticWrap>
            <a
              href="#contact"
              className="inline-block rounded-full border border-white/10 px-7 py-4 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              {t("hero.contact", locale)}
            </a>
          </MagneticWrap>
          {/* CV download — hidden until Ian uploads his real PDF to /public */}
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="mt-16 flex flex-wrap items-center gap-8 md:gap-12"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8 md:gap-12">
              {i > 0 && <div className="hidden h-10 w-px bg-white/10 md:block" />}
              <div>
                <p className="font-mono text-3xl font-light text-white md:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator — mouse icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40 md:flex"
        >
          <div className="relative h-9 w-5 rounded-full border border-white/30">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1.5 h-2 w-1 -translate-x-1/2 rounded-full bg-accent-violet"
            />
          </div>
          <span>{t("hero.scroll", locale)}</span>
        </motion.div>
      </div>
    </section>
  );
}
