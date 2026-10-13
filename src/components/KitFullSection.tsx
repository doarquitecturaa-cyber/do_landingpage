import React from 'react';
import { KIT_ITEMS } from '../data/content';
import { Check, ArrowRight } from 'lucide-react';

interface KitFullSectionProps {
  onSelectComponent: (componentTitle: string) => void;
}

export const KitFullSection: React.FC<KitFullSectionProps> = ({ onSelectComponent }) => {
  return (
    <section id="kit-full" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-4xl lg:max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAE8E3] text-[#0A2730] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 border border-black/5 shadow-xs">
            <span>COMPONENTES DEL KIT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px] font-bold text-[#0A2730] tracking-tight leading-[1.05] uppercase sm:whitespace-nowrap">
            ¿Qué incluye exactamente el KIT FULL?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">
            Todo lo necesario para levantar la envolvente estructural completa de tu obra, sin faltantes ni compras de último momento en corralón.
          </p>
        </div>

        {/* 4 Components 2x2 Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {KIT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F9FA] rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative h-60 sm:h-72 w-full bg-slate-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0A2730] text-white text-xs font-bold px-3 py-1 rounded shadow-xs">
                    Componente {item.number}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2730] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullets */}
                  {item.bullets && item.bullets.length > 0 && (
                    <div className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-4">
                      {item.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0A2730]">
                          <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <button
                    onClick={() => onSelectComponent(item.title)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F3B46] hover:text-[#0A2730] transition-colors cursor-pointer group"
                  >
                    <span>{item.actionText}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
