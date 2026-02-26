"use client";

import { motion } from "framer-motion";

export default function CarruselReseñas() {
    // Aquí tenemos nuestras reseñas de prueba (luego podrán venir de Sanity)
    const reseñas = [
        {
            texto: "La tarta de mi boda fue un sueño. No solo era preciosa, sino que el sabor era espectacular. Todo el mundo repitió.",
            autor: "MARÍA & CARLOS"
        },
        {
            texto: "Llevo meses pidiendo sus cajas de desayunos para regalos de empresa y el nivel de detalle y sofisticación es insuperable.",
            autor: "ELENA GÓMEZ"
        },
        {
            texto: "Los mejores muffins de la ciudad, sin duda. Se nota el mimo y la calidad de los ingredientes en cada bocado.",
            autor: "JAVIER RUIZ"
        },
        {
            texto: "Nos prepararon la mesa dulce para la comunión de nuestra hija y fue el centro de atención. Elegante, deliciosa y perfecta.",
            autor: "FAMILIA MARTÍNEZ"
        },
        {
            texto: "Es mi pastelería de confianza. Cada vez que quiero sorprender a alguien o darme un capricho, sé que aquí nunca fallo.",
            autor: "LAURA SÁNCHEZ"
        }
    ];

    // Duplicamos el array para que el efecto infinito funcione sin cortes
    const reseñasDuplicadas = [...reseñas, ...reseñas];

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
                            "{reseña.texto}"
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-px bg-dorado"></div>
                            <p className="font-sans text-principal font-bold tracking-wider text-[10px]">
                                {reseña.autor}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}