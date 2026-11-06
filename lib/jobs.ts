export type Job = {
  slug: string;
  postedOn?: string; // YYYY-MM-DD
  deadline?: string; // YYYY-MM-DD
  vacancies?: number;
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
  niceToHave: string[];
  offer: string[];
};

export const jobs: Job[] = [
  {
    slug: "software-engineer",
    postedOn: "2027-08-01",
    deadline: "2027-01-20",
    vacancies: 10,
    department: "Engineering",
    title: "Software Engineer",
    mode: "Remote",
    type: "Full time",
    level: "Mid level",
    location: "Bangladesh",
    compensation: "Competitive",
    summary:
      "We are looking for a Software Engineer to design, build and maintain reliable web products for international clients. You will work closely with designers and teammates to ship features that are fast, secure and easy to maintain.",
    responsibilities: [
      "Design, develop, test, deploy and maintain software applications.",
      "Build APIs, integrations and database functionality.",
      "Write clean, secure, well-documented code and take part in code reviews.",
      "Investigate and fix bugs and production issues.",
      "Work with engineers, designers and clients, and share knowledge with the team.",
    ],
    requirements: [
      "Hands-on experience building web applications (for example PHP/Laravel, JavaScript/TypeScript, React/Next.js, Node.js or Python).",
      "Good knowledge of databases (MySQL/PostgreSQL), REST APIs and Git.",
      "Ability to work independently and communicate clearly in written English.",
      "Strong problem-solving skills and attention to code quality and security.",
      "A reliable laptop and internet connection for full-time remote work.",
    ],
    niceToHave: [
      "Experience with Docker, cloud services or CI/CD.",
      "Experience with AI/LLM integrations or workflow automation.",
      "Experience mentoring juniors or coordinating small teams.",
    ],
    offer: [
      "Remote, full-time work with international client projects.",
      "A clear engineering career path, from Software Engineer to Senior Engineer and Team Lead.",
      "Mentoring, code reviews and room to grow.",
    ],
  },
  {
    slug: "trainee-software-engineer",
    postedOn: "2027-06-01",
    deadline: "2027-08-25",
    vacancies: 20,
    department: "Engineering",
    title: "Trainee Software Engineer",
    mode: "Remote",
    type: "Full time",
    level: "Trainee",
    location: "Bangladesh",
    compensation: "Stipend",
    summary:
      "This role is for fresh graduates and early learners who want to start a career in software engineering. You will learn on real projects with guidance from experienced engineers, and grow into a confident, independent developer.",
    responsibilities: [
      "Learn our tools, codebase and development workflow with guidance from senior engineers.",
      "Build small features, fix bugs and write tests under supervision.",
      "Help build APIs, database queries and simple integrations.",
      "Write clean, documented code and take part in code reviews.",
      "Share progress in regular check-ins and ask questions early.",
    ],
    requirements: [
      "Basic knowledge of programming (JavaScript/TypeScript, PHP, Python or similar).",
      "Understanding of HTML, CSS, how the web works and basic Git.",
      "Clear written English and a willingness to take feedback well.",
      "A problem-solving mindset and attention to detail.",
      "A reliable laptop and internet connection.",
    ],
    niceToHave: [
      "A GitHub profile or personal / academic projects.",
      "Basic knowledge of React/Next.js, Laravel or Node.js.",
      "Familiarity with databases (MySQL/PostgreSQL) and REST APIs.",
      "Interest in Docker, cloud services or AI/LLM tools.",
    ],
    offer: [
      "Structured onboarding and a dedicated mentor.",
      "Hands-on work on real projects, with regular code reviews.",
      "A clear growth path toward Software Engineer.",
      "A monthly stipend while you learn.",
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
  niceToHave: [],
  offer: [],
};

export function findJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}

export function findApplyTarget(slug: string) {
  return slug === "general" ? generalJob : findJob(slug);
}

