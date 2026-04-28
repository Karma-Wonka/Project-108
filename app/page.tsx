"use client";

import { useEffect, useState } from "react";
import { Navigation } from "./components/layout/Navigation";
import { ChortenSection } from "./components/sections/ChortenSection";
import { ElevationSection } from "./components/sections/ElevationSection";
import { FooterSection } from "./components/sections/FooterSection";
import { FormationSection } from "./components/sections/FormationSection";
import { HeroSection } from "./components/sections/HeroSection";
import { HistoricalParallelSection } from "./components/sections/HistoricalParallelSection";
import { NumberSection } from "./components/sections/NumberSection";
import { ParticipationModal } from "./components/sections/ParticipationModal";
import { ProjectSection } from "./components/sections/ProjectSection";
import { ReadinessSection } from "./components/sections/ReadinessSection";
import { SingleChortenScaleSection } from "./components/sections/SingleChortenScaleSection";
import { SingleDaySection } from "./components/sections/SingleDaySection";
import { StackingScaleSection } from "./components/sections/StackingScaleSection";
import { StatStrip } from "./components/sections/StatStrip";
import { TakePartSection } from "./components/sections/TakePartSection";
import { ParticipationType } from "./components/types";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<ParticipationType | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (type: ParticipationType) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream-light selection:bg-maroon/10 selection:text-maroon">
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <StatStrip />
      <ProjectSection />
      <ChortenSection />
      <ElevationSection />
      <FormationSection />
      <SingleChortenScaleSection />
      <StackingScaleSection />
      <NumberSection />
      <SingleDaySection />
      <ReadinessSection />
      <HistoricalParallelSection />
      <TakePartSection onOpenModal={openModal} />
      <FooterSection />
      <ParticipationModal
        isOpen={isModalOpen}
        formType={formType}
        onClose={() => setIsModalOpen(false)}
        onSelectType={setFormType}
      />
    </div>
  );
}
