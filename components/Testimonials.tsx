"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < max - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    update();
    return () => el.removeEventListener("scroll", update);
  }, [update]);

  const scroll = useCallback((dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  }, []);

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="04" kicker="Testimonios" title="Lo que dicen de mí." />

        <div className="mb-4 hidden items-center justify-end gap-2 md:flex">
          <button
            onClick={() => scroll(-1)}
            disabled={!canLeft}
            className="rounded-full border border-white/10 p-2 text-white/40 transition hover:border-white/20 hover:text-white disabled:opacity-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canRight}
            className="rounded-full border border-white/10 p-2 text-white/40 transition hover:border-white/20 hover:text-white disabled:opacity-30"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="shrink-0 snap-center rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
              style={{ minWidth: "340px", maxWidth: "420px" }}
            >
              <span className="font-display text-6xl leading-none text-accent-violet/30">&ldquo;</span>
              <p className="-mt-4 text-white/70 leading-relaxed">{t.quote}</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-medium text-white">{t.name}</p>
                <p className="text-sm text-white/50">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
