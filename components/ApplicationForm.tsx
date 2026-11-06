"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import Link from "next/link";
import { getCircular } from "../lib/circular";
import { DeadlineModal } from "./CircularInfo";
import type { Job } from "../lib/jobs";

// Change this URL to any image you like (shown at the top of the left panel)
const ASIDE_BG_URL =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=70";

const countries = [
  "Bangladesh",
  "India",
  "Pakistan",
  "Nepal",
  "Sri Lanka",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Other",
];

const availabilityOptions = [
  "Immediately",
  "Within 15 days",
  "Within 1 month",
  "More than 1 month",
];

const nextSteps = [
  { t: "Application", d: "You send your details and CV." },
  { t: "Review", d: "Our team reviews your profile." },
  { t: "Interview", d: "A short call, then a skills discussion." },
  { t: "Offer", d: "We share the decision with you." },
];

type Values = {
  name: string;
  email: string;
  phone: string;
  country: string;
  portfolio: string;
  linkedin: string;
  salary: string;
  availability: string;
  coverNote: string;
  consent: boolean;
};

type Errors = Record<string, string | undefined>;

const emptyValues: Values = {
  name: "",
  email: "",
  phone: "",
  country: "Bangladesh",
  portfolio: "",
  linkedin: "",
  salary: "",
  availability: "",
  coverNote: "",
  consent: false,
};

const MAX_FILE_MB = 5;
const stepLabels = ["Your details", "Resume & more"];

