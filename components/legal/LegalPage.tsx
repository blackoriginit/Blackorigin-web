type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <div>
      <section className="bg-[#061A40] px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[32px] font-medium leading-[1.25] tracking-[-0.5px] sm:text-[40px] lg:text-[48px]">{title}</h1>
          <p className="mt-4 text-lg text-white/80">{intro}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl text-[#061A40]">
                {section.heading}
              </h2>
              {section.paragraphs.map((text, i) => (
                <p key={i} className="mt-3 leading-7 text-gray-700">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
