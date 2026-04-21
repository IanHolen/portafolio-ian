"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#work", label: "Trabajo" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-6 pt-5"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/50 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="font-display text-lg italic tracking-tight text-white"
        >
          tu<span className="text-accent-violet">.</span>nombre
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          <span className="relative z-10">Trabajemos juntos</span>
          <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-tr from-accent-violet to-accent-blue transition-transform duration-500 group-hover:translate-y-0" />
        </a>
      </div>
    </motion.header>
  );
}
