import { SectionEyebrow } from "../ui/SectionEyebrow";

export function FormationSection() {
  return (
    <section
      id="formation"
      className="py-0 relative overflow-hidden bg-maroon text-cream"
    >
      <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionEyebrow>
            <span className="text-gold">The Formation</span>
          </SectionEyebrow>
          <h2 className="text-4xl md:text-6xl text-cream mb-8">
            A line of prayer across the land
          </h2>
          <p className="text-lg text-cream/80 max-w-md">
            The <span className="onum">108</span> chortens will stand in a
            single file along the Mao River, spaced{" "}
            <span className="onum">108</span> metres apart, centre to centre.
            The result is a procession: ordered, disciplined, legible, and
            monumental.
          </p>
          <div className="mt-12 p-8 border border-cream/20 rounded-2xl bg-cream/5 backdrop-blur-sm">
            <h4 className="eyebrow text-white mb-2">Formation</h4>
            <p className="text-sm font-light leading-relaxed">
              SINGLE FILE ALONG THE MAO RIVER, <span className="onum">108</span>{" "}
              M CENTRE-TO-CENTRE
            </p>
          </div>
        </div>
        <div className="relative h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-ink/20 group cursor-pointer transition-all duration-700 hover:shadow-gold/10 hover:-translate-y-1">
          <img
            src="/assets/landscape_mao_chhu.webp"
            alt="Mao River Landscape"
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="eyebrow text-white/40 mb-2">
              Aerial View Visualization
            </div>
            <p className="text-sm italic text-white/60">
              A procession of 108 sacred monuments following the curve of the
              Mao River.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
