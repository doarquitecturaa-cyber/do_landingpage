import React from 'react';
import { getWhatsAppUrl } from '../data/content';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const url = getWhatsAppUrl("Hola DO Construcciones, me gustaría hacer una consulta técnica sobre el KIT FULL SIPCOR.");

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
        aria-label="Contactar por WhatsApp Oficial"
      >
        <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
        <span className="whitespace-nowrap font-bold tracking-tight">WhatsApp Oficial</span>
      </a>
    </div>
  );
};
