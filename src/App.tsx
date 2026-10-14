diff --git a/src/App.tsx b/src/App.tsx
index ce9c6cf..e146fb1 100644
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -16,20 +16,15 @@ import { FaqSection } from './components/FaqSection';
 import { QuoteSection } from './components/QuoteSection';
 import { Footer } from './components/Footer';
 import { FloatingWhatsApp } from './components/FloatingWhatsApp';
-import { QuoteModal } from './components/QuoteModal';
 
 export default function App() {
-  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
   const [selectedComponentForQuote, setSelectedComponentForQuote] = useState<string | undefined>(undefined);
 
+  // Antes abría un modal con un segundo formulario. Ahora lleva directo
+  // a la ficha técnica real (#cotizar), que es la que efectivamente envía el lead.
   const handleOpenQuoteModal = (componentName?: string) => {
     setSelectedComponentForQuote(componentName);
-    setIsQuoteModalOpen(true);
-  };
-
-  const handleCloseQuoteModal = () => {
-    setIsQuoteModalOpen(false);
-    setSelectedComponentForQuote(undefined);
+    document.getElementById('cotizar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
   };
 
   return (
@@ -73,13 +68,6 @@ export default function App() {
       {/* Floating Action Button (WhatsApp Oficial) */}
       <FloatingWhatsApp />
 
-      {/* Interactive Quotation Modal */}
-      <QuoteModal
-        isOpen={isQuoteModalOpen}
-        onClose={handleCloseQuoteModal}
-        initialComponent={selectedComponentForQuote}
-      />
-
     </div>
   );
 }
diff --git a/src/components/QuoteSection.tsx b/src/components/QuoteSection.tsx
index 99b82fe..7cc75c3 100644
--- a/src/components/QuoteSection.tsx
+++ b/src/components/QuoteSection.tsx
@@ -1,4 +1,4 @@
-import React, { useState } from 'react';
+import React, { useState, useEffect } from 'react';
 import { PHONE_NUMBER, EMAIL_ADDRESS, LOCATION_CITY, getWhatsAppUrl } from '../data/content';
 import { Send, MessageCircle, Phone, Mail, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
 
@@ -19,8 +19,19 @@ export const QuoteSection: React.FC<QuoteSectionProps> = ({ prefilledComponent }
   const [comentarios, setComentarios] = useState(prefilledComponent ? `Consulta sobre: ${prefilledComponent}` : '');
   const [enviado, setEnviado] = useState(false);
 
+  // El formulario queda montado una sola vez; sin esto, elegir "Consultar por
+  // este componente →" en el KIT no actualizaba el campo tras el primer render.
+  useEffect(() => {
+    if (prefilledComponent) {
+      setComentarios(`Consulta sobre: ${prefilledComponent}`);
+    }
+  }, [prefilledComponent]);
+
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
+    // Antes esto solo mostraba "éxito" sin mandar el dato a ningún lado.
+    // Ahora el botón principal dispara el WhatsApp de verdad.
+    handleWhatsAppDirect();
     setEnviado(true);
   };
 
@@ -73,7 +84,7 @@ export const QuoteSection: React.FC<QuoteSectionProps> = ({ prefilledComponent }
                   ¡Ficha técnica enviada con éxito!
                 </h3>
                 <p className="text-sm text-slate-600 max-w-md mx-auto">
-                  Gracias por tu contacto, <strong>{nombre}</strong>. Nos comunicaremos a la brevedad para evaluar los detalles técnicos de tu proyecto en {localidad}.
+                  Gracias por tu contacto, <strong>{nombre}</strong>. Se abrió WhatsApp con tus datos cargados — solo tenés que confirmar el envío. Si no se abrió solo, tocá el botón de abajo.
                 </p>
                 <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                   <button
@@ -81,7 +92,7 @@ export const QuoteSection: React.FC<QuoteSectionProps> = ({ prefilledComponent }
                     className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors cursor-pointer"
                   >
                     <MessageCircle className="w-4 h-4" />
-                    <span>Enviar también por WhatsApp</span>
+                    <span>Abrir WhatsApp de nuevo</span>
                   </button>
                   <button
                     onClick={() => setEnviado(false)}
 
