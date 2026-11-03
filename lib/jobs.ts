export type Job = {
  slug: string;
  department: string;
  title: string;
  mode: string;
  type: string;
  level: string;
  location: string;
  compensation: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "software-engineer",
    department: "Engineering",
    title: "Software Engineer",
    mode: "On-site",
    type: "Full time",
    level: "Mid level",
    location: "Bangladesh",
    compensation: "Competitive",
    summary:
      "We are looking for a Software Engineer to design, build and maintain reliable web products. You will work closely with designers and teammates to ship features that are fast, accessible and easy to maintain.",
    responsibilities: [
      "Build and ship features using modern web technologies",
      "Write clean, tested and maintainable code",
      "Review code and share knowledge with the team",
      "Work with designers and product owners to deliver quality work",
    ],
    requirements: [
      "Solid experience with JavaScript or TypeScript",
      "Experience with React or Next.js and a backend language or framework",
      "Understanding of databases, APIs and version control (Git)",
      "Good communication and a collaborative mindset",
    ],
  },
  {
    slug: "trainee-software-engineer",
    department: "Engineering",
    title: "Trainee Software Engineer",
    mode: "On-site",
    type: "Full time",
    level: "Trainee",
    location: "Bangladesh",
    compensation: "Stipend",
    summary:
      "This role is for fresh graduates and early learners who want to start a career in software engineering. You will learn on real projects with guidance from experienced engineers.",
    responsibilities: [
      "Learn our tools, codebase and development workflow",
      "Build small features and fix bugs under guidance",
      "Write clean code and learn to test it",
      "Take part in code reviews and team discussions",
    ],
    requirements: [
      "Basic knowledge of programming (JavaScript, Python or similar)",
      "Understanding of HTML, CSS and how the web works",
      "Eagerness to learn and take feedback well",
      "A GitHub profile or personal projects are a plus",
    ],
  },
];

export const generalJob: Job = {
  slug: "general",
  department: "Open application",
  title: "General application",
  mode: "Flexible",
  type: "Open",
  level: "Any level",
  location: "Bangladesh",
  compensation: "To be discussed",
  summary: "Tell us about yourself and we will reach out when a suitable role opens.",
  responsibilities: [],
  requirements: [],
};

export function findJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}

export function findApplyTarget(slug: string) {
  return slug === "general" ? generalJob : findJob(slug);
}
