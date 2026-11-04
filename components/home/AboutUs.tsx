export default function AboutUs() {
  return (
    <section className="bg-[#F5F9FF]">
      <div className="mx-auto max-w-[1448px] px-6 py-8 md:px-10 md:py-10 xl:px-0">

        {/* Main About Section */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left Content */}
          <div className="w-full">
            <div className="mb-4 flex items-center gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#E85D04]">
                About Us
              </p>
            </div>

            <h2 className="max-w-[520px] text-[30px] font-bold leading-[1.12] tracking-tight text-[#061A40] sm:text-[36px] lg:text-[40px]">
              <span className="block">Turning ideas into</span>
              <span className="block">real solutions.</span>
            </h2>

            <p className="mt-5 max-w-[500px] text-[13px] leading-[1.85] text-[#5A6B8C] md:text-[14px]">
              Black Origin IT is a software engineering firm that helps
              organizations grow with custom digital products, AI systems
              and automation. We combine engineering discipline, practical
              AI and long-term partnership to build software that solves
              real business problems.
            </p>

            <a
              href="/about-us"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#E85D04] px-5 py-2.5 text-[13px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#061A40] hover:shadow-lg"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <div className="relative">
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[14px] border border-[#E85D04]/30" />

              <div className="relative aspect-[1.3/1] w-full overflow-hidden rounded-[14px] shadow-[0_14px_32px_rgba(6,26,64,0.10)]">
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
        <div className="mt-12 grid gap-7 border-t border-[#DCE6F3] pt-7 sm:grid-cols-3">

          <div>
            <h3 className="text-[16px] font-semibold text-[#061A40]">
              Engineering-first
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-[#5A6B8C]">
              Senior engineers lead every project - the people you talk to
              are the people building your software.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold text-[#061A40]">
              AI where it earns its place
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-[#5A6B8C]">
              We use AI and automation where they measurably improve a
              workflow, never as a buzzword.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold text-[#061A40]">
              Built for the long term
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-[#5A6B8C]">
              Clean architecture, documentation and support so the
              software keeps serving you after launch.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}