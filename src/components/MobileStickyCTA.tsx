import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenVisitModal: () => void;
}

export function MobileStickyCTA({ onOpenVisitModal }: MobileStickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 p-3 glass-rose-modal border-t border-[#E26D8E]/30 shadow-[0_-8px_30px_rgba(42,14,29,0.15)] z-30 animate-in fade-in slide-in-from-bottom-3 duration-300">
      <div className="max-w-md mx-auto flex items-center gap-2">
        <button
          id="mobile-sticky-cta-btn"
          onClick={onOpenVisitModal}
          className="w-full py-3.5 px-5 rose-gradient-bg text-white hover:brightness-105 rounded-full text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 shadow-lifted transition-all active:scale-98"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>Agendar Aula no Studio</span>
        </button>
      </div>
    </div>
  );
}
