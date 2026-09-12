import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, Check, Send, ArrowRight, Shield, Clock } from 'lucide-react';
import { SIMULATOR_CONFIG, STUDIO_INFO } from '../lib/site-data';

export function BudgetSimulator() {
  const [selectedLevelId, setSelectedLevelId] = useState<string>(SIMULATOR_CONFIG.levels[1].id);
  const [selectedFreqId, setSelectedFreqId] = useState<string>(SIMULATOR_CONFIG.frequencies[1].id);
  const [selectedOptionals, setSelectedOptionals] = useState<string[]>([]);
  const [billingPeriod, setBillingPeriod] = useState<'mensal' | 'semestral' | 'anual'>('mensal');
  const [studentName, setStudentName] = useState('');

  const currentLevel = useMemo(() => {
    return SIMULATOR_CONFIG.levels.find(l => l.id === selectedLevelId) || SIMULATOR_CONFIG.levels[0];
  }, [selectedLevelId]);

  const currentFreq = useMemo(() => {
    return SIMULATOR_CONFIG.frequencies.find(f => f.id === selectedFreqId) || SIMULATOR_CONFIG.frequencies[1];
  }, [selectedFreqId]);

  const toggleOptional = (id: string) => {
    setSelectedOptionals(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculation
  const calculation = useMemo(() => {
    const basePrice = currentLevel.basePrice;
    const frequencyMultiplier = currentFreq.multiplier;
    const monthlyCoursePrice = Math.round(basePrice * frequencyMultiplier);

    const monthlyOptionalsTotal = selectedOptionals.reduce((acc, optId) => {
      const opt = SIMULATOR_CONFIG.optionals.find(o => o.id === optId);
      if (opt && !opt.isOneTime) {
        return acc + opt.price;
      }
      return acc;
    }, 0);

    const oneTimeOptionalsTotal = selectedOptionals.reduce((acc, optId) => {
      const opt = SIMULATOR_CONFIG.optionals.find(o => o.id === optId);
      if (opt && opt.isOneTime) {
        return acc + opt.price;
      }
      return acc;
    }, 0);

    const fullMonthly = monthlyCoursePrice + monthlyOptionalsTotal;

    let discountPercent = 0;
    if (billingPeriod === 'semestral') discountPercent = SIMULATOR_CONFIG.discounts.semestral;
    if (billingPeriod === 'anual') discountPercent = SIMULATOR_CONFIG.discounts.anual;

    const finalMonthly = Math.round(fullMonthly * (1 - discountPercent));
    const monthlySavings = fullMonthly - finalMonthly;

    return {
      monthlyCoursePrice,
      monthlyOptionalsTotal,
      oneTimeOptionalsTotal,
      fullMonthly,
      finalMonthly,
      monthlySavings,
      discountPercent,
    };
  }, [currentLevel, currentFreq, selectedOptionals, billingPeriod]);

  const handleSendWhatsApp = () => {
    const optNames = selectedOptionals
      .map(id => SIMULATOR_CONFIG.optionals.find(o => o.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const periodLabel = billingPeriod === 'mensal' ? 'Plano Mensal' : billingPeriod === 'semestral' ? 'Plano Semestral (10% OFF)' : 'Plano Anual (15% OFF)';

    const text = `*SIMULAÇÃO DE PLANO DE AULAS — STUDIO DAY CARDOSO*
${studentName ? `👤 *Aluna(o):* ${studentName}\n` : ''}
🩰 *Nível / Faixa:* ${currentLevel.label} (${currentLevel.baseModality})
📅 *Frequência:* ${currentFreq.label}
${optNames ? `✨ *Módulos Extras:* ${optNames}\n` : ''}🏷️ *Modalidade de Pagamento:* ${periodLabel}
💰 *Investimento Estimado:* ~R$ ${calculation.finalMonthly}/mês~ ${calculation.discountPercent > 0 ? `(Economia de R$ ${calculation.monthlySavings}/mês)` : ''}
${calculation.oneTimeOptionalsTotal > 0 ? `📦 *Itens de Início (Kit):* R$ ${calculation.oneTimeOptionalsTotal}\n` : ''}
Olá! Gostaria de confirmar a disponibilidade de horários para essa simulação e agendar uma *Aula Experimental de Acolhimento*.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <section id="simulador" className="py-24 lg:py-32 bg-[#FFF5F8] relative overflow-hidden bg-noise">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#F7C5D5]/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FCE8EF] rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glass-pink-pill inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#C43660]" />
            <span>Simulador Interativo de Aulas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2A0E1D] mb-5 tracking-tight">
            Monte seu <span className="rose-gradient-text">Plano de Dança</span> Personalizado
          </h2>
          <p className="text-sm sm:text-base text-[#6E4358] font-light leading-relaxed">
            Escolha a frequência semanal, faixa etária e módulos adicionais para estimar sua mensalidade e receber um cronograma sugerido direto no WhatsApp.
          </p>
        </div>

        {/* Simulator Grid (Controls vs Summary) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Faixa Etária / Nível */}
            <div className="glass-rose-card p-6 sm:p-7 rounded-[24px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C43660] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E26D8E]/20 border border-[#E26D8E]/40 flex items-center justify-center text-[10px] text-[#C43660]">1</span>
                  Faixa Etária & Nível
                </span>
                <span className="text-[11px] text-[#7E5369]">Selecione uma opção</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SIMULATOR_CONFIG.levels.map((lvl) => {
                  const isSelected = selectedLevelId === lvl.id;
                  return (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setSelectedLevelId(lvl.id)}
                      className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                        isSelected
                          ? 'bg-[#FCE8EF] border-[#E26D8E] shadow-[0_0_20px_rgba(226,109,142,0.18)]'
                          : 'bg-[#FFF9FB]/80 border-[#E26D8E]/20 hover:border-[#E26D8E]/50 hover:bg-[#FDF0F5]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-[#C43660]' : 'text-[#2A0E1D]'}`}>
                          {lvl.label}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#C43660]" />}
                      </div>
                      <p className="text-xs text-[#6E4358] font-light">
                        {lvl.baseModality}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Frequência Semanal */}
            <div className="glass-rose-card p-6 sm:p-7 rounded-[24px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C43660] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E26D8E]/20 border border-[#E26D8E]/40 flex items-center justify-center text-[10px] text-[#C43660]">2</span>
                  Frequência Semanal
                </span>
                <span className="text-[11px] text-[#7E5369]">Quantas aulas por semana?</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SIMULATOR_CONFIG.frequencies.map((freq) => {
                  const isSelected = selectedFreqId === freq.id;
                  return (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setSelectedFreqId(freq.id)}
                      className={`p-4 rounded-xl text-left transition-all duration-200 border relative cursor-pointer ${
                        isSelected
                          ? 'bg-[#FCE8EF] border-[#E26D8E] shadow-[0_0_20px_rgba(226,109,142,0.18)]'
                          : 'bg-[#FFF9FB]/80 border-[#E26D8E]/20 hover:border-[#E26D8E]/50 hover:bg-[#FDF0F5]'
                      }`}
                    >
                      {freq.badge && (
                        <span className="absolute top-2.5 right-2.5 text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E26D8E]/20 text-[#C43660] border border-[#E26D8E]/30">
                          {freq.badge}
                        </span>
                      )}
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`text-sm font-semibold ${isSelected ? 'text-[#C43660]' : 'text-[#2A0E1D]'}`}>
                          {freq.label}
                        </span>
                      </div>
                      <p className="text-xs text-[#6E4358] font-light">
                        {freq.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Opcionais & Módulos Extras */}
            <div className="glass-rose-card p-6 sm:p-7 rounded-[24px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C43660] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E26D8E]/20 border border-[#E26D8E]/40 flex items-center justify-center text-[10px] text-[#C43660]">3</span>
                  Módulos & Opcionais
                </span>
                <span className="text-[11px] text-[#7E5369]">Opcional</span>
              </div>

              <div className="space-y-3">
                {SIMULATOR_CONFIG.optionals.map((opt) => {
                  const isChecked = selectedOptionals.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleOptional(opt.id)}
                      className={`p-3.5 sm:p-4 rounded-xl flex items-center justify-between border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#FCE8EF] border-[#E26D8E]/80'
                          : 'bg-[#FFF9FB]/70 border-[#E26D8E]/20 hover:border-[#E26D8E]/40 hover:bg-[#FDF0F5]'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border transition-colors ${
                          isChecked ? 'bg-[#E26D8E] border-[#E26D8E] text-white' : 'border-[#E26D8E]/40 bg-transparent'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-[#2A0E1D]">
                            {opt.label}
                          </p>
                          <p className="text-[11px] text-[#6E4358] font-light">
                            {opt.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#C43660] shrink-0 ml-3">
                        +{opt.isOneTime ? `R$ ${opt.price} (único)` : `R$ ${opt.price}/mês`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Summary / WhatsApp Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div 
              layout
              className="glass-rose-modal p-7 sm:p-8 rounded-[28px] border border-[#E26D8E]/40 shadow-lifted relative overflow-hidden"
            >
              {/* Rose Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E26D8E] to-transparent" />

              <div className="flex items-center justify-between pb-5 border-b border-[#E26D8E]/20 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#C43660] block">
                    Resumo do Investimento
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#2A0E1D]">
                    Studio Day Cardoso
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FCE8EF] border border-[#E26D8E]/30 flex items-center justify-center text-[#C43660]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Billing Period Tabs */}
              <div className="mb-6">
                <label className="text-[11px] text-[#6E4358] uppercase font-bold tracking-wider block mb-2">
                  Condição de Matrícula:
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[#FFF9FB] border border-[#E26D8E]/25">
                  <button
                    type="button"
                    onClick={() => setBillingPeriod('mensal')}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      billingPeriod === 'mensal' ? 'bg-[#E26D8E] text-white shadow-xs' : 'text-[#6E4358] hover:text-[#2A0E1D]'
                    }`}
                  >
                    Mensal
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingPeriod('semestral')}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      billingPeriod === 'semestral' ? 'bg-[#E26D8E] text-white shadow-xs' : 'text-[#6E4358] hover:text-[#2A0E1D]'
                    }`}
                  >
                    Semestral (-10%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingPeriod('anual')}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      billingPeriod === 'anual' ? 'bg-[#E26D8E] text-white shadow-xs' : 'text-[#6E4358] hover:text-[#2A0E1D]'
                    }`}
                  >
                    Anual (-15%)
                  </button>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-xs sm:text-sm mb-6 pb-6 border-b border-[#E26D8E]/20">
                <div className="flex justify-between items-center text-[#6E4358]">
                  <span>{currentLevel.label} ({currentFreq.label})</span>
                  <span className="font-semibold text-[#2A0E1D]">R$ {calculation.monthlyCoursePrice}/mês</span>
                </div>

                {calculation.monthlyOptionalsTotal > 0 && (
                  <div className="flex justify-between items-center text-[#6E4358]">
                    <span>Módulos Extras Selecionados</span>
                    <span className="font-semibold text-[#2A0E1D]">+R$ {calculation.monthlyOptionalsTotal}/mês</span>
                  </div>
                )}

                {calculation.discountPercent > 0 && (
                  <div className="flex justify-between items-center text-[#C43660]">
                    <span>Desconto Plano {billingPeriod === 'semestral' ? 'Semestral' : 'Anual'}</span>
                    <span className="font-bold">-R$ {calculation.monthlySavings}/mês</span>
                  </div>
                )}

                {calculation.oneTimeOptionalsTotal > 0 && (
                  <div className="flex justify-between items-center text-[#C43660]/90 pt-2 border-t border-[#E26D8E]/15">
                    <span>Itens Iniciais (Kit Aluno)</span>
                    <span className="font-bold">R$ {calculation.oneTimeOptionalsTotal} (taxa única)</span>
                  </div>
                )}
              </div>

              {/* Total Display */}
              <div className="mb-6 bg-[#FCE8EF] p-4 rounded-2xl border border-[#E26D8E]/35 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#7E5369] block">
                    Mensalidade Estimada
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#2A0E1D]">
                      R$ {calculation.finalMonthly}
                    </span>
                    <span className="text-xs text-[#6E4358]">/mês</span>
                  </div>
                </div>
                {calculation.discountPercent > 0 && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#E26D8E]/20 text-[#C43660] rounded-full border border-[#E26D8E]/40">
                    {calculation.discountPercent * 100}% OFF
                  </span>
                )}
              </div>

              {/* Optional Name Input */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nome da aluna(o) (opcional)"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E26D8E]/30 focus:border-[#E26D8E] focus:ring-1 focus:ring-[#E26D8E] text-xs text-[#2A0E1D] outline-none placeholder:text-[#9A7085]"
                />
              </div>

              {/* Send Button */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-4 px-6 rounded-full rose-gradient-bg hover:brightness-105 text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lifted cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Simulação no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-center justify-center space-x-2 text-[11px] text-[#6E4358] text-center font-light">
                <Shield className="w-3.5 h-3.5 text-[#C43660]" />
                <span>Garante prioridade no agendamento da aula experimental</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
