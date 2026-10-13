import React, { useState } from 'react';
import { PROJECTS_LIST, ProjectCard } from '../data/content';
import { ArrowRight, MapPin, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);

  return (
    <section id="obras" className="py-20 sm:py-24 bg-[#F6F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-4xl lg:max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EAE8E3] text-[#0A2730] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-4 border border-black/5 shadow-xs">
              <span>PROYECTOS ENTREGADOS</span>
              <span className="text-slate-400 font-normal">·</span>
              <span className="text-slate-700">CASOS REALES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-[#0A2730] tracking-tight leading-[1.05] uppercase sm:whitespace-nowrap">
              Obras ejecutadas en Pergamino y la región.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl">
              Conocé cómo arquitectos y constructores de nuestra zona llevaron sus planos a la realidad con el KIT FULL SIPCOR.
            </p>
          </div>

          <div className="shrink-0 mb-1">
            <span className="inline-block px-4 py-2 bg-[#0A2730] text-white text-xs font-bold rounded-lg shadow-2xs">
              Todas las obras (6)
            </span>
          </div>
        </div>

        {/* 6 Projects Grid (3 columns x 2 rows) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS_LIST.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-56 sm:h-64 w-full bg-slate-200 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0A2730] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {p.location}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0A2730] tracking-tight">
                    {p.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <span>{p.surface}</span>
                    <span>·</span>
                    <span>{p.assemblyDays}</span>
                    <span>·</span>
                    <span>{p.spec}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(`Hola DO Construcciones, quiero consultar por la tipología "${p.title}" (${p.location}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F3B46] hover:text-[#0A2730] transition-colors"
                  >
                    <span>Consultar por esta tipología</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
