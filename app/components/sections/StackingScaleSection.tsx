import { motion } from "motion/react";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function StackingScaleSection() {
  return (
    <section className="bg-maroon py-24 text-cream">
      <div className="section-container">
        <SectionEyebrow>
          <span className="text-gold">Scale: All 108 Together</span>
        </SectionEyebrow>
        <h2 className="text-4xl md:text-6xl text-cream mb-16">
          If stacked vertically
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-cream/70">
            <p>
              <span className="onum font-display text-4xl text-cream block mb-4">
                1.62 km
              </span>
              <span className="onum">108</span> chortens at{" "}
              <span className="onum">15</span> metres each would rise{" "}
              <span className="onum">1.62</span> kilometres into the sky. Nearly
              twice the height of the Burj Khalifa. Roughly five Eiffel Towers.
              More than eleven Great Pyramids.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                name: "Project 108",
                size: "100%",
                val: "1.62 km",
                color: "bg-gold",
              },
              {
                name: "Burj Khalifa",
                size: "51.1%",
                val: "828 m",
                color: "bg-cream/40",
              },
              {
                name: "Eiffel Tower",
                size: "20.3%",
                val: "330 m",
                color: "bg-cream/20",
              },
              {
                name: "Great Pyramid",
                size: "8.5%",
                val: "139 m",
                color: "bg-cream/10",
              },
            ].map((bar, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="eyebrow text-white text-[0.6rem]">
                    {bar.name}
                  </span>
                  <span className="onum text-[0.7rem]">{bar.val}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: bar.size }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`h-full ${bar.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-16 text-sm text-cream/40 max-w-xl italic">
          The Project <span className="onum">108</span> bar is segmented into{" "}
          <span className="onum">108</span> divisions. Together, they form a
          sacred presence nearly twice the height of the world's tallest
          building.
        </p>
      </div>
    </section>
  );
}
