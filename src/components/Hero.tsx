import React from 'react';
import { ArrowRight, MapPin, Sparkles, ShieldCheck, Users, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_INFO, AUTHORITY_BADGES } from '../lib/site-data';
import heroBalletImage from '../assets/images/hero_ballet_dancer_1787237014575.jpg';

interface HeroProps {
  onOpenVisitModal: () => void;
}

export function Hero({ onOpenVisitModal }: HeroProps) {
  const scrollToSimulator = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#simulador');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 lg:py-0 overflow-hidden bg-[#FFF5F8] bg-noise"
    >
      {/* Dramatic Ambient Light Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#F7C5D5]/40 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] rounded-full bg-[#FCE8EF] blur-[120px] pointer-events-none opacity-80" />

      {/* Decorative Rose & Tiara Concentric Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#E26D8E]/15 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-[#E26D8E]/20 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (60% on desktop): Editorial Typography & High-Converting Action */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Location & Editorial Stamp */}
            <div className="glass-pink-pill inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
              <span className="text-xs font-bold tracking-wider text-[#C43660] uppercase">
                {STUDIO_INFO.city} • {STUDIO_INFO.state}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#E26D8E]" />
              <span className="text-xs text-[#2A0E1D] font-serif italic">
                A Dança que Cura a Alma
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal leading-[1.05] text-[#2A0E1D] tracking-tight text-balance mb-6">
              Onde a dança <br />
              <span className="rose-gradient-text italic font-normal">encontra a sua alma.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-[#6E4358] leading-relaxed max-w-xl mb-9 font-light">
              Escola de Ballet & Dança de alto padrão em Ourinhos. Estrutura profissional com piso flutuante, turmas reduzidas e uma metodologia que acolhe, desenvolve e eleva.
            </p>

            {/* High-Converting CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={onOpenVisitModal}
                className="group inline-flex items-center justify-center space-x-3 rose-gradient-bg text-white hover:brightness-105 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lifted hover:shadow-2xl active:scale-98 cursor-pointer"
              >
                <span>Agendar Aula Experimental</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={scrollToSimulator}
                className="glass-rose inline-flex items-center justify-center space-x-2 text-[#2A0E1D] hover:text-[#C43660] hover:border-[#E26D8E]/60 px-7 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Simular Mensalidade</span>
              </button>
            </div>

            {/* Floating Authority Badges Row */}
            <div className="mt-10 pt-6 border-t border-[#E26D8E]/20 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {AUTHORITY_BADGES.map((b) => (
                <div key={b.id} className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/30 text-[#C43660] flex items-center justify-center shrink-0">
                    {b.iconName === 'ShieldCheck' && <ShieldCheck className="w-4 h-4" />}
                    {b.iconName === 'Users' && <Users className="w-4 h-4" />}
                    {b.iconName === 'Heart' && <Heart className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2A0E1D] block leading-tight">
                      {b.title}
                    </span>
                    <span className="text-[10px] text-[#7E5369] font-light block leading-tight">
                      {b.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (40% on desktop): High-End Editorial Photography Frame with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer delicate rose ring offset */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-[32px] border border-[#E26D8E]/35 pointer-events-none transform rotate-1" />
              
              {/* Main Image Container */}
              <div className="relative rounded-[26px] overflow-hidden bg-[#FCE8EF] shadow-lifted aspect-[4/5] group border border-[#E26D8E]/30">
                <img
                  src={heroBalletImage}
                  alt="Bailarina clássica em movimento expressivo - Studio Day Cardoso Ourinhos"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Romantic blush gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E1D]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glass Badge 1 (Top Left z-30) */}
              <div className="hidden sm:block absolute -top-6 -left-6 glass-rose-card p-4 rounded-2xl shadow-lifted max-w-[210px] z-30 animate-in fade-in duration-500">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#C43660]">Infraestrutura</span>
                  <div className="w-2 h-2 rounded-full bg-[#E26D8E] animate-pulse"></div>
                </div>
                <h3 className="font-serif text-sm font-semibold text-[#2A0E1D]">Piso Flutuante</h3>
                <p className="text-[10px] text-[#7E5369] leading-tight mt-0.5 font-light">Máxima proteção articular para alunas de todas as idades.</p>
              </div>

              {/* Floating Glass Badge 2 (Bottom Right z-30) */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 glass-rose-card p-4 rounded-2xl shadow-lifted max-w-[210px] z-30 animate-in fade-in duration-500">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#C43660]">Atendimento</span>
                  <div className="w-2 h-2 rounded-full bg-[#E26D8E]"></div>
                </div>
                <h3 className="font-serif text-sm font-semibold text-[#2A0E1D]">Turmas Reduzidas</h3>
                <p className="text-[10px] text-[#7E5369] leading-tight mt-0.5 font-light">Atenção personalizada no Centro de Ourinhos/SP.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
