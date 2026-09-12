import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryResultItem, STUDIO_INFO } from '../lib/site-data';

interface LightboxModalProps {
  activeItem: GalleryResultItem | null;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function LightboxModal({
  activeItem,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prev = currentIndex === 0 ? GALLERY_ITEMS.length - 1 : currentIndex - 1;
        onNavigate(prev);
      }
      if (e.key === 'ArrowRight') {
        const next = currentIndex === GALLERY_ITEMS.length - 1 ? 0 : currentIndex + 1;
        onNavigate(next);
      }
    };

    if (activeItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem, currentIndex, onClose, onNavigate]);

  if (!activeItem) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = currentIndex === 0 ? GALLERY_ITEMS.length - 1 : currentIndex - 1;
    onNavigate(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = currentIndex === GALLERY_ITEMS.length - 1 ? 0 : currentIndex + 1;
    onNavigate(next);
  };

  const handleInquirePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Olá! Estava visualizando a galeria do Studio Day Cardoso e adorei a foto *"${activeItem.title}"* (${activeItem.categoryLabel}). Gostaria de saber mais sobre as turmas dessa modalidade e como agendar uma aula experimental!`;
    window.open(`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 w-11 h-11 rounded-full bg-[#1E0915]/90 hover:bg-[#C43660] text-white border border-[#E26D8E]/60 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
        aria-label="Fechar visualizador de imagem"
      >
        <X className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#1E0915]/90 hover:bg-[#C43660] text-white border border-[#E26D8E]/60 items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-110 active:scale-95"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#1E0915]/90 hover:bg-[#C43660] text-white border border-[#E26D8E]/60 items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-110 active:scale-95"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Main Image Container with Details Tray */}
      <div
        className="relative max-w-4xl max-h-[92vh] flex flex-col items-center justify-center w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E26D8E]/40 max-h-[58vh] bg-black/60 flex items-center justify-center">
          <img
            src={activeItem.imageUrl}
            alt={activeItem.title}
            className="max-h-[58vh] w-auto max-w-full object-contain rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption bar in High-Contrast Plum Theater Glass */}
        <div className="mt-3.5 w-full max-w-2xl px-5 sm:px-6 py-4 rounded-2xl bg-[#1E0915]/95 border border-[#E26D8E]/40 text-white shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#C43660]/30 text-[#FCE8EF] border border-[#E26D8E]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#F7C5D5]" />
              <span>{activeItem.categoryLabel} • {activeItem.tag}</span>
            </div>
            <span className="text-xs text-white/70 font-semibold bg-white/10 px-2.5 py-1 rounded-full">
              {currentIndex + 1} de {GALLERY_ITEMS.length}
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-normal text-white tracking-tight">
            {activeItem.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-pink-100/90 mt-1.5 font-light leading-relaxed">
            {activeItem.caption}
          </p>

          <div className="mt-2.5 py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-pink-200/85">
            <span className="font-semibold text-white/90">Ficha Técnica: </span>
            {activeItem.technicalDetails}
          </div>

          {/* Navigation for Mobile + WhatsApp CTA */}
          <div className="mt-3.5 pt-3 border-t border-[#E26D8E]/25 flex items-center justify-between gap-3">
            {/* Mobile Prev/Next Controls */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white/10 hover:bg-[#C43660] text-white border border-white/20 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-white/10 hover:bg-[#C43660] text-white border border-white/20 transition-colors"
                aria-label="Próxima"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="hidden sm:inline text-xs text-[#F7C5D5] font-semibold tracking-wide">
              Studio Day Cardoso • Ourinhos/SP
            </span>

            <button
              onClick={handleInquirePhoto}
              className="py-2.5 px-5 rounded-full rose-gradient-bg text-white text-xs uppercase tracking-wider font-bold flex items-center space-x-2 hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer ml-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero Dançar Isso</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
