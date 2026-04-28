'use client';


import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  FileText, 
  History, 
  MapPin, 
  Layers, 
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const SectionEyebrow = ({ children }: { children: ReactNode }) => (
  <span className="eyebrow block mb-4">{children}</span>
);

const ChortenIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 150" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1"
  >
    {/* Simplified Jangchub Chorten shape */}
    <path d="M50 10 L50 25" /> {/* Spire top */}
    <circle cx="50" cy="5" r="3" /> {/* Top circle */}
    <path d="M40 25 L60 25 L55 50 L45 50 Z" /> {/* Spire rings */}
    <path d="M30 50 L70 50 Q80 75 70 100 L30 100 Q20 75 30 50 Z" /> {/* Bumpa (dome) */}
    <rect x="20" y="100" width="60" height="15" /> {/* Tier 1 */}
    <rect x="15" y="115" width="70" height="15" /> {/* Tier 2 */}
    <rect x="10" y="130" width="80" height="20" /> {/* Base */}
  </svg>
);

// --- Content Sections ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<'patron' | 'volunteer' | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type: 'patron' | 'volunteer') => {
    setFormType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream-light selection:bg-maroon/10 selection:text-maroon">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/70 backdrop-blur-lg py-4 border-b border-ink/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="eyebrow opacity-60 mb-0.5">Project</span>
            <span className="text-2xl md:text-3xl font-serif font-bold italic tracking-tight text-ink leading-none">108</span>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-12 xl:gap-16">
            <a href="#project" className="eyebrow text-ink/70 hover:text-gold transition-colors">The Project</a>
            <a href="#chorten" className="eyebrow text-ink/70 hover:text-gold transition-colors">The Chorten</a>
            <a href="#scale" className="eyebrow text-ink/70 hover:text-gold transition-colors">Scale</a>
            <a href="#single-day" className="eyebrow text-ink/70 hover:text-gold transition-colors">Single Day</a>
            <a href="#take-part" className="btn btn-primary px-6 py-2.5 whitespace-nowrap">
              Take Part
            </a>
          </div>
          <a 
            href="#take-part"
            className="md:hidden btn btn-primary px-4 py-2"
          >
            Take Part
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center bg-cream text-ink overflow-hidden pt-28 md:pt-40 pb-20 md:pb-28">
        {/* Large Background Numerals */}
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none translate-x-1/4 -translate-y-1/4">
          <h1 className="font-serif text-[40rem] md:text-[60rem] leading-none">108</h1>
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
              <span className="block italic font-medium text-gold">sacred gesture of peace.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-xl font-light">
              <span className="onum">108</span> Jangchub Chortens, each <span className="onum">15</span> metres tall, completed together in a single coordinated day along the Mao River.
            </p>
          </motion.div>
        </div>

        {/* Zoomed Hero Chorten */}
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
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute bottom-1/4 right-1/4 w-[150%] h-[150%] bg-gold/5 rounded-full blur-[150px] -z-10 translate-x-1/2 translate-y-1/2"></div>
        </motion.div>

        {/* Mao River Visual Element */}
        <div className="absolute bottom-16 left-0 w-full px-12 opacity-20 pointer-events-none">
          <div className="hairline relative">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 flex space-x-2">
              <div className="w-1.5 h-1.5 bg-ink rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-ink rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-ink rounded-full"></div>
            </div>
            <span className="absolute right-0 top-3 text-[9px] uppercase tracking-[0.5em] font-utility font-bold">Mao River Basin</span>
          </div>
        </div>
      </header>

      {/* Stat Strip */}
      <section className="bg-cream-light border-y border-ink/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-ink/10">
          {[
            { value: "108", label: "Chortens" },
            { value: "15 m", label: "Height" },
            { value: "108 m", label: "Spacing" },
            { value: "1.62 km", label: "Stacked Height" },
          ].map((stat, i) => (
            <div key={i} className="py-10 md:py-14 px-8 text-center md:text-left">
              <div className="eyebrow opacity-40 mb-3">{stat.label}</div>
              <div className="text-4xl md:text-5xl font-serif text-ink onum font-light">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Project */}
      <section id="project" className="section-container grid md:grid-cols-12 gap-16">
        <div className="md:col-span-12">
          <SectionEyebrow>The Project</SectionEyebrow>
        </div>
        <div className="md:col-span-7">
          <h2 className="text-5xl md:text-[72px] leading-[1.05] mb-12 font-serif font-light tracking-tight">
            Bhutan offers a gift of <br/>
            <span className="italic font-medium text-gold">merit to the world.</span>
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-ink/70 leading-relaxed font-light">
            <p>
              Project <span className="onum">108</span> is a Royal initiative to complete <span className="onum">108</span> Jangchub Chortens in 
              one coordinated day in Gelephu Mindfulness City, Bhutan. Each chorten 
              will stand <span className="onum">15</span> metres tall. The full line will be positioned <span className="onum">108</span> metres apart, 
              in a single file along the Mao River.
            </p>
            <p>
              Not a cluster of monuments, but a procession. In the Buddhist tradition, building a chorten is one of the most 
              meritorious acts a person can undertake, a physical form of 
              prayer, made permanent in stone and earth.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center">
            <div className="border-l-2 border-gold pl-10 py-4 max-w-sm">
               <blockquote className="italic font-serif text-xl md:text-2xl opacity-80 mb-6 leading-relaxed">
                  "We must do it to prove to ourselves that, as we face the challenges ahead, there is no limit to what we can achieve when we stand together."
               </blockquote>
               <cite className="eyebrow text-ink/40 font-bold tracking-widest not-italic">
                  &mdash; His Majesty The King
               </cite>
            </div>
        </div>
      </section>

      {/* Understanding the Chorten */}
      <section id="chorten" className="bg-cream/30 py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionEyebrow>Understanding the Chorten</SectionEyebrow>
              <h2 className="text-4xl md:text-5xl mb-8">What exactly is being built?</h2>
              <div className="space-y-6 text-lg text-ink-soft">
                <p>
                  If you've travelled in Asia, you've almost certainly seen a stupa: a 
                  domed or tiered monument, sometimes white, sometimes gold, 
                  found on temple grounds, on mountain passes, and at crossroads. 
                  They are among the oldest architectural forms in the world.
                </p>
                <p>
                  A chorten is not a building in the conventional sense. No one lives 
                  in it. No one worships inside it. It is a sealed sacred structure, 
                  filled with prayers, blessings, and spiritual texts, that radiates 
                  merit to all who come near it. Think of it as a physical form of 
                  prayer, made permanent in stone and earth.
                </p>
                <p>
                  The tradition is over <span className="onum">2,500</span> years old. Over the centuries, they evolved into monuments commemorating key 
                  events in the Buddha's life, and into structures that communities 
                  build as offerings: for the wellbeing of the living and for the benefit of all sentient beings.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              {[
                { name: "Stupa", pron: "stoo-pah, Sanskrit", desc: "The universal term for a Buddhist sacred monument, meaning 'to heap,' referring to the original earthen mounds built over sacred relics." },
                { name: "Chorten", pron: "chor-ten, Bhutanese", desc: "The Himalayan word for stupa, literally 'basis of offering.' A familiar part of the Bhutanese landscape found at village entrances and mountain passes." },
                { name: "Jangchub Chorten", pron: "jang-chub chor-ten", desc: "The 'Stupa of Enlightenment,' the most significant of the eight classical types, built for Project 108." }
              ].map((term, i) => (
                <div key={i} className="group border-b border-maroon/10 pb-8 last:border-0">
                  <h3 className="text-2xl mb-1">{term.name}</h3>
                  <p className="italic text-ink/40 text-sm mb-4">{term.pron}</p>
                  <p className="text-ink-soft leading-relaxed">{term.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Elevation */}
      <section className="section-container">
         <SectionEyebrow>Architectural Elevation</SectionEyebrow>
         <h2 className="text-4xl md:text-5xl mb-12">Jangchub Chorten (Stupa of Enlightenment)</h2>
         <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 flex justify-center items-center h-[500px] md:h-[650px]">
               <img 
                 src="/assets/elevation.svg" 
                 alt="Technical Elevation" 
                 className="w-full h-full object-contain"
               />
            </div>
            <div className="lg:col-span-2 space-y-6">
               {[
                 { name: "NYIM-DA", desc: "Moon, Sun, and Flame. Compassion, Wisdom, and their Union." },
                 { name: "DHUG", desc: "The parasol (canopy). Spiritual protection from all negative influences." },
                 { name: "KHORLO", desc: "The 13 rings of the spire. Represents the 13 stages to reach Buddhahood." },
                 { name: "BUM-PA", desc: "The main rounded dome (vase). It symbolises the Pure Body of the Buddha." },
                 { name: "LHAKHANG", desc: "The niche or window. Holds the image of a Buddha." },
                 { name: "BANGRIM", desc: "The tiered steps representing the Four Noble Truths." },
                 { name: "THRI", desc: "The square base/pedestal. Symbolises the Earth Element." }
               ].map((part, i) => (
                 <div key={i} className="flex gap-4">
                    <span className="font-utility text-[0.6rem] text-gold pt-1.5">•</span>
                    <div>
                       <h4 className="font-body text-[0.7rem] uppercase tracking-widest text-maroon font-semibold mb-1">{part.name}</h4>
                       <p className="text-sm text-ink-soft leading-tight">{part.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Formation */}
      <section id="formation" className="py-0 relative overflow-hidden bg-maroon text-cream">
         <div className="section-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
               <SectionEyebrow><span className="text-gold">The Formation</span></SectionEyebrow>
               <h2 className="text-4xl md:text-6xl text-cream mb-8">A line of prayer across the land</h2>
               <p className="text-lg text-cream/80 max-w-md">
                 The <span className="onum">108</span> chortens will stand in a single file along the Mao River, spaced <span className="onum">108</span> metres apart, centre to centre. 
                 The result is a procession: ordered, disciplined, legible, and monumental.
               </p>
               <div className="mt-12 p-8 border border-cream/20 rounded-2xl bg-cream/5 backdrop-blur-sm">
                  <h4 className="eyebrow text-white mb-2">Formation</h4>
                  <p className="text-sm font-light leading-relaxed">
                    SINGLE FILE ALONG THE MAO RIVER, <span className="onum">108</span> M CENTRE-TO-CENTRE
                  </p>
               </div>
            </div>
            <div className="relative h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-ink/20 group cursor-pointer transition-all duration-700 hover:shadow-gold/10 hover:-translate-y-1">
               <img 
                 src="/assets/landscape_mao_chhu.webp" 
                 alt="Mao River Landscape" 
                 className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                 onError={(e) => (e.currentTarget.style.display = 'none')}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent"></div>
               <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="eyebrow text-white/40 mb-2">Aerial View Visualization</div>
                  <p className="text-sm italic text-white/60">A procession of 108 sacred monuments following the curve of the Mao River.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Scale: Single Chorten */}
      <section id="scale" className="section-container">
         <SectionEyebrow>Scale: A Single Chorten</SectionEyebrow>
         <h2 className="text-4xl md:text-5xl mb-12">How tall is <span className="onum">15</span> metres?</h2>
         <div className="flex flex-col items-center justify-center">
            <div className="relative w-full">
               <img 
                 src="/assets/scale_figures.svg" 
                 alt="Scale Comparison of Chorten, Building, and Human" 
                 className="w-full h-auto object-contain drop-shadow-sm"
                 onError={(e) => {
                   // Fallback visual if asset is missing/empty
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement?.classList.add('flex', 'items-end', 'justify-around', 'pb-10');
                 }}
               />

               {/* Scale Labels */}
               <div className="absolute bottom-0 left-0 w-full flex justify-around items-end pt-4 border-t border-maroon/5 translate-y-full mt-4">
                  <div className="flex flex-col items-center">
                    <span className="caption uppercase tracking-[0.2em] text-[8px] text-ink/30 mb-1">Human</span>
                    <span className="onum text-[10px] text-maroon">1.75m</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="caption uppercase tracking-[0.2em] text-[8px] text-ink/30 mb-1">Architecture</span>
                    <span className="onum text-[10px] text-maroon">~10m</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="caption uppercase tracking-[0.2em] text-[8px] text-gold font-bold mb-1">Project 108</span>
                    <span className="onum text-[10px] text-gold font-bold">15m</span>
                  </div>
               </div>
            </div>
         </div>
         <p className="mt-32 text-center text-ink-soft md:text-lg max-w-2xl mx-auto italic">
           Each Jangchub Chorten will stand roughly <span className="onum">50%</span> taller than a three-storey building, and over eight times the height of a person.
         </p>
      </section>

      {/* Scale: Stacking */}
      <section className="bg-maroon py-24 text-cream">
         <div className="section-container">
            <SectionEyebrow><span className="text-gold">Scale: All 108 Together</span></SectionEyebrow>
            <h2 className="text-4xl md:text-6xl text-cream mb-16">If stacked vertically</h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-6 text-lg text-cream/70">
                  <p>
                    <span className="onum font-display text-4xl text-cream block mb-4">1.62 km</span>
                    <span className="onum">108</span> chortens at <span className="onum">15</span> metres each would rise <span className="onum">1.62</span> kilometres into the sky. Nearly twice the height of the Burj Khalifa. Roughly five Eiffel Towers. More than eleven Great Pyramids.
                  </p>
               </div>
               <div className="space-y-8">
                  {[
                    { name: "Project 108", size: "100%", val: "1.62 km", color: "bg-gold" },
                    { name: "Burj Khalifa", size: "51.1%", val: "828 m", color: "bg-cream/40" },
                    { name: "Eiffel Tower", size: "20.3%", val: "330 m", color: "bg-cream/20" },
                    { name: "Great Pyramid", size: "8.5%", val: "139 m", color: "bg-cream/10" }
                  ].map((bar, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between items-end">
                          <span className="eyebrow text-white text-[0.6rem]">{bar.name}</span>
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
              The Project <span className="onum">108</span> bar is segmented into <span className="onum">108</span> divisions. Together, they form a sacred presence nearly twice the height of the world's tallest building.
            </p>
         </div>
      </section>

      {/* Why 108 */}
      <section id="number" className="section-container text-center">
         <SectionEyebrow>The Number</SectionEyebrow>
         <h1 className="text-9xl md:text-[14rem] font-display onum mb-4 text-gold/30">108</h1>
         <h2 className="text-4xl md:text-6xl mb-12">Why <span className="onum">108</span>?</h2>
         <div className="max-w-3xl mx-auto space-y-12 text-left">
            <p className="text-xl md:text-2xl text-ink font-light italic mb-16 border-l-2 border-gold/20 pl-8">
              The number <span className="onum">108</span> appears with striking consistency across the world's spiritual and scientific traditions. A point where the cosmic and the personal converge.
            </p>
            
            <div className="divide-y divide-maroon/10">
               {[
                 { label: "Astronomy", desc: "The distance between the Earth and the Sun is approximately 108 times the Sun's diameter. The distance between the Earth and the Moon is approximately 108 times the Moon's diameter. These are measurable, scientific facts, not metaphors." },
                 { label: "Buddhism", desc: "The complete teachings of the Buddha are preserved in exactly 108 volumes. Practitioners count 108 beads on a prayer mala, and ring temple bells 108 times." },
                 { label: "Hinduism", desc: "There are 108 Upanishads. Many Hindu deities have 108 names. In yoga, the sun salutation is traditionally performed in cycles of 108." },
                 { label: "Mathematics", desc: "108 is the product of 1¹ × 2² × 3³. A number that has fascinated mathematicians for its elegant internal structure and recurrence in natural geometry." }
               ].map((ref, i) => (
                 <div key={i} className="py-8 grid md:grid-cols-3 gap-6">
                    <div className="eyebrow text-maroon pt-1">{ref.label}</div>
                    <div className="md:col-span-2 text-ink-soft leading-relaxed">{ref.desc}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Single Day */}
      <section id="single-day" className="bg-ink text-cream py-24 overflow-hidden relative">
         {/* Background Image Element */}
         <div className="absolute inset-y-0 right-0 w-full md:w-3/4 opacity-[0.15] pointer-events-none">
            <img 
              src="/assets/buddha.png"
              alt="Sacred Background"
              className="h-full w-full object-cover translate-x-[33%] grayscale scale-110"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
         </div>
         <div className="section-container relative z-10">
            <div className="grid md:grid-cols-2 gap-24 items-start">
               <div>
                  <SectionEyebrow><span className="text-gold">Why a Single Day</span></SectionEyebrow>
                  <h2 className="text-5xl md:text-[64px] mb-12 font-serif font-light leading-tight text-white">
                    <span className="onum font-serif italic text-gold">40,000</span> volunteers. <br/> One coordinated day.
                  </h2>
                  <div className="space-y-8 text-lg font-light text-cream/70 leading-relaxed">
                     <p>
                       Project <span className="onum">108</span> is the culmination of planning, craftsmanship, and aligned intention. In Vajrayana Buddhism, when awareness is perfectly aligned, transformation can occur within a single moment.
                     </p>
                     <div className="pt-8 flex flex-col md:flex-row gap-12">
                        <div className="flex-1">
                           <h3 className="text-xl text-cream mb-4 italic font-serif">Zhābto</h3>
                           <p className="text-sm opacity-60">
                             The sacred tradition of voluntary communal work offered freely as a form of spiritual practice.
                           </p>
                        </div>
                        <div className="flex-1 border-l border-cream/10 pl-8">
                           <h3 className="text-xl text-cream mb-4 italic font-serif">Progress</h3>
                           <p className="text-sm opacity-60">
                              Engineering and foundation preparation are already active along the Mao River.
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
                          { name: "Great Pyramid", group: "20,000-30,000", time: "~20 Years" },
                          { name: "Taj Mahal", group: "20,000 artisans", time: "~22 Years" },
                          { name: "Great Wall", group: "Hundreds of thousands", time: "Centuries" },
                          { name: "Project 108", group: "40,000", time: "1 DAY", highlight: true }
                        ].map((p, i) => (
                          <div key={i} className={`py-6 flex justify-between items-center ${p.highlight ? 'text-gold' : ''}`}>
                             <div>
                                <div className="eyebrow text-cream/30 text-[9px] mb-1">{p.name}</div>
                                <div className="text-2xl font-serif onum">{p.group}</div>
                             </div>
                             <div className="text-right">
                                <div className="eyebrow text-cream/30 text-[9px] mb-1">Duration</div>
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

      {/* Readiness */}
      <section className="section-container">
         <SectionEyebrow>Readiness</SectionEyebrow>
         <h2 className="text-4xl md:text-6xl mb-4">This is already in motion</h2>
         <p className="text-xl italic text-ink-soft/60 mb-16">Ambitious sacred projects require both devotion and rigour. Project <span className="onum">108</span> is being shaped by both.</p>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { status: "Confirmed", title: "Site", desc: "The site stretches over 12 km along the Mao River." },
              { status: "Locked", title: "Design", desc: "The project is proceeding with the Jangchub Chorten design." },
              { status: "Underway", title: "Engineering", desc: "Technical planning and foundation preparation are already active." },
              { status: "In Progress", title: "Materials", desc: "Sourcing and vendor discussions are in full swing." },
              { status: "Active", title: "Guidance", desc: "Eminent Buddhist masters are already involved in the project." },
              { status: "Ongoing", title: "Conversations", desc: "The project welcomes dialogue from around the world." }
            ].map((card, i) => (
              <div key={i} className="card-premium text-left group hover:-translate-y-1">
                 <span className="font-utility text-[0.6rem] uppercase tracking-widest text-gold font-bold mb-2 block">{card.status}</span>
                 <h3 className="text-xl font-medium mb-4 group-hover:text-gold transition-colors">{card.title}</h3>
                 <p className="text-ink-soft text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Historical Parallel */}
      <section className="bg-cream py-24 text-center overflow-hidden relative">
         <div className="section-container relative z-10 max-w-3xl">
            <SectionEyebrow>Historical Parallel</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl mb-12">A tradition of sacred buildings</h2>
            <div className="space-y-6 text-lg text-ink-soft">
               <p>
                 In Himalayan Buddhist tradition, King Songtsen Gampo established a network of <span className="onum">108</span> temples to anchor the Buddhist teachings.
               </p>
               <p>
                 Project <span className="onum">108</span> continues this tradition. It is, at its heart, the same impulse: to build something sacred, together, as an offering of peace to a world that needs it.
               </p>
            </div>
         </div>
      </section>

      {/* Take Part */}
      <section id="take-part" className="section-container">
         <SectionEyebrow>Invitation to Participate</SectionEyebrow>
         <h2 className="text-4xl md:text-6xl mb-4 text-center">Two ways to take part</h2>
         <p className="text-center text-xl text-ink-soft/70 mb-20">Project <span className="onum">108</span> is shaped by two forces: those who offer the chortens and those who build them. Both are acts of merit.</p>
         
         <div className="grid md:grid-cols-2 gap-12">
            <div className="card-premium border-2 border-transparent hover:border-gold/20 flex flex-col items-center text-center p-12">
               <SectionEyebrow>Become a Patron</SectionEyebrow>
               <div className="mb-8">
                  <span className="caption block uppercase mb-1">Starting from</span>
                  <div className="text-4xl md:text-5xl font-display font-medium text-maroon onum">USD 200,000</div>
                  <span className="italic text-ink-soft/40 text-sm">Per Chorten, flexible by conversation</span>
               </div>
               <div className="space-y-6 text-ink-soft leading-relaxed flex-1 text-sm md:text-base">
                  <p>Each of the <span className="onum">108</span> Jangchub Chortens may be offered by an individual, a family, a community, or an institution.</p>
                  <p>Patronage covers construction, sacred materials, and consecration by Buddhist masters.</p>
                  <p>A plaque will provide permanent recognition for the dedication across generations.</p>
               </div>
               <button 
                 onClick={() => openModal('patron')}
                 className="btn btn-primary mt-12 px-10 whitespace-nowrap group"
               >
                 Become a Patron
                 <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            <div className="card-premium border-2 border-transparent hover:border-gold/20 flex flex-col items-center text-center p-12">
               <SectionEyebrow>Join the Build</SectionEyebrow>
               <div className="mb-8">
                  <span className="caption block uppercase mb-1">Volunteers Needed</span>
                  <div className="text-4xl md:text-5xl font-display font-medium text-maroon onum">40,000</div>
               </div>
               <div className="space-y-6 text-ink-soft leading-relaxed flex-1 text-sm md:text-base">
                  <p>Tens of thousands are already at work along the Mao River. For the final act, we need <span className="onum">40,000</span> pairs of hands simultaneously.</p>
                  <p>Volunteers will be trained in advance. No specialist skills required. What matters is willingness and purpose.</p>
                  <p>The tradition of Zhābto is open to all. The world is welcome to join us in GMC.</p>
               </div>
               <button 
                 onClick={() => openModal('volunteer')}
                 className="btn btn-outline mt-12 px-10 whitespace-nowrap group"
               >
                 Join the Build
                 <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
         </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-maroon text-cream overflow-hidden py-5">
         <div className="max-w-6xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-20 items-end">
               <div className="space-y-12">
                  <div className="space-y-4">
                    <SectionEyebrow><span className="text-gold">Contact Us</span></SectionEyebrow>
                    <h2 className="text-4xl md:text-6xl text-cream font-light">Begin the Conversation</h2>
                    <p className="text-cream/60 max-w-md italic">
                      Whether you wish to become a patron or volunteer, we warmly invite you to reach out. Preparations are already underway.
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                     <h3 className="text-3xl text-gold font-light">Gelephu Mindfulness City Authority</h3>
                     <div className="space-y-4 text-cream/40 max-w-sm leading-relaxed text-sm">
                        <p>This act of collective prayer and spiritual practice comes in a period that Buddhist masters have described as degenerate times.</p>
                        <p>For all peoples, it is a reminder of the need for peace and spiritual protection. We welcome all to this collective act of merit.</p>
                     </div>
                     <div className="flex flex-col gap-4">
                        <a href="mailto:108@gmc.bt" className="flex items-center gap-4 group">
                           <div className="p-3 bg-white/5 rounded-full group-hover:bg-gold/20 transition-colors">
                              <Mail className="w-5 h-5 text-gold" />
                           </div>
                           <span className="font-body text-sm tracking-widest hover:text-gold transition-colors">108@GMC.BT</span>
                        </a>
                        <div className="flex items-center gap-4 group">
                           <div className="p-3 bg-white/5 rounded-full">
                              <Phone className="w-5 h-5 text-gold" />
                           </div>
                           <span className="font-body text-sm tracking-widest onum">+975 77117708</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="hidden md:flex justify-end relative">
                  <img 
                    src="hero_chorten-04.png" 
                    alt="Sacred Element" 
                    className="w-full max-w-[600px] h-auto pointer-events-none opacity-20"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
               </div>
            </div>
            
            <div className="mt-8 pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.6rem] uppercase tracking-widest text-cream/20 font-body relative z-10">
               <span>© 2026 GELEPHU MINDFULNESS CITY AUTHORITY</span>
               <div className="flex gap-8">
                  <a href="#" className="hover:text-gold transition-colors">Privacy Notice</a>
                  <a href="#" className="hover:text-gold transition-colors">Downloads</a>
                  <a href="mailto:108@gmc.bt" className="hover:text-gold transition-colors">Support</a>
               </div>
            </div>
         </div>
      </footer>

      {/* Participation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-maroon/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-cream rounded-[5px] w-full max-w-md overflow-hidden shadow-[0_30px_100px_-20px_rgba(45,20,25,0.3)] border border-ink/5"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative p-10 md:p-14">
                 <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-maroon/5 transition-colors group"
                 >
                   <X className="w-5 h-5 text-maroon/40 group-hover:text-maroon transition-colors" />
                 </button>

                 <div className="text-center mb-10">
                   <SectionEyebrow>Participation</SectionEyebrow>
                   <h2 className="text-3xl md:text-4xl font-serif italic text-ink">Begin the Conversation</h2>
                 </div>

                 <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                    <div className="space-y-3">
                       <label className="eyebrow text-[9px] text-ink/40">I would like to</label>
                       <div className="grid grid-cols-2 gap-3">
                          <button 
                            type="button"
                            onClick={() => setFormType('patron')}
                            className={`py-3 px-4 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all ${
                              formType === 'patron' ? 'bg-ink text-cream border-ink shadow-lg' : 'bg-transparent border-ink/10 text-ink/60 hover:border-ink/30'
                            }`}
                          >
                             Become a Patron
                          </button>
                          <button 
                            type="button"
                            onClick={() => setFormType('volunteer')}
                            className={`py-3 px-4 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all ${
                              formType === 'volunteer' ? 'bg-ink text-cream border-ink shadow-lg' : 'bg-transparent border-ink/10 text-ink/60 hover:border-ink/30'
                            }`}
                          >
                             Volunteer
                          </button>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div className="space-y-1 group">
                          <label className="text-[10px] uppercase tracking-widest text-ink/30 font-body group-focus-within:text-gold transition-colors">Full Name</label>
                          <input type="text" className="w-full bg-transparent border-b border-ink/10 py-2 outline-none focus:border-gold transition-all font-body text-lg text-ink" placeholder="Enter your name" />
                       </div>
                       <div className="space-y-1 group">
                          <label className="text-[10px] uppercase tracking-widest text-ink/30 font-body group-focus-within:text-gold transition-colors">Email Address</label>
                          <input type="email" className="w-full bg-transparent border-b border-ink/10 py-2 outline-none focus:border-gold transition-all font-body text-lg text-ink" placeholder="you@example.com" />
                       </div>
                       <div className="space-y-1 group">
                          <label className="text-[10px] uppercase tracking-widest text-ink/30 font-body group-focus-within:text-gold transition-colors">Country</label>
                          <input type="text" className="w-full bg-transparent border-b border-ink/10 py-2 outline-none focus:border-gold transition-all font-body text-lg text-ink" placeholder="Your country" />
                       </div>
                       <div className="space-y-1 group">
                          <label className="text-[10px] uppercase tracking-widest text-ink/30 font-body group-focus-within:text-gold transition-colors">Message (Optional)</label>
                          <textarea rows={2} className="w-full bg-transparent border-b border-ink/10 py-2 outline-none focus:border-gold transition-all font-body text-lg text-ink resize-none" placeholder="A few words..."></textarea>
                       </div>
                    </div>

                    <button 
                      type="submit"
                      className="btn btn-primary w-full py-4 mt-4 shadow-xl hover:shadow-gold/20"
                    >
                      Send Message
                    </button>

                    <p className="text-center text-[0.65rem] text-ink/30 italic">
                      Your query will be shared with the GMC Authority team. We value your merit.
                    </p>
                 </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
