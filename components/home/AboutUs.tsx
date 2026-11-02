
export default function AboutUs() {
  return (
    <section className="bg-[#F5F9FF]">
      <div className="mx-auto max-w-[1448px] px-6 py-8 md:px-10 md:py-10 xl:px-0">

        {/* Main About Section */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[65px]">

          {/* Left Content */}
          <div className="w-full">
            <div className="mb-7 flex items-center gap-3">
              <p className="!text-[#E85D04] text-[15px] font-bold uppercase tracking-[2.5px]">
                About Us
              </p>
            </div>

            <h2 className="max-w-[700px] text-[46px] font-bold leading-[1.02] tracking-tight text-[#061A40] sm:text-[56px] lg:text-[62px] xl:text-[68px]">
              <span className="block">
                Turning ideas into
              </span>
              <span className="block">
                real solutions.
              </span>
            </h2>

            <p className="mt-9 max-w-[690px] text-[18px] leading-[2.1] text-[#5A6B8C] sm:text-[19px] lg:text-[20px]">
              Black Origin IT is a software engineering firm that helps
              organizations grow with custom digital products, AI systems
              and automation. We combine engineering discipline, practical
              AI and long-term partnership to build software that solves
              real business problems.
            </p>

            <a
              href="/about-us"
              className="mt-10 inline-flex items-center justify-center rounded-xl bg-[#E85D04] px-9 py-5 text-[17px] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#061A40] hover:shadow-lg"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[20px] border border-[#E85D04]/30" />

              <div className="relative aspect-[1.23/1] w-full overflow-hidden rounded-[20px] shadow-[0_20px_45px_rgba(6,26,64,0.10)]">
                <img
                  src="/images/about%20us%20image.jpg"
                  alt="Black Origin office workspace"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061A40]/40 to-transparent" />
              </div>
            </div>
          </div>

        </div>

{/* Bottom Feature Section */}
<div className="mt-20 grid gap-8 border-t border-[#DCE6F3] pt-10 sm:grid-cols-3">

  <div>
    <h3 className="text-2xl font-semibold text-[#061A40]">
      Engineering-first
    </h3>
    <p className="mt-3 text-[18px] leading-8 text-[#5A6B8C]">
      Senior engineers lead every project - the people you talk to
      are the people building your software.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-semibold text-[#061A40]">
      AI where it earns its place
    </h3>
    <p className="mt-3 text-[18px] leading-8 text-[#5A6B8C]">
      We use AI and automation where they measurably improve a
      workflow, never as a buzzword.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-semibold text-[#061A40]">
      Built for the long term
    </h3>
    <p className="mt-3 text-[18px] leading-8 text-[#5A6B8C]">
      Clean architecture, documentation and support so the
      software keeps serving you after launch.
    </p>
  </div>

</div>

      </div>
    </section>
  );
}
