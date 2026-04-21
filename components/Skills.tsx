"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const row = [...skills.core, ...skills.core]; // duplicate for seamless marquee

  return (
    <section id="skills" className="relative overflow-hidden border-y border-white/10 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap"
      >
        {row.map((skill, i) => (
          <span
            key={skill + i}
            className="font-display text-4xl font-light italic text-white/30 md:text-6xl"
          >
            {skill}
            <span className="ml-12 text-accent-violet">★</span>
          </span>
        ))}
      </motion.div>

      <div className="mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {skills.groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="border-glow rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-accent-violet">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {skills.interests.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
