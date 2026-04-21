"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
    >
      {/* glowing orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full bg-accent-violet/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[360px] w-[360px] rounded-full bg-accent-blue/20 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60"
        >
          <Sparkles className="h-3 w-3 text-accent-violet" />
          Disponible para nuevos proyectos
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="font-display text-[clamp(3rem,9vw,8rem)] font-light leading-[0.95] tracking-tight"
        >
          <span className="block text-white/90">{profile.firstName}</span>
          <span className="block italic text-gradient">{profile.lastName}</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          {profile.tagline}{" "}
          <span className="text-white/90">{profile.title}</span> basado en{" "}
          {profile.location}.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group relative overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Ver mi trabajo
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 px-7 py-4 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            Contáctame
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 md:flex"
        >
          <span>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
