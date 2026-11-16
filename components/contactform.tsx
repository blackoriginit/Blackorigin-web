"use client";

import { useState } from "react";

type Values = {
  name: string;
  email: string;
  company: string;
  country: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
  source: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  service: "",
  budget: "",
  timeline: "",
  description: "",
  source: "",
};

const SERVICES = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "AI & Machine Learning",
  "AI Automation",
  "SaaS Development",
  "API & Backend Engineering",
  "UI/UX Engineering",
  "Software Maintenance & Support",
  "Others",
];

const TIMELINES = [
  "As soon as possible",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Not sure yet",
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-gray-300 bg-[#F4F7FF] px-4 py-3 text-gray-900 outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/30";

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.description.trim()) errors.description = "Please write a message.";
  return errors;
}

export default function ContactForm({ simple = false }: { simple?: boolean }) {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // TODO (Nowrin): connect to the backend/API here and send `values`
  }

  const error = (key: keyof Values) =>
    errors[key] ? <p className="mt-1 text-sm text-red-600">{errors[key]}</p> : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold text-[#061A40]">Your name *</label>
          <input id="name" name="name" type="text" value={values.name} onChange={handleChange} className={fieldClass} />
          {error("name")}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-[#061A40]">Email *</label>
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={fieldClass} />
          {error("email")}
        </div>

        {!simple && (
          <>
            <div>
              <label htmlFor="company" className="font-semibold text-[#061A40]">Company</label>
              <input id="company" name="company" type="text" value={values.company} onChange={handleChange} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="country" className="font-semibold text-[#061A40]">Country</label>
              <input id="country" name="country" type="text" value={values.country} onChange={handleChange} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className="font-semibold text-[#061A40]">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="With country code" value={values.phone} onChange={handleChange} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="service" className="font-semibold text-[#061A40]">Service</label>
              <select id="service" name="service" value={values.service} onChange={handleChange} className={fieldClass}>
                <option value="">Choose...</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="font-semibold text-[#061A40]">Budget range</label>
              <input id="budget" name="budget" type="text" value={values.budget} onChange={handleChange} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="timeline" className="font-semibold text-[#061A40]">Timeline</label>
              <select id="timeline" name="timeline" value={values.timeline} onChange={handleChange} className={fieldClass}>
                <option value="">Choose...</option>
                {TIMELINES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>

      <div>
        <label htmlFor="description" className="font-semibold text-[#061A40]">
          {simple ? "Message *" : "Project description *"}
        </label>
        <textarea id="description" name="description" rows={simple ? 6 : 5} value={values.description} onChange={handleChange} className={fieldClass} />
        {error("description")}
      </div>

      {!simple && (
        <div>
          <label htmlFor="source" className="font-semibold text-[#061A40]">How did you hear about us?</label>
          <input id="source" name="source" type="text" value={values.source} onChange={handleChange} className={fieldClass} />
        </div>
      )}

      <button
        type="submit"
        className="rounded-xl bg-[#E85D04] px-8 py-4 font-semibold text-white transition hover:opacity-90"
      >
        Send message
      </button>
    </form>
  );
}
