"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../lib/images";

/**
 * RegistrationForm — reusable for Course + Alumni (and Contact).
 *
 * Props:
 *   formType:    "course" | "alumni" | "contact"
 *   courses?:    string[]   — list of courses to populate the dropdown
 *   accent?:     string     — tailwind gradient class for the button
 *   title?:      string
 *   subtitle?:   string
 */
export default function RegistrationForm({
  formType = "course",
  courses = [],
  accent = "from-maroon-600 to-saffron-500",
  title = "Register for a Course",
  subtitle = "Tell us a little about yourself and we'll reach out on WhatsApp with the details.",
}) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ kind: "idle", message: "" });

  const [form, setForm] = useState({
    fullName: "",
    whatsapp: "",
    phone: "",
    email: "",
    university: "",
    graduationYear: "",
    course: "",
    message: "",
    formType,
  });

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const errors = [];
    if (!form.fullName.trim()) errors.push("Full name is required");
    if (!/^[0-9+\-\s()]{8,}$/.test(form.whatsapp.trim())) errors.push("Valid WhatsApp number is required");
    if (!/^[0-9+\-\s()]{8,}$/.test(form.phone.trim())) errors.push("Valid phone number is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.push("Valid email is required");
    if (!form.university.trim()) errors.push("University / College is required");
    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length) {
      setStatus({ kind: "error", message: errors[0] });
      return;
    }

    setSubmitting(true);
    setStatus({ kind: "idle", message: "" });

    // Apps Script Web App endpoint configured via NEXT_PUBLIC_FORMS_ENDPOINT
    // If not configured, fall back to a mailto: link so submissions are never lost.
    const endpoint = process.env.NEXT_PUBLIC_FORMS_ENDPOINT;

    const payload = {
      ...form,
      formType,
      submittedAt: new Date().toISOString(),
    };

    try {
      if (endpoint) {
        // Use no-cors so we don't get blocked; sheet + email notification are handled server-side.
        await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
        setStatus({ kind: "success", message: "Thank you! We've recorded your details — the team will reach you on WhatsApp very soon." });
      } else {
        // Fallback: open user's mail client with a prefilled message — never lose a registration.
        const subject = encodeURIComponent(
          formType === "alumni"
            ? "Alumni Registration"
            : formType === "contact"
              ? "General Inquiry"
              : "Course Registration"
        );
        const body = encodeURIComponent(
          Object.entries(payload)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n")
        );
        window.location.href = `mailto:contact@bhaktisiddhantavoice.org?subject=${subject}&body=${body}`;
        setStatus({ kind: "success", message: "Opening your email app to send your registration — please hit send!" });
      }
      setForm({
        fullName: "",
        whatsapp: "",
        phone: "",
        email: "",
        university: "",
        graduationYear: "",
        course: "",
        message: "",
        formType,
      });
    } catch (err) {
      setStatus({ kind: "error", message: "Something went wrong. Please try WhatsApp instead." });
    } finally {
      setSubmitting(false);
    }
  };

  const Field = ({ label, htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-maroon-700/90 font-medium">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );

  const inputCls =
    "w-full rounded-xl border border-maroon-200/60 bg-cream-50 px-4 py-2.5 text-royal-950 placeholder:text-royal-900/40 outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/60 transition shadow-sm";

  return (
    <div className="rounded-[2rem] bg-cream-50 ring-1 ring-gold-400/20 shadow-soft p-4 md:p-6 lg:p-8">
      <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-5 md:gap-6">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-royal-950">
          <Image
            src={IMAGES.formSubmission}
            alt="Bhaktisiddhanta Voice devotional artwork"
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950/85 via-royal-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-cream-50">
            <div className="text-[0.62rem] uppercase tracking-[0.24em] text-gold-300">Join the sanga</div>
            <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight">Let the path become personal.</h3>
          </div>
        </div>

        <div className="p-2 md:p-3">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-display text-3xl md:text-4xl text-royal-950">{title}</h3>
            <p className="mt-2 text-royal-900/75">{subtitle}</p>
            <div className="ornament-rule mt-5 mx-auto max-w-xs" />
          </div>

          <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
            <input type="hidden" name="formType" value={formType} />

            <Field label="Full Name *">
              <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={update} className={inputCls} placeholder="e.g. Arjun Das" />
            </Field>

            <Field label="WhatsApp Number *">
              <input id="whatsapp" name="whatsapp" type="tel" required value={form.whatsapp} onChange={update} className={inputCls} placeholder="+880 1XXX-XXXXXX" />
            </Field>

            <Field label="Phone Number *">
              <input id="phone" name="phone" type="tel" required value={form.phone} onChange={update} className={inputCls} placeholder="+880 1XXX-XXXXXX" />
            </Field>

            <Field label="Email *">
              <input id="email" name="email" type="email" required value={form.email} onChange={update} className={inputCls} placeholder="you@example.com" />
            </Field>

            <Field label="University / College *">
              <input id="university" name="university" type="text" required value={form.university} onChange={update} className={inputCls} placeholder="e.g. Sylhet Agricultural University" />
            </Field>

            {formType === "course" && (
              <Field label="Course / Program interested in">
                {courses.length ? (
                  <select id="course" name="course" value={form.course} onChange={update} className={inputCls}>
                    <option value="">Select a course…</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                ) : (
                  <input id="course" name="course" type="text" value={form.course} onChange={update} className={inputCls} placeholder="e.g. Bhagavad-gita Study Circle" />
                )}
              </Field>
            )}

            {formType === "alumni" && (
              <Field label="Graduation Year / Batch">
                <input id="graduationYear" name="graduationYear" type="text" value={form.graduationYear} onChange={update} className={inputCls} placeholder="e.g. Class of 2015" />
              </Field>
            )}

            {formType === "contact" && (
              <Field label="How can we help?">
                <textarea id="message" name="message" rows={4} value={form.message} onChange={update} className={inputCls} placeholder="Share your message…" />
              </Field>
            )}

            <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-royal-900/60">
                Submissions are recorded and the team is notified instantly.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${accent} px-6 py-3 text-sm font-semibold text-cream-50 shadow-glow hover:shadow-soft hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {submitting && (
                  <span className="h-4 w-4 rounded-full border-2 border-cream-50/30 border-t-cream-50 animate-spin" />
                )}
                {submitting ? "Sending…" : formType === "alumni" ? "Reconnect" : formType === "contact" ? "Send message" : "Register"}
              </button>
            </div>
          </form>

          <AnimatePresence>
            {status.kind !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`mt-6 rounded-2xl px-5 py-4 text-sm ${
                  status.kind === "success"
                    ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                    : "bg-rose-50 text-rose-800 ring-1 ring-rose-200"
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
