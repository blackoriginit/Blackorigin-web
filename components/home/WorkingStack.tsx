
const technologies = [
  { icon: "N", name: "Next.js", className: "bg-white text-[#061A40]" },
  { icon: "⚛", name: "React", className: "text-[#61DAFB]" },
  { icon: "L", name: "Laravel", className: "bg-[#FF2D20] text-white" },
  { icon: "⬢", name: "Node.js", className: "text-[#68A063]" },
  { icon: "TS", name: "TypeScript", className: "bg-[#3178C6] text-white" },
  { icon: "🐍", name: "Python", className: "" },
  { icon: "AWS", name: "AWS", className: "text-white" },
  { icon: "◈", name: "Docker", className: "text-white" },
  { icon: "◆", name: "Git", className: "text-[#F05032]" },
  { icon: "◈", name: "Figma", className: "text-white" },
  { icon: "V", name: "Vue.js", className: "text-[#42B883]" },
  { icon: "A", name: "Angular", className: "text-[#DD0031]" },
  { icon: "JS", name: "JavaScript", className: "bg-[#F7DF1E] text-[#061A40]" },
  { icon: "TW", name: "Tailwind CSS", className: "text-[#38BDF8]" },
  { icon: "P", name: "PHP", className: "text-[#777BB4]" },
  { icon: "E", name: "Express.js", className: "text-white" },
  { icon: "DB", name: "MongoDB", className: "text-[#47A248]" },
  { icon: "PG", name: "PostgreSQL", className: "text-[#4169E1]" },
  { icon: "FB", name: "Firebase", className: "text-[#FFCA28]" },
  { icon: "K", name: "Kubernetes", className: "text-[#326CE5]" },
  { icon: "GH", name: "GitHub", className: "text-white" },
  { icon: "F", name: "Flutter", className: "text-[#54C5F8]" },
  { icon: "RN", name: "React Native", className: "text-[#61DAFB]" },
  { icon: "C", name: "C++", className: "text-[#00599C]" },
];

const stackCategories = [
  {
    icon: "</>",
    title: "Frontend",
    description:
      "Interactive and responsive user interfaces for seamless experiences.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "▦",
    title: "Backend",
    description:
      "Robust and secure server solutions for scalable applications.",
    technologies: ["Laravel", "Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: "◉",
    title: "AI & Data",
    description:
      "Intelligent solutions using machine learning and advanced AI models.",
    technologies: ["Python", "TensorFlow", "OpenAI", "Pinecone"],
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    description:
      "Scalable infrastructure built for high availability and performance.",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: "▯",
    title: "Mobile",
    description:
      "Cross-platform mobile apps for better user engagement.",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
  },
];

// Individual technology items
function TechnologyItems({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...technologies].reverse() : technologies;

  return (
    <div className="technology-group">
      {items.map((tech) => (
        <div
          key={tech.name}
          className="flex shrink-0 items-center gap-2 px-5"
        >
          {tech.name === "AWS" ? (
            <span className="text-[11px] font-bold text-white">AWS</span>
          ) : (
            <>
              <span
                className={`flex h-6 min-w-6 items-center justify-center rounded-full text-[10px] font-bold ${tech.className}`}
              >
                {tech.icon}
              </span>

              <span className="text-[11px] font-semibold text-white">
                {tech.name}
              </span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

// Reusable infinite technology marquee
function TechnologyMarquee({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  return (
    <div className="technology-marquee">
      <div
        className={`technology-track ${
          reverse ? "technology-track-reverse" : ""
        }`}
      >
        <TechnologyItems reverse={reverse} />

        <div aria-hidden="true">
          <TechnologyItems reverse={reverse} />
        </div>
      </div>
    </div>
  );
}

export default function WorkingStack() {
  return (
    <section className="border-t border-[#DCE6F3] bg-[#F5F9FF]">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:pt-[102px] md:pb-[75px]">
        {/* Section Heading */}
        <div className="mb-7">
          <div className="mb-5 flex items-center gap-3">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#E85D04]">
              Our Working Stack
            </p>
          </div>

          <h2
            className="text-4xl font-semibold leading-tight tracking-tight text-[#061A40] md:text-5xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Modern Tools. Greater Possibilities.
          </h2>

          <p className="mt-2 max-w-2xl text-[12px] leading-5 text-[#5A6B8C] md:text-[13px]">
            We use the latest technologies and industry-leading tools to build
            scalable, secure and high-performing digital solutions.
          </p>
        </div>

        {/* Two-Row Technology Marquee */}
        <div className="mb-5 overflow-hidden rounded-xl bg-[#061A40] py-4 shadow-[0_8px_25px_rgba(6,26,64,0.12)]">
          <div className="flex flex-col gap-5">
            {/* First Row: Right to Left */}
            <TechnologyMarquee />

            {/* Second Row: Left to Right */}
            <TechnologyMarquee reverse />
          </div>
        </div>

        {/* Technology Category Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {stackCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-md border border-[#DCE6F3] bg-white p-4 shadow-[0_4px_15px_rgba(6,26,64,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#E85D04]/30 hover:shadow-[0_10px_25px_rgba(6,26,64,0.08)]"
            >
              <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-md bg-[#F5F9FF] text-[#061A40]">
                <span className="text-sm">{category.icon}</span>
              </div>

              <h3 className="text-[17px] font-bold text-[#061A40]">
                {category.title}
              </h3>

              <p className="mt-1.5 min-h-[52px] text-[14px] leading-5 text-[#5A6B8C]">
                {category.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {category.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-[#F5F9FF] px-2 py-1 text-[12px] font-medium text-[#5A6B8C]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}     
