import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

const values = [
  {
    icon: "✧",
    title: "Client-Centered Impact",
    description:
      "We put client goals first and define success by meaningful outcomes.",
  },
  {
    icon: "★",
    title: "Excellence in Execution",
    description:
      "We are committed to quality, consistency, and continuous improvement in everything we do.",
  },
  {
    icon: "♧",
    title: "Integrity & Ownership",
    description:
      "We take responsibility for our work and act with transparency, accountability, and respect.",
  },
  {
    icon: "☷",
    title: "Innovation & Creativity",
    description:
      "We think creatively and embrace new ideas to build smarter, more effective solutions.",
  },
];

const team = [
  {
    role: "Software Engineering Team Lead",
    name: "Tanvir Ahmed",
    image: "/images/core values.jpg",
  },
  {
    role: "Software Engineer",
    name: "Farhan Hossain",
    image: "/images/core values.jpg",
  },
  {
    role: "Junior Software Engineer",
    name: "Nusrat Jahan",
    image: "/images/core values.jpg",
  },
];

const expertise = [
  {
    icon: "</>",
    title: "Web Development",
    description: "Modern web apps and digital platforms.",
  },
  {
    icon: "▯",
    title: "Mobile Development",
    description: "Cross-platform apps for iOS and Android.",
  },
  {
    icon: "♧",
    title: "AI & Automation",
    description: "Intelligent solutions for real-world problems.",
  },
  {
    icon: "⌁",
    title: "UI/UX Design",
    description: "Beautiful, user-focused experiences.",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    description: "Scalable and secure infrastructure.",
  },
];

const founderLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Website", href: "#" },
];

