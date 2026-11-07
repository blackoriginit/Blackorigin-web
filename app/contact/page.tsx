export const metadata = { title: "Contact | Black Origin" };

// TODO: confirm with the team which email should be public on the Contact page
const INFO = [
  { label: "Email", value: "hr@blackoriginit.com", href: "mailto:hr@blackoriginit.com" },
  { label: "Website", value: "www.blackoriginit.com", href: "https://www.blackoriginit.com" },
  { label: "Country", value: "Bangladesh", href: "" },
];

const css = `
@keyframes bo-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.bo-bar { transform-origin: left; animation: bo-draw 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.3s both; }
@media (prefers-reduced-motion: reduce) {
  .bo-bar { animation: none; }
}
`;

const rowClass =
  "group relative grid gap-1 border-t border-gray-200 py-8 transition-all duration-300 hover:pl-5 sm:grid-cols-[1fr_2fr] sm:items-baseline";
const hoverBar =
  "absolute bottom-8 left-0 top-8 w-1 origin-top scale-y-0 bg-[#E85D04] transition-transform duration-300 group-hover:scale-y-100";

export default function ContactPage() {
  return (
    <>
      <style>{css}</style>

      <div className="bg-white">
        <section
          className="relative overflow-hidden bg-[#061A40] px-6 pb-28 pt-16 text-white sm:pt-24"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 3rem))" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "linear-gradient(to bottom, black, transparent 90%)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl">
            <h1 className="font-serif text-5xl font-bold sm:text-7xl">Contact Us</h1>
            <div className="bo-bar mt-6 h-1 w-24 bg-[#E85D04]" />
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Tell us what you are trying to build. We will reply with a clear
              next step.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 pt-8">
          {INFO.map((item) => (
            <div key={item.label} className={rowClass}>
              <span className={hoverBar} />
              <h2 className="text-xl font-semibold text-[#061A40]">{item.label}</h2>
              <p className="text-lg text-gray-700">
                {item.href ? <a href={item.href}>{item.value}</a> : item.value}
              </p>
            </div>
          ))}
          <div className={rowClass + " border-b"}>
            <span className={hoverBar} />
            <h2 className="text-xl font-semibold text-[#061A40]">Follow Us</h2>
            <div className="flex gap-5 text-lg text-gray-700">
              {/* TODO: replace # with the real social links */}
              <a href="#" className="hover:text-[#E85D04]">LinkedIn</a>
              <a href="#" className="hover:text-[#E85D04]">YouTube</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
