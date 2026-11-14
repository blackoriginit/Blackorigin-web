"use client";

import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  defaultService = "Custom Software Development",
}: ContactModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs">
      {/* Background click closes modal */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Box with fixed height constraint */}
      <div className="relative w-full max-w-4xl h-[90vh] max-h-[720px] bg-white rounded-2xl shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 border border-slate-200">
        
        {/* =========================================
            LEFT COLUMN (Navy - Stays fixed)
           ========================================= */}
        <div className="md:col-span-5 bg-[#06182C] text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden">
          <div>
            {/* Logo matching prototype */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center shadow-xs">
                <span className="text-[#C81E1E] font-serif font-black text-xl leading-none">
                  B
                </span>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Black Origin IT
              </span>
            </div>

            <h3 className="text-3xl font-serif font-bold text-white mb-4 leading-tight">
              Talk to an engineer
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Whether you have a full brief or only a rough idea, send it over.
              Every inquiry goes straight to our team.
            </p>
          </div>

          {/* Contact Details at bottom */}
          {/* Contact Details at bottom with clickable links */}
          <div className="mt-8 pt-8 border-t border-white/10 space-y-4 text-xs">
            <div>
              <p className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider mb-0.5">
                EMAIL
              </p>
              <a
                href="mailto:hr@blackoriginit.com"
                className="text-slate-200 font-mono text-[13px] hover:underline hover:text-white transition-colors inline-block"
              >
                hr@blackoriginit.com
              </a>
            </div>

            <div>
              <p className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider mb-0.5">
                WEBSITE
              </p>
              <a
                href="https://www.blackoriginit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:underline hover:text-white transition-colors inline-block"
              >
                www.blackoriginit.com
              </a>
            </div>

            <div>
              <p className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider mb-0.5">
                COUNTRY
              </p>
              <p className="text-slate-200">Bangladesh</p>
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN (White - Smoothly scrolls with Orange bar)
           ========================================= */}
        <div className="md:col-span-7 h-full flex flex-col min-h-0 relative bg-white">
          {/* Top Close Button (Fixed at top right) */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 text-slate-400 hover:text-slate-800 text-2xl font-light cursor-pointer transition-colors p-1"
            aria-label="Close modal"
          >
            &#x2715;
          </button>

          {/* Scrollable Form Container with custom orange scrollbar */}
          <div className="overflow-y-auto flex-1 p-8 md:p-10 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:bg-[#E8590C] [&::-webkit-scrollbar-thumb]:rounded-full">
            <h3 className="text-2xl font-serif font-bold text-[#06182C] mb-6">
              Send us a message
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been sent to our engineers.");
                onClose();
              }}
              className="space-y-4 text-xs md:text-sm"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Your name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Company & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Phone & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="With country code"
                    className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Service
                  </label>
                  <select
                    defaultValue={defaultService}
                    className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all"
                  >
                    <option value="Custom Software Development">
                      Custom Software Development
                    </option>
                    <option value="Web Application Development">
                      Web Application Development
                    </option>
                    <option value="Mobile Application Development">
                      Mobile Application Development
                    </option>
                    <option value="AI & Machine Learning">
                      AI & Machine Learning
                    </option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="API & Backend Development">
                      API & Backend Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Software Maintenance">
                      Software Maintenance
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 4: Budget range & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Budget range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $5k - $15k"
                    className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Timeline
                  </label>
                  <select
                    defaultValue=""
                    className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all"
                  >
                    <option value="" disabled>
                      Choose...
                    </option>
                    <option value="less-than-1-month">&lt; 1 month</option>
                    <option value="1-3-months">1 - 3 months</option>
                    <option value="3-6-months">3 - 6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Project description */}
              <div>
                <label className="block text-slate-700 font-medium mb-1.5">
                  Project description *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all resize-y"
                />
              </div>

              {/* How did you hear about us? */}
              <div>
                <label className="block text-slate-700 font-medium mb-1.5">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  className="w-full bg-[#F4F7FC] border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#E8590C] focus:bg-white transition-all"
                />
              </div>

              {/* Orange Submit Button */}
              <div className="pt-3 pb-2">
                <button
                  type="submit"
                  className="w-full bg-[#E8590C] hover:bg-[#d04f0a] transition-colors text-white font-medium py-3.5 rounded-lg text-sm cursor-pointer shadow-md"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}