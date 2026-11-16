import type { Job } from "./jobs";

export type CircularState = "upcoming" | "open" | "closing" | "closed";
type Dates = Pick<Job, "postedOn" | "deadline" | "vacancies">;

function parse(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDate(iso: string) {
  return parse(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// The deadline day itself is still open (daysLeft = 0 means "last day").
// A passed deadline always wins, even if postedOn is wrong or in the future.
export function getCircular(job: Dates, now: Date) {
  if (!job.deadline) return null;
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = parse(job.deadline);
  const daysLeft = Math.round((end.getTime() - today.getTime()) / 86400000);

  let state: CircularState = "open";
  if (daysLeft < 0) state = "closed";
  else if (job.postedOn && today < parse(job.postedOn)) state = "upcoming";
  else if (daysLeft <= 7) state = "closing";

  let progress = 0;
  if (state === "closed") progress = 100;
  else if (job.postedOn && state !== "upcoming") {
    const start = parse(job.postedOn);
    const span = end.getTime() - start.getTime();
    progress =
      span > 0
        ? Math.min(100, Math.max(0, ((today.getTime() - start.getTime()) / span) * 100))
        : 100;
  }

  return { state, daysLeft, progress: Math.round(progress) };
}
