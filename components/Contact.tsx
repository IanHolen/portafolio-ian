"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { profile } from "@/lib/data";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { locale } = useLocale();
  const [form, setForm] = useState({ name: "", email: "", message: "", _hp: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

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

  function copyEmail() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const contactInfo = [
    { icon: Mail, label: t("contact.infoEmail", locale), value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: t("contact.infoPhone", locale), value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: t("contact.infoLocation", locale), value: profile.location, href: undefined },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:py-48"
    >
      {/* atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-violet/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent-violet">
            {t("contact.kicker", locale)}
          </p>
          <h2 className="font-display text-5xl font-light leading-[0.95] tracking-tight md:text-8xl">
            {t("contact.title1", locale)}
            <br />
            <span className="italic text-gradient">{t("contact.title2", locale)}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-white/60">
            {t("contact.subtitle", locale)}
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-base font-medium text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              {profile.email}
              <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={copyEmail}
              className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-5 text-sm text-white/70 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              aria-label={t("contact.copyEmail", locale)}
            >
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-green-400"
                  >
                    {t("contact.copied", locale)}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
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
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center"
              >
                <p className="font-display text-2xl font-light text-white">{t("contact.formSent", locale)}</p>
                <p className="mt-3 text-white/60">{t("contact.formThanks", locale)}</p>
                <button
                  onClick={resetForm}
                  className="mt-6 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white/70 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
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
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 transition focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
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
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 transition focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
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
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 transition focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                {submitError && (
                  <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-center">
                    <p className="text-sm text-red-400">{submitError}</p>
                    <button
                      type="button"
                      onClick={() => setSubmitError("")}
                      className="mt-2 text-xs text-white/50 underline transition hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet rounded"
                    >
                      {t("contact.formRetry", locale)}
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                >
                  {loading ? t("contact.formSending", locale) : t("contact.formSubmit", locale)}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {contactInfo.map((item, i) => {
            const Tag = item.href ? motion.a : motion.div;
            return (
              <Tag
                key={item.label}
                {...(item.href ? { href: item.href } : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <item.icon className="h-5 w-5 text-accent-violet" />
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-white/60">
                  {item.label}
                </p>
                <p className="mt-2 text-white/90">{item.value}</p>
              </Tag>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} ${t("contact.socialSuffix", locale)}`}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-white/70 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              {s.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
