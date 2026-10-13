import React from 'react';
import { PHONE_NUMBER, PHONE_CALL_URL, EMAIL_ADDRESS, LOCATION_CITY, getWhatsAppUrl } from '../data/content';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071F27] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-[#071F27] rounded-lg flex items-center justify-center font-black text-lg">
                DO
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black text-white uppercase tracking-tight">
                  DO Construcciones
                </span>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  En Seco · SIPCOR
                </span>
                <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">
                  Pergamino
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Representante Oficial SIPCOR en Pergamino y zona.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Desarrollo técnico, provisión de KIT FULL a medida y acompañamiento en obra para arquitectos y constructores.
            </p>
          </div>

          {/* Column SECCIONES */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Secciones
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#kit-full" className="hover:text-white transition-colors">KIT FULL SIPCOR</a></li>
              <li><a href="#proceso" className="hover:text-white transition-colors">El Proceso</a></li>
              <li><a href="#por-que-do" className="hover:text-white transition-colors">Por qué DO</a></li>
              <li><a href="#acompanamiento" className="hover:text-white transition-colors">Acompañamiento</a></li>
              <li><a href="#obras" className="hover:text-white transition-colors">Obras Realizadas</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ Técnicas</a></li>
            </ul>
          </div>

          {/* Column SOLUCIONES */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Soluciones
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#kit-full" className="hover:text-white transition-colors">Muros SIP Térmicos</a></li>
              <li><a href="#kit-full" className="hover:text-white transition-colors">Cubiertas Estructurales</a></li>
              <li><a href="#kit-full" className="hover:text-white transition-colors">Planos de Montaje 1 a 1</a></li>
              <li><a href="#kit-full" className="hover:text-white transition-colors">Perfilería y Fijaciones</a></li>
              <li><a href="#acompanamiento" className="hover:text-white transition-colors">Asistencia en Terreno</a></li>
              <li><a href="#cotizar" className="hover:text-white transition-colors">Cotización a Medida</a></li>
            </ul>
          </div>

          {/* Column CONTACTO */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={PHONE_CALL_URL} className="hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors truncate">
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{LOCATION_CITY}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-xs">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Lunes a Viernes 8:00 a 18:00 hs</span>
              </li>
              <li className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2024 DO Construcciones en Seco · Representante Oficial SIPCOR · Pergamino y zona
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
