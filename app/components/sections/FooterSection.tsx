import { Mail, Phone } from "lucide-react";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function FooterSection() {
  return (
    <footer id="contact" className="bg-maroon text-cream overflow-hidden py-5">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-end">
          <div className="space-y-12">
            <div className="space-y-4">
              <SectionEyebrow>
                <span className="text-gold">Contact Us</span>
              </SectionEyebrow>
              <h2 className="text-4xl md:text-6xl text-cream font-light">
                Begin the Conversation
              </h2>
              <p className="text-cream/60 max-w-md italic">
                Whether you wish to become a patron or volunteer, we warmly
                invite you to reach out. Preparations are already underway.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl text-gold font-light">
                Gelephu Mindfulness City Authority
              </h3>
              <div className="space-y-4 text-cream/40 max-w-sm leading-relaxed text-sm">
                <p>
                  This act of collective prayer and spiritual practice comes in
                  a period that Buddhist masters have described as degenerate
                  times.
                </p>
                <p>
                  For all peoples, it is a reminder of the need for peace and
                  spiritual protection. We welcome all to this collective act of
                  merit.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:108@gmc.bt"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-body text-sm tracking-widest hover:text-gold transition-colors">
                    108@GMC.BT
                  </span>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-full">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-body text-sm tracking-widest onum">
                    +975 77117708
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-end relative">
            <img
              src="hero_chorten-04.png"
              alt="Sacred Element"
              className="w-full max-w-[600px] h-auto pointer-events-none opacity-20"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>

        <div className="mt-8 pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.6rem] uppercase tracking-widest text-cream/20 font-body relative z-10">
          <span>© 2026 GELEPHU MINDFULNESS CITY AUTHORITY</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Notice
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Downloads
            </a>
            <a
              href="mailto:108@gmc.bt"
              className="hover:text-gold transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
