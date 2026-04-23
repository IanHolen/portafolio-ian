"use client";

import { useLocale } from "./I18nProvider";

export default function LangToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white/60 transition hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
