import React from 'react';
import { PROCESS_STAGES } from '../data/content';
import { CloudUpload, Layers, Hammer, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'upload': return <CloudUpload className="w-5 h-5 text-[#0F3B46]" />;
      case 'layers': return <Layers className="w-5 h-5 text-[#0F3B46]" />;
      case 'hammer': return <Hammer className="w-5 h-5 text-[#0F3B46]" />;
      case 'shield': return <ShieldCheck className="w-5 h-5 text-[#0F3B46]" />;
      default: return <Layers className="w-5 h-5 text-[#0F3B46]" />;
    }
  };

  return (
    <section id="proceso" className="py-20 sm:py-24 bg-[#F6F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAE8E3] text-[#0A2730] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 border border-black/5 shadow-xs">
            <span>EL PROCESO EN 4 ETAPAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#0A2730] tracking-tight leading-[1.05] uppercase">
            Del proyecto a la obra.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">
            Una secuencia lineal, previsible y documentada. Cada etapa tiene un entregable tangible y elimina la improvisación en el lote.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Step Badge + Kicker */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-[#0A2730] text-white text-xs font-bold shrink-0">
                    {stage.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F3B46]">
                    {stage.stepTag}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="shrink-0">
                    {getStageIcon(stage.iconName)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A2730] tracking-tight">
                    {stage.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#0A2730]">
                  Entregable verificado
                </span>
                <span className="font-bold text-emerald-600">
                  ✓ {stage.stageBadge}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
