import { SectionEyebrow } from "../ui/SectionEyebrow";

export function NumberSection() {
  return (
    <section id="number" className="section-container text-center">
      <SectionEyebrow>The Number</SectionEyebrow>
      <h1 className="text-9xl md:text-[14rem] font-display onum mb-4 text-gold/30">
        108
      </h1>
      <h2 className="text-4xl md:text-6xl mb-12">
        Why <span className="onum">108</span>?
      </h2>
      <div className="max-w-3xl mx-auto space-y-12 text-left">
        <p className="text-xl md:text-2xl text-ink font-light italic mb-16 border-l-2 border-gold/20 pl-8">
          The number <span className="onum">108</span> appears with striking
          consistency across the world's spiritual and scientific traditions. A
          point where the cosmic and the personal converge.
        </p>

        <div className="divide-y divide-maroon/10">
          {[
            {
              label: "Astronomy",
              desc: "The distance between the Earth and the Sun is approximately 108 times the Sun's diameter. The distance between the Earth and the Moon is approximately 108 times the Moon's diameter. These are measurable, scientific facts, not metaphors.",
            },
            {
              label: "Buddhism",
              desc: "The complete teachings of the Buddha are preserved in exactly 108 volumes. Practitioners count 108 beads on a prayer mala, and ring temple bells 108 times.",
            },
            {
              label: "Hinduism",
              desc: "There are 108 Upanishads. Many Hindu deities have 108 names. In yoga, the sun salutation is traditionally performed in cycles of 108.",
            },
            {
              label: "Mathematics",
              desc: "108 is the product of 1¹ × 2² × 3³. A number that has fascinated mathematicians for its elegant internal structure and recurrence in natural geometry.",
            },
          ].map((ref, i) => (
            <div key={i} className="py-8 grid md:grid-cols-3 gap-6">
              <div className="eyebrow text-maroon pt-1">{ref.label}</div>
              <div className="md:col-span-2 text-ink-soft leading-relaxed">
                {ref.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
