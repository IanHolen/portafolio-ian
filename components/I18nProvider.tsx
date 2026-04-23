"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Locale } from "@/lib/translations";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "es",
  setLocale: () => {},
});

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  try {
    const saved = localStorage.getItem("locale");
    if (saved === "en" || saved === "es") return saved;
  } catch {}
  return "es";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.documentElement.lang = l;
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale() {
  return useContext(I18nContext);
}
