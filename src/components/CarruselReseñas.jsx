"use client";

import { motion } from "framer-motion";

export default function CarruselReseñas({ reseñas = [] }) {
    
    const reseñasDuplicadas = [...reseñas, ...reseñas];
    if (reseñas.length === 0) return null;

    return (
        // Contenedor principal que oculta lo que se sale por los lados
        <div className="w-full overflow-hidden py-1 flex">
            <motion.div
                // Animamos desde la posición 0 hasta el -50% (la mitad exacta de nuestra tira duplicada)
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 80,
                    repeat: Infinity
                }}
                className="flex gap-5 w-max px-4"
            >
                {reseñasDuplicadas.map((reseña, index) => (
                    <div
                        key={index}
                        className="w-[240px] md:w-[300px] bg-fondo p-4 rounded-xl shadow-sm flex flex-col justify-between shrink-0 border border-principal/10"
                    >
                        <p className="font-serif text-texto text-sm italic leading-relaxed mb-3">
                            "{reseña.comentario}"
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-px bg-dorado"></div>
                            <p className="font-sans text-principal font-bold tracking-wider text-[10px]">
                                {reseña.nombre}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}