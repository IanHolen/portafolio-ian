"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { profile } from "@/lib/data";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WA_GREEN = "#25D366";

type Method = "email" | "whatsapp";

export default function Contact() {
  const { locale } = useLocale();
  const [method, setMethod] = useState<Method>("email");
  const [form, setForm] = useState({ name: "", email: "", message: "", _hp: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const [wa, setWa] = useState({ name: "", message: "" });
  const [waErrors, setWaErrors] = useState<Record<string, string>>({});

  function openWhatsapp(ev: FormEvent) {
    ev.preventDefault();
    const e: Record<string, string> = {};
    if (!wa.name.trim()) e.name = t("contact.errName", locale);
    setWaErrors(e);
    if (Object.keys(e).length > 0) return;

    const body = wa.message.trim() || t("contact.waFallback", locale);
    const text = `${t("contact.waGreeting", locale)} ${wa.name.trim()}.\n\n${body}`;
    window.open(
      `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t("contact.errName", locale);
    if (!form.email.trim()) e.email = t("contact.errEmail", locale);
    else if (!emailRegex.test(form.email)) e.email = t("contact.errEmailInvalid", locale);
    if (!form.message.trim()) e.message = t("contact.errMessage", locale);
    return e;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (form._hp) return;
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.status === 503) {
        const subject = encodeURIComponent(`Contacto de ${form.name}`);
        const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
        return;
      }
      if (!res.ok) {
        setSubmitError(data.message || t("contact.errConnection", locale));
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError(t("contact.errConnection", locale));
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setSubmitError("");
    setForm({ name: "", email: "", message: "", _hp: "" });
    setErrors({});
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:py-48"
    >
      {/* atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent-green">
            {t("contact.kicker", locale)}
          </p>
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-7xl">
            {t("contact.title1", locale)}{" "}
            <span className="text-gradient">{t("contact.title2", locale)}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-ink-600">
            {t("contact.subtitle", locale)}
          </p>

          {/* Method switch */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-500">
              {t("contact.methodLabel", locale)}
            </p>
            <div className="inline-flex rounded-full border border-ink-900/10 bg-black/[0.04] p-1">
              {([
                { key: "email" as Method, label: t("contact.methodEmail", locale), Icon: Mail, color: "#1c5b3a" },
                { key: "whatsapp" as Method, label: t("contact.methodWhatsapp", locale), Icon: SiWhatsapp, color: WA_GREEN },
              ]).map((m) => {
                const active = method === m.key;
                return (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setMethod(m.key)}
                    aria-pressed={active}
                    className={`relative inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                      active ? "text-ink-900" : "text-ink-500 hover:text-ink-700"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="contactMethodPill"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                        className="absolute inset-0 -z-10 rounded-full bg-card shadow-sm"
                      />
                    )}
                    <m.Icon className="h-4 w-4" style={{ color: active ? m.color : undefined }} />
                    {m.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-xl"
        >
          <AnimatePresence mode="wait">
            {method === "whatsapp" ? (
              <motion.form
                key="wa"
                onSubmit={openWhatsapp}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div
                  className="flex items-start gap-3 rounded-2xl border p-4 text-left"
                  style={{ borderColor: `${WA_GREEN}40`, backgroundColor: `${WA_GREEN}12` }}
                >
                  <SiWhatsapp className="mt-0.5 h-5 w-5 shrink-0" style={{ color: WA_GREEN }} />
                  <p className="text-sm leading-relaxed text-ink-600">
                    {t("contact.waIntro", locale)}
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={t("contact.waName", locale)}
                    aria-label={t("contact.waName", locale)}
                    value={wa.name}
                    onChange={(e) => setWa({ ...wa, name: e.target.value })}
                    className="w-full rounded-xl border border-ink-900/10 bg-black/[0.03] px-5 py-4 text-ink-900 placeholder:text-ink-400 transition focus:border-accent-green/50 focus:outline-none focus:ring-2 focus:ring-accent-green/20"
                  />
                  {waErrors.name && <p className="mt-1 text-xs text-red-400">{waErrors.name}</p>}
                </div>

                <div>
                  <textarea
                    placeholder={t("contact.waMessage", locale)}
                    aria-label={t("contact.waMessage", locale)}
                    rows={4}
                    value={wa.message}
                    onChange={(e) => setWa({ ...wa, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-ink-900/10 bg-black/[0.03] px-5 py-4 text-ink-900 placeholder:text-ink-400 transition focus:border-accent-green/50 focus:outline-none focus:ring-2 focus:ring-accent-green/20"
                  />
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: WA_GREEN }}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-sm font-medium text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  {t("contact.waSubmit", locale)}
                </button>
              </motion.form>
            ) : submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                className="rounded-2xl border border-ink-900/10 bg-card p-10 text-center"
              >
                <p className="font-display text-2xl font-light text-ink-900">{t("contact.formSent", locale)}</p>
                <p className="mt-3 text-ink-600">{t("contact.formThanks", locale)}</p>
                <button
                  onClick={resetForm}
                  className="mt-6 rounded-full border border-ink-900/10 bg-black/[0.04] px-6 py-2 text-sm text-ink-700 transition hover:bg-black/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  {t("contact.formAnother", locale)}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Honeypot — hidden from humans */}
                <input
                  type="text"
                  name="_hp"
                  value={form._hp}
                  onChange={(e) => setForm({ ...form, _hp: e.target.value })}
                  className="absolute -left-[9999px] opacity-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <input
                    type="text"
                    placeholder={t("contact.formName", locale)}
                    aria-label={t("contact.formName", locale)}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-ink-900/10 bg-black/[0.03] px-5 py-4 text-ink-900 placeholder:text-ink-400 transition focus:border-accent-green/50 focus:outline-none focus:ring-2 focus:ring-accent-green/20"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={t("contact.formEmail", locale)}
                    aria-label={t("contact.formEmail", locale)}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-ink-900/10 bg-black/[0.03] px-5 py-4 text-ink-900 placeholder:text-ink-400 transition focus:border-accent-green/50 focus:outline-none focus:ring-2 focus:ring-accent-green/20"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <textarea
                    placeholder={t("contact.formMessage", locale)}
                    aria-label={t("contact.formMessage", locale)}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-ink-900/10 bg-black/[0.03] px-5 py-4 text-ink-900 placeholder:text-ink-400 transition focus:border-accent-green/50 focus:outline-none focus:ring-2 focus:ring-accent-green/20"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                {submitError && (
                  <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-center">
                    <p className="text-sm text-red-400">{submitError}</p>
                    <button
                      type="button"
                      onClick={() => setSubmitError("")}
                      className="mt-2 text-xs text-ink-500 underline transition hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green rounded"
                    >
                      {t("contact.formRetry", locale)}
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-ink-900 px-6 py-4 text-sm font-medium text-paper transition hover:bg-ink-900/90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  {!loading && <Mail className="h-4 w-4" />}
                  {loading ? t("contact.formSending", locale) : t("contact.formSubmit", locale)}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
