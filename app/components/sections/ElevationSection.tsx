import { SectionEyebrow } from "../ui/SectionEyebrow";

export function ElevationSection() {
  return (
    <section className="section-container">
      <SectionEyebrow>Architectural Elevation</SectionEyebrow>
      <h2 className="text-4xl md:text-5xl mb-12">
        Jangchub Chorten (Stupa of Enlightenment)
      </h2>
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 flex justify-center items-center h-[500px] md:h-[650px]">
          <img
            src="/assets/elevation.svg"
            alt="Technical Elevation"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="lg:col-span-2 space-y-6">
          {[
            {
              name: "NYIM-DA",
              desc: "Moon, Sun, and Flame. Compassion, Wisdom, and their Union.",
            },
            {
              name: "DHUG",
              desc: "The parasol (canopy). Spiritual protection from all negative influences.",
            },
            {
              name: "KHORLO",
              desc: "The 13 rings of the spire. Represents the 13 stages to reach Buddhahood.",
            },
            {
              name: "BUM-PA",
              desc: "The main rounded dome (vase). It symbolises the Pure Body of the Buddha.",
            },
            {
              name: "LHAKHANG",
              desc: "The niche or window. Holds the image of a Buddha.",
            },
            {
              name: "BANGRIM",
              desc: "The tiered steps representing the Four Noble Truths.",
            },
            {
              name: "THRI",
              desc: "The square base/pedestal. Symbolises the Earth Element.",
            },
          ].map((part, i) => (
            <div key={i} className="flex gap-4">
              <span className="font-utility text-[0.6rem] text-gold pt-1.5">
                •
              </span>
              <div>
                <h4 className="font-body text-[0.7rem] uppercase tracking-widest text-maroon font-semibold mb-1">
                  {part.name}
                </h4>
                <p className="text-sm text-ink-soft leading-tight">
                  {part.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
