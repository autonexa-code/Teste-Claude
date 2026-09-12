import { MapPin, Phone, Navigation, Clock, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../lib/site-data';

export function LocationMap() {
  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-[#FFF5F8] relative overflow-hidden bg-noise">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#F7C5D5]/35 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
            <span>Fácil Acesso no Centro</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E1D] tracking-tight mb-4">
            Venha nos <span className="rose-gradient-text italic font-normal">visitar pessoalmente.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E4358] font-light leading-relaxed">
            Estamos localizados no coração de Ourinhos, em um espaço planejado para o seu conforto, segurança e para o melhor desenvolvimento da dança.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Information Card + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address & Direct Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-[32px] glass-rose-card border border-[#E26D8E]/30 shadow-lifted">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-rose-modal text-xs font-bold text-[#C43660] border border-[#E26D8E]/40 mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span>Ourinhos • São Paulo</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2A0E1D] mb-4">
                Studio Day Cardoso
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#6E4358] mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/30 flex items-center justify-center text-[#C43660] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[#2A0E1D] font-semibold">{STUDIO_INFO.address}</p>
                    <p className="text-xs text-[#6E4358] mt-0.5">{STUDIO_INFO.neighborhood} — {STUDIO_INFO.city}/{STUDIO_INFO.state}</p>
                    <p className="text-xs text-[#7E5369]">CEP: {STUDIO_INFO.cep}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/30 flex items-center justify-center text-[#C43660] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[#2A0E1D] font-semibold">{STUDIO_INFO.phoneDisplay}</p>
                    <p className="text-xs text-[#7E5369]">Atendimento e Informações</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/30 flex items-center justify-center text-[#C43660] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[#2A0E1D] font-semibold">Atendimento com Agendamento</p>
                    <p className="text-xs text-[#7E5369]">Visitas e aulas experimentais</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-rose border border-[#E26D8E]/20 mb-8 flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#C43660] shrink-0" />
                <p className="text-xs text-[#6E4358] leading-relaxed">
                  Localização central privilegiada com facilidade de estacionamento e acesso rápido pelas principais vias de Ourinhos.
                </p>
              </div>
            </div>

            {/* Action Buttons: Como Chegar & Ligar */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E26D8E]/20">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 rose-gradient-bg text-white hover:brightness-105 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-lifted"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Como Chegar</span>
              </a>

              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center space-x-2 glass-rose hover:border-[#E26D8E] text-[#C43660] border border-[#E26D8E]/30 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-[#C43660]" />
                <span>Ligar</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 rounded-[32px] overflow-hidden border border-[#E26D8E]/30 shadow-lifted relative min-h-[380px] sm:min-h-[460px] bg-[#FCE8EF]">
            <iframe
              title="Localização do Studio Day Cardoso em Ourinhos"
              src={`https://maps.google.com/maps?q=${STUDIO_INFO.coordinates.lat},${STUDIO_INFO.coordinates.lng}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] sm:min-h-[460px]"
            />

            {/* Direct Open Button Overlay */}
            <div className="absolute top-4 right-4">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full glass-rose-modal shadow-lifted text-xs font-bold text-[#C43660] border border-[#E26D8E]/40 hover:border-[#E26D8E] transition-colors"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
