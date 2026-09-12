import { useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';
import { Service, STUDIO_INFO } from '../lib/site-data';

interface ModalityModalProps {
  modality: Service | null;
  onClose: () => void;
  onSelectForVisit: (modalityName: string) => void;
}

export function ModalityModal({ modality, onClose, onSelectForVisit }: ModalityModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (modality) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modality, onClose]);

  if (!modality) return null;

  const handleWhatsAppInquiry = () => {
    const text = `Olá! Gostaria de tirar dúvidas sobre as turmas de *${modality.name}* no Studio Day Cardoso em Ourinhos.`;
    const url = `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl glass-rose-modal rounded-[32px] border border-[#E26D8E]/35 shadow-lifted overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-[#1E0915]/85 hover:bg-[#C43660] text-white border border-white/20 shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-68 shrink-0 overflow-hidden bg-[#FCE8EF]">
          <img
            src={modality.imageUrl}
            alt={modality.name}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              const fallback = 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1200&auto=format&fit=crop';
              if (target.src !== fallback) {
                target.src = fallback;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E1D] via-[#2A0E1D]/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F7C5D5] block mb-1">
              {modality.category}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFF5F8]">
              {modality.name}
            </h3>
          </div>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#FFF5F8]">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#C43660] block mb-2">
              {modality.tagline}
            </span>
            <p className="text-sm sm:text-base text-[#6E4358] leading-relaxed font-light">
              {modality.description}
            </p>
          </div>

          {/* Quick Specs */}
          <div className="flex flex-wrap gap-4 py-3 px-4 rounded-xl bg-white/70 border border-[#E26D8E]/25 text-xs text-[#C43660]">
            <span className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Duração: <strong>{modality.duration}</strong></span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Frequência: <strong>{modality.recommendedFrequency}</strong></span>
            </span>
          </div>

          {/* Details list */}
          <div>
            <h4 className="font-serif text-lg font-normal text-[#2A0E1D] mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C43660]" />
              <span>O que você vai desenvolver nesta modalidade:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {modality.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-white/70 border border-[#E26D8E]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#C43660] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2A0E1D] leading-tight font-medium">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Actions inside modal */}
          <div className="pt-4 border-t border-[#E26D8E]/20 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectForVisit(modality.name);
              }}
              className="flex-1 py-3.5 px-6 rounded-full rose-gradient-bg text-white hover:brightness-105 text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
            >
              <span>Agendar Aula Experimental</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="py-3.5 px-6 rounded-full glass-rose border border-[#E26D8E]/50 text-[#C43660] hover:border-[#E26D8E] text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tirar Dúvidas</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
