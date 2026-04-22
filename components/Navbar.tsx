"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "Sobre mí", id: "about" },
  { href: "#experience", label: "Experiencia", id: "experience" },
  { href: "#work", label: "Trabajo", id: "work" },
  { href: "#contact", label: "Contacto", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "experience", "work", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
            className="font-display text-lg italic tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-full"
          >
            {profile.firstName.toLowerCase()}<span className="text-accent-violet">.</span>{profile.lastName.toLowerCase()}
          </a>
          <nav role="navigation" aria-label="Navegación principal" className="hidden items-center gap-8 text-sm md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
                  activeId === link.id ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent-violet"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            <span className="relative z-10">Trabajemos juntos</span>
            <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-tr from-accent-violet to-accent-blue transition-transform duration-500 group-hover:translate-y-0" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-full text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
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
                className="font-display text-3xl font-light text-white/80 transition hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet"
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
              className="mt-4 rounded-full border border-accent-violet/50 bg-accent-violet/10 px-8 py-3 text-lg font-medium text-accent-violet transition hover:bg-accent-violet/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet"
            >
              Trabajemos juntos
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
