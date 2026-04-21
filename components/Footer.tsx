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
        <p className="font-mono text-xs uppercase tracking-[0.25em]">
          Hecho en {profile.location.split(",")[0]}
        </p>
      </div>
    </footer>
  );
}
