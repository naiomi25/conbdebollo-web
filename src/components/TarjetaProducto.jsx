"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TarjetaProducto({ title, description, image, onOpenAllergens, onOpenPortions }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-tarjeta rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-principal/10">

      {/* Foto más pequeña (h-48 en lugar de h-64) */}
      <div className="aspect-square w-full overflow-hidden relative shrink-0 bg-principal/10 rounded-t-xl">

        {image ? (
          <Image src={image} alt={title} fill style={{ objectFit: 'cover', objectPosition: 'bottom' }} className="hover:scale-110 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-principal/50 font-serif text-sm">Sin foto</div>
        )}
      </div>

      {/* Contenido con menos padding (p-4 o p-5) */}
      <div className="p-4 md:p-5 flex flex-col grow">
        <h3 className="text-xl text-principal font-serif font-bold mb-2">{title}</h3>

        {/* Texto más pequeño y sutil */}
        <div className="relative grow">
          <AnimatePresence initial={false}>
            <motion.div
              key="content"
              initial={{ height: "4.8rem" }}
              animate={{ height: isExpanded ? "auto" : "4.8rem" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden text-texto leading-relaxed text-sm"
            >
              <p className={!isExpanded ? "line-clamp-3" : ""}>{description}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-principal text-xs font-bold mt-2 hover:underline focus:outline-none"
          >
            {isExpanded ? "Leer menos ↑" : "Leer más ↓"}
          </button>
        </div>

        {/* Botones más pequeños y con menos margen superior */}
        {/* Contenedor de botones ultra-compacto */}
        <div className="flex items-center gap-2 pt-2 border-t border-principal/20 mt-2 shrink-0">
          <button
            onClick={onOpenPortions}
            className="w-7 h-7 rounded-full bg-fondo flex items-center justify-center text-xs shadow-sm hover:bg-principal hover:text-fondo transition-colors"
            title="Ver Porciones"
          >
            🍰
          </button>
          <button
            onClick={onOpenAllergens}
            className="w-7 h-7 rounded-full bg-fondo flex items-center justify-center text-xs shadow-sm hover:bg-principal hover:text-fondo transition-colors"
            title="Ver Alérgenos"
          >
            <Image src="/PUNTO INFORMACION ALERGENOS.png" alt="Info alérgenos" width={32} height={32} className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}