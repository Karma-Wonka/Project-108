import { SectionEyebrow } from "../ui/SectionEyebrow";

export function ProjectSection() {
  return (
    <section
      id="project"
      className="section-container grid md:grid-cols-12 gap-16"
    >
      <div className="md:col-span-12">
        <SectionEyebrow>The Project</SectionEyebrow>
      </div>
      <div className="md:col-span-7">
        <h2 className="text-5xl md:text-[72px] leading-[1.05] mb-12 font-serif font-light tracking-tight">
          Bhutan offers a gift of <br />
          <span className="italic font-medium text-gold">
            merit to the world.
          </span>
        </h2>
        <div className="space-y-8 text-lg md:text-xl text-ink/70 leading-relaxed font-light">
          <p>
            Project <span className="onum">108</span> is a Royal initiative to
            complete <span className="onum">108</span> Jangchub Chortens in one
            coordinated day in Gelephu Mindfulness City, Bhutan. Each chorten
            will stand <span className="onum">15</span> metres tall. The full
            line will be positioned <span className="onum">108</span> metres
            apart, in a single file along the Mao River.
          </p>
          <p>
            Not a cluster of monuments, but a procession. In the Buddhist
            tradition, building a chorten is one of the most meritorious acts a
            person can undertake, a physical form of prayer, made permanent in
            stone and earth.
          </p>
        </div>
      </div>
      <div className="md:col-span-5 flex flex-col justify-center">
        <div className="border-l-2 border-gold pl-10 py-4 max-w-sm">
          <blockquote className="italic font-serif text-xl md:text-2xl opacity-80 mb-6 leading-relaxed">
            "We must do it to prove to ourselves that, as we face the challenges
            ahead, there is no limit to what we can achieve when we stand
            together."
          </blockquote>
          <cite className="eyebrow text-ink/40 font-bold tracking-widest not-italic">
            &mdash; His Majesty The King
          </cite>
        </div>
      </div>
    </section>
  );
}
