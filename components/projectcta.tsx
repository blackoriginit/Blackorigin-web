import Link from "next/link";
import StartProjectButton from "@/components/startprojectmodal";

type ProjectCTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function ProjectCTA({
  title = "Have a project in mind?",
  description = "Tell us what you are trying to build. We will reply with a clear next step.",
  primaryLabel = "Start a Project",
  secondaryLabel = "Contact Black Origin",
  secondaryHref = "/contact",
}: ProjectCTAProps) {
  return (
    <section className="theme-ash-panel bg-[#061A40] px-6 py-16 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{title}</h2>
        <p className="mt-6 text-lg text-white/80">{description}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <StartProjectButton className="bo-btn bo-btn-primary">
            {primaryLabel}
          </StartProjectButton>
          <Link
            href={secondaryHref}
            className="bo-btn bo-btn-outline"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
