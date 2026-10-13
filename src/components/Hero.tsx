import React from 'react';
import { getWhatsAppUrl } from '../data/content';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = getWhatsAppUrl("Hola DO Construcciones, vi su web y quiero consultar por el KIT FULL SIPCOR para un proyecto en mi zona.");

  return (
    <section className="relative overflow-hidden bg-[#F6F7F8] border-b border-slate-200">
      
      {/* Background SIP construction photo container on the right */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-7/12 pointer-events-none select-none overflow-hidden">
        <img
          src="/src/assets/images/hero_SIPCOR.jpeg"
          alt="Obra real de montaje de paneles SIP - DO Construcciones"
          className="w-full h-full object-cover object-center lg:object-right opacity-40 lg:opacity-90 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        {/* Soft linear gradient scrim to blend seamlessly with left content */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F7F8] via-[#F6F7F8]/80 to-transparent lg:w-1/2"></div>
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#F6F7F8] via-transparent to-transparent h-24 bottom-0 top-auto"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 xl:py-32">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
          
          {/* Top Badge: REPRESENTANTE OFICIAL SIPCOR · PERGAMINO Y ZONA */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAE8E3] text-[#0A2730] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-6 sm:mb-8 border border-black/5 shadow-xs">
            <span>REPRESENTANTE OFICIAL SIPCOR</span>
            <span className="text-slate-400 font-normal">·</span>
            <span className="text-slate-700">PERGAMINO Y ZONA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-bold text-[#0A2730] tracking-tight leading-[0.98] uppercase font-barlow-condensed">
            DEL PLANO A LA OBRA.
            <br />
            <span className="text-[#0E343E]">SIN IMPROVISAR EN EL CAMINO.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-[16px] text-slate-600 font-normal leading-relaxed max-w-xl">
            Desarrollo técnico, provisión de KIT FULL a medida y acompañamiento en obra para arquitectos y constructores.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            
            {/* Primary Dark Button: Cotizar mi proyecto */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0A2730] hover:bg-[#123A46] text-white text-sm sm:text-base font-semibold shadow-sm hover:shadow-md transition-all duration-150 group cursor-pointer"
            >
              <span>Cotizar mi proyecto</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Green WhatsApp Button: Consultar por WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white text-sm sm:text-base font-semibold shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
              <span>Consultar por WhatsApp</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
