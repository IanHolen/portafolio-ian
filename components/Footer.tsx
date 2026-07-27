"use client";

import { profile } from "@/lib/data";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="border-t border-ink-900/10 px-6 pb-24 pt-10 md:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-400 md:flex-row">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-800">
          {t("footer.label", locale)}
        </p>
        <p className="text-center md:text-right">
          © {new Date().getFullYear()} {profile.navName}
        </p>
      </div>
    </footer>
  );
}
