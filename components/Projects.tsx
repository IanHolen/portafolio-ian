"use client";

import { useRef, useState, useCallback, useEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";

function TiltCard({ children, className, href }: { children: React.ReactNode; className?: string; href?: string }) {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const ref = useRef<any>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");
  const [transition, setTransition] = useState("transform 0.4s ease-out");
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const onMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`);
    setTransition("transform 0.1s ease-out");
    setShine({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  }, []);

  const onLeave = useCallback(() => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
    setTransition("transform 0.4s ease-out");
  }, []);

  const inner = (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
        }}
      />
      {children}
    </>
  );

  const props = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className,
    style: { transform, transition },
  };

  if (href) {
    return <a {...props} href={href}>{inner}</a>;
  }
  return <div {...props} className={`${className} cursor-default`}>{inner}</div>;
}

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      setProgress(el.scrollLeft / maxScroll);
    }
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => el.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  const scroll = useCallback((dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 520, behavior: "smooth" });
  }, []);

  return (
    <section id="work" className="relative px-6 py-32">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-rose-500/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          kicker="Trabajo seleccionado"
          title="Proyectos recientes."
        />

        {/* Desktop scroll arrows */}
        <div className="mb-4 hidden items-center justify-end gap-2 md:flex">
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className="rounded-full border border-white/10 p-2 text-white/40 transition hover:border-white/20 hover:text-white disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white/40"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className="rounded-full border border-white/10 p-2 text-white/40 transition hover:border-white/20 hover:text-white disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white/40"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Horizontal scroll container — stacked on mobile, horizontal on md+ */}
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:hidden">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar hidden snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:flex"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="shrink-0 snap-center"
              style={{ minWidth: "500px" }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mx-auto mt-6 hidden h-1 max-w-xs overflow-hidden rounded-full bg-white/10 md:block">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-blue transition-all duration-150"
            style={{ width: `${Math.max(20, progress * 100)}%`, marginLeft: `${progress * (100 - Math.max(20, progress * 100))}%` }}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <TiltCard
      href={p.href}
      className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-8 transition-all duration-500 hover:border-white/20 md:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-white/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-10 flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
            {p.year}
          </span>
          {p.href && (
            <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          )}
        </div>

        {p.metric && (
          <div className="mb-4 inline-block rounded-full border border-accent-violet/30 bg-accent-violet/10 px-4 py-1.5 font-mono text-sm font-medium text-accent-violet">
            {p.metric}
          </div>
        )}
        <h3 className="font-display text-3xl font-light leading-tight tracking-tight text-white md:text-4xl">
          {p.title}
        </h3>
        <p className="mt-4 max-w-md text-white/60">{p.blurb}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
