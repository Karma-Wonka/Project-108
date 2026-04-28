import { ChevronRight } from "lucide-react";
import { ParticipationType } from "../types";
import { SectionEyebrow } from "../ui/SectionEyebrow";

type TakePartSectionProps = {
  onOpenModal: (type: ParticipationType) => void;
};

export function TakePartSection({ onOpenModal }: TakePartSectionProps) {
  return (
    <section id="take-part" className="section-container">
      <SectionEyebrow>Invitation to Participate</SectionEyebrow>
      <h2 className="text-4xl md:text-6xl mb-4 text-center">
        Two ways to take part
      </h2>
      <p className="text-center text-xl text-ink-soft/70 mb-20">
        Project <span className="onum">108</span> is shaped by two forces: those
        who offer the chortens and those who build them. Both are acts of merit.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="card-premium border-2 border-transparent hover:border-gold/20 flex flex-col items-center text-center p-12">
          <SectionEyebrow>Become a Patron</SectionEyebrow>
          <div className="mb-8">
            <span className="caption block uppercase mb-1">Starting from</span>
            <div className="text-4xl md:text-5xl font-display font-medium text-maroon onum">
              USD 200,000
            </div>
            <span className="italic text-ink-soft/40 text-sm">
              Per Chorten, flexible by conversation
            </span>
          </div>
          <div className="space-y-6 text-ink-soft leading-relaxed flex-1 text-sm md:text-base">
            <p>
              Each of the <span className="onum">108</span> Jangchub Chortens
              may be offered by an individual, a family, a community, or an
              institution.
            </p>
            <p>
              Patronage covers construction, sacred materials, and consecration
              by Buddhist masters.
            </p>
            <p>
              A plaque will provide permanent recognition for the dedication
              across generations.
            </p>
          </div>
          <button
            onClick={() => onOpenModal("patron")}
            className="btn btn-primary mt-12 px-10 whitespace-nowrap group"
          >
            Become a Patron
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="card-premium border-2 border-transparent hover:border-gold/20 flex flex-col items-center text-center p-12">
          <SectionEyebrow>Join the Build</SectionEyebrow>
          <div className="mb-8">
            <span className="caption block uppercase mb-1">
              Volunteers Needed
            </span>
            <div className="text-4xl md:text-5xl font-display font-medium text-maroon onum">
              40,000
            </div>
          </div>
          <div className="space-y-6 text-ink-soft leading-relaxed flex-1 text-sm md:text-base">
            <p>
              Tens of thousands are already at work along the Mao River. For the
              final act, we need <span className="onum">40,000</span> pairs of
              hands simultaneously.
            </p>
            <p>
              Volunteers will be trained in advance. No specialist skills
              required. What matters is willingness and purpose.
            </p>
            <p>
              The tradition of Zhabto is open to all. The world is welcome to
              join us in GMC.
            </p>
          </div>
          <button
            onClick={() => onOpenModal("volunteer")}
            className="btn btn-outline mt-12 px-10 whitespace-nowrap group"
          >
            Join the Build
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
