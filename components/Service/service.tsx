// components/Services.tsx
import Image from "next/image";
import Link from "next/link";
import { Gelasio, Inter } from "next/font/google";

const serif = Gelasio({ subsets: ["latin"], weight: ["700"] });
const sans = Inter({ subsets: ["latin"] });

type TextCell = { type: "text"; title: string; body: string };
type ImageCell = { type: "image"; src: string; alt: string };
type Cell = TextCell | ImageCell;

// Order matters: 3 columns x 3 rows, zig-zagging text / image
const cells: Cell[] = [
  {
    type: "text",
    title: "Dedicated Teams",
    body: "Add experienced developers and designers to your project within days, and scale the team up or down as your needs change.",
  },
  { type: "image", src: "/Service-Card-1-500x267.jpg", alt: "Team talking in a lounge area" },
  {
    type: "text",
    title: "Ongoing Support",
    body: "We monitor, maintain, and improve your websites and apps so your team can concentrate on running the business.",
  },

  { type: "image", src: "/Service-Card-2-500x299.jpg", alt: "Colleagues working together at a desk" },
  {
    type: "text",
    title: "Product Launch",
    body: "Go from idea to a working first version in weeks, then refine it with real customer feedback.",
  },
  { type: "image", src: "/Service-Card-3-500x299.jpg", alt: "Engineer on a video call with a headset" },

  {
    type: "text",
    title: "Strategy & Audits",
    body: "We review your tools and processes, then give you a clear plan that ties technology spending to business goals.",
  },
  { type: "image", src: "/Service-Card-4-500x267.webp", alt: "Developer working on a laptop" },
  {
    type: "text",
    title: "System Modernization",
    body: "Replace slow, outdated software with fast, maintainable systems and automate the repetitive work along the way.",
  },
];

export default function Services() {
  return (
    <section className={`${sans.className} bg-[#F5F8FF] px-6 py-12`}>
      <div className="mx-auto max-w-[1056px]">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E0561B]">
              Services
            </p>
            <h2 className={`${serif.className} mt-2 text-5xl leading-none text-[#0A1F44] md:text-[52px]`}>
              What We Do
            </h2>
          </div>

          <Link
            href="/services"
            className="rounded-lg border border-[#0A1F44] px-[16px] py-[8px] text-sm font-semibold text-[#0A1F44] transition-colors hover:bg-[#0A1F44] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A1F44]"
          >
            View all services
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {cells.map((cell, i) =>
            cell.type === "image" ? (
              <div
                key={i}
                className="relative h-[180px] overflow-hidden rounded-2xl bg-slate-200"
              >
                <Image
                  src={cell.src}
                  alt={cell.alt}
                  fill
                  sizes="(min-width: 768px) 336px, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div key={i} className="flex flex-col justify-center px-2 py-2 md:h-[180px]">
                <h3 className={`${serif.className} text-[22px] leading-tight text-[#0A1F44]`}>
                  {cell.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[20px] text-[#5B6B85]">
                  {cell.body}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}