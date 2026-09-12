import { motion } from 'motion/react';
import { Sparkles, HeartHandshake, Compass } from 'lucide-react';

export function Positioning() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#FDF0F5] overflow-hidden border-t border-[#E26D8E]/20 bg-noise">
      {/* Background glow & subtle fairy rose rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#F7C5D5]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-[#E26D8E]/15 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        
        {/* Top small label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
          <span>Nossa Filosofia Editorial</span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E1D] tracking-tight mb-8"
        >
          Mais do que passos. <span className="rose-gradient-text italic font-normal">Uma cura para a alma.</span>
        </motion.h2>

        {/* Narrative positioning text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl font-light text-[#6E4358] leading-relaxed max-w-3xl mx-auto text-balance"
        >
          “O Studio Day Cardoso nasceu para transformar a dança em uma experiência de <span className="text-[#2A0E1D] font-medium">expressão profunda</span>, <span className="text-[#2A0E1D] font-medium">rigor técnico</span> e <span className="text-[#2A0E1D] font-medium">acolhimento humano</span>. Um espaço em Ourinhos onde o corpo se desenvolve e a alma encontra refúgio.”
        </motion.p>

        {/* Flowing visual cards in Luxury Rose Glass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#E26D8E]/20 max-w-4xl mx-auto"
        >
          <div className="glass-rose-card rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#E26D8E]/60 transition-all duration-300 shadow-lifted">
            <div className="w-12 h-12 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/30 flex items-center justify-center text-[#C43660] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#2A0E1D] mb-1.5">Técnica & Metodologia</h3>
            <p className="text-xs text-[#6E4358] leading-relaxed font-light">Evolução segura que respeita a biomecânica e o ritmo de cada corpo.</p>
          </div>

          <div className="glass-rose-card rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#E26D8E]/60 transition-all duration-300 shadow-lifted">
            <div className="w-12 h-12 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/30 flex items-center justify-center text-[#C43660] mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#2A0E1D] mb-1.5">Expressão Artística</h3>
            <p className="text-xs text-[#6E4358] leading-relaxed font-light">Corpo, mente e emoção em sintonia através da sensibilidade coreográfica.</p>
          </div>

          <div className="glass-rose-card rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#E26D8E]/60 transition-all duration-300 shadow-lifted">
            <div className="w-12 h-12 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/30 flex items-center justify-center text-[#C43660] mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#2A0E1D] mb-1.5">Acolhimento & Afeto</h3>
            <p className="text-xs text-[#6E4358] leading-relaxed font-light">Um ambiente caloroso em Ourinhos onde cada aluna é celebrada e cuidada.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
