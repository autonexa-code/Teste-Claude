import React from 'react';
import { ArrowUp, Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../lib/site-data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Studio', href: '#sobre' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Simulador de Matrícula', href: '#simulador' },
    { label: 'Jornada da Bailarina', href: '#jornada' },
    { label: 'Galeria & Palco', href: '#galeria' },
    { label: 'Guia do Aluno & Dicas', href: '#guia' },
    { label: 'Contato & Localização', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#230917] text-[#FFF5F8] pt-16 pb-24 sm:pb-16 border-t border-[#E26D8E]/20 relative bg-noise">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#E26D8E]/15">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#FFF5F8] mb-1">
              Studio Day Cardoso
            </span>
            <span className="font-serif italic text-sm text-[#F7C5D5] tracking-wider mb-5">
              A Dança que Cura a Alma
            </span>
            <p className="text-xs sm:text-sm text-[#D8B4C4] font-light leading-relaxed max-w-sm mb-6">
              Um santuário dedicado à técnica do ballet, postura, disciplina e acolhimento humano no Centro de Ourinhos-SP.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Studio Day Cardoso"
                className="w-10 h-10 rounded-full bg-[#3B1428] border border-[#E26D8E]/30 hover:border-[#E26D8E] text-[#F7C5D5] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp do Studio Day Cardoso"
                className="w-10 h-10 rounded-full bg-[#3B1428] border border-[#E26D8E]/30 hover:border-[#E26D8E] text-[#F7C5D5] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps do Studio Day Cardoso"
                className="w-10 h-10 rounded-full bg-[#3B1428] border border-[#E26D8E]/30 hover:border-[#E26D8E] text-[#F7C5D5] flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#F7C5D5] mb-5">
              Navegação Editorial
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-[#D8B4C4] hover:text-[#F7C5D5] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#F7C5D5] mb-5">
              Localização & Contato
            </h4>
            <div className="space-y-3.5 text-xs text-[#D8B4C4] font-light leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#E26D8E] shrink-0 mt-0.5" />
                <span>
                  {STUDIO_INFO.address}, {STUDIO_INFO.neighborhood}<br />
                  {STUDIO_INFO.city}/{STUDIO_INFO.state} — CEP {STUDIO_INFO.cep}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#E26D8E] shrink-0" />
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="hover:text-[#F7C5D5] transition-colors"
                >
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Instagram className="w-4 h-4 text-[#E26D8E] shrink-0" />
                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7C5D5] transition-colors"
                >
                  {STUDIO_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A88296]">
          <p>© 2026 Studio Day Cardoso • Ourinhos/SP. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-[#D8B4C4] hover:text-[#F7C5D5] transition-colors cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
