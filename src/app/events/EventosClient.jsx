"use client";

import { motion } from "framer-motion";
import Image from "next/image";



export default function EventosClient({ contenido, eventos }) {
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
                    <h1 className="font-serif text-5xl text-principal mb-4">
                        {contenido?.titulo || "Eventos"}
                    </h1>
                    <p className="text-texto max-w-2xl mx-auto text-lg">
                        {contenido?.descripcion || "Propuestas gastronómicas artesanales."}
                    </p>
                </div>

                {/* Eventos con efecto Zigzag */}
                <div className="space-y-24">

                    {(eventos || []).map((evento, index) => {
                        // Truco de Senior: Si el índice es impar (1, 3, 5...), lo ponemos invertido automáticamente.
                        const esInversa = index % 2 !== 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center gap-12 ${esInversa ? "md:flex-row-reverse" : "md:flex-row"}`}
                            >
                                {/* LA FOTO */}
                                <motion.div
                                    initial={{ opacity: 0, x: esInversa ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="w-full md:w-3/5 overflow-hidden rounded-2xl shadow-lg relative h-[350px] md:h-[500px] bg-principal/20"
                                >
                                    <Image
                                        src={evento.img}
                                        alt={evento.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="hover:scale-110 transition-transform duration-700"
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
                                        {(evento.detalles || []).map((punto, i) => (
                                            <span key={i} className="text-xs uppercase tracking-[0.2em] text-principal/60 font-bold">
                                                • {punto}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>

                {/* Cierre */}
                <section className="py-10 mt-10 border-t border-principal/5">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-serif text-2xl sm:text-3xl text-principal mb-6 italic">
                                {contenido?.cierrePregunta || "¿Buscas algo específico?"}
                            </h3>
                            <p className="text-md text-texto leading-relaxed opacity-90 italic">
                                {contenido?.cierreTexto || "Cada evento es un mundo. Cuéntanos tu idea y diseñaremos una propuesta a medida para ti."}
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
