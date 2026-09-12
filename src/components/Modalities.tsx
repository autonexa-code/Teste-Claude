import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Heart, Clock, Calendar } from 'lucide-react';
import { SERVICES, Service } from '../lib/site-data';

interface ModalitiesProps {
  onSelectModality: (service: Service) => void;
  onOpenVisitModal: (modalityName?: string) => void;
}

export function Modalities({ onSelectModality, onOpenVisitModal }: ModalitiesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => {
        if (selectedCategory === 'destaque') return s.featured;
        if (selectedCategory === 'infantil') return s.id.includes('baby');
        if (selectedCategory === 'adulto') return s.id.includes('adulto');
        if (selectedCategory === 'classico') return s.id.includes('classico') || s.id.includes('pontas');
        return true;
      });

  return (
    <section id="modalidades" className="py-24 lg:py-32 bg-[#FDF0F5] relative overflow-hidden bg-noise">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#F7C5D5]/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#FCE8EF] blur-3xl pointer-events-none opacity-60" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 border-b border-[#E26D8E]/20">
          <div>
            <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
              <span>Modalidades & Cursos</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E1D] tracking-tight">
              Encontre o seu <span className="rose-gradient-text italic font-normal">movimento ideal.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#6E4358] max-w-md font-light">
            Da iniciação lúdica infantil ao ballet clássico adulto e de repertório. Turmas estruturadas para cada momento da sua vida em Ourinhos.
          </p>
        </div>

        {/* Categories Pill Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todas as Aulas' },
            { id: 'destaque', label: '★ Mais Procuradas' },
            { id: 'infantil', label: 'Iniciação & Infantil' },
            { id: 'classico', label: 'Ballet Clássico & Pontas' },
            { id: 'adulto', label: 'Ballet Adulto' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'rose-gradient-bg text-white shadow-sm font-bold'
                  : 'glass-rose text-[#6E4358] hover:text-[#C43660] hover:border-[#E26D8E]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onSelectModality(service)}
              className="group relative glass-rose-card rounded-[26px] overflow-hidden hover:border-[#E26D8E]/70 transition-all duration-300 flex flex-col cursor-pointer shadow-lifted hover:-translate-y-1.5"
            >
              {/* Image Container with zoom micro-interaction */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#FCE8EF]">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E1D]/90 via-[#2A0E1D]/25 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full glass-rose-modal text-[#C43660] border border-[#E26D8E]/40 shadow-xs">
                    {service.category}
                  </span>
                </div>

                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full rose-gradient-bg text-white shadow-xs flex items-center space-x-1">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>Destaque VIP</span>
                    </span>
                  </div>
                )}

                {/* Bottom title over image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-normal tracking-tight text-[#FFF5F8] group-hover:text-[#F7C5D5] transition-colors">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#C43660] font-bold mb-2">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#6E4358] line-clamp-3 leading-relaxed mb-5 font-light">
                    {service.description}
                  </p>

                  {/* Info Tags */}
                  <div className="flex items-center space-x-4 mb-4 text-[11px] text-[#7E5369]">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#E26D8E]" />
                      <span>{service.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-[#E26D8E]" />
                      <span>{service.recommendedFrequency}</span>
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E26D8E]/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#2A0E1D] group-hover:text-[#C43660] transition-colors">
                  <span>Ver Detalhes & Turmas</span>
                  <div className="w-8 h-8 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/30 flex items-center justify-center text-[#C43660] group-hover:bg-[#E26D8E] group-hover:text-white transition-all shadow-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section bottom note & quick action */}
        <div className="mt-14 p-6 sm:p-8 rounded-[24px] glass-rose-modal border border-[#E26D8E]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lifted">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl font-normal text-[#2A0E1D]">
              Dúvidas sobre a turma ideal para você ou sua filha(o)?
            </h4>
            <p className="text-xs sm:text-sm text-[#6E4358] mt-1 font-light">
              Nossa equipe está pronta para orientar com carinho e agendar uma aula experimental sem custos.
            </p>
          </div>
          <button
            onClick={() => onOpenVisitModal()}
            className="shrink-0 inline-flex items-center space-x-2 rose-gradient-bg text-white hover:brightness-105 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Falar com o Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
