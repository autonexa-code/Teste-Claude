import { motion } from 'motion/react';
import { Sparkles, Heart, Feather, Sparkle } from 'lucide-react';

export function EmotionalBanner() {
  return (
    <section className="relative py-24 lg:py-36 bg-[#FDF0F5] text-[#2A0E1D] overflow-hidden bg-noise border-y border-[#E26D8E]/20">
      {/* High-res romantic background with soft blush overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509670811275-7aaf45348800?q=80&w=1600&auto=format&fit=crop"
          alt="Expressão e Arte da Dança - Studio Day Cardoso"
          className="w-full h-full object-cover object-center opacity-15 scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF0F5] via-[#FDF0F5]/80 to-[#FDF0F5]" />
      </div>

      {/* Fairy rose ambient lighting and decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-[#E26D8E]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[#E26D8E]/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[#E26D8E]/20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F7C5D5]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FCE8EF] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        
        {/* Luxury Rose Glass Modal Container */}
        <div className="glass-rose-modal p-8 sm:p-14 rounded-[32px] border border-[#E26D8E]/30 shadow-lifted backdrop-blur-2xl">
          
          {/* Subtle Brand Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
            <span>A Dança que Cura a Alma</span>
          </motion.div>

          {/* Central Poetic Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#2A0E1D] tracking-tight leading-tight mb-6 text-balance"
          >
            “A dança não é apenas movimento. <br className="hidden sm:inline" />
            <span className="rose-gradient-text italic font-normal">É a cura da alma.”</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[#6E4358] font-light leading-relaxed max-w-2xl mx-auto text-balance mb-8"
          >
            É expressão, presença e respiração. Cada aula no Studio Day Cardoso em Ourinhos é desenhada para acolher o seu momento, despertar sua autoconfiança e reconectar você com a beleza de dançar.
          </motion.p>

          {/* 3 Emotional Micro Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-10 max-w-2xl mx-auto text-left"
          >
            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#E26D8E]/25 flex items-center space-x-3 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-[#FCE8EF] text-[#C43660] flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#2A0E1D]">Afeto & Respeito</h4>
                <p className="text-[11px] text-[#6E4358] font-light">Seu ritmo é honrado</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#E26D8E]/25 flex items-center space-x-3 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-[#FCE8EF] text-[#C43660] flex items-center justify-center shrink-0">
                <Feather className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#2A0E1D]">Leveza & Tônus</h4>
                <p className="text-[11px] text-[#6E4358] font-light">Postura e bem-estar</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#E26D8E]/25 flex items-center space-x-3 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-[#FCE8EF] text-[#C43660] flex items-center justify-center shrink-0">
                <Sparkle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#2A0E1D]">Sem Julgamentos</h4>
                <p className="text-[11px] text-[#6E4358] font-light">Espaço de liberdade</p>
              </div>
            </div>
          </motion.div>

          {/* Delicate signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6 border-t border-[#E26D8E]/20 inline-flex flex-col items-center"
          >
            <span className="font-serif italic text-base sm:text-lg text-[#C43660] tracking-wider">
              Studio Day Cardoso
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#6E4358] mt-0.5">
              Ourinhos/SP • Centro
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
