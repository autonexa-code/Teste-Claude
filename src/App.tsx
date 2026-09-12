/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Positioning } from './components/Positioning';
import { AboutStudio } from './components/AboutStudio';
import { Modalities } from './components/Modalities';
import { BudgetSimulator } from './components/BudgetSimulator';
import { StudentJourney } from './components/StudentJourney';
import { CareGuideChecklist } from './components/CareGuideChecklist';
import { EmotionalBanner } from './components/EmotionalBanner';
import { ExperiencePillars } from './components/ExperiencePillars';
import { MomentsEvents } from './components/MomentsEvents';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { IntermediateCTA } from './components/IntermediateCTA';
import { LocationMap } from './components/LocationMap';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { VisitModal } from './components/VisitModal';
import { ModalityModal } from './components/ModalityModal';
import { LightboxModal } from './components/LightboxModal';
import { Service, GalleryResultItem, GALLERY_ITEMS } from './lib/site-data';

export default function App() {
  // Modal states
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [visitModalModality, setVisitModalModality] = useState<string | undefined>(undefined);
  
  // Selected modality for inspection
  const [selectedModality, setSelectedModality] = useState<Service | null>(null);

  // Lightbox state
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryResultItem | null>(null);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  const handleOpenVisitModal = (modalityName?: string) => {
    setVisitModalModality(modalityName);
    setIsVisitModalOpen(true);
  };

  const handleOpenLightbox = (item: GalleryResultItem, index: number) => {
    setActiveGalleryItem(item);
    setGalleryIndex(index);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setGalleryIndex(newIndex);
    setActiveGalleryItem(GALLERY_ITEMS[newIndex]);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F8] text-[#2A0E1D] selection:bg-[#E26D8E]/30 font-sans relative bg-noise">
      {/* 1. Header / Navbar */}
      <Navbar onOpenVisitModal={handleOpenVisitModal} />

      {/* 2. Hero Section */}
      <Hero onOpenVisitModal={() => handleOpenVisitModal()} />

      {/* 3. Positioning Section */}
      <Positioning />

      {/* 4. O Studio Section */}
      <AboutStudio onOpenVisitModal={() => handleOpenVisitModal()} />

      {/* 5. Modalidades Section */}
      <Modalities
        onSelectModality={(modality) => setSelectedModality(modality)}
        onOpenVisitModal={handleOpenVisitModal}
      />

      {/* 6. Simulador Interativo de Matrícula & Planos */}
      <BudgetSimulator />

      {/* 7. Jornada do Aluno (Linha do Tempo Editorial) */}
      <StudentJourney onOpenVisitModal={() => handleOpenVisitModal()} />

      {/* 8. A Dança que Cura a Alma (Emotional Pause) */}
      <EmotionalBanner />

      {/* 9. Experiência / 4 Pilares */}
      <ExperiencePillars />

      {/* 10. Apresentações e Momentos */}
      <MomentsEvents />

      {/* 11. Galeria Editorial com Fichas Técnicas & WhatsApp */}
      <Gallery onOpenLightbox={handleOpenLightbox} />

      {/* 12. Guia de Cuidados & Checklist da Bailarina */}
      <CareGuideChecklist />

      {/* 13. Depoimentos Reais & Prova Social */}
      <Testimonials />

      {/* 14. CTA Intermediário */}
      <IntermediateCTA onOpenVisitModal={() => handleOpenVisitModal()} />

      {/* 15. Localização & Mapa */}
      <LocationMap />

      {/* 16. Contato Direto & Formulário */}
      <ContactSection />

      {/* 17. Footer */}
      <Footer />

      {/* 18. Mobile Sticky CTA Bottom Bar */}
      <MobileStickyCTA onOpenVisitModal={() => handleOpenVisitModal()} />

      {/* Visit / Tour Request Modal */}
      <VisitModal
        isOpen={isVisitModalOpen}
        initialModality={visitModalModality}
        onClose={() => setIsVisitModalOpen(false)}
      />

      {/* Modality Details Modal */}
      <ModalityModal
        modality={selectedModality}
        onClose={() => setSelectedModality(null)}
        onSelectForVisit={(modName) => handleOpenVisitModal(modName)}
      />

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        activeItem={activeGalleryItem}
        currentIndex={galleryIndex}
        onClose={() => setActiveGalleryItem(null)}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
