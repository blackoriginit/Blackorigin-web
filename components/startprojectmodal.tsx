"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "@/components/contactform";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onOpen?: () => void;
};

// TODO: confirm with the team which email should be public
const INFO = [
  { label: "Email", value: "hr@blackoriginit.com" },
  { label: "Website", value: "www.blackoriginit.com" },
  { label: "Country", value: "Bangladesh" },
];

export default function StartProjectButton({
  children = "Start a Project",
  className = "",
  onOpen,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function openModal() {
    onOpen?.();
    setOpen(true);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <style>{"@keyframes bo-pop{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:none}}"}</style>
      <button type="button" onClick={openModal} className={className}>
        {children}
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="m-auto max-h-[90vh] w-[min(60rem,calc(100%-2rem))] overflow-y-auto md:h-[min(90vh,44rem)] md:overflow-hidden rounded-2xl bg-white p-0 shadow-[0_0_0_1px_rgba(232,93,4,0.55),0_30px_90px_-15px_rgba(232,93,4,0.4)] backdrop:bg-black/60 backdrop:backdrop-blur-sm open:animate-[bo-pop_0.25s_ease-out] motion-reduce:open:animate-none"
      >
        <div className="relative grid md:h-full md:grid-cols-[2fr_3fr] md:grid-rows-[minmax(0,1fr)]">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-1 bg-[#E85D04]" />
          <button
            type="button"
            aria-label="Close"
            onClick={() => dialogRef.current?.close()}
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-white transition-colors hover:bg-white/10 md:text-[#061A40] md:hover:bg-black/5"
          >
            &times;
          </button>

          <section className="flex flex-col justify-between gap-10 bg-[#061A40] p-8 text-white md:p-10">
            <div>
              <p className="text-lg font-bold">Black Origin IT</p>
              <h2 className="mt-8 font-serif text-3xl font-bold leading-tight md:text-4xl">
                Talk to an engineer
              </h2>
              <p className="mt-4 text-white/75">
                Whether you have a full brief or only a rough idea, send it over.
                Every inquiry goes straight to our team.
              </p>
            </div>

            <dl className="space-y-4">
              {INFO.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs uppercase tracking-wide text-white/60">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="p-8 md:overflow-y-auto md:p-10">
            <h2 className="mb-6 font-serif text-2xl font-bold text-[#061A40]">
              Send us a message
            </h2>
            {open && <ContactForm />}
          </section>
        </div>
      </dialog>
    </>
  );
}
