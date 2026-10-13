import React, { useState } from 'react';
import { FAQS_LIST } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAE8E3] text-[#0A2730] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 border border-black/5 shadow-xs">
            <span>PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#0A2730] tracking-tight leading-[1.05] uppercase">
            Consultas técnicas habituales.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Respuestas a las dudas más comunes sobre la adaptación de proyectos, costos, tiempos y montaje con el KIT FULL SIPCOR.
          </p>
        </div>

        {/* 8 Accordion Items */}
        <div className="space-y-3">
          {FAQS_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-[#F8F9FA] rounded-xl border border-slate-200 overflow-hidden transition-all duration-150"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A2730] leading-snug">
                    {faq.number}. {faq.question}
                  </span>
                  <div className={`p-1 rounded-full text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#0A2730]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
