"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const eventosInfo = [
  {
    id: 1,
    title: "Mesas Dulces",
    desc: "Creamos rincones mágicos y personalizados para tus eventos. Desde candy bars temáticos hasta montajes de diseño que reflejan tu estilo.",
    img: "https://www.hola.com/horizon/square/cc93fd630836-portada-mesas-dulces-t.jpg", 
    detalles: ["Diseño personalizado", "Montaje artesano", "Variedad de repostería"],
    link: "/contacto?servicio=mesas-dulces"
  },
  {
    id: 2,
    title: "Celebraciones",
    desc: "Sorpresas dulces para empezar el día de la mejor manera. Cestas gourmet elaboradas con productos frescos de nuestro obrador.",
    img: "https://static.wixstatic.com/media/4f9332_ca1dad89b1aa4d1f80fb78915b8467e8~mv2.png/v1/fill/w_615,h_531,al_c,q_85,enc_avif,quality_auto/4f9332_ca1dad89b1aa4d1f80fb78915b8467e8~mv2.png",
    detalles: ["Cestas a domicilio", "Opciones dulces y saladas", "Zumos naturales"],
    link: "/contacto?servicio=desayunos"
  }
];

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-fondo pt-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Cabecera - Exactamente igual a DulcesPage */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-principal mb-4 italic">Eventos</h1>
          <p className="text-texto max-w-2xl mx-auto text-lg">
           Propuestas gastronómicas artesanales.
          </p>
        </div>

        {/* Grid de Eventos - Usando la misma lógica de Grid y Cards de Dulces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {eventosInfo.map((evento) => (
            <Link href={evento.link} key={evento.id} className="group">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-tarjeta rounded-2xl overflow-hidden shadow-sm border border-principal/10 transition-all hover:shadow-xl h-full flex flex-col"
              >
                {/* Imagen Vertical - Misma altura y efectos que en Dulces */}
                <div className="h-72 overflow-hidden relative shrink-0">
                  <img
                    src={evento.img}
                    alt={evento.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Info - Misma estructura de padding y textos */}
                <div className="p-6 flex flex-col grow justify-between text-center">
                  <div>
                    <h3 className="font-serif text-xl text-principal mb-3 group-hover:text-oscuro transition-colors font-bold italic">
                      {evento.title}
                    </h3>
                    <p className="text-texto text-sm leading-relaxed opacity-80 mb-6">
                      {evento.desc}
                    </p>
                    
                    {/* Detalles añadidos con estilo minimalista */}
                    <div className="flex flex-col gap-2 mb-4">
                      {evento.detalles.map((punto, i) => (
                        <span key={i} className="text-[9px] uppercase tracking-[0.2em] text-principal/50">
                          {punto}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Cierre - Exactamente el mismo que en DulcesPage */}
        <section className="py-10 mt-10 border-t border-principal/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-principal mb-6 italic">
                ¿Buscas algo específico?
              </h3>
              <p className="text-md text-texto leading-relaxed opacity-90 italic">
                Cada evento es un mundo.
              </p>
              <p className="text-md text-texto leading-relaxed opacity-90 italic mt-2">
                 Cuéntanos tu idea y diseñaremos una propuesta a medida para ti.
              </p>

              {/* Los tres puntos decorativos de cierre */}
              <div className="flex justify-center gap-2 mt-8 opacity-40">
                <div className="w-1.5 h-1.5 rounded-full bg-principal"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-principal"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-principal"></div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}