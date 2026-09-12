import { motion } from 'motion/react';
import { Star, MessageSquare, ExternalLink, Quote } from 'lucide-react';
import { TESTIMONIALS, STUDIO_INFO } from '../lib/site-data';

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-[#FDF0F5] relative overflow-hidden bg-noise">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#F7C5D5]/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#FCE8EF] blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#C43660]" />
            <span>Vozes da Nossa Comunidade</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E1D] tracking-tight mb-4">
            Quem vive essa experiência, <br />
            <span className="rose-gradient-text italic font-normal">sente a transformação.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E4358] font-light leading-relaxed">
            O carinho, a evolução física e a cura emocional refletidos nas palavras de mães, alunas e bailarinas de Ourinhos.
          </p>
        </div>

        {/* Testimonials Cards Grid with Rose Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-[26px] glass-rose-card border border-[#E26D8E]/30 shadow-lifted hover:border-[#E26D8E]/70 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Rating & Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E26D8E] text-[#E26D8E]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E26D8E]/40" />
                </div>

                {/* Quotation text */}
                <p className="text-sm sm:text-base text-[#2A0E1D] font-light leading-relaxed mb-6 italic font-serif">
                  “{item.content}”
                </p>
              </div>

              {/* Author Information */}
              <div className="pt-4 border-t border-[#E26D8E]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#2A0E1D]">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#6E4358] font-light">{item.role} • {item.date}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C43660] glass-rose-modal px-2.5 py-1 rounded-full border border-[#E26D8E]/30">
                  {item.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Strip */}
        <div className="mt-14 p-6 sm:p-7 rounded-[24px] glass-rose-modal border border-[#E26D8E]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lifted">
          <div className="flex items-center space-x-4">
            <div className="flex text-[#E26D8E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2A0E1D]">
                Nota 5.0 estrelas no Google e comunidade de Ourinhos
              </p>
              <p className="text-xs text-[#6E4358] font-light">
                Mais de 100 famílias confiam no método e acolhimento do Studio Day Cardoso
              </p>
            </div>
          </div>

          <a
            href={STUDIO_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#C43660] hover:text-[#2A0E1D] transition-colors"
          >
            <span>Ver perfil no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
