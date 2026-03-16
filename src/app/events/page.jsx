"use client";
import React from 'react';
import { motion } from 'framer-motion';

const eventosInfo = [
  {
    id: 1,
    title: "Mesas Dulces",
    desc: "Creamos momentos dulces para un día único. Desde tartas personalizadas hasta mesas dulces completas que harán las delicias de todos los invitados.",
    img: "https://www.hola.com/horizon/square/cc93fd630836-portada-mesas-dulces-t.jpg",
    detalles: ["Tartas  personalizadas.", "Cupcakes y galletas temáticas a juego.", "Montaje de mesas dulces completas (Candy Bar).","Detalles para invitados."],
    inversa: false
  },
  {
    id: 2,
    title: "Celebraciones",
    desc: "Sorpresas dulces para empezar el día de la mejor manera. Cestas gourmet elaboradas con productos frescos de nuestro obrador.",
    img: "https://static.wixstatic.com/media/4f9332_ca1dad89b1aa4d1f80fb78915b8467e8~mv2.png/v1/fill/w_615,h_531,al_c,q_85,enc_avif,quality_auto/4f9332_ca1dad89b1aa4d1f80fb78915b8467e8~mv2.png",
    detalles: ["Cestas a domicilio", "Opciones dulces y saladas", "Zumos naturales"],
    inversa: true
  }
];

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-fondo pt-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Cabecera */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-principal mb-4 italic">Eventos</h1>
          <p className="text-texto max-w-2xl mx-auto text-lg">
            Propuestas gastronómicas artesanales.
          </p>
        </div>

        {/* Eventos con efecto Zigzag */}
        <div className="space-y-24">
          {eventosInfo.map((evento) => (
            <div
              key={evento.id}
              className={`flex flex-col items-center gap-12 ${evento.inversa ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              {/* LA FOTO */}
              <motion.div
                initial={{ opacity: 0, x: evento.inversa ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-3/5 overflow-hidden rounded-2xl shadow-lg relative h-[350px] md:h-[500px] bg-principal/20"
              >
                <img
                  src={evento.img}
                  alt={evento.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>

              {/* EL TEXTO - Tamaño ampliado */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="w-full md:w-2/5 flex flex-col"
              >
                <h3 className="font-serif text-4xl text-principal mb-2">{evento.title}</h3>

                {/* La línea divisoria elegante - Más grande */}
                <div className="w-16 h-1 bg-dorado mb-6"></div>

                 <p className="text-texto leading-relaxed text-lg mb-8">
                  {evento.desc}
                </p>

                {/* Detalles con estilo más grande */}
                <div className="flex flex-col gap-3">
                  {evento.detalles.map((punto, i) => (
                    <span key={i} className="text-xs uppercase tracking-[0.2em] text-principal/60">
                      • {punto}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
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