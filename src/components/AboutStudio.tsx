import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, Award } from 'lucide-react';
import { STUDIO_INFO } from '../lib/site-data';

interface AboutStudioProps {
  onOpenVisitModal: () => void;
}

export function AboutStudio({ onOpenVisitModal }: AboutStudioProps) {
  const highlights = [
    'Piso flutuante profissional com amortecimento articular',
    'Aulas formatadas para todas as idades (Baby ao Adulto)',
    'Rigor técnico aliado à sensibilidade e acolhimento',
    'Ambiente familiar e seguro no coração de Ourinhos/SP',
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#FFF5F8] relative overflow-hidden bg-noise">
      {/* Background ambient accents */}
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#F7C5D5]/35 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#FCE8EF] blur-3xl pointer-events-none opacity-60" />
      <div className="absolute top-1/3 right-10 w-96 h-96 border border-[#E26D8E]/15 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Rose Gold Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-[26px] overflow-hidden bg-[#FCE8EF] shadow-lifted aspect-[4/5] z-10 border border-[#E26D8E]/30">
                <img
                  src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=900&auto=format&fit=crop"
                  alt="Alunas no Studio Day Cardoso em Ourinhos"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E1D]/75 via-transparent to-transparent" />
              </div>

              {/* Floating Glass card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 glass-rose-modal p-6 rounded-2xl shadow-lifted border border-[#E26D8E]/30 z-20 max-w-[260px]">
                <p className="font-serif text-2xl font-bold text-[#C43660]">Ourinhos/SP</p>
                <p className="text-xs text-[#6E4358] mt-1 leading-snug font-light">
                  Espaço amplo e climatizado no Centro para receber você com conforto, acolhimento e arte.
                </p>
              </div>

              {/* Geometric subtle rose backing */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[26px] border border-[#E26D8E]/25 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
              <span>Conheça a Nossa Casa</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E1D] tracking-tight mb-6">
              Um santuário de arte para <span className="rose-gradient-text italic font-normal">viver a dança.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#6E4358] font-light leading-relaxed mb-8">
              <p>
                Acreditamos que a dança vai muito além dos passos: ela é um instrumento poderoso de transformação interior, saúde, postura e desenvolvimento integral.
              </p>
              <p>
                No Studio Day Cardoso, cultivamos o aprendizado técnico rigoroso aliado à liberdade de expressão, à disciplina que constrói confiança e à convivência que transforma nossa sala de aula em um verdadeiro lar de arte.
              </p>
            </div>

            {/* Checklist of values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="glass-rose-card rounded-xl p-3.5 border border-[#E26D8E]/25 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C43660] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2A0E1D] font-medium leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Visual Signature & Action */}
            <div className="w-full pt-6 border-t border-[#E26D8E]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif italic text-xl sm:text-2xl text-[#C43660] tracking-wide">
                  “A dança que cura a alma.”
                </p>
                <p className="text-[11px] uppercase tracking-widest font-bold text-[#7E5369] mt-1">
                  Assinatura Oficial • Studio Day Cardoso
                </p>
              </div>

              <button
                onClick={onOpenVisitModal}
                className="inline-flex items-center space-x-2 rose-gradient-bg text-white hover:brightness-105 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer shrink-0"
              >
                <span>Conhecer o Espaço</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
