"use client";

import { useRef, useState, useCallback, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";

function TiltCard({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
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

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transform, transition }}
    >
      {/* shine/glare overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
        }}
      />
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-rose-500/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          kicker="Trabajo seleccionado"
          title="Proyectos recientes."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <TiltCard
                href={p.href ?? "#"}
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-8 transition-all duration-500 hover:border-white/20 md:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                {/* gradient backdrop */}
                <div
                  className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />
                {/* moving conic for hover */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-white/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-10 flex items-start justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                      {p.year}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
