import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryResultItem } from '../lib/site-data';

interface GalleryProps {
  onOpenLightbox: (item: GalleryResultItem, index: number) => void;
}

const FALLBACK_BALLET_IMG = 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1200&auto=format&fit=crop';

export function Gallery({ onOpenLightbox }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ballet' | 'palco' | 'aulas' | 'detalhes'>('all');

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const filters = [
    { label: 'Todas as Fotos', value: 'all', count: GALLERY_ITEMS.length },
    { label: 'Ballet Clássico', value: 'ballet', count: GALLERY_ITEMS.filter(i => i.category === 'ballet').length },
    { label: 'Palco & Apresentações', value: 'palco', count: GALLERY_ITEMS.filter(i => i.category === 'palco').length },
    { label: 'Rotina de Aulas', value: 'aulas', count: GALLERY_ITEMS.filter(i => i.category === 'aulas').length },
    { label: 'Bastidores & Detalhes', value: 'detalhes', count: GALLERY_ITEMS.filter(i => i.category === 'detalhes').length },
  ] as const;

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-[#FDF0F5] relative overflow-hidden bg-noise">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#F7C5D5]/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FCE8EF] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C43660]" />
            <span>Galeria de Resultados & Palco</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E1D] tracking-tight mb-4">
            A essência artística em <span className="rose-gradient-text italic font-normal">cada detalhe.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E4358] font-light leading-relaxed">
            Registros de ensaios na barra, festivais em Ourinhos e a elegância de nossas alunas em movimento.
          </p>

          {/* Filter Pills in Rose Glass */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                  activeFilter === filter.value
                    ? 'rose-gradient-bg text-white shadow-sm scale-105'
                    : 'glass-rose text-[#6E4358] hover:text-[#C43660] hover:border-[#E26D8E]/60 bg-white/70'
                }`}
              >
                <span>{filter.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeFilter === filter.value
                    ? 'bg-white/25 text-white'
                    : 'bg-[#FCE8EF] text-[#C43660]'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Find index in global GALLERY_ITEMS for accurate lightbox navigation
              const globalIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
              
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => onOpenLightbox(item, globalIndex !== -1 ? globalIndex : index)}
                  className="group relative rounded-2xl sm:rounded-[26px] overflow-hidden cursor-pointer bg-[#FCE8EF] border border-[#E26D8E]/30 shadow-lifted hover:border-[#E26D8E] transition-all duration-500 aspect-[4/3] sm:aspect-[4/3.8]"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== FALLBACK_BALLET_IMG) {
                        target.src = FALLBACK_BALLET_IMG;
                      }
                    }}
                  />

                  {/* Tag overlay */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full glass-rose-modal text-[#C43660] border border-[#E26D8E]/40 shadow-xs backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Hover Vignette & Caption Reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E1D]/95 via-[#2A0E1D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-white">
                    <div className="flex items-end justify-between">
                      <div className="pr-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#F7C5D5] block mb-1">
                          {item.categoryLabel}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-normal leading-tight text-[#FFF5F8]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#F3D3DF] font-light mt-1.5 line-clamp-2">
                          {item.caption}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#E26D8E] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
