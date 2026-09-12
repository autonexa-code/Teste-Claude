import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_INFO } from '../lib/site-data';

interface IntermediateCTAProps {
  onOpenVisitModal: () => void;
}

export function IntermediateCTA({ onOpenVisitModal }: IntermediateCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-[#FFF5F8] text-[#2A0E1D] relative overflow-hidden bg-noise border-y border-[#E26D8E]/25">
      {/* Ambient glass light circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F7C5D5]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FCE8EF] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        
        {/* Pink Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-5 py-2 rounded-full glass-pink-pill text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
          <span>Comece Sua Transformação</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-balance text-[#2A0E1D]"
        >
          O seu próximo grande passo <br />
          <span className="rose-gradient-text italic font-normal">começa em nossa sala de aula.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#6E4358] font-light leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
        >
          Venha fazer uma aula experimental gratuita no Studio Day Cardoso e sinta na pele o acolhimento, a postura e a arte que curam a alma.
        </motion.p>

        {/* Buttons in Rose & Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenVisitModal}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 rose-gradient-bg hover:brightness-105 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lifted active:scale-98 cursor-pointer"
          >
            <span>Agendar Aula Experimental</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <a
            href={STUDIO_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 glass-rose hover:border-[#E26D8E] text-[#C43660] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lifted cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#E26D8E]" />
            <span>Falar no WhatsApp</span>
          </a>
        </motion.div>

        <p className="text-xs text-[#7E5369] mt-8 font-light">
          Atendimento personalizado • {STUDIO_INFO.address}, Centro — Ourinhos/SP
        </p>

      </div>
    </section>
  );
}
