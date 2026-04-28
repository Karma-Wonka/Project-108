import { SectionEyebrow } from "../ui/SectionEyebrow";

export function SingleChortenScaleSection() {
  return (
    <section id="scale" className="section-container">
      <SectionEyebrow>Scale: A Single Chorten</SectionEyebrow>
      <h2 className="text-4xl md:text-5xl mb-12">
        How tall is <span className="onum">15</span> metres?
      </h2>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full">
          <img
            src="/assets/scale_figures.svg"
            alt="Scale Comparison of Chorten, Building, and Human"
            className="w-full h-auto object-contain drop-shadow-sm"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement?.classList.add(
                "flex",
                "items-end",
                "justify-around",
                "pb-10",
              );
            }}
          />

          <div className="absolute bottom-0 left-0 w-full flex justify-around items-end pt-4 border-t border-maroon/5 translate-y-full mt-4">
            <div className="flex flex-col items-center">
              <span className="caption uppercase tracking-[0.2em] text-[8px] text-ink/30 mb-1">
                Human
              </span>
              <span className="onum text-[10px] text-maroon">1.75m</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="caption uppercase tracking-[0.2em] text-[8px] text-ink/30 mb-1">
                Architecture
              </span>
              <span className="onum text-[10px] text-maroon">~10m</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="caption uppercase tracking-[0.2em] text-[8px] text-gold font-bold mb-1">
                Project 108
              </span>
              <span className="onum text-[10px] text-gold font-bold">15m</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-32 text-center text-ink-soft md:text-lg max-w-2xl mx-auto italic">
        Each Jangchub Chorten will stand roughly{" "}
        <span className="onum">50%</span> taller than a three-storey building,
        and over eight times the height of a person.
      </p>
    </section>
  );
}
