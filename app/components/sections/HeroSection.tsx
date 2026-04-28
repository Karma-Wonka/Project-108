import { motion } from "motion/react";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function HeroSection() {
  return (
    <header className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center bg-cream text-ink overflow-hidden pt-28 md:pt-40 pb-20 md:pb-28">
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none translate-x-1/4 -translate-y-1/4">
        <h1 className="font-serif text-[40rem] md:text-[60rem] leading-none">
          108
        </h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 w-full mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="md:col-span-8"
        >
          <SectionEyebrow>In Pursuit of peace</SectionEyebrow>
          <h1 className="text-6xl md:text-[96px] leading-[1.05] font-serif font-light mb-12 tracking-tight">
            A Royal initiative for a
            <span className="block italic font-medium text-gold">
              sacred gesture of peace.
            </span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-xl font-light">
            <span className="onum">108</span> Jangchub Chortens, each{" "}
            <span className="onum">15</span> metres tall, completed together in
            a single coordinated day along the Mao River.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.1, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[-5%] right-[-5%] md:bottom-[-10%] md:right-[-5%] w-[60%] md:w-[45%] lg:w-[35%] max-w-[800px] h-auto pointer-events-none select-none z-10"
      >
        <img
          src="/assets/hero_chorten-04.png"
          alt="Jangchub Chorten"
          className="w-full h-auto drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="absolute bottom-1/4 right-1/4 w-[150%] h-[150%] bg-gold/5 rounded-full blur-[150px] -z-10 translate-x-1/2 translate-y-1/2"></div>
      </motion.div>

      <div className="absolute bottom-16 left-0 w-full px-12 opacity-20 pointer-events-none">
        <div className="hairline relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex space-x-2">
            <div className="w-1.5 h-1.5 bg-ink rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-ink rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-ink rounded-full"></div>
          </div>
          <span className="absolute right-0 top-3 text-[9px] uppercase tracking-[0.5em] font-utility font-bold">
            Mao River Basin
          </span>
        </div>
      </div>
    </header>
  );
}
