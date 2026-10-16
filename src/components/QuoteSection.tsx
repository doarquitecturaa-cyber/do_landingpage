import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER, EMAIL_ADDRESS, LOCATION_CITY, getWhatsAppUrl } from '../data/content';
import { Send, MessageCircle, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Paperclip, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface QuoteSectionProps {
  prefilledComponent?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ prefilledComponent }) => {
  const [nombre, setNombre] = useState('');
  const [perfil, setPerfil] = useState('Arquitecto');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [localidad, setLocalidad] = useState('Pergamino');
  const [superficie, setSuperficie] = useState('120');
  const [estadoProyecto, setEstadoProyecto] = useState('Tengo planos CAD/BIM');
  const [tipoSistema, setTipoSistema] = useState('KIT FULL integral');
  const [dudas, setDudas] = useState('');
  const [comentarios, setComentarios] = useState(prefilledComponent ? `Consulta sobre: ${prefilledComponent}` : '');
  const [planoFile, setPlanoFile] = useState<File | null>(null);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // El formulario queda montado una sola vez; sin esto, elegir "Consultar por
  // este componente →" en el KIT no actualizaba el campo tras el primer render.
  useEffect(() => {
    if (prefilledComponent) {
      setComentarios(`Consulta sobre: ${prefilledComponent}`);
    }
  }, [prefilledComponent]);

  const MAX_FILE_MB = 20;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > MAX_FILE_MB * 1024 * 1024) {
      setError(`El archivo pesa más de ${MAX_FILE_MB} MB. Subí un plano más liviano o mandalo directo por WhatsApp.`);
      e.target.value = '';
      setPlanoFile(null);
      return;
    }
    setError(null);
    setPlanoFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setEnviando(true);

    try {
      // 1. Si hay un plano adjunto, lo subimos primero al bucket de Supabase.
      let planoPath: string | null = null;
      if (planoFile) {
        const safeName = planoFile.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        const filePath = `${Date.now()}-${safeName}`;
        const { error: uploadError } = await supabase.storage
          .from('planos-landing')
          .upload(filePath, planoFile);
        if (uploadError) throw uploadError;
        planoPath = filePath;
      }

      // 2. Guardamos los datos del lead en la tabla, con la referencia al plano si lo hay.
      const { error: insertError } = await supabase.from('leads_landing').insert({
        nombre,
        perfil,
        telefono,
        email,
        localidad,
        superficie,
        estado_proyecto: estadoProyecto,
        tipo_sistema: tipoSistema,
        dudas,
        comentarios,
        plano_url: planoPath,
      });
      if (insertError) throw insertError;

      // 3. Recién con el dato ya guardado, abrimos WhatsApp como aviso inmediato.
      handleWhatsAppDirect();
      setEnviado(true);
    } catch (err) {
      console.error('Error al guardar el lead:', err);
      setError('No pudimos guardar tu consulta por un problema técnico. Probá de nuevo en unos segundos, o escribinos directo por WhatsApp con el botón de abajo.');
    } finally {
      setEnviando(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `*FICHA TÉCNICA DE PROYECTO - DO CONSTRUCCIONES*
*Nombre:* ${nombre || 'No indicado'}
*Perfil Profesional:* ${perfil}
*WhatsApp:* ${telefono || 'No indicado'}
*Email:* ${email || 'No indicado'}
*Localidad:* ${localidad}
*Superficie Estimada:* ${superficie} m²
*Estado del Proyecto:* ${estadoProyecto}
*Tipo de Sistema:* ${tipoSistema}
*Dudas:* ${dudas || 'Ninguna'}
*Comentarios:* ${comentarios || 'Solicitud de evaluación y presupuesto'}`;

    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="cotizar" className="py-20 sm:py-24 bg-[#F6F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAE8E3] text-[#0A2730] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 border border-black/5 shadow-xs">
            <span>FICHA TÉCNICA DE PROYECTO</span>
            <span className="text-slate-400 font-normal">·</span>
            <span className="text-slate-700">COTIZACIÓN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#0A2730] tracking-tight leading-[1.05] uppercase">
            Evaluá tu proyecto con KIT FULL SIPCOR.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Completá la ficha técnica o contactanos directamente por WhatsApp. Te responderemos con un análisis de viabilidad técnica y presupuesto inicial.
          </p>
        </div>

        {/* Form Grid: Left 8 cols Form + Right 4 cols Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form Container */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            {enviado ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2730]">
                  ¡Ficha técnica enviada con éxito!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Gracias por tu contacto, <strong>{nombre}</strong>. Se abrió WhatsApp con tus datos cargados — solo tenés que confirmar el envío. Si no se abrió solo, tocá el botón de abajo.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir WhatsApp de nuevo</span>
                  </button>
                  <button
                    onClick={() => setEnviado(false)}
                    className="px-6 py-3 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Nueva consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                      NOMBRE Y APELLIDO *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre completo"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0A2730]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                      PERFIL PROFESIONAL
                    </label>
                    <select
                      value={perfil}
                      onChange={(e) => setPerfil(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#0A2730]"
                    >
                      <option value="Arquitecto">Arquitecto / Proyectista</option>
                      <option value="Constructor">Constructor / Empresa constructora</option>
                      <option value="Propietario">Propietario particular</option>
                      <option value="Desarrollador">Desarrollador inmobiliario</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                      WHATSAPP / TELÉFONO *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: +54 9 2477 654386"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0A2730]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                      CORREO ELECTRÓNICO *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ejemplo@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0A2730]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                      LOCALIDAD DE LA OBRA *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Pergamino, Colón, Salto, etc."
                      value={localidad}
                      onChange={(e) => setLocalidad(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0A2730]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                      SUPERFICIE ESTIMADA (M²)
                    </label>
                    <input
                      type="number"
                      placeholder="120"
                      value={superficie}
                      onChange={(e) => setSuperficie(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0A2730]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                      ESTADO DEL PROYECTO
                    </label>
                    <select
                      value={estadoProyecto}
                      onChange={(e) => setEstadoProyecto(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#0A2730]"
                    >
                      <option value="Tengo planos CAD/BIM">Tengo planos CAD/BIM</option>
                      <option value="Tengo anteproyecto en PDF">Tengo anteproyecto en PDF</option>
                      <option value="Boceto / Idea preliminar">Boceto / Idea preliminar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                      SELECCIONÁ EL TIPO DE SISTEMA REQUERIDO
                    </label>
                    <select
                      value={tipoSistema}
                      onChange={(e) => setTipoSistema(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#0A2730]"
                    >
                      <option value="KIT FULL integral">KIT FULL integral (Muros + Techo + Asistencia)</option>
                      <option value="Muros exteriores e interiores">Muros exteriores e interiores</option>
                      <option value="Cubierta / Techo SIP">Cubierta / Techo SIP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                    ¿QUÉ DUDAS TENÉS SOBRE EL SISTEMA O TU PROYECTO?
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Aislación acústica, encuentros de cubierta, tiempos de despacho..."
                    value={dudas}
                    onChange={(e) => setDudas(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0A2730]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                    COMENTARIOS O ESPECIFICACIONES ADICIONALES
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contanos más detalles sobre el terreno o requisitos particulares..."
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0A2730]"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                    ADJUNTAR PLANO O CROQUIS <span className="font-normal normal-case text-slate-400">(opcional, PDF/DWG/JPG/PNG, máx. {MAX_FILE_MB}MB)</span>
                  </label>
                  <label
                    htmlFor="plano-file-input"
                    className="flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-lg border border-dashed border-slate-300 text-sm text-slate-500 cursor-pointer hover:border-[#0A2730] hover:text-[#0A2730] transition-colors"
                  >
                    <Paperclip className="w-4 h-4 shrink-0" />
                    <span className="truncate">{planoFile ? planoFile.name : 'Elegir archivo...'}</span>
                  </label>
                  <input
                    id="plano-file-input"
                    type="file"
                    accept=".pdf,.dwg,.dxf,.skp,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 px-3.5 py-2.5 rounded-lg bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={enviando}
                    className="flex-1 py-3.5 px-6 rounded-lg bg-[#0A2730] hover:bg-[#123A46] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{enviando ? 'Guardando...' : 'Enviar Ficha de Proyecto'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-3.5 px-6 rounded-lg bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
                    <span>Enviar directo por WhatsApp</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-6">
            
            {/* Logo and Intro */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#0A2730] text-white rounded-lg flex items-center justify-center font-black text-lg">
                DO
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900 uppercase">
                  DO Construcciones en Seco
                </h3>
                <span className="text-[11px] font-bold text-[#0F3B46] uppercase">
                  SIPCOR Pergamino
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Representante oficial de SIPCOR en Pergamino y corredor norte de Buenos Aires. Ingeniería de detalle, provisión de KIT FULL y acompañamiento en obra.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-3 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0F3B46] shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="font-semibold hover:underline">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0F3B46] shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:underline">
                  {EMAIL_ADDRESS}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#0F3B46] shrink-0" />
                <span>{LOCATION_CITY}</span>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garantía y respaldo SIPCOR</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