function ValueItem({ value }: { value: (typeof values)[number] }) {
  return (
    <div className="text-center md:border-b md:border-[#061A40]/20 md:pb-12 last:md:border-b-0 last:md:pb-0">
      <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F9FF] text-[#E85D04]">
        <span className="text-lg font-bold">{value.icon}</span>
      </div>

      <h3 className="font-serif text-xl font-bold leading-tight text-[#061A40]">
        {value.title}
      </h3>

      <p className="mx-auto mt-3 max-w-[250px] text-sm leading-6 text-[#5A6B8C]">
        {value.description}
      </p>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <main className="bg-[#F5F9FF]">

      {/* ================= HERO SECTION (unchanged) ================= */}
      <section className="relative overflow-hidden bg-[#061A40]">
        <div className="relative mx-auto flex min-h-[440px] max-w-6xl items-center overflow-hidden px-6 py-20 md:min-h-[520px] md:px-12 md:py-24">

          <Image
            src="/images/about us (hero).jpg"
            alt="Black Origin workspace"
            fill
            priority
            className="object-cover opacity-75"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/90 to-[#061A40]/35" />

          <div className="relative z-10 max-w-2xl">

            <p className="mb-5 text-sm font-bold uppercase tracking-[2.5px] text-[#E85D04]">
              About Us
            </p>

            <h1 className="text-[42px] font-bold leading-[1.12] tracking-tight text-white sm:text-[52px] md:text-[62px] lg:text-[68px]">
              Building technology
              <span className="block">for a better tomorrow.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 md:text-lg md:leading-9">
              Black Origin IT is a software engineering firm that builds
              custom digital products, AI systems and automation for
              organizations that want to solve real business problems.
            </p>

          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-12 rounded-t-[50%_3rem] bg-[#F5F9FF]" />
      </section>


      {/* ================= OUR STORY SECTION (unchanged) ================= */}
      <section className="bg-[#F5F9FF]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">

          <div className="mb-16 text-center md:mb-20">

            <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-[#E85D04]">
              Our Story
            </p>

            <p className="mx-auto max-w-3xl text-base leading-8 text-[#5A6B8C] md:text-lg md:leading-9">
              A journey shaped by engineering discipline, practical AI and
              a commitment to software that solves real business problems.
            </p>

          </div>

          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-14">

            {/* OUR JOURNEY */}
            <div className="mx-auto w-full max-w-[480px]">

              <div className="relative z-10 w-[92%] bg-white px-7 py-9 shadow-[0_8px_25px_rgba(6,26,64,0.10)] md:px-9 md:py-10">

                <p className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[#E85D04]">
                  Our Journey
                </p>

                <h2 className="font-serif text-[30px] font-bold leading-[1.15] tracking-tight text-[#061A40] md:text-[36px]">
                  From a Vision
                  <span className="block">to a Growing Engineering Team</span>
                </h2>

                <p className="mt-6 text-[15px] leading-8 text-[#5A6B8C] md:text-base">
                  Black Origin IT began with a simple vision — to bring
                  engineering discipline, practical AI and thoughtful
                  problem-solving together to build software that makes a
                  real business difference.
                </p>

                <p className="mt-5 text-[15px] leading-8 text-[#5A6B8C] md:text-base">
                  What started as an idea has grown into a focused
                  engineering team that helps businesses turn ideas into
                  reliable software products and lasting operational
                  advantage.
                </p>

              </div>

              <div className="relative -mt-24 ml-auto aspect-[4/5] w-[82%] overflow-hidden">
                <Image
                  src="/images/our journey.jpg"
                  alt="Black Origin journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 380px"
                />
              </div>

            </div>


            {/* OUR PHILOSOPHY */}
            <div className="mx-auto w-full max-w-[480px]">

              <div className="relative aspect-[4/5] w-[88%] overflow-hidden">
                <Image
                  src="/images/philosophy.jpg"
                  alt="Black Origin philosophy"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 88vw, 420px"
                />
              </div>

              <div className="relative z-10 -mt-24 ml-auto w-[90%] bg-white px-7 py-9 shadow-[0_8px_25px_rgba(6,26,64,0.10)] md:px-9 md:py-10">

                <p className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[#E85D04]">
                  Our Philosophy
                </p>

                <h2 className="font-serif text-[30px] font-bold leading-[1.15] tracking-tight text-[#061A40] md:text-[36px]">
                  Technology With
                  <span className="block">Purpose</span>
                </h2>

                <p className="mt-6 text-[15px] leading-8 text-[#5A6B8C] md:text-base">
                  We believe technology should do more than look good or
                  follow trends. It should solve real problems, create
                  meaningful experiences and deliver measurable value.
                </p>

                <p className="mt-5 text-[15px] leading-8 text-[#5A6B8C] md:text-base">
                  Our approach brings together engineering discipline,
                  applied AI and long-term partnership to build solutions
                  that are useful today, adaptable tomorrow and valuable
                  for the people who use them.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= MISSION AND VISION ================= */}
      <section className="bg-[#F5F9FF]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">

          <div className="grid gap-5 md:grid-cols-2">

            {[
              {
                icon: "◎",
                title: "Our Mission",
                text: "To deliver innovative and reliable digital solutions that help businesses grow and create meaningful impact.",
              },
              {
                icon: "◉",
                title: "Our Vision",
                text: "To be a trusted software engineering partner, recognized for engineering quality, practical AI and long-term partnerships.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-[0_6px_24px_rgba(6,26,64,0.05)] md:px-7 md:py-7"
              >
                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E85D04]/10 text-[#E85D04]">
                    <span className="text-2xl font-bold">{item.icon}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#061A40]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5A6B8C]">
                      {item.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= CORE VALUES ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

          <div className="mb-14 text-center md:mb-16">
            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-[#061A40] md:text-5xl">
              Core Values We Live By
            </h2>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-[1fr_1.45fr_1fr] md:gap-7">

            {/* LEFT VALUES */}
            <div className="flex h-full flex-col justify-between gap-12 md:gap-14">
              {values.slice(0, 2).map((value) => (
                <ValueItem key={value.title} value={value} />
              ))}
            </div>

            {/* CENTER IMAGE (landscape, rounded) */}
            <div className="order-first md:order-none">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/core values.jpg"
                  alt="Black Origin core values"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </div>

            {/* RIGHT VALUES */}
            <div className="flex h-full flex-col justify-between gap-12 md:gap-14">
              {values.slice(2, 4).map((value) => (
                <ValueItem key={value.title} value={value} />
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ================= FOUNDER ================= */}
      <section className="bg-[#F5F9FF]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

          <div className="mb-10 text-center md:mb-12">

            <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-[#E85D04]">
              Meet the Founder
            </p>

            <p className="mx-auto max-w-3xl text-base leading-8 text-[#5A6B8C]">
              The engineer and researcher guiding the technical direction
              of Black Origin IT.
            </p>

          </div>

          <div className="grid items-center gap-8 rounded-xl bg-white p-5 shadow-[0_8px_25px_rgba(6,26,64,0.08)] md:grid-cols-[275px_1fr] md:gap-10">

            {/* FOUNDER IMAGE */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-xl md:max-w-none">
              <Image
                src="/images/core values.jpg"
                alt="Abdullah Al Sobail, Founder and Technical Director"
                fill
                className="object-cover object-[35%_center]"
                sizes="(max-width: 768px) 90vw, 275px"
              />
            </div>

            {/* FOUNDER INFORMATION */}
            <div className="md:pr-10">

              <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.5px] text-[#E85D04]">
                Founder &amp; Technical Director
              </p>

              <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-[#061A40] md:text-[44px]">
                Abdullah Al Sobail
              </h2>

              <p className="mt-2 text-base text-[#5A6B8C]">
                Founder &amp; Technical Director, Black Origin IT
              </p>

              <div className="my-5 h-px w-full bg-[#061A40]/10" />

              <p className="text-[15px] leading-8 text-[#5A6B8C]">
                Abdullah Al Sobail is a software engineer and AI and deep
                learning researcher with experience across software
                development, technical training, artificial intelligence,
                education and applied research.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Software Development",
                  "Technical Training",
                  "Artificial Intelligence",
                  "Education",
                  "Applied Research",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#061A40]/15 bg-[#F5F9FF] px-3.5 py-1.5 text-xs font-semibold text-[#061A40]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* FOUNDER TEXT LINKS */}
              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2">
                {founderLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#061A40] transition hover:text-[#E85D04]"
                  >
                    {link.label}
                    <span className="text-[#E85D04] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= OUR TEAM ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

          <div className="mb-10 text-center md:mb-12">

            <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-[#E85D04]">
              Our Team
            </p>

            <p className="mx-auto max-w-3xl text-base leading-8 text-[#5A6B8C]">
              Meet the people behind our engineering, development and
              technical innovation. Our team works together to turn ideas
              into reliable digital solutions.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">

            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-xl bg-white shadow-[0_6px_24px_rgba(6,26,64,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,26,64,0.13)]"
              >

                {/* TEAM IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* TEAM INFORMATION */}
                <div className="p-6">

                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[1.5px] text-[#E85D04]">
                    {member.role}
                  </p>

                  <h3 className="font-serif text-xl font-bold text-[#061A40]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#5A6B8C]">Dhaka Office</p>

                  <div className="my-4 h-px bg-[#061A40]/10" />

                  {/* TEAM SOCIAL ICONS */}
                  <div className="flex items-center gap-3">

                    <a
                      href="#"
                      aria-label={`${member.name} on LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061A40] text-white transition hover:-translate-y-0.5 hover:bg-[#E85D04]"
                    >
                      <span className="text-xs font-bold">in</span>
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} on GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061A40] text-white transition hover:-translate-y-0.5 hover:bg-[#E85D04]"
                    >
                      <span className="text-xs font-bold">GH</span>
                    </a>

                    <a
                      href="mailto:team@blackoriginit.com"
                      aria-label={`Email ${member.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061A40] text-white transition hover:-translate-y-0.5 hover:bg-[#E85D04]"
                    >
                      <Mail size={16} />
                    </a>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= OUR EXPERTISE ================= */}
      <section className="bg-[#F5F9FF]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

          <div className="mb-10">

            <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#E85D04]">
              Our Expertise
            </p>

            <p className="max-w-xl text-base leading-7 text-[#5A6B8C]">
              We bring together talented people, modern tools and proven
              processes to build high-quality digital solutions.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-5 md:gap-y-0">

            {expertise.map((item, index) => (
              <div
                key={item.title}
                className={`px-4 ${
                  index !== expertise.length - 1
                    ? "md:border-r md:border-[#061A40]/10"
                    : ""
                } ${index === 0 ? "md:pl-0" : ""}`}
              >

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-[#061A40]/15 bg-white text-[#061A40]">
                  <span className="text-base font-bold">{item.icon}</span>
                </div>

                <h3 className="font-serif text-base font-bold leading-snug text-[#061A40]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[190px] text-xs leading-6 text-[#5A6B8C]">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= CONTACT CTA ================= */}
      <section className="bg-[#061A40]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <p className="mb-3 text-[11px] font-bold uppercase tracking-[2px] text-[#E85D04]">
                Let&apos;s Work Together
              </p>

              <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/75">
                We&apos;d love to hear from you. Let&apos;s discuss how we
                can help turn your ideas into reality.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#E85D04] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#061A40]"
            >
              Get in Touch
              <span className="text-base">→</span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}