import { SectionEyebrow } from "../ui/SectionEyebrow";

export function HistoricalParallelSection() {
  return (
    <section className="bg-cream py-24 text-center overflow-hidden relative">
      <div className="section-container relative z-10 max-w-3xl">
        <SectionEyebrow>Historical Parallel</SectionEyebrow>
        <h2 className="text-4xl md:text-5xl mb-12">
          A tradition of sacred buildings
        </h2>
        <div className="space-y-6 text-lg text-ink-soft">
          <p>
            In Himalayan Buddhist tradition, King Songtsen Gampo established a
            network of <span className="onum">108</span> temples to anchor the
            Buddhist teachings.
          </p>
          <p>
            Project <span className="onum">108</span> continues this tradition.
            It is, at its heart, the same impulse: to build something sacred,
            together, as an offering of peace to a world that needs it.
          </p>
        </div>
      </div>
    </section>
  );
}
