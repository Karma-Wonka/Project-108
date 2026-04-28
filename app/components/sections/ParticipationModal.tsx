import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { ParticipationType } from "../types";
import { SectionEyebrow } from "../ui/SectionEyebrow";

type ParticipationModalProps = {
  isOpen: boolean;
  formType: ParticipationType | null;
  onClose: () => void;
  onSelectType: (type: ParticipationType) => void;
};

export function ParticipationModal({
  isOpen,
  formType,
  onClose,
  onSelectType,
}: ParticipationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-maroon/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-cream rounded-[5px] w-full max-w-md overflow-hidden shadow-[0_30px_100px_-20px_rgba(45,20,25,0.3)] border border-ink/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-10 md:p-14">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-maroon/5 transition-colors group"
              >
                <X className="w-5 h-5 text-maroon/40 group-hover:text-maroon transition-colors" />
              </button>

              <div className="text-center mb-10">
                <SectionEyebrow>Participation</SectionEyebrow>
                <h2 className="text-3xl md:text-4xl font-serif italic text-ink">
                  Begin the Conversation
                </h2>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="eyebrow text-[9px] text-ink/40">
                    I would like to
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectType("patron")}
                      className={`py-3 px-4 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all ${
                        formType === "patron"
                          ? "bg-ink text-cream border-ink shadow-lg"
                          : "bg-transparent border-ink/10 text-ink/60 hover:border-ink/30"
                      }`}
                    >
                      Become a Patron
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectType("volunteer")}
                      className={`py-3 px-4 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all ${
                        formType === "volunteer"
                          ? "bg-ink text-cream border-ink shadow-lg"
                          : "bg-transparent border-ink/10 text-ink/60 hover:border-ink/30"
                      }`}
                    >
                      Volunteer
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1 group">
                    <label className="text-[10px] uppercase tracking-widest text-ink/30 font-body group-focus-within:text-gold transition-colors">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-ink/10 py-2 outline-none focus:border-gold transition-all font-body text-lg text-ink"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-1 group">
                    <label className="text-[10px] uppercase tracking-widest text-ink/30 font-body group-focus-within:text-gold transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-ink/10 py-2 outline-none focus:border-gold transition-all font-body text-lg text-ink"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-1 group">
                    <label className="text-[10px] uppercase tracking-widest text-ink/30 font-body group-focus-within:text-gold transition-colors">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-ink/10 py-2 outline-none focus:border-gold transition-all font-body text-lg text-ink"
                      placeholder="Your country"
                    />
                  </div>
                  <div className="space-y-1 group">
                    <label className="text-[10px] uppercase tracking-widest text-ink/30 font-body group-focus-within:text-gold transition-colors">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={2}
                      className="w-full bg-transparent border-b border-ink/10 py-2 outline-none focus:border-gold transition-all font-body text-lg text-ink resize-none"
                      placeholder="A few words..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full py-4 mt-4 shadow-xl hover:shadow-gold/20"
                >
                  Send Message
                </button>

                <p className="text-center text-[0.65rem] text-ink/30 italic">
                  Your query will be shared with the GMC Authority team. We
                  value your merit.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
