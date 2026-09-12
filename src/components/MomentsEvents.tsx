import { motion } from 'motion/react';
import { Sparkles, Calendar, Users, Award } from 'lucide-react';

export function MomentsEvents() {
  const events = [
    {
      title: 'Espetáculo de Gala Anual',
      description: 'O grande momento de celebração no teatro municipal de Ourinhos, com iluminação cênica de ponta, figurinos sob medida e plateia lotada.',
      tag: 'Gala Oficial',
      icon: Award,
    },
    {
      title: 'Festivais & Circuito Cultural',
      description: 'Participação de alunas em mostras e encontros de dança regionais, desenvolvendo maturidade cênica e vivência de bastidores.',
      tag: 'Circuito Regional',
      icon: Calendar,
    },
    {
      title: 'Mostras Internas & Aulas Abertas',
      description: 'Apresentações intimistas preparadas com muito carinho para que pais e familiares acompanhem a evolução e o acolhimento das alunas.',
      tag: 'Família & Integração',
      icon: Users,
    },
  ];

  return (
    <section id="momentos" className="py-24 lg:py-32 bg-[#FFF5F8] relative overflow-hidden bg-noise">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#F7C5D5]/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#FCE8EF] blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
              <span>Presença Cultural & Palcos</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E1D] tracking-tight mb-5">
              A dança que <br />
              <span className="rose-gradient-text italic font-normal">conquista os grandes palcos.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E4358] font-light leading-relaxed">
              Momentos de brilho, autoconfiança e aplausos que levam a vivência artística para além da sala de aula, conectando nossas alunas com a arte e o público em Ourinhos/SP.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-[26px] overflow-hidden bg-[#FCE8EF] shadow-lifted aspect-[16/10] group border border-[#E26D8E]/30">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop"
                alt="Apresentação de gala no palco do teatro - Dança Studio Day Cardoso"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E1D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-[#FCE8EF] text-[#C43660] rounded-full border border-[#E26D8E]/40">
                  Palco & Emoção
                </span>
                <p className="font-serif text-xl sm:text-2xl mt-2 font-normal text-white drop-shadow-sm">
                  A vivência artística nos grandes palcos de Ourinhos/SP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards in Rose Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((evt, idx) => {
            const Icon = evt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-7 rounded-[24px] glass-rose-card border border-[#E26D8E]/25 hover:border-[#E26D8E]/70 transition-all flex flex-col justify-between shadow-lifted hover:-translate-y-1 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FCE8EF] border border-[#E26D8E]/30 text-[#C43660] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C43660] block mb-2">
                    {evt.tag}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-[#2A0E1D] mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E4358] leading-relaxed font-light">
                    {evt.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
