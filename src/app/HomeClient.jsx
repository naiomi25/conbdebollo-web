"use client";

import { motion } from "framer-motion";
import TarjetaZigzag from "@/components/TarjetaZigzag";
import CarruselReseñas from "@/components/CarruselReseñas";
import Link from "next/link";

// 1. Recibimos opinionesSanity como prop
export default function HomeClient({ opinionesSanity }) {
  
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

      <section className="pt-24 pb-0 px-8 max-w-7xl mx-auto overflow-hidden">
        <TarjetaZigzag
          titulo="Tartas artesanales"
          descripcion="Descubre nuestra selección de tartas elaboradas con los ingredientes más frescos. Desde clásicos atemporales hasta creaciones modernas que sorprenderán a tus invitados. Cada tarta es una obra de arte comestible."
          enlace="/category/tartas"
          imageUrl="https://blog.tuimusement.com/wp-content/uploads/2019/11/tartas-AdobeStock_209102761.jpeg" 
          inversa={false}
        />
        <TarjetaZigzag
          titulo="Todos nuestros dulces"
          descripcion="Nuestra selección diaria de muffins, bizcochos y palmeritas. El acompañamiento perfecto para tu café o para darte un homenaje porque sí."
          enlace="/dulces"
          imageUrl="https://img.freepik.com/foto-gratis/magdalena-chocolate-indulgente-decoracion-glaseado-cremoso-generada-ia_188544-15730.jpg?semt=ais_user_personalization&w=740&q=80"
          inversa={true}
        />
        <TarjetaZigzag
          titulo="Eventos inolvidables"
          descripcion="Diseñamos mesas dulces espectaculares y preparamos desayunos sorpresa a domicilio. Nos encargamos de que tu evento tenga el sabor más dulce."
          enlace="/events"
          imageUrl="https://thumbs.dreamstime.com/b/mesa-de-postres-bodas-oto%C3%B1o-pastel-boda-blanco-con-flores-frescas-postre-tema-decoraci%C3%B3n-recepci%C3%B3n-176447911.jpg"
          inversa={false}
        />
      </section>

      <section className="py-4 bg-fondo relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-principal/5 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-2 relative">
          <div className="py-12 border-y border-principal/10 flex flex-col items-center text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-principal mb-8 leading-snug italic italic-font-style">
              ¿Tienes un evento especial en mente?
            </h2>
            <p className="text-texto/70 text-lg leading-relaxed max-w-2xl mb-12 font-light">
              Cada tarta cuenta una historia única. Déjate sorprender por nuestras creaciones artesanales y <span className="text-principal font-medium">diseñemos juntos</span> el centro de tu celebración.
            </p>
            <Link 
              href="/a-medida" 
              className="px-8 py-3 bg-principal text-fondo font-bold rounded-full hover:bg-oscuro transition-colors"
            >
              Descubrir inspiraciones
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-tarjeta overflow-hidden">
        <div className="text-center px-4 mb-6">
          <h2 className="text-3xl md:text-4xl text-principal font-serif mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-texto font-sans text-md">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>
        {/* 2. Le pasamos los datos que nos mandó el Servidor */}
        <CarruselReseñas reseñas={opinionesSanity} />
      </section>

    </main>
  );
}