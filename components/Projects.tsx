"use client";

import { useRef, useState, useCallback, useEffect, MouseEvent, PointerEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { useLocale } from "./I18nProvider";
import { t, tArray } from "@/lib/translations";

interface ProjectTranslation {
  title: string;
  blurb: string;
  metric: string;
}

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
        className="pointer-events-none absolute inset-0 z-20 rounded-3xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
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
  const { locale } = useLocale();
  const projectTexts = tArray<ProjectTranslation>("projects.items", locale);

  // Duplicate the list so the auto-scroll loops seamlessly.
  const loop = [...projects, ...projects];

  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false); // paused while hovered / dragging
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  // Auto-scroll: gently advances on its own, but stops whenever the user is
  // interacting (hover or drag), so they can move it and read everything.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const speed = 0.9; // px per frame (~54px/s)
    const step = () => {
      if (el && !pausedRef.current) {
        const half = el.scrollWidth / 2;
        let next = el.scrollLeft + speed;
        if (half > 0 && next >= half) next -= half;
        el.scrollLeft = next;
      }
      raf = requestAnimationFrame(step);
    };
    if (!reduce) raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Keep the manual scroll position within the first copy for a seamless loop.
  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    if (half <= 0) return;
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    else if (el.scrollLeft < 0) el.scrollLeft += half;
  }, []);

  const pause = () => (pausedRef.current = true);
  const resume = () => {
    pausedRef.current = false;
    drag.current.down = false;
  };

  // Drag-to-scroll (grab and pull), works for mouse and touch.
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    pausedRef.current = true;
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.down) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };
  // If the pointer moved (a real drag), swallow the click so cards don't navigate.
  const onClickCapture = (e: MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section id="work" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[140px]" />
      <div className="mx-auto mb-12 max-w-6xl">
        <SectionHeader
          index="04"
          kicker={t("projects.kicker", locale)}
          title={t("projects.title", locale)}
        />
      </div>

      {/* Mobile: stacked vertical list */}
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:hidden">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
          >
            <ProjectCard p={p} pt={projectTexts[i]} />
          </motion.div>
        ))}
      </div>

      {/* Desktop: auto-scrolls, pauses on hover, and you can drag/scroll it */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative hidden md:block"
      >
        {/* Edge fades into the paper background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />

        <div
          ref={scrollRef}
          onScroll={onScroll}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          className="projects-marquee-wrap no-scrollbar cursor-grab overflow-x-auto active:cursor-grabbing"
        >
          <div className="flex w-max items-stretch py-2">
            {loop.map((p, i) => (
              <div
                key={`${p.title}-${i}`}
                aria-hidden={i >= projects.length}
                className="mr-6 w-[500px] shrink-0 select-none"
              >
                <ProjectCard p={p} pt={projectTexts[i % projects.length]} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ p, pt }: { p: (typeof projects)[number]; pt: ProjectTranslation }) {
  return (
    <TiltCard
      href={p.href}
      className="group/card relative block h-full overflow-hidden rounded-3xl border border-ink-900/10 bg-card p-8 transition-all duration-500 hover:border-ink-900/15 md:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <div
        className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-700 group-hover/card:opacity-100`}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-black/[0.04] opacity-0 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-10 flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink-400">
            {p.company} · {p.year}
          </span>
          {p.href && (
            <ArrowUpRight className="h-5 w-5 text-ink-400 transition group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-ink-900" />
          )}
        </div>

        {pt.metric && (
          <div className="mb-4 inline-block rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-1.5 font-mono text-sm font-medium text-accent-green">
            {pt.metric}
          </div>
        )}
        <h3 className="font-display text-3xl font-light leading-tight tracking-tight text-ink-900 md:text-4xl">
          {pt.title}
        </h3>
        <p className="mt-4 max-w-md text-ink-600">{pt.blurb}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink-900/10 bg-black/[0.03] px-3 py-1 text-xs text-ink-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
