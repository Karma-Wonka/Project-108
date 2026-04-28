import { SectionEyebrow } from "../ui/SectionEyebrow";

export function ChortenSection() {
  return (
    <section id="chorten" className="bg-cream/30 py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionEyebrow>Understanding the Chorten</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl mb-8">
              What exactly is being built?
            </h2>
            <div className="space-y-6 text-lg text-ink-soft">
              <p>
                If you've travelled in Asia, you've almost certainly seen a
                stupa: a domed or tiered monument, sometimes white, sometimes
                gold, found on temple grounds, on mountain passes, and at
                crossroads. They are among the oldest architectural forms in the
                world.
              </p>
              <p>
                A chorten is not a building in the conventional sense. No one
                lives in it. No one worships inside it. It is a sealed sacred
                structure, filled with prayers, blessings, and spiritual texts,
                that radiates merit to all who come near it. Think of it as a
                physical form of prayer, made permanent in stone and earth.
              </p>
              <p>
                The tradition is over <span className="onum">2,500</span> years
                old. Over the centuries, they evolved into monuments
                commemorating key events in the Buddha's life, and into
                structures that communities build as offerings: for the
                wellbeing of the living and for the benefit of all sentient
                beings.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            {[
              {
                name: "Stupa",
                pron: "stoo-pah, Sanskrit",
                desc: "The universal term for a Buddhist sacred monument, meaning 'to heap,' referring to the original earthen mounds built over sacred relics.",
              },
              {
                name: "Chorten",
                pron: "chor-ten, Bhutanese",
                desc: "The Himalayan word for stupa, literally 'basis of offering.' A familiar part of the Bhutanese landscape found at village entrances and mountain passes.",
              },
              {
                name: "Jangchub Chorten",
                pron: "jang-chub chor-ten",
                desc: "The 'Stupa of Enlightenment,' the most significant of the eight classical types, built for Project 108.",
              },
            ].map((term, i) => (
              <div
                key={i}
                className="group border-b border-maroon/10 pb-8 last:border-0"
              >
                <h3 className="text-2xl mb-1">{term.name}</h3>
                <p className="italic text-ink/40 text-sm mb-4">{term.pron}</p>
                <p className="text-ink-soft leading-relaxed">{term.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
