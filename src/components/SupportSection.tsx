import React from 'react';
import { getWhatsAppUrl } from '../data/content';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

interface SupportSectionProps {
  onOpenQuoteModal: () => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = getWhatsAppUrl("Hola DO Construcciones, me gustaría solicitar asesoramiento técnico sobre el acompañamiento en obra.");

  return (
    <section id="acompanamiento" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl lg:max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAE8E3] text-[#0A2730] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 border border-black/5 shadow-xs">
            <span>ACOMPAÑAMIENTO EN TODO EL PROCESO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#0A2730] tracking-tight leading-[1.05] uppercase sm:whitespace-nowrap">
            Respaldo en obra, de principio a fin.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">
            El mayor temor al incorporar un sistema industrializado es el desamparo post-venta.
          </p>
        </div>

        {/* Content: Left Photo + Right Copy */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Photo */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 min-h-[420px] shadow-2xs">
            <img
              src="/src/assets/images/Acompañamiento DO en terreno.jpg"
              alt="Acompañamiento presencial de DO Construcciones en obra"
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Sabemos que incorporar un sistema nuevo genera incertidumbre. Por eso, en DO eliminamos el desamparo post-venta. No somos un simple despachador de materiales: como nexo técnico local en Pergamino y la región, asistimos en el replanteo inicial, formamos a tu equipo durante los primeros pasos del montaje y aportamos soluciones operativas inmediatas en la obra hasta completar la estructura.
            </p>

            {/* Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm sm:text-base text-[#0A2730] font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Asistencia en el replanteo inicial de soleras</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-[#0A2730] font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Capacitación práctica a tus operarios o cuadrilla</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-[#0A2730] font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Respuestas y soluciones directas ante cualquier duda en el lote</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0A2730] hover:bg-[#123A46] text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Solicitar asesoramiento</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
                <span>Chatear con nuestro equipo</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
