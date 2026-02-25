"use client";

import { motion } from "framer-motion";
import TarjetaZigzag from "@/components/TarjetaZigzag";

export default function Home() {
  return (
    <main className="min-h-screen bg-fondo">
      
      
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Fondo oscuro temporal (Aquí irá la fotaza de Sanity) */}
        <div className="absolute inset-0 bg-oscuro z-0"></div>
        
        {/* Capa semitransparente para que el texto resalte siempre */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* TEXTO ANIMADO DESDE EL CENTRO */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center gap-6 text-center px-4 mt-16"
        >
          <h1 className="text-5xl md:text-7xl text-fondo font-serif tracking-wide drop-shadow-lg">
           Con B de Bollo
          </h1>
          <div className="w-24 h-1 bg-dorado mb-2"></div>
          <p className="text-lg md:text-xl text-fondo/90 font-sans max-w-2xl drop-shadow-md">
            Experiencias dulces a dos carrillos.
          </p>
        </motion.div>
      </section>

    
      <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Tarta 1: Foto a la Izquierda (Normal) */}
        <TarjetaZigzag 
          titulo="Tartas Personalizadas"
          descripcion="El centro de todas las miradas en tu celebración. Bizcochos esponjosos, rellenos sedosos y una decoración elegante pensada exclusivamente para ti."
          enlace="/category/tartas"
          imageUrl="" // Vacío hasta que conectemos Sanity
          inversa={false}
        />

        {/* Dulces 2: Foto a la Derecha (Inversa) */}
        <TarjetaZigzag 
          titulo="Pequeños Caprichos"
          descripcion="Nuestra selección diaria de muffins, bizcochos y palmeritas. El acompañamiento perfecto para tu café o para darte un homenaje porque sí."
          enlace="/dulces"
          imageUrl="" 
          inversa={true} // ¡Aquí ocurre la magia del zigzag!
        />

        {/* Eventos 3: Foto a la Izquierda (Normal) */}
        <TarjetaZigzag 
          titulo="Eventos Inolvidables"
          descripcion="Diseñamos mesas dulces espectaculares y preparamos desayunos sorpresa a domicilio. Nos encargamos de que tu evento tenga el sabor más dulce."
          enlace="/eventos"
          imageUrl="" 
          inversa={false}
        />

      </section>

      {/* =========================================
          SECCIÓN 3: RESEÑAS (Cabecera preparatoria)
          ========================================= */}
      <section className="py-24 bg-tarjeta overflow-hidden">
        <div className="text-center px-4 mb-16">
          <h2 className="text-4xl md:text-5xl text-principal font-serif mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-texto font-sans text-md">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>
        
        {/* Aquí insertaremos el carrusel infinito en el siguiente paso */}
        <div className="h-40 flex items-center justify-center border-y border-principal/20">
          <p className="text-principal animate-pulse">Cargando carrusel de reseñas...</p>
        </div>
      </section>

    </main>
  );
}