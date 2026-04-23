"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Briefcase, Code, FolderGit2, GraduationCap, Mail, Copy, ExternalLink } from "lucide-react";
import { profile, projects } from "@/lib/data";

interface Item {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  hint?: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = [
    { id: "home", label: "Inicio", icon: <Home className="h-4 w-4" />, action: () => navigate("#top") },
    { id: "about", label: "Sobre mí", icon: <User className="h-4 w-4" />, action: () => navigate("#about") },
    { id: "experience", label: "Experiencia", icon: <Briefcase className="h-4 w-4" />, action: () => navigate("#experience") },
    { id: "projects", label: "Proyectos", icon: <Code className="h-4 w-4" />, action: () => navigate("#work") },
    { id: "skills", label: "Skills", icon: <Code className="h-4 w-4" />, action: () => navigate("#skills") },
    { id: "github", label: "GitHub", icon: <FolderGit2 className="h-4 w-4" />, action: () => navigate("#github") },
    { id: "education", label: "Educación", icon: <GraduationCap className="h-4 w-4" />, action: () => navigate("#education") },
    { id: "contact", label: "Contacto", icon: <Mail className="h-4 w-4" />, action: () => navigate("#contact") },
    ...projects.map((p) => ({
      id: `project-${p.title}`,
      label: p.title,
      icon: <Code className="h-4 w-4" />,
      action: () => navigate("#work"),
      hint: "Proyecto",
    })),
    { id: "copy-email", label: "Copiar email", icon: <Copy className="h-4 w-4" />, action: () => { navigator.clipboard.writeText(profile.email); close(); }, hint: "Acción" },
    { id: "github-link", label: "Ver GitHub", icon: <ExternalLink className="h-4 w-4" />, action: () => { window.open("https://github.com/IanHolen", "_blank"); close(); }, hint: "Acción" },
    // CV download — hidden until Ian uploads his real PDF to /public
  ];

  function navigate(hash: string) {
    close();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function close() {
    setOpen(false);
    setQuery("");
    setActive(0);
  }

  const filtered = query
    ? items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
    : items;

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((prev) => Math.min(prev + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === "Enter" && filtered[active]) {
        e.preventDefault();
        filtered[active].action();
      }
    },
    [open, filtered, active]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (open) {
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            role="dialog"
            aria-modal="true"
            aria-label="Paleta de comandos"
            className="fixed left-1/2 top-[20vh] z-[81] w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-ink-950/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="h-4 w-4 text-white/40" />
              <input
                ref={inputRef}
                type="text"
                aria-label="Buscar"
                placeholder="Buscar secciones, proyectos, acciones..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/30">ESC</kbd>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-white/40">Sin resultados</p>
              )}
              {filtered.map((item, i) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet ${
                    i === active ? "bg-accent-violet/10 text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className={i === active ? "text-accent-violet" : "text-white/40"}>{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  {item.hint && <span className="text-[10px] text-white/30">{item.hint}</span>}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
