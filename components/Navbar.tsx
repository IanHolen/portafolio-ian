"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#work", label: "Trabajo" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
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
            {profile.firstName.toLowerCase()}<span className="text-accent-violet">.</span>{profile.lastName.toLowerCase()}
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
            className="hidden group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:inline-flex"
          >
            <span className="relative z-10">Trabajemos juntos</span>
            <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-tr from-accent-violet to-accent-blue transition-transform duration-500 group-hover:translate-y-0" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center text-white md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink-950/95 backdrop-blur-lg"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                className="font-display text-3xl font-light text-white/80 transition hover:text-white"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + links.length * 0.06 }}
              className="mt-4 rounded-full border border-accent-violet/50 bg-accent-violet/10 px-8 py-3 text-lg font-medium text-accent-violet transition hover:bg-accent-violet/20"
            >
              Trabajemos juntos
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
