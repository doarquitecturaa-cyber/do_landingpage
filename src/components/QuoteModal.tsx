import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { LOCATION_CITY, getWhatsAppUrl } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialComponent?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialComponent }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Pergamino');
  const [m2, setM2] = useState('120');
  const [projectType, setProjectType] = useState('Vivienda unifamiliar');
  const [details, setDetails] = useState(initialComponent ? `Consulta sobre: ${initialComponent}` : '');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*SOLICITUD RÁPIDA DE COTIZACIÓN - DO CONSTRUCCIONES*
*Nombre:* ${name || 'Sin indicar'}
*Teléfono:* ${phone || 'Sin indicar'}
*Ciudad:* ${city}
*Tipo:* ${projectType}
*Superficie:* ${m2} m²
*Detalle:* ${details || 'Solicitud de presupuesto de KIT FULL'}`;

    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-slate-100">
        
        {/* Header */}
        <div className="bg-[#0A2730] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            DO CONSTRUCCIONES · SIPCOR PERGAMINO
          </div>
          <h3 className="text-xl sm:text-2xl font-black mt-1 tracking-tight">
            Cotizar mi Proyecto
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Recibí cómputo estimado y asesoramiento técnico directo en Pergamino y zona.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                ¡Solicitud enviada con éxito!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Te responderemos a la brevedad. Si querés una cotización inmediata, podés enviarnos los mismos datos a nuestro WhatsApp oficial.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Abrir WhatsApp con estos datos</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800 underline mt-2 cursor-pointer"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Nombre *</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A2730]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">WhatsApp / Teléfono *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 2477 654386"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A2730]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Localidad</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Pergamino, Colón, etc."
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A2730]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Superficie (m²)</label>
                  <input
                    type="number"
                    value={m2}
                    onChange={(e) => setM2(e.target.value)}
                    placeholder="120"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A2730]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Tipo de Proyecto</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#0A2730]"
                >
                  <option value="Vivienda unifamiliar">Vivienda unifamiliar</option>
                  <option value="Ampliación en planta alta">Ampliación en planta alta (liviana)</option>
                  <option value="Quincho / Espacio social">Quincho / Espacio social</option>
                  <option value="Local u oficina comercial">Local u oficina comercial</option>
                  <option value="Soy Arquitecto / Constructor">Soy Arquitecto / Constructor</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Observaciones</label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="¿Tenés planos o croquis? ¿Cuándo planeás iniciar?"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0A2730]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-lg bg-[#0A2730] hover:bg-[#123A46] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar solicitud</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
