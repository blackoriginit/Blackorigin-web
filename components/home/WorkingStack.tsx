import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiDocker,
  SiGit,
  SiFigma,
  SiVuedotjs,
  SiAngular,
  SiJavascript,
  SiTailwindcss,
  SiPhp,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiKubernetes,
  SiGithub,
  SiFlutter,
  SiCplusplus,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

// Official logos. Brand colors are slightly lightened where the
// original color is too dark to read on the navy background.
const technologies: Technology[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#4B8BBE" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "PHP", icon: SiPhp, color: "#8993BE" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4F7CE8" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#3F7CEB" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "C++", icon: SiCplusplus, color: "#4B9CD3" },
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
    description: "Cross-platform mobile apps for better user engagement.",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
  },
];

// One group of technology items (the marquee needs two identical groups)
function TechnologyItems({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...technologies].reverse() : technologies;

  return (
    <div className="technology-group">
      {items.map((tech) => {
        const Icon = tech.icon;

        return (
          <div
            key={tech.name}
            className="flex shrink-0 items-center gap-2.5 px-5"
          >
            <Icon size={18} color={tech.color} aria-hidden="true" />

            <span className="whitespace-nowrap text-[12px] font-semibold text-white">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// Reusable infinite technology marquee
function TechnologyMarquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="technology-marquee">
      <div
        className={`technology-track ${
          reverse ? "technology-track-reverse" : ""
        }`}
      >
        <TechnologyItems reverse={reverse} />

        {/* Identical second copy, hidden from screen readers */}
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
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:pb-[75px] md:pt-[102px]">
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

              <h3 className="text-[16px] font-bold text-[#061A40]">
                {category.title}
              </h3>

              <p className="mt-1.5 min-h-[60px] text-[12px] leading-5 text-[#5A6B8C]">
                {category.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {category.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-[#F5F9FF] px-2 py-1 text-[11px] font-medium text-[#5A6B8C]"
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