import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  ShoppingBag, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  Copy, 
  Check, 
  Share2, 
  MessageCircle 
} from 'lucide-react';
import { CARE_GUIDE_ITEMS, STUDIO_INFO } from '../lib/site-data';

export function CareGuideChecklist() {
  const [copied, setCopied] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const handleCopyChecklist = async () => {
    const textToCopy = `🩰 *GUIA DO ALUNO & CHECKLIST ESSENCIAL — STUDIO DAY CARDOSO*

🎒 *1. Na Bolsa de Dança:*
• Sapatilhas limpas (meia-ponta ou ponta)
• Meia-calça reserva e collant oficial
• Garrafinha térmica com água fresca
• Toalhinha de rosto e casaco pós-aula

✨ *2. Cabelo & Coque:*
• Coque alto, bem fixado com elástico firme, rede invisível e grampos
• Sem brincos grandes ou anéis por segurança

🧘‍♀️ *3. Corpo & Hidratação:*
• Lanche leve 40 min antes (frutas/castanhas)
• Hidratação contínua antes e depois da prática

🩰 *4. Cuidados com Sapatilhas:*
• Arejar à sombra após as aulas (nunca máquina)
• Fitas e elásticos sempre bem costurados

📍 *Studio Day Cardoso — Ourinhos/SP*
A Dança que Cura a Alma`;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleShareWhatsApp = () => {
    const text = `🩰 *Guia do Aluno & Checklist Studio Day Cardoso:*
Dicas essenciais para o primeiro dia e rotina de ensaios no estúdio. Acesse: https://daycardoso.com.br`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="guia" className="py-24 lg:py-32 bg-[#FFF5F8] relative overflow-hidden bg-noise">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#F7C5D5]/35 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FCE8EF] rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#C43660]" />
              <span>Guia de Excelência & Cuidados</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2A0E1D] tracking-tight">
              Checklist & Preparação para a <span className="rose-gradient-text">Sala de Aula</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E4358] font-light leading-relaxed mt-4">
              Pequenos rituais de cuidado que transformam a experiência da aluna, desde a preparação do coque até a preservação das sapatilhas.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleCopyChecklist}
              className={`py-3 px-5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center space-x-2 transition-all duration-300 border cursor-pointer ${
                copied
                  ? 'bg-[#FCE8EF] border-[#E26D8E] text-[#C43660] shadow-lifted'
                  : 'glass-rose hover:border-[#E26D8E] text-[#2A0E1D]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#C43660]" />
                  <span>Copiado para o Celular!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#C43660]" />
                  <span>Copiar para o Celular</span>
                </>
              )}
            </button>

            <button
              onClick={handleShareWhatsApp}
              className="py-3 px-5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center space-x-2 glass-rose hover:border-[#E26D8E] text-[#2A0E1D] transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#C43660]" />
              <span>Compartilhar</span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARE_GUIDE_ITEMS.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-rose-card p-6 sm:p-7 rounded-[24px] flex flex-col justify-between hover:border-[#E26D8E]/70 hover:-translate-y-1 transition-all duration-300 shadow-lifted"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FCE8EF] border border-[#E26D8E]/30 text-[#C43660] flex items-center justify-center mb-5">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C43660] block mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-[#2A0E1D] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E4358] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E26D8E]/20 flex items-center space-x-2 text-[11px] text-[#7E5369]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C43660]" />
                  <span>Dica de ouro Day Cardoso</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tip Box */}
        <div className="mt-10 p-6 rounded-2xl glass-rose-subtle border border-[#E26D8E]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E4358]">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C43660] shrink-0" />
            <span>Ficou com alguma dúvida sobre o uniforme oficial ou sapatilhas indicadas para sua turma?</span>
          </div>
          <a
            href={STUDIO_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[#C43660] font-semibold hover:underline shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Coordenação</span>
          </a>
        </div>

      </div>
    </section>
  );
}
