import Image from "next/image";
import Link from "next/link";

/* ---------- Icons (inline SVG, no extra dependency) ---------- */
function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

/* ---------- Data ---------- */
const valuesLeft = [
  {
    icon: "✧",
    title: ["Client-Centered", "Impact"],
    description:
      "We put client goals first and define success by meaningful outcomes.",
  },
  {
    icon: "★",
    title: ["Excellence in", "Execution"],
    description:
      "We are committed to quality, consistency, and continuous improvement in everything we do.",
  },
];

const valuesRight = [
  {
    icon: "♧",
    title: ["Integrity & Ownership"],
    description:
      "We take responsibility for our work and act with transparency, accountability, and respect.",
  },
  {
    icon: "☷",
    title: ["Innovation &", "Creativity"],
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

const skills = [
  "Software Development",
  "Technical Training",
  "Artificial Intelligence",
  "Education",
  "Applied Research",
];

/* ---------- Core value item ---------- */
function ValueItem({
  value,
  divider,
}: {
  value: (typeof valuesLeft)[number];
  divider: boolean;
}) {
  return (
    <div
      className={`text-center ${
        divider ? "md:border-b md:border-text/60 md:pb-12" : ""
      }`}
    >
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary">
        <span className="text-xl font-bold">{value.icon}</span>
      </div>

      <h3 className="text-[16px] font-bold leading-tight text-text md:text-[18px]">
        {value.title.map((line, i) =>
          value.title.length > 1 ? (
            <span key={i} className="block">
              {line}
            </span>
          ) : (
            line
          )
        )}
      </h3>

      <p className="mx-auto mt-4 max-w-[230px] text-[11px] leading-5 text-muted md:text-[12px]">
        {value.description}
      </p>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <main className="bg-background">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="relative mx-auto min-h-[340px] max-w-[1100px] overflow-hidden px-6 pb-24 pt-14 md:min-h-[440px] md:px-10 md:pb-36 md:pt-20">
          <Image
            src="/images/about us (hero).jpg"
            alt="Black Origin workspace"
            fill
            priority
            className="object-cover opacity-75"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/35" />

          <div className="relative max-w-xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.7px] text-primary">
              About Us
            </p>

            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-on-primary md:text-[42px]">
              <span className="block">Building technology</span>
              <span className="block">for a better tomorrow.</span>
            </h1>

            <p className="mt-4 max-w-lg text-[12px] leading-6 text-on-primary/75 md:text-[13px]">
              Black Origin IT is a software engineering firm that builds
              custom digital products, AI systems and automation for
              organizations that want to solve real business problems.
            </p>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-12 rounded-t-[50%_3rem] bg-background" />
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-12 md:px-10 md:py-16">
          <div className="mb-8 text-center md:mb-12">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[1.7px] text-primary md:text-[12px]">
              Our Story
            </p>
            <p className="mx-auto max-w-2xl text-[12px] leading-6 text-muted md:text-[13px]">
              A journey shaped by engineering discipline, practical AI and a
              commitment to software that solves real business problems.
            </p>
          </div>

          <div className="grid items-start gap-14 md:grid-cols-2 md:gap-12">
            {/* OUR JOURNEY */}
            <div className="mx-auto w-full max-w-[420px]">
              <div className="relative z-10 w-[92%] bg-surface px-6 py-7 shadow-[0_8px_25px_rgba(6,26,64,0.10)] md:px-8 md:py-8">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.7px] text-primary">
                  Our Journey
                </p>

                <h2 className="text-[24px] font-bold leading-[1.1] tracking-tight text-text md:text-[27px]">
                  From a Vision
                  <span className="block">to a Growing Engineering Team</span>
                </h2>

                <p className="mt-4 text-[12px] leading-[1.8] text-muted">
                  Black Origin IT began with a simple vision — to bring
                  engineering discipline, practical AI and thoughtful
                  problem-solving together to build software that makes a real
                  business difference.
                </p>

                <p className="mt-3 text-[12px] leading-[1.8] text-muted">
                  What started as an idea has grown into a focused engineering
                  team that helps businesses turn ideas into reliable software
                  products and lasting operational advantage.
                </p>
              </div>

              <div className="relative -mt-20 ml-auto aspect-[3/4] w-[80%] overflow-hidden">
                <Image
                  src="/images/our journey.jpg"
                  alt="Black Origin journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 370px"
                />
              </div>
            </div>

            {/* OUR PHILOSOPHY */}
            <div className="mx-auto w-full max-w-[420px]">
              <div className="relative ml-auto aspect-[3/4] w-[88%] overflow-hidden">
                <Image
                  src="/images/philosophy.jpg"
                  alt="Black Origin philosophy"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 88vw, 405px"
                />
              </div>

              <div className="relative z-10 -mt-20 w-[88%] bg-surface px-6 py-7 shadow-[0_8px_25px_rgba(6,26,64,0.10)] md:px-8 md:py-8">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.7px] text-primary">
                  Our Philosophy
                </p>

                <h2 className="text-[24px] font-bold leading-[1.1] tracking-tight text-text md:text-[27px]">
                  Technology With
                  <span className="block">Purpose</span>
                </h2>

                <p className="mt-4 text-[12px] leading-[1.8] text-muted">
                  We believe technology should do more than look good or follow
                  trends. It should solve real problems, create meaningful
                  experiences and deliver measurable value.
                </p>

                <p className="mt-3 text-[12px] leading-[1.8] text-muted">
                  Our approach brings together engineering discipline, applied
                  AI and long-term partnership to build solutions that are
                  useful today, adaptable tomorrow and valuable for the people
                  who use them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-10 md:px-10 md:py-12">
          <div className="mt-2 grid gap-6 md:grid-cols-2">
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
                className="min-h-[130px] rounded-md bg-surface p-6 shadow-[0_6px_24px_rgba(6,26,64,0.05)] md:p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">{item.icon}</span>
                  </div>

                  <div className="pt-1">
                    <h3 className="text-[15px] font-bold text-text md:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-5 text-muted md:text-[12px]">
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
      <section className="bg-surface">
        <div className="mx-auto max-w-[1100px] px-6 py-12 md:px-10 md:py-14">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-text md:text-4xl">
              Core Values We Live By
            </h2>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[1fr_360px_1fr] md:gap-8">
            {/* LEFT */}
            <div className="flex h-full flex-col justify-between gap-10 md:gap-16">
              {valuesLeft.map((v, i) => (
                <ValueItem key={v.icon} value={v} divider={i === 0} />
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="order-first flex items-center justify-center md:order-none">
              <div className="relative h-[240px] w-full max-w-[360px] overflow-hidden rounded-2xl md:h-[250px]">
                <Image
                  src="/images/core values.jpg"
                  alt="Black Origin core values"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex h-full flex-col justify-between gap-10 md:gap-16">
              {valuesRight.map((v, i) => (
                <ValueItem key={v.icon} value={v} divider={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-12 md:px-10 md:py-14">
          <div className="mb-8 text-center md:mb-10">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[1.7px] text-primary md:text-[12px]">
              Meet the Founder
            </p>
            <p className="mx-auto max-w-2xl text-[12px] leading-6 text-muted md:text-[13px]">
              The engineer and researcher guiding the technical direction of
              Black Origin IT.
            </p>
          </div>

          <div className="grid items-center gap-8 rounded-md bg-surface p-5 shadow-[0_8px_25px_rgba(6,26,64,0.10)] md:grid-cols-[280px_1fr] md:gap-10 md:p-5">
            {/* IMAGE */}
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-md md:max-w-none">
              <Image
                src="/images/core values.jpg"
                alt="Abdullah Al Sobail, Founder and Technical Director"
                fill
                className="rounded-md object-cover object-center"
                sizes="(max-width: 768px) 90vw, 280px"
              />
            </div>

            {/* INFO */}
            <div className="md:pr-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.7px] text-primary">
                Founder &amp; Technical Director
              </p>

              <h2 className="text-[26px] font-bold leading-[1.1] tracking-tight text-text md:text-[32px]">
                Abdullah Al Sobail
              </h2>

              <p className="mt-2 text-[13px] text-muted md:text-[14px]">
                Founder &amp; Technical Director, Black Origin IT
              </p>

              <div className="my-5 h-px w-full bg-secondary/10" />

              <p className="text-[12px] leading-[1.8] text-muted md:text-[12.5px]">
                Abdullah Al Sobail is a software engineer and AI and deep
                learning researcher with experience across software
                development, technical training, artificial intelligence,
                education and applied research.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-secondary/15 bg-background px-3 py-1 text-[10px] font-semibold text-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* FOUNDER ICONS */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Abdullah Al Sobail on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-on-primary transition duration-300 hover:-translate-y-0.5 hover:bg-primary"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="#"
                  aria-label="Abdullah Al Sobail on GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-on-primary transition duration-300 hover:-translate-y-0.5 hover:bg-primary"
                >
                  <GitHubIcon />
                </a>

                <a
                  href="mailto:team@blackoriginit.com"
                  aria-label="Email Abdullah Al Sobail"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-on-primary transition duration-300 hover:-translate-y-0.5 hover:bg-primary"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1100px] px-6 py-12 md:px-10 md:py-14">
          <div className="mb-8 text-center md:mb-10">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[1.7px] text-primary md:text-[12px]">
              Our Team
            </p>
            <p className="mx-auto max-w-2xl text-[12px] leading-6 text-muted md:text-[13px]">
              Meet the people behind our engineering, development and
              technical innovation. Our team works together to turn ideas into
              reliable digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-md bg-surface shadow-[0_6px_24px_rgba(6,26,64,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,26,64,0.13)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.role}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="min-h-[190px] p-5 md:p-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-primary">
                    {member.role}
                  </p>

                  <h3 className="text-[16px] font-bold text-text">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[12px] leading-5 text-muted">
                    Dhaka Office
                  </p>

                  <div className="my-5 h-px bg-secondary/10" />

                  {/* TEAM ICONS */}
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      aria-label={`${member.name} on LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-on-primary transition duration-300 hover:-translate-y-0.5 hover:bg-primary"
                    >
                      <LinkedInIcon />
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} on GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-on-primary transition duration-300 hover:-translate-y-0.5 hover:bg-primary"
                    >
                      <GitHubIcon />
                    </a>

                    <a
                      href="mailto:team@blackoriginit.com"
                      aria-label={`Email ${member.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-on-primary transition duration-300 hover:-translate-y-0.5 hover:bg-primary"
                    >
                      <MailIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1100px] px-6 py-11 md:px-10 md:py-12">
          <div className="mb-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[1.7px] text-primary">
              Our Expertise
            </p>
            <p className="max-w-xl text-[11px] leading-5 text-muted md:text-[12px]">
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
                    ? "md:border-r md:border-secondary/10"
                    : ""
                } ${index === 0 ? "md:pl-0" : ""}`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-secondary/15 bg-background text-text">
                  <span
                    className={`font-bold ${
                      index === 0 ? "text-base" : "text-lg"
                    }`}
                  >
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-[11px] font-bold text-text md:text-[12px]">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[160px] text-[10px] leading-5 text-muted md:text-[11px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-[1100px] px-6 py-9 md:px-10 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.7px] text-primary">
                Let&apos;s Work Together
              </p>

              <h2 className="text-xl font-bold text-on-primary md:text-[28px]">
                Have a project in mind?
              </h2>

              <p className="mt-2 max-w-md text-[11px] leading-5 text-on-primary/65 md:text-[12px]">
                We&apos;d love to hear from you. Let&apos;s discuss how we can
                help turn your ideas into reality.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-primary px-5 py-2.5 text-[11px] font-semibold text-on-primary transition duration-300 hover:bg-surface hover:text-secondary"
            >
              <span>Get in Touch</span>
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}