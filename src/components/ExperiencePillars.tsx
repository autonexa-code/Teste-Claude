import { motion } from 'motion/react';
import { PILLARS } from '../lib/site-data';
import { Sparkles } from 'lucide-react';

export function ExperiencePillars() {
  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-[#FFF5F8] relative overflow-hidden bg-noise">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#F7C5D5]/35 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
            <span>Nossos Pilares de Formação</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E1D] tracking-tight mb-5">
            A essência de <span className="rose-gradient-text italic font-normal">dançar conosco.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E4358] font-light leading-relaxed">
            Quatro princípios fundamentais que guiam cada aula, cada movimento e cada momento vivido no Studio Day Cardoso em Ourinhos.
          </p>
        </div>

        {/* 4 Pillars Grid with Rose Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-[26px] glass-rose-card border border-[#E26D8E]/25 hover:border-[#E26D8E]/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-lifted"
            >
              <div>
                {/* Large Editorial Number with Rose Gold styling */}
                <div className="font-serif text-4xl sm:text-5xl font-light text-[#C43660] mb-6 group-hover:text-[#E26D8E] transition-colors">
                  {pillar.number}
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#2A0E1D] mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E4358] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E26D8E]/20">
                <span className="text-[10px] uppercase tracking-widest text-[#C43660] font-bold">
                  Pilar de Excelência
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
