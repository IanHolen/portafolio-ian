"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const row = [...skills.core, ...skills.core]; // duplicate for seamless marquee

  return (
    <section className="relative overflow-hidden border-y border-white/10 py-20">
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
        <div className="flex flex-wrap gap-3">
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
