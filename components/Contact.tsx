"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:py-48"
    >
      {/* atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent-violet">
            06 — Contacto
          </p>
          <h2 className="font-display text-5xl font-light leading-[0.95] tracking-tight md:text-8xl">
            Hagamos algo
            <br />
            <span className="italic text-gradient">extraordinario.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-white/60">
            Si estás construyendo algo en datos, cloud o necesitas un partner técnico, escríbeme.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-base font-medium text-black transition hover:bg-white/90"
          >
            {profile.email}
            <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            { icon: Phone, label: "Teléfono", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
            { icon: MapPin, label: "Ubicación", value: profile.location },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <item.icon className="h-5 w-5 text-accent-violet" />
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                {item.label}
              </p>
              <p className="mt-2 text-white/90">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
            >
              {s.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
