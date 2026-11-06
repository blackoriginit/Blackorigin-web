"use client";

import { useEffect, useState, type FormEvent } from "react";

const services = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "AI & Machine Learning",
  "AI Automation",
  "SaaS Development",
  "API & Backend Engineering",
  "UI/UX Engineering",
  "Software Maintenance & Support",
];

const timelines = ["ASAP", "1-3 months", "3-6 months", "6+ months", "Not sure yet"];

const field =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

export default function StartProjectModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === "#start-project");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    history.replaceState(null, "", window.location.pathname);
    setOpen(false);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("website")) return; // honeypot: bots fill this
    // TODO: POST to your API route / email service here
    console.log(Object.fromEntries(data));
    setSent(true);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/70 p-4 md:items-center"
      onClick={close}
    >
      <div
        className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-5"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Start a project"
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 text-2xl leading-none text-slate-400 hover:text-slate-900"
        >
          ×
        </button>

        <div className="bg-slate-900 p-8 text-white md:col-span-2">
          <p className="text-lg font-bold">Black Origin IT</p>
          <h2 className="mt-6 text-3xl font-bold leading-tight">Talk to an engineer</h2>
          <p className="mt-4 text-sm leading-6 text-white/80">
            Whether you have a full brief or only a rough idea, send it over.
            Every inquiry goes straight to our team.
          </p>
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="text-white/50">Email</dt>
              <dd>
                <a href="mailto:hr@blackoriginit.com" className="hover:text-orange-400">
                  hr@blackoriginit.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">Website</dt>
              <dd>
                <a href="https://www.blackoriginit.com" className="hover:text-orange-400">
                  www.blackoriginit.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">Country</dt>
              <dd>Bangladesh</dd>
            </div>
          </dl>
        </div>

        <div className="p-8 md:col-span-3">
          {sent ? (
            <div className="py-16 text-center">
              <p className="text-2xl font-bold text-slate-950">Thank you!</p>
              <p className="mt-2 text-slate-500">We received your message and will reply soon.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-950">Send us a message</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  Your name *
                  <input name="name" required className={`${field} mt-1`} />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Email *
                  <input name="email" type="email" required className={`${field} mt-1`} />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Company
                  <input name="company" className={`${field} mt-1`} />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Country
                  <input name="country" className={`${field} mt-1`} />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Phone
                  <input name="phone" type="tel" className={`${field} mt-1`} />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Budget range
                  <input name="budget" className={`${field} mt-1`} />
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Service *
                  <select name="service" required defaultValue="" className={`${field} mt-1`}>
                    <option value="" disabled>Choose…</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium text-slate-700">
                  Timeline *
                  <select name="timeline" required defaultValue="" className={`${field} mt-1`}>
                    <option value="" disabled>Choose…</option>
                    {timelines.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                Project description *
                <textarea name="description" required rows={4} className={`${field} mt-1`} />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                How did you hear about us?
                <input name="source" className={`${field} mt-1`} />
              </label>

              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}