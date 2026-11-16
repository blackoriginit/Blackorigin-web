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
    <section className="bg-[#061A40] px-6 py-16 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="mt-6 text-lg text-white/80">{description}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <StartProjectButton className="rounded-xl bg-[#E85D04] px-8 py-4 font-semibold text-white transition hover:opacity-90">
            {primaryLabel}
          </StartProjectButton>
          <Link
            href={secondaryHref}
            className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
