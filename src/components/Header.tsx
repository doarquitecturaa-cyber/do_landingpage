import React, { useState } from 'react';
import { PHONE_NUMBER, PHONE_CALL_URL } from '../data/content';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "KIT FULL", href: "#kit-full" },
    { label: "El Proceso", href: "#proceso" },
    { label: "Por qué DO", href: "#por-que-do" },
    { label: "Acompañamiento", href: "#acompanamiento" },
    { label: "Obras", href: "#obras" },
    { label: "FAQ", href: "#faq" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Lockup */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 bg-[#0A2730] text-white rounded-lg flex items-center justify-center font-extrabold text-lg tracking-wider shadow-sm transition-transform group-hover:scale-105">
              DO
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[13px] sm:text-sm font-black tracking-tight text-slate-900 uppercase">
                DO Construcciones
              </span>
              <span className="text-[11px] font-bold text-[#0F3B46] tracking-wider uppercase">
                En Seco · SIPCOR
              </span>
              <span className="text-[9px] font-semibold text-slate-400 tracking-[0.2em] uppercase">
                Pergamino
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs 2xl:text-sm font-semibold text-slate-700 hover:text-[#0F3B46] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#0B2A33] hover:bg-[#133F4C] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Cotizar Proyecto</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#0B2A33] text-white text-xs font-semibold px-3 py-2 rounded-md shadow-sm sm:hidden"
            >
              Cotizar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0F3B46]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={PHONE_CALL_URL}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-50 text-slate-800 font-medium text-sm border border-slate-200"
            >
              <Phone className="w-4 h-4 text-[#0F3B46]" />
              <span>{PHONE_NUMBER}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 px-4 rounded-lg bg-[#0B2A33] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Cotizar Proyecto</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
