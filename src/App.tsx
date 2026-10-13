/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ApproachSection } from './components/ApproachSection';
import { KitFullSection } from './components/KitFullSection';
import { ProcessSection } from './components/ProcessSection';
import { SupportSection } from './components/SupportSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FaqSection } from './components/FaqSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedComponentForQuote, setSelectedComponentForQuote] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (componentName?: string) => {
    setSelectedComponentForQuote(componentName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedComponentForQuote(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#1E293B]">
      
      {/* 1. Header & Navigation Bar */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. El Problema Real en la Obra */}
        <ProblemSection />

        {/* 4. Nuestro Enfoque · Integral y Profesional + Callout 100% */}
        <ApproachSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. Componentes del KIT (¿Qué incluye exactamente el KIT FULL?) */}
        <KitFullSection onSelectComponent={(title) => handleOpenQuoteModal(title)} />

        {/* 6. El Proceso en 4 Etapas (Del proyecto a la obra) */}
        <ProcessSection />

        {/* 7. Acompañamiento en todo el proceso (Respaldo en obra, de principio a fin) */}
        <SupportSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 8. Proyectos Entregados · Casos Reales (Obras ejecutadas en Pergamino y la región) */}
        <ProjectsSection />

        {/* 9. Preguntas Frecuentes (Consultas técnicas habituales) */}
        <FaqSection />

        {/* 10. Ficha Técnica de Proyecto · Cotización (Evaluá tu proyecto con KIT FULL SIPCOR) */}
        <QuoteSection prefilledComponent={selectedComponentForQuote} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Action Button (WhatsApp Oficial) */}
      <FloatingWhatsApp />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialComponent={selectedComponentForQuote}
      />

    </div>
  );
}
