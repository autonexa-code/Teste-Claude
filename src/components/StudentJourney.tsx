import { motion } from 'motion/react';
import { Sparkles, HeartHandshake, Award, Ticket, ArrowRight, ShieldCheck } from 'lucide-react';
import { TIMELINE, STUDIO_INFO } from '../lib/site-data';

interface StudentJourneyProps {
  onOpenVisitModal: () => void;
}

export function StudentJourney({ onOpenVisitModal }: StudentJourneyProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Theater':
      default:
        return <Ticket className="w-5 h-5" />;
    }
  };

  return (
    <section id="jornada" className="py-24 lg:py-32 bg-[#FDF0F5] relative overflow-hidden bg-noise">
      {/* Ambient background orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#F7C5D5]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FCE8EF] rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
            <span>A Experiência Day Cardoso</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2A0E1D] mb-5 tracking-tight">
            A Jornada de Transformação <span className="rose-gradient-text">da Aluna</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E4358] font-light leading-relaxed">
            Do primeiro passo tímido na sala de aula ao brilho dos aplausos no palco principal. Uma trajetória planejada com amor, técnica e respeito ao seu tempo.
          </p>
        </div>

        {/* Timeline Grid (4 steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#E26D8E]/20 via-[#E26D8E]/50 to-[#E26D8E]/20 -translate-y-12 z-0" />

          {TIMELINE.map((item, index) => {
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative z-10 glass-rose-card p-6 sm:p-7 rounded-[26px] flex flex-col justify-between hover:border-[#E26D8E]/70 hover:-translate-y-1.5 transition-all duration-300 shadow-lifted group"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-2xl font-bold text-[#C43660]">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#E26D8E]/15 text-[#C43660] border border-[#E26D8E]/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon Orb */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FCE8EF] border border-[#E26D8E]/30 text-[#C43660] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#E26D8E] group-hover:text-white transition-all duration-300 shadow-sm">
                    {getIcon(item.iconName)}
                  </div>

                  <span className="text-[11px] uppercase font-semibold tracking-wider text-[#6E4358] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2A0E1D] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E4358] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E26D8E]/15 flex items-center justify-between text-[11px] font-semibold text-[#C43660]">
                  <span>{item.number}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-[24px] glass-rose-modal border border-[#E26D8E]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lifted">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/40 flex items-center justify-center text-[#C43660] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-[#2A0E1D] font-normal">
                Pronta para iniciar o primeiro passo?
              </h4>
              <p className="text-xs text-[#6E4358] font-light">
                Agende uma aula experimental sem custos e conheça a nossa metodologia em Ourinhos.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onOpenVisitModal}
              className="w-full sm:w-auto py-3.5 px-6 rounded-full rose-gradient-bg text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-all shadow-md hover:brightness-105 cursor-pointer"
            >
              <span>Agendar Aula Gratuita</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
