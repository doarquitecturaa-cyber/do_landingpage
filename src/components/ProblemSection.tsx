import React from 'react';
import { PROBLEM_FEATURES } from '../data/content';
import { Clock, ShieldCheck, Ruler, Users } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#0A2730] border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker Label */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 border border-white/15 backdrop-blur-xs shadow-xs">
          <span>EL PROBLEMA REAL EN LA OBRA</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.05] uppercase max-w-4xl">
          Construir con PANELES SIP implica mucho más que comprar paneles.
        </h2>

        {/* Subtitle / Paragraphs */}
        <div className="mt-4 space-y-3.5 text-slate-300 max-w-3xl">
          <p className="leading-relaxed font-bold text-slate-100">
            Muchos arquitectos y constructores quieren construir con paneles SIP por su eficiencia térmica y velocidad de ejecución. Pero en la práctica, dar el paso suele generar fricción técnica.
          </p>
          <p className="leading-relaxed text-slate-300">
            Comprar paneles sueltos en fábrica no resuelve una obra. Si el despiece, la modulación y los encuentros estructurales no están resueltos con anticipación, todo el riesgo se traslada al montador: cortes manuales, desperdicio de material, dudas de encastre y demoras que terminan anulando la ventaja del sistema.
          </p>
        </div>

        {/* 4 Cards Grid - One next to the other */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEM_FEATURES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F3B46] mb-1.5">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-[#0A2730] tracking-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2">
                {item.iconName === 'clock' && <Clock className="w-4 h-4 text-emerald-600 shrink-0" />}
                {item.iconName === 'shield' && <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />}
                {item.iconName === 'ruler' && <Ruler className="w-4 h-4 text-emerald-600 shrink-0" />}
                {item.iconName === 'users' && <Users className="w-4 h-4 text-emerald-600 shrink-0" />}
                <span className="text-xs font-bold text-[#0A2730] tracking-tight">
                  {item.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
