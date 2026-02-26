"use client";

import { motion } from "framer-motion";

export default function WhatsappFlotante() {
  // Configura aquí el número real y el mensaje inicial
  const telefono = "661043558"; 
  const mensaje = encodeURIComponent("¡Hola! Me gustaría recibir información sobre vuestros productos artesanos.");
  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      // Animación de entrada y levitación sutil
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        x: 0,
        y: [0, -8, 0] // Efecto levitación sutil
      }}
      transition={{ 
        opacity: { duration: 1 },
        y: { 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        } 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] group flex items-center gap-3"
    >
      {/* Etiqueta de texto que aparece al hacer hover (opcional, muy premium) */}
      <span className="bg-fondo border border-principal/20 text-principal px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        ¿Te ayudamos?
      </span>

      {/* El Botón en sí */}
      <div className="w-14 h-14 bg-principal text-fondo rounded-full flex items-center justify-center shadow-lg hover:bg-oscuro transition-colors duration-500">
        {/* Usamos un icono de WhatsApp minimalista en SVG */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </div>
    </motion.a>
  );
}