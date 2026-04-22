"use client";

import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Diseñado y desarrollado
          con cuidado.
        </p>
        <div className="flex items-center gap-4">
          <kbd className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/30">
            ⌘K
          </kbd>
          <p className="font-mono text-xs uppercase tracking-[0.25em]">
            Hecho en {profile.location.split(",")[0]}
          </p>
        </div>
      </div>
    </footer>
  );
}
