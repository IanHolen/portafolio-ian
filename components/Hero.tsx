"use client";

import { useEffect, useState, useRef, useCallback, MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Download, Briefcase, GraduationCap, MapPin, Languages } from "lucide-react";
import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";
import { profile } from "@/lib/data";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

function heroBrand(label: string): string {
  const l = label.toLowerCase();
  if (l.includes("linkedin")) return "#0A66C2";
  if (l.includes("github")) return "#18180f";
  if (l.includes("whatsapp")) return "#25D366";
  if (l.includes("mail")) return "#dc2626";
  return "#1c5b3a";
}

function heroBrandIcon(label: string): IconType | null {
  const l = label.toLowerCase();
  if (l.includes("linkedin")) return FaLinkedin;
  if (l.includes("github")) return SiGithub;
  if (l.includes("whatsapp")) return SiWhatsapp;
  if (l.includes("mail")) return SiGmail;
  return null;
}

function HeroSocial({ label, href }: { label: string; href: string }) {
  const [hover, setHover] = useState(false);
  const color = heroBrand(label);
  const Icon = heroBrandIcon(label);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label.toLowerCase().includes("whatsapp") ? `WhatsApp · ${profile.phone}` : label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={hover ? { backgroundColor: color, borderColor: color, color: "#fff" } : undefined}
      className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-ink-900/15 px-6 py-4 text-[15px] font-medium text-ink-800 transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      {Icon && (
        <Icon
          className="h-5 w-5 shrink-0 transition-colors duration-200"
          style={{ color: hover ? "#fff" : color }}
          aria-hidden="true"
        />
      )}
      {label}
    </a>
  );
}

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

  const info = [
    {
      Icon: Briefcase,
      label: t("about.info.role", locale),
      value: t("about.info.roleValue", locale),
      sub: t("about.info.roleSub", locale),
      schools: [] as { src: string; name: string; note: string }[],
    },
    {
      Icon: GraduationCap,
      label: t("about.info.education", locale),
      value: t("about.info.educationValue", locale),
      sub: "",
      schools: [
        { src: "/universities/tec.png", name: "Tec de Monterrey", note: "" },
        { src: "/universities/ceu.png", name: "CEU San Pablo", note: t("about.info.ceuNote", locale) },
      ],
    },
    { Icon: MapPin, label: t("about.info.location", locale), value: t("about.info.locationValue", locale), sub: "", schools: [] as { src: string; name: string; note: string }[] },
    { Icon: Languages, label: t("about.info.languages", locale), value: t("about.info.languagesValue", locale), sub: "", schools: [] as { src: string; name: string; note: string }[] },
  ];

  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top row: availability + social links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-10 flex flex-wrap items-center gap-4"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-green">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
            {t("hero.available", locale)}
          </span>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-stretch lg:gap-16">
          {/* Left: identity + pitch + CTA + stats */}
          <div>
            <h1 className="font-display text-[clamp(2.8rem,6.5vw,6rem)] font-medium leading-[0.92] tracking-tight">
              <SplitText text={profile.firstName} className="block text-ink-900" />
              <SplitText text={profile.lastName} className="block text-ink-400" />
            </h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="mt-6 font-mono text-sm uppercase tracking-[0.18em] text-ink-600"
            >
              {t("hero.role", locale)}
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2.6}
              className="mt-6 max-w-md text-lg leading-relaxed text-ink-700"
            >
              {t("hero.tagline", locale)}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3.1}
              className="mt-8 grid max-w-md grid-cols-2 gap-x-8 gap-y-6 border-t border-ink-900/10 pt-7"
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

            {/* Quick facts */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3.5}
              className="mt-8 grid max-w-lg grid-cols-2 gap-3.5"
            >
              {info.map((it) => (
                <div
                  key={it.label}
                  className="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-card p-5"
                >
                  <div className="mb-2.5 flex items-center gap-2 text-accent-green">
                    <it.Icon className="h-4 w-4" strokeWidth={1.75} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                      {it.label}
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug text-ink-900">{it.value}</p>
                  {it.sub && (
                    <p className="mt-auto pt-4 text-[13px] font-medium leading-snug text-ink-600">
                      {it.sub}
                    </p>
                  )}
                  {it.schools.length > 0 && (
                    <div className="mt-auto space-y-2 pt-3">
                      {it.schools.map((s) => (
                        <div key={s.src} className="flex items-center gap-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={s.src}
                            alt={s.name}
                            className="h-5 w-5 shrink-0 object-contain"
                          />
                          <span className="text-[11px] leading-snug">
                            <span className="font-semibold text-ink-800">{s.name}</span>
                            {s.note && <span className="text-ink-500"> · {s.note}</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative mx-auto w-full max-w-[360px] md:h-full md:max-w-none"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-accent-green/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-accent-green/10 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink-900/10 bg-card shadow-[0_40px_90px_-40px_rgba(24,24,15,0.35)] md:aspect-auto md:h-full md:min-h-[520px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ian-portrait.jpg"
                alt={`${profile.firstName} ${profile.lastName}`}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA buttons (left) + socials (right) on the same level */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3.9}
          className="mt-16 md:mt-20"
        >
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center lg:gap-16">
            <div className="flex flex-wrap items-center gap-3">
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
            </div>
            <div className="mx-auto flex w-full max-w-[360px] items-center gap-3 md:max-w-none">
              {profile.socials.map((s) => (
                <HeroSocial key={s.label} label={s.label} href={s.href} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Worked-at strip — fills the lower space + adds credibility */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="mt-14 flex flex-col gap-6 border-t border-ink-900/10 pt-8 md:mt-16 md:flex-row md:items-center md:gap-12"
        >
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
            {t("hero.workedAt", locale)}
          </span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
            {[
              { name: "eShip / Segmail", logos: ["/companies/eship.png", "/companies/segmail.png"] },
              { name: "Corporativo Tiendas 3B", logos: ["/companies/tiendas3b.png"] },
              { name: "IBSO", logos: ["/companies/ibso.png"] },
              { name: "Shoplogix", logos: ["/companies/shoplogix.png"] },
            ].map((c) => (
              <div key={c.name} className="group flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {c.logos.map((logo) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={logo}
                      src={logo}
                      alt={c.name}
                      className="h-9 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  ))}
                </div>
                <span className="font-display text-xl text-ink-500 transition-colors duration-300 group-hover:text-ink-900">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