function isUrl(value: string) {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function inputClass(hasError: boolean) {
  return (
    "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#061a40] outline-none transition duration-200 placeholder:text-slate-400 hover:shadow-sm focus:ring-4 " +
    (hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "border-slate-300 hover:border-[#e85d04]/60 focus:border-[#e85d04] focus:ring-[#e85d04]/20")
  );
}

function Field({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#061a40]">
        <span>
          {label}
          {required && <span className="ml-1 text-[#e85d04]">*</span>}
        </span>
        {children}
      </label>
      {hint && !error && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ApplicationForm({ job }: { job: Job }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [values, setValues] = useState<Values>(emptyValues);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [deadlineModal, setDeadlineModal] = useState(false);

  const isGeneral = job.slug === "general";
  const backHref = isGeneral ? "/careers" : "/careers/" + job.slug;

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onResumeChange(e: ChangeEvent<HTMLInputElement>) {
    setResume(e.target.files?.[0] ?? null);
    setErrors((er) => ({ ...er, resume: undefined }));
  }

  function validateStep1() {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!values.country) e.country = "Please select your country.";
    if (!isGeneral && !values.portfolio.trim())
      e.portfolio = "Please add a link to your portfolio.";
    else if (values.portfolio.trim() && !isUrl(values.portfolio.trim()))
      e.portfolio = "Enter a valid link starting with https://";
    if (values.linkedin.trim() && !isUrl(values.linkedin.trim()))
      e.linkedin = "Enter a valid link starting with https://";
    return e;
  }

  function validateStep2() {
    const e: Errors = {};
    if (!resume) e.resume = "Please upload your resume.";
    else if (!/\.(pdf|doc|docx)$/i.test(resume.name))
      e.resume = "Only PDF, DOC or DOCX files are accepted.";
    else if (resume.size > MAX_FILE_MB * 1024 * 1024)
      e.resume = "File is too large. Maximum size is 5 MB.";
    if (!values.consent) e.consent = "Please accept this to continue.";
    return e;
  }

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    if (step === 1) {
      const e = validateStep1();
      setErrors(e);
      if (Object.keys(e).length === 0) {
        setStep(2);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (step === 2) {
      const e = validateStep2();
      setErrors(e);
      if (Object.keys(e).length > 0) return;

      if (getCircular(job, new Date())?.state === "closed") {
        setDeadlineModal(true);
        return;
      }

      setSubmitting(true);
      // TODO: send "values" and "resume" to your backend / API route here
      await new Promise((r) => setTimeout(r, 900));
      setSubmitting(false);
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (step === 3) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl bg-white/95 p-8 text-center shadow-2xl ring-1 ring-white/20 backdrop-blur sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e85d04] text-3xl text-white shadow-[0_0_0_8px_rgba(232,93,4,0.15)]">
          {"\u2713"}
        </div>
        <h1 className="mt-6 font-serif text-3xl font-bold text-[#061a40]">
          Application received
        </h1>
        <p className="mt-3 leading-7 text-slate-500">
          Thank you, {values.name.trim().split(" ")[0]}. We have received your
          application for{" "}
          <strong className="text-[#061a40]">{job.title}</strong>. Our team will
          review your profile and get back to you at {values.email}.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/careers"
            className="rounded-full bg-[#e85d04] px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-lg"
          >
            Browse more roles
          </Link>
          <Link
            href="/"
            className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-[#061a40] transition duration-300 hover:-translate-y-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const summary = [
    { label: "Level", value: job.level },
    { label: "Work mode", value: job.mode },
    { label: "Job type", value: job.type },
    { label: "Location", value: job.location },
    { label: "Compensation", value: job.compensation },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <DeadlineModal open={deadlineModal} onClose={() => setDeadlineModal(false)} job={job} />
      <nav
        aria-label="Breadcrumb"
        className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-300"
      >
        <Link href="/careers" className="transition hover:text-white">
          Careers
        </Link>
        <span>/</span>
        {!isGeneral && (
          <>
            <Link href={backHref} className="transition hover:text-white">
              {job.title}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="font-semibold text-[#e85d04]">Application</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        {/* Left info panel */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur transition duration-300 hover:border-[#e85d04]/40">
            <div className="relative h-40 overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-110"
                style={{ backgroundImage: "url('" + ASIDE_BG_URL + "')" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#061a40] via-[#061a40]/50 to-transparent"
              />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                  {job.department.toUpperCase()}
                </p>
                <h1 className="mt-1 font-serif text-2xl font-bold text-white">
                  {job.title}
                </h1>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-2 p-5">
              {summary.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#e85d04]/50 hover:bg-white/10"
                >
                  <dt className="text-[9px] tracking-widest text-slate-300">
                    {s.label.toUpperCase()}
                  </dt>
                  <dd className="mt-1 text-xs font-semibold text-white">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="hidden border-t border-white/10 p-5 lg:block">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#e85d04]">
                WHAT HAPPENS NEXT
              </p>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((s, i) => (
                  <li key={s.t} className="group flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e85d04]/20 text-[10px] font-bold text-[#e85d04] transition duration-300 group-hover:bg-[#e85d04] group-hover:text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">{s.t}</p>
                      <p className="text-[11px] text-slate-300">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </aside>

        {/* Form card */}
        <div className="overflow-hidden rounded-3xl bg-white/95 shadow-2xl ring-1 ring-white/20 backdrop-blur">
          <div className="h-1.5 bg-gradient-to-r from-[#e85d04] via-[#ff7a1f] to-[#0b2a63]" />
          <div className="p-6 sm:p-8">
            {/* Stepper */}
            <ol className="mb-8 flex items-center gap-3">
              {stepLabels.map((label, i) => {
                const n = i + 1;
                const done = step > n;
                const current = step === n;
                return (
                  <li
                    key={label}
                    className="flex flex-1 items-center gap-3 last:flex-none"
                  >
                    <span
                      className={
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition " +
                        (done || current
                          ? "bg-[#e85d04] text-white shadow-[0_0_0_5px_rgba(232,93,4,0.15)]"
                          : "bg-slate-200 text-slate-500")
                      }
                    >
                      {done ? "\u2713" : n}
                    </span>
                    <span
                      className={
                        "text-sm font-semibold " +
                        (current ? "text-[#061a40]" : "text-slate-400")
                      }
                    >
                      {label}
                    </span>
                    {i < stepLabels.length - 1 && (
                      <span
                        className={
                          "h-px flex-1 " + (done ? "bg-[#e85d04]" : "bg-slate-200")
                        }
                      />
                    )}
                  </li>
                );
              })}
            </ol>

            <form noValidate onSubmit={handleSubmit} className="grid gap-5">
              {step === 1 && (
                <>
                  <h2 className="font-serif text-xl font-bold text-[#061a40]">
                    Your details
                  </h2>

                  <Field label="Full name" required error={errors.name}>
                    <input
                      type="text"
                      value={values.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your full name"
                      autoComplete="name"
                      className={inputClass(!!errors.name)}
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" required error={errors.email}>
                      <input
                        type="email"
                        value={values.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                    <Field label="Phone" error={errors.phone}>
                      <input
                        type="tel"
                        value={values.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+880 1XXX XXXXXX"
                        autoComplete="tel"
                        className={inputClass(!!errors.phone)}
                      />
                    </Field>
                  </div>

                  <Field label="Country" required error={errors.country}>
                    <select
                      value={values.country}
                      onChange={(e) => update("country", e.target.value)}
                      className={inputClass(!!errors.country)}
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Portfolio"
                    required={!isGeneral}
                    error={errors.portfolio}
                    hint="Link to your website, GitHub, Behance or similar."
                  >
                    <input
                      type="url"
                      value={values.portfolio}
                      onChange={(e) => update("portfolio", e.target.value)}
                      placeholder="https://your-portfolio.com"
                      className={inputClass(!!errors.portfolio)}
                    />
                  </Field>

                  <Field label="LinkedIn" error={errors.linkedin}>
                    <input
                      type="url"
                      value={values.linkedin}
                      onChange={(e) => update("linkedin", e.target.value)}
                      placeholder="https://linkedin.com/in/your-name"
                      className={inputClass(!!errors.linkedin)}
                    />
                  </Field>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="font-serif text-xl font-bold text-[#061a40]">
                    Resume &amp; more
                  </h2>

                  <Field
                    label="Resume / CV"
                    required
                    error={errors.resume}
                    hint="PDF, DOC or DOCX, up to 5 MB."
                  >
                    <div
                      className={
                        "group relative mt-2 flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-8 text-center transition duration-300 hover:-translate-y-0.5 hover:border-[#e85d04] hover:bg-[#e85d04]/5 " +
                        (errors.resume
                          ? "border-red-500 bg-red-50"
                          : resume
                            ? "border-[#e85d04] bg-[#e85d04]/5"
                            : "border-slate-300 bg-[#f6f8fd]")
                      }
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e85d04]/10 text-xl text-[#e85d04] transition duration-300 group-hover:bg-[#e85d04] group-hover:text-white">
                        {resume ? "\u2713" : "\u2191"}
                      </span>
                      <span className="mt-3 text-sm font-semibold text-[#061a40]">
                        {resume ? resume.name : "Click to upload or drag your CV here"}
                      </span>
                      <span className="mt-1 text-xs font-normal text-slate-500">
                        {resume
                          ? (resume.size / 1024 / 1024).toFixed(2) + " MB \u00b7 click to replace"
                          : "PDF, DOC or DOCX"}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={onResumeChange}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                      />
                    </div>
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Expected salary (BDT / month)">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={values.salary}
                        onChange={(e) => update("salary", e.target.value)}
                        placeholder="e.g. 40000"
                        className={inputClass(false)}
                      />
                    </Field>
                    <Field label="Available to start">
                      <select
                        value={values.availability}
                        onChange={(e) => update("availability", e.target.value)}
                        className={inputClass(false)}
                      >
                        <option value="">Select</option>
                        {availabilityOptions.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Cover note">
                    <textarea
                      rows={5}
                      value={values.coverNote}
                      onChange={(e) => update("coverNote", e.target.value)}
                      placeholder="Tell us about your experience and why you want to join Black Origin."
                      className={inputClass(false)}
                    />
                  </Field>

                  <div>
                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3 text-sm text-slate-600 transition duration-200 hover:border-[#e85d04]/60 hover:bg-[#f6f8fd]">
                      <input
                        type="checkbox"
                        checked={values.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        className="mt-1 h-4 w-4 accent-[#e85d04]"
                      />
                      <span>
                        I agree that Black Origin may store and process my
                        information for recruitment purposes.
                      </span>
                    </label>
                    {errors.consent && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-600"
                      >
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Actions */}
              <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-6">
                {step === 1 ? (
                  <Link
                    href={backHref}
                    className="text-sm font-semibold text-slate-500 transition hover:text-[#061a40]"
                  >
                    Cancel
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setErrors({});
                    }}
                    className="text-sm font-semibold text-slate-500 transition hover:text-[#061a40]"
                  >
                    {"\u2190"} Back
                  </button>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-[#e85d04] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff7a1f] hover:shadow-[0_10px_30px_rgba(232,93,4,0.4)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {step === 1
                    ? "Continue"
                    : submitting
                      ? "Submitting..."
                      : "Submit application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-slate-400">
        Your information is only used for recruitment purposes.
      </p>
    </div>
  );
}

