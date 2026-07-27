"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

/** Mobile-only affordance telling the user a section scrolls sideways. */
export default function SwipeHint({ className = "" }: { className?: string }) {
  const { locale } = useLocale();

  return (
    <div className={`flex justify-center md:hidden ${className}`}>
      <motion.span
        animate={{ y: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-green shadow-[0_6px_18px_-10px_rgba(28,91,58,0.6)]"
      >
        {t("common.swipeHint", locale)}
        <span aria-hidden className="relative inline-flex h-4 w-6 items-center">
          {[0, 1].map((i) => (
            <motion.span
              key={i}
              animate={{ x: [0, 5, 0], opacity: [0.35, 1, 0.35] }}
              transition={{
                repeat: Infinity,
                duration: 1.3,
                ease: "easeInOut",
                delay: i * 0.18,
              }}
              className="absolute inline-flex"
              style={{ left: i * 8 }}
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </motion.span>
          ))}
        </span>
      </motion.span>
    </div>
  );
}
