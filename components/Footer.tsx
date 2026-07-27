"use client";

import { profile } from "@/lib/data";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="border-t border-ink-900/10 px-6 pb-24 pt-10 md:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-400 md:flex-row">
        <p className="flex flex-col items-center gap-0.5 text-center md:flex-row md:gap-1.5 md:text-left">
          <span>© {new Date().getFullYear()} {profile.navName}.</span>
          <span className="text-ink-800">{t("footer.tagline", locale)}</span>
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400 sm:text-[11px]">
          {t("footer.stack", locale)}
        </p>
      </div>
    </footer>
  );
}
