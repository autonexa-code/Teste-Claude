import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../lib/site-data';
import brandLogo from '../assets/images/logo.png';

// ============================================================================
// 🎨 CONFIGURAÇÕES VISUAIS DA LOGO / SELO FLUTUANTE (FÁCIL AJUSTE NO CÓDIGO)
// ============================================================================
// Você pode alterar facilmente qualquer valor abaixo (em pixels numéricos) para
// controlar a escala, posição e o deslocamento do selo visual da Bailarina:
export const LOGO_CONFIG = {
  // Tamanho no Desktop (computadores e tablets grandes)
  desktopWidth: 90,           // Largura em pixels (aumentado +20px)
  desktopHeight: 116,         // Altura limite em pixels
  desktopTopOffset: -18,      // Deslocamento vertical superior (efeito selo sobreposto elegante)
  desktopLeftOffset: 0,       // Deslocamento horizontal inicial

  // Tamanho no Mobile (smartphones)
  mobileWidth: 65,            // Largura em pixels no mobile (aumentado +15px)
  mobileHeight: 84,           // Altura limite em pixels no mobile
  mobileTopOffset: -10,       // Deslocamento vertical no mobile
  mobileLeftOffset: 0,        // Deslocamento horizontal no mobile

  // Espaçamento do texto em relação à logo
  desktopTextPaddingLeft: 96, // Espaço (em px) para o nome "STUDIO DAY CARDOSO" respirar ao lado da logo
  mobileTextPaddingLeft: 70,  // Espaço no mobile

  // Efeito ao rolar a página:
  // Se true: a logo rola junto e desaparece com fade-out suave ao descer a página,
  // mantendo a barra de navegação compacta e sem ficar presa na tela.
  hideOnScroll: true,
};

interface NavbarProps {
  onOpenVisitModal: (modalityName?: string) => void;
}

export function Navbar({ onOpenVisitModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Studio', href: '#sobre' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Jornada', href: '#jornada' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Guia do Aluno', href: '#guia' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-rose py-3 shadow-lifted border-b border-[#E26D8E]/25'
          : 'bg-[#FFF5F8]/92 backdrop-blur-md py-4 sm:py-5 border-b border-[#E26D8E]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between relative">
        {/* Brand Logo & Tagline Container */}
        <div className="relative flex items-center min-h-[44px]">
          {/* 
            🌸 ELEMENTO GRÁFICO / SELO FLUTUANTE (BAILARINA & ROSA)
            - Posicionamento absoluto que ultrapassa levemente os limites da barra de navegação (efeito selo/sticker)
            - Não estica a altura do header
            - Desaparece suavemente ao rolar a página (hideOnScroll), rolando com o conteúdo
          */}
          <div
            id="floating-brand-stamp"
            className={`absolute pointer-events-none transition-all duration-500 ease-out z-20 ${
              isScrolled && LOGO_CONFIG.hideOnScroll
                ? 'opacity-0 -translate-y-5 scale-90 pointer-events-none'
                : 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            }`}
            style={{
              top: `${LOGO_CONFIG.desktopTopOffset}px`,
              left: `${LOGO_CONFIG.desktopLeftOffset}px`,
            }}
          >
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              aria-label="Studio Day Cardoso - Início"
              className="block group/stamp focus:outline-none"
            >
              <img
                src={brandLogo}
                alt="Selo Artístico Studio Day Cardoso - Bailarina e Rosa"
                className="w-[65px] sm:w-[90px] h-auto max-h-[84px] sm:max-h-[116px] object-contain drop-shadow-[0_6px_18px_rgba(196,54,96,0.25)] transition-all duration-300 group-hover/stamp:scale-105 group-hover/stamp:rotate-1"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/logo.png') {
                    target.src = '/logo.png';
                  }
                }}
              />
            </a>
          </div>

          {/* Nome Principal e Tagline com espaçamento inteligente para acomodar o selo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className={`group flex flex-col items-start focus:outline-none transition-all duration-500 ${
              isScrolled && LOGO_CONFIG.hideOnScroll
                ? 'pl-0'
                : 'pl-[68px] sm:pl-[96px]'
            }`}
            id="brand-logo-link"
          >
            <div className="flex items-center space-x-2">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#2A0E1D] transition-colors duration-300 group-hover:text-[#C43660]">
                STUDIO DAY CARDOSO
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#C43660] font-bold -mt-0.5">
              A Dança que Cura a Alma
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs uppercase tracking-widest font-bold text-[#6E4358] hover:text-[#C43660] transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#E26D8E] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            id="nav-cta-btn"
            onClick={() => onOpenVisitModal()}
            className="inline-flex items-center space-x-2 rose-gradient-bg hover:brightness-105 text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lifted active:scale-98 cursor-pointer"
          >
            <span>Agendar Aula</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="lg:hidden p-2.5 rounded-xl text-[#2A0E1D] hover:text-[#C43660] glass-rose transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-[#C43660]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[64px] sm:top-[68px] glass-rose-modal border-b border-[#E26D8E]/30 shadow-2xl px-6 py-8 flex flex-col space-y-5 animate-in fade-in slide-in-from-top-4 duration-300 z-50 max-h-[calc(100vh-75px)] overflow-y-auto"
        >
          <div className="flex items-center space-x-3 pb-3 border-b border-[#E26D8E]/20">
            <img
              src={brandLogo}
              alt="Studio Day Cardoso"
              className="w-12 h-12 object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== '/logo.png') {
                  target.src = '/logo.png';
                }
              }}
            />
            <div>
              <p className="font-serif font-bold text-base text-[#2A0E1D]">STUDIO DAY CARDOSO</p>
              <p className="text-[9px] uppercase tracking-widest text-[#C43660] font-bold">Ourinhos / SP</p>
            </div>
          </div>

          <div className="flex flex-col space-y-3.5 border-b border-[#E26D8E]/20 pb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-serif text-[#2A0E1D] hover:text-[#C43660] transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#E26D8E]" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenVisitModal();
              }}
              className="w-full py-3.5 px-4 rose-gradient-bg text-white rounded-full text-center text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 shadow-lifted"
            >
              <span>Agendar Aula Experimental</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={STUDIO_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 glass-rose text-[#C43660] hover:border-[#E26D8E] rounded-full text-center text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp do Studio</span>
            </a>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-[#6E4358]">
              {STUDIO_INFO.address}, {STUDIO_INFO.neighborhood} — {STUDIO_INFO.city}/SP
            </p>
            <p className="text-xs font-semibold text-[#C43660] mt-1">{STUDIO_INFO.phoneDisplay}</p>
          </div>
        </div>
      )}
    </header>
  );
}

