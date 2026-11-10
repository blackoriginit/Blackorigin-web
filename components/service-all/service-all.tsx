"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import {
  ArrowLeft, ArrowRight,
  Users, Settings2, Workflow, Lightbulb,
  BrainCircuit, Database, BarChart3, Glasses,
  MapPin, Landmark, Cloud, ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/* ---------- Data ---------- */

type ServiceItem = {
  title: string;
  text: string;
  href: string;
  icon: LucideIcon;
  tone: string;
};

const peach = "bg-[#ffe9d6] text-[#d9650f]";
const blue = "bg-[#dce8ff] text-[#3a63c8]";
const lilac = "bg-[#e8e2ff] text-[#6a52c9]";
const mint = "bg-[#d8f5e4] text-[#1f9a5c]";
const sky = "bg-[#d9f0fb] text-[#1f86b5]";

const collaboration: ServiceItem[] = [
  { title: "Team Extension", text: "Add skilled engineers to your team within days and scale up or down as your roadmap changes.", href: "/services/team-extension", icon: Users, tone: peach },
  { title: "Managed Services", text: "We run and maintain your applications and infrastructure so your team can focus on new work.", href: "/services/managed-services", icon: Settings2, tone: blue },
  { title: "Digital Transformation", text: "Replace manual, outdated processes with modern systems and automation that save time.", href: "/services/digital-transformation", icon: Workflow, tone: lilac },
  { title: "Technology Consulting", text: "Get an honest read and a clear plan to match technology to your business goals.", href: "/services/technology-consulting", icon: Lightbulb, tone: mint },
];

const top: ServiceItem[] = [
  { title: "Machine Learning & AI", text: "Practical AI features, from prediction to automation, built on your own data.", href: "/services/machine-learning", icon: BrainCircuit, tone: blue },
  { title: "Data Engineering", text: "Move legacy data into modern platforms with clean pipelines and reliable reporting.", href: "/services/data-engineering", icon: Database, tone: lilac },
  { title: "Business Intelligence", text: "Dashboards and analytics that turn daily numbers into decisions you can act on.", href: "/services/business-intelligence", icon: BarChart3, tone: mint },
  { title: "AR/VR Solutions", text: "Immersive experiences for training, product demos and customer engagement.", href: "/services/ar-vr", icon: Glasses, tone: sky },
];

const enterprise: ServiceItem[] = [
  { title: "Field Force Automation", text: "Track, schedule and support teams working across many locations.", href: "/services/field-force", icon: MapPin, tone: peach },
  { title: "Banking Solutions", text: "Software for accounts, payments and compliance tailored to financial institutions.", href: "/services/banking", icon: Landmark, tone: blue },
  { title: "Cloud Solutions", text: "Plan, migrate and manage cloud environments with security built in.", href: "/services/cloud", icon: Cloud, tone: lilac },
  { title: "Cyber Security", text: "Round-the-clock protection suited to critical systems and sensitive data.", href: "/services/cyber-security", icon: ShieldCheck, tone: mint },
];

/* ---------- Carousel section (Swiper) ---------- */

function Section({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: ServiceItem[];
}) {
  const swiper = useRef<SwiperType | null>(null);

  const arrow =
    "grid h-7 w-7 place-items-center rounded-full border border-[#e1e7f3] bg-white text-[#5b6685] transition-colors hover:border-[#e8590c] hover:text-[#e8590c] focus-visible:outline-2 focus-visible:outline-[#e8590c]";

  return (
    <section className="mb-16">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#5b6685]">
        Our Services
      </p>
      <h2 className="mt-1 font-[family-name:var(--font-serif)] text-3xl font-bold">
        {title}
      </h2>
      <span className="mb-3.5 mt-2 block h-0.5 w-7 bg-[#e8590c]" aria-hidden />

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-[60ch] text-[13px] text-[#5b6685]">{intro}</p>
        <div className="flex shrink-0 gap-2">
          <button type="button" aria-label="Previous" className={arrow} onClick={() => swiper.current?.slidePrev()}>
            <ArrowLeft size={14} />
          </button>
          <button type="button" aria-label="Next" className={arrow} onClick={() => swiper.current?.slideNext()}>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(s) => (swiper.current = s)}
        spaceBetween={16}
        slidesPerView={1.3}
        breakpoints={{
          560: { slidesPerView: 2.2 },
          860: { slidesPerView: 3.2 },
          1100: { slidesPerView: 4 },
        }}
        className="!p-0.5"
      >
        {items.map(({ title, text, href, icon: Icon, tone }) => (
          <SwiperSlide key={title} className="!h-auto">
            <article className="flex h-full flex-col rounded-[10px] border border-[#e1e7f3] bg-white px-4 py-[18px]">
              <span className={`mb-3.5 grid h-[30px] w-[30px] place-items-center rounded-lg ${tone}`}>
                <Icon size={16} />
              </span>
              <h3 className="mb-1.5 text-sm font-bold">{title}</h3>
              <p className="mb-[18px] flex-1 text-xs text-[#5b6685]">{text}</p>
              <Link href={href} className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#e8590c] hover:underline">
                Learn More <ArrowRight size={12} />
              </Link>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

/* ---------- Component ---------- */

export default function Services() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-6 text-[#0f1d40]">
        {/* Hero */}
        <header className="mb-[72px] grid items-center gap-8 rounded-2xl bg-[#0b1a3f] px-6 py-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <span className="mb-5 inline-block rounded bg-[#e8590c] px-2.5 py-[3px] text-[11px] font-semibold">
              Our Services
            </span>
            <h1 className="mb-4 max-w-[14ch] font-[family-name:var(--font-serif)] text-[clamp(30px,4vw,46px)] font-bold leading-[1.12]">
              Technology services built around your business
            </h1>
            <p className="mb-6 max-w-[44ch] text-[15px] text-[#c5cde3]">
              From first idea to long-term support, our engineers help you plan, build, and run the
              software your business depends on.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-md bg-[#e8590c] px-5 py-[11px] text-sm font-semibold text-white transition-colors hover:bg-[#cf4e08]"
            >
              Talk to our team
            </a>
          </div>
          <div
            role="img"
            aria-label="Engineers collaborating in an office"
            className="min-h-[260px] rounded-xl bg-[#24365f] bg-cover bg-center"
            style={{ backgroundImage: "url('/download (12).jpg')" }}
          />
        </header>

        <Section
          title="Collaboration Models"
          intro="We work closely with you through flexible collaboration models, helping you build, scale, and succeed with the right support."
          items={collaboration}
        />
        <Section
          title="Top Services"
          intro="End-to-end solutions to help you build, grow, and stay ahead."
          items={top}
        />
        <Section
          title="Enterprise Focused"
          intro="Solutions built for large teams, complex systems, and critical operations."
          items={enterprise}
        />
      </div>
    </div>
  );
}