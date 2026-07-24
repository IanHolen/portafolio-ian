"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiMongodb,
  SiGraphql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiUnity,
  SiDocker,
  SiVercel,
  SiGit,
  SiSupabase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type Tech = { name: string; Icon: IconType; color: string };

// Order roughly by relevance to the stack shown across the portfolio.
const STACK: Tech[] = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#E0B400" },
  { name: "React", Icon: SiReact, color: "#149ECA" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#18180f" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "AWS", Icon: FaAws, color: "#E8890C" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", Icon: SiVercel, color: "#18180f" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Unity", Icon: SiUnity, color: "#18180f" },
];

const DEFAULT_INK = "#46433a";

function TechTile({ tech, i }: { tech: Tech; i: number }) {
  const [hover, setHover] = useState(false);
  const { name, Icon, color } = tech;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(i * 0.035, 0.6), ease: [0.2, 0.8, 0.2, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group flex flex-col items-center gap-2.5 rounded-2xl border border-ink-900/10 bg-card px-3 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink-900/20 hover:shadow-[0_10px_30px_-8px_rgba(24,24,15,0.12)]"
    >
      <Icon
        aria-hidden
        className="h-8 w-8 transition-colors duration-300"
        style={{ color: hover ? color : DEFAULT_INK }}
      />
      <span className="text-[11px] font-medium text-ink-500 transition-colors duration-300 group-hover:text-ink-900">
        {name}
      </span>
    </motion.div>
  );
}

export default function TechStack({ label }: { label: string }) {
  return (
    <div className="mb-14">
      <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-400">
        {label}
      </h3>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
        {STACK.map((tech, i) => (
          <TechTile key={tech.name} tech={tech} i={i} />
        ))}
      </div>
    </div>
  );
}
