import React from 'react';
import { APPROACH_CARDS } from '../data/content';
import { ArrowRight, Layers, Calculator, Factory, FileText, GraduationCap, HardHat } from 'lucide-react';

interface ApproachSectionProps {
  onOpenQuoteModal: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onOpenQuoteModal }) => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'layers': return <Layers className="w-5 h-5 text-[#0F3B46]" />;
      case 'calculator': return <Calculator className="w-5 h-5 text-[#0F3B46]" />;
      case 'factory': return <Factory className="w-5 h-5 text-[#0F3B46]" />;
      case 'fileText': return <FileText className="w-5 h-5 text-[#0F3B46]" />;
      case 'graduationCap': return <GraduationCap className="w-5 h-5 text-[#0F3B46]" />;
      case 'hardHat': return <HardHat className="w-5 h-5 text-[#0F3B46]" />;
      default: return <Layers className="w-5 h-5 text-[#0F3B46]" />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F6F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-4xl lg:max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAE8E3] text-[#0A2730] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 border border-black/5 shadow-xs">
            <span>NUESTRO ENFOQUE</span>
            <span className="text-slate-400 font-normal">·</span>
            <span className="text-slate-700">INTEGRAL Y PROFESIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#0A2730] tracking-tight leading-[1.05] uppercase">
            Más que proveer paneles, somos tus socios en la obra.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">
            DO es el eslabón que conecta la ingeniería de SIPCOR con la realidad de tu obra
          </p>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPROACH_CARDS.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-[#0A2730] text-xs font-bold rounded-md">
                    {card.number}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                    {getCardIcon(card.iconName)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0A2730] tracking-tight mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A2730]">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Intermedio Callout: 100% KIT FULL SIPCOR */}
        <div className="mt-14 bg-[#0A2730] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-[15px] sm:text-base text-emerald-400 shrink-0 tracking-tight">
              100%
            </div>
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAE8E3] text-[#0A2730] text-[11px] font-bold tracking-wider uppercase mb-2">
                SOLUCIÓN INTEGRAL
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                KIT FULL SIPCOR · Proyectos 100% a tu medida
              </h3>
              <p className="text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
                Una solución, de principio a fin. No adaptamos tu diseño a módulos rígidos; transformamos tu plano en un kit exacto listo para montar.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors cursor-pointer"
          >
            <span>Cotizar mi proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
