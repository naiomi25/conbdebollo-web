"use client"; 

import { motion } from "framer-motion";
import Link from "next/link";

export default function TarjetaZigzag({ titulo, descripcion, imageUrl, enlace, inversa }) {
  return (
    //  si es "inversa", usamos flex-row-reverse para darle la vuelta

    <div className={`flex flex-col items-center gap-12 my-24 ${inversa ? "md:flex-row-reverse" : "md:flex-row"}`}>
      
      {/* LA FOTO */}
      <motion.div
      
        initial={{ opacity: 0, x: inversa ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg relative h-[400px] bg-principal/20"
      >
        {/* Usamos un div con color temporal por si no hay foto aún, pero si pasas imageUrl, la muestra */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={titulo}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-principal">
            Foto de {titulo}
          </div>
        )}
      </motion.div>

      {/* EL TEXTO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col"
      >
        <h3 className="font-serif text-4xl text-principal mb-2">{titulo}</h3>
        
        {/* La línea divisoria elegante */}
        <div className="w-16 h-1 bg-dorado mb-6"></div>
        
        <p className="text-texto leading-relaxed text-lg mb-8">
          {descripcion}
        </p>
        
        {/* El botón que lleva a la sección correspondiente */}
        <Link 
          href={enlace} 
          className="px-8 py-3 bg-principal text-fondo font-bold rounded-full hover:bg-oscuro transition-colors self-start"
        >
          Ver Sección
        </Link>
      </motion.div>

    </div>
  );
}