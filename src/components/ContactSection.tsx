import React, { useState } from 'react';
import { MessageCircle, Phone, Instagram, Send, Sparkles, Clock, CheckCircle, MapPin } from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../lib/site-data';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    modality: 'Ballet Clássico Regular',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Olá! Meu nome é ${formData.name || 'um visitante'}. Gostaria de informações sobre a modalidade *${formData.modality}* no Studio Day Cardoso em Ourinhos.${formData.phone ? ` Meu contato: ${formData.phone}` : ''}${formData.message ? ` Mensagem: ${formData.message}` : ''}`;
    const url = `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(formattedText)}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setIsSubmitted(false);
    }, 400);
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#FFF5F8] relative overflow-hidden bg-noise">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#F7C5D5]/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#FCE8EF] blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct channels & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
                <span>Atendimento Personalizado</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A0E1D] tracking-tight mb-5">
                Vamos conversar sobre <span className="rose-gradient-text italic font-normal">sua jornada?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#6E4358] font-light leading-relaxed mb-8">
                Tire todas as suas dúvidas sobre matrículas, horários de turmas, valores e aulas experimentais com a equipe de atendimento do Studio Day Cardoso em Ourinhos.
              </p>

              {/* Direct channels cards */}
              <div className="space-y-4 mb-8">
                {/* WhatsApp */}
                <a
                  href={STUDIO_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-2xl glass-rose-card border border-[#E26D8E]/25 hover:border-[#E26D8E]/70 transition-all duration-200 group shadow-lifted"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#128C7E] flex items-center justify-center shrink-0 mr-4 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6E4358] block">
                      WhatsApp Oficial
                    </span>
                    <span className="text-base font-semibold text-[#2A0E1D] group-hover:text-[#C43660] transition-colors">
                      {STUDIO_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-2xl glass-rose-card border border-[#E26D8E]/25 hover:border-[#E26D8E]/70 transition-all duration-200 group shadow-lifted"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E1306C]/20 text-[#E1306C] flex items-center justify-center shrink-0 mr-4 group-hover:scale-105 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6E4358] block">
                      Instagram Oficial
                    </span>
                    <span className="text-base font-semibold text-[#2A0E1D] group-hover:text-[#C43660] transition-colors">
                      {STUDIO_INFO.instagramHandle}
                    </span>
                  </div>
                </a>

                {/* Endereço / Localização */}
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-2xl glass-rose-card border border-[#E26D8E]/25 hover:border-[#E26D8E]/70 transition-all duration-200 group shadow-lifted"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E26D8E]/20 text-[#C43660] flex items-center justify-center shrink-0 mr-4 group-hover:scale-105 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6E4358] block">
                      Localização em Ourinhos
                    </span>
                    <span className="text-sm font-semibold text-[#2A0E1D] group-hover:text-[#C43660] transition-colors">
                      {STUDIO_INFO.address}, {STUDIO_INFO.neighborhood}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl glass-rose border border-[#E26D8E]/20 flex items-center space-x-3 text-xs text-[#6E4358]">
              <Clock className="w-4 h-4 text-[#C43660] shrink-0" />
              <span>Atendimento humanizado de segunda a sábado em horário comercial.</span>
            </div>
          </div>

          {/* Right Column: Quick Visit & Inquiry Form in Rose Glass */}
          <div className="lg:col-span-7 glass-rose-modal p-8 sm:p-10 rounded-[32px] border border-[#E26D8E]/35 shadow-lifted">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2A0E1D] mb-2">
              Envie uma mensagem direta
            </h3>
            <p className="text-xs sm:text-sm text-[#6E4358] mb-8 font-light">
              Preencha os campos abaixo para iniciar uma conversa personalizada no WhatsApp do Studio Day Cardoso.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#C43660] mb-2">
                  Seu Nome ou Nome da Aluna
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex.: Carolina Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-[#E26D8E]/30 focus:border-[#E26D8E] focus:ring-1 focus:ring-[#E26D8E] text-sm text-[#2A0E1D] outline-none transition-all placeholder:text-[#9F7A8D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#C43660] mb-2">
                    Modalidade de Interesse
                  </label>
                  <select
                    value={formData.modality}
                    onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-[#E26D8E]/30 focus:border-[#E26D8E] focus:ring-1 focus:ring-[#E26D8E] text-sm text-[#2A0E1D] outline-none transition-all"
                  >
                    {SERVICES.map((mod) => (
                      <option key={mod.id} value={mod.name} className="bg-white text-[#2A0E1D]">
                        {mod.name}
                      </option>
                    ))}
                    <option value="Outras Dúvidas / Informações Gerais" className="bg-white text-[#2A0E1D]">
                      Outras Dúvidas / Informações Gerais
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#C43660] mb-2">
                    WhatsApp para Contato
                  </label>
                  <input
                    type="tel"
                    placeholder="(14) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-[#E26D8E]/30 focus:border-[#E26D8E] focus:ring-1 focus:ring-[#E26D8E] text-sm text-[#2A0E1D] outline-none transition-all placeholder:text-[#9F7A8D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#C43660] mb-2">
                  Mensagem ou Dúvida (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Gostaria de saber horários para iniciantes, agendamento de aula experimental gratuita ou detalhes de turmas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#E26D8E]/30 focus:border-[#E26D8E] focus:ring-1 focus:ring-[#E26D8E] text-sm text-[#2A0E1D] outline-none transition-all placeholder:text-[#9F7A8D] resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full py-4 px-6 rounded-full rose-gradient-bg hover:brightness-105 text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lifted cursor-pointer active:scale-99"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span>Abrindo WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Iniciar Conversa no WhatsApp</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#6E4358] text-center">
                Ao clicar, você será direcionado para o WhatsApp oficial do Studio com sua mensagem pré-formatada.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
