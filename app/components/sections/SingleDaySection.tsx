import { SectionEyebrow } from "../ui/SectionEyebrow";

export function SingleDaySection() {
  return (
    <section
      id="single-day"
      className="bg-ink text-cream py-24 overflow-hidden relative"
    >
      <div className="absolute inset-y-0 right-0 w-full md:w-3/4 opacity-[0.15] pointer-events-none">
        <img
          src="/assets/buddha.png"
          alt="Sacred Background"
          className="h-full w-full object-cover translate-x-[33%] grayscale scale-110"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </div>
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <SectionEyebrow>
              <span className="text-gold">Why a Single Day</span>
            </SectionEyebrow>
            <h2 className="text-5xl md:text-[64px] mb-12 font-serif font-light leading-tight text-white">
              <span className="onum font-serif italic text-gold">40,000</span>{" "}
              volunteers. <br /> One coordinated day.
            </h2>
            <div className="space-y-8 text-lg font-light text-cream/70 leading-relaxed">
              <p>
                Project <span className="onum">108</span> is the culmination of
                planning, craftsmanship, and aligned intention. In Vajrayana
                Buddhism, when awareness is perfectly aligned, transformation
                can occur within a single moment.
              </p>
              <div className="pt-8 flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <h3 className="text-xl text-cream mb-4 italic font-serif">
                    Zhabto
                  </h3>
                  <p className="text-sm opacity-60">
                    The sacred tradition of voluntary communal work offered
                    freely as a form of spiritual practice.
                  </p>
                </div>
                <div className="flex-1 border-l border-cream/10 pl-8">
                  <h3 className="text-xl text-cream mb-4 italic font-serif">
                    Progress
                  </h3>
                  <p className="text-sm opacity-60">
                    Engineering and foundation preparation are already active
                    along the Mao River.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className="bg-cream/20 backdrop-blur-2xl border border-cream/20 rounded-[2.5rem] p-12 shadow-2xl transition-all duration-700 hover:bg-cream/30">
              <SectionEyebrow>The Comparison</SectionEyebrow>
              <div className="divide-y divide-cream/10 mt-8">
                {[
                  {
                    name: "Great Pyramid",
                    group: "20,000-30,000",
                    time: "~20 Years",
                  },
                  {
                    name: "Taj Mahal",
                    group: "20,000 artisans",
                    time: "~22 Years",
                  },
                  {
                    name: "Great Wall",
                    group: "Hundreds of thousands",
                    time: "Centuries",
                  },
                  {
                    name: "Project 108",
                    group: "40,000",
                    time: "1 DAY",
                    highlight: true,
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`py-6 flex justify-between items-center ${p.highlight ? "text-gold" : ""}`}
                  >
                    <div>
                      <div className="eyebrow text-cream/30 text-[9px] mb-1">
                        {p.name}
                      </div>
                      <div className="text-2xl font-serif onum">{p.group}</div>
                    </div>
                    <div className="text-right">
                      <div className="eyebrow text-cream/30 text-[9px] mb-1">
                        Duration
                      </div>
                      <div className="text-2xl font-serif onum">{p.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
