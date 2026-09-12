import React, { useState, useEffect } from 'react';
import { X, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../lib/site-data';

interface VisitModalProps {
  isOpen: boolean;
  initialModality?: string;
  onClose: () => void;
}

export function VisitModal({ isOpen, initialModality, onClose }: VisitModalProps) {
  const [name, setName] = useState('');
  const [modality, setModality] = useState('Ballet Clássico Regular');
  const [interestType, setInterestType] = useState('Aula Experimental Gratuita');
  const [message, setMessage] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (initialModality) {
      setModality(initialModality);
    }
  }, [initialModality]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Olá! Meu nome é ${name || 'um visitante'}. Gostaria de solicitar *${interestType}* para a modalidade *${modality}* no Studio Day Cardoso em Ourinhos.${message ? ` Observações: ${message}` : ''}`;
    const url = `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(formattedText)}`;

    setIsRedirecting(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setIsRedirecting(false);
      onClose();
    }, 400);
  };

  return (
    <div
      id="visit-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-lg glass-rose-modal rounded-[32px] border border-[#E26D8E]/35 shadow-lifted p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-[#FCE8EF] hover:bg-[#C43660] text-[#6E4358] hover:text-white transition-all cursor-pointer border border-[#E26D8E]/40 flex items-center justify-center shadow-md hover:scale-105 active:scale-95"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C43660]" />
            <span>Studio Day Cardoso</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2A0E1D]">
            Agendar Aula & Visita
          </h3>
          <p className="text-xs sm:text-sm text-[#6E4358] mt-1 font-light">
            Preencha seus dados para conversarmos diretamente pelo WhatsApp e confirmarmos o melhor horário.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C43660] mb-1.5">
              Seu Nome ou do(a) Aluno(a)
            </label>
            <input
              type="text"
              required
              placeholder="Ex.: Mariana Fernandes"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#E26D8E]/30 focus:border-[#E26D8E] text-sm text-[#2A0E1D] outline-none transition-all placeholder:text-[#9F7A8D]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C43660] mb-1.5">
              Modalidade
            </label>
            <select
              value={modality}
              onChange={(e) => setModality(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[#E26D8E]/30 focus:border-[#E26D8E] text-sm text-[#2A0E1D] outline-none transition-all"
            >
              {SERVICES.map((mod) => (
                <option key={mod.id} value={mod.name} className="bg-white text-[#2A0E1D]">
                  {mod.name}
                </option>
              ))}
              <option value="Informações Gerais / Outras dúvidas" className="bg-white text-[#2A0E1D]">
                Informações Gerais / Outras dúvidas
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C43660] mb-1.5">
              Tipo de Agendamento
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['Aula Experimental Gratuita', 'Conhecer o Espaço', 'Valores e Matrícula', 'Tirar Dúvidas'].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setInterestType(item)}
                  className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer font-medium ${
                    interestType === item
                      ? 'rose-gradient-bg text-white border-transparent font-bold shadow-xs'
                      : 'glass-rose border-[#E26D8E]/25 text-[#6E4358] hover:text-[#2A0E1D] hover:border-[#E26D8E]/60'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#C43660] mb-1.5">
              Observações (Idade, dias de preferência...)
            </label>
            <textarea
              rows={2}
              placeholder="Ex.: Idade 7 anos, preferência para turmas no período da tarde..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#E26D8E]/30 focus:border-[#E26D8E] text-sm text-[#2A0E1D] outline-none transition-all placeholder:text-[#9F7A8D] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 px-6 rounded-full rose-gradient-bg text-white hover:brightness-105 text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-all shadow-lifted cursor-pointer"
          >
            {isRedirecting ? (
              <>
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Abrindo WhatsApp...</span>
              </>
            ) : (
              <>
                <MessageCircle className="w-4 h-4" />
                <span>Confirmar no WhatsApp</span>
              </>
            )}
          </button>
        </form>

        <p className="text-[11px] text-[#6E4358] text-center mt-4">
          Localização: {STUDIO_INFO.address}, Centro — Ourinhos/SP
        </p>
      </div>
    </div>
  );
}
