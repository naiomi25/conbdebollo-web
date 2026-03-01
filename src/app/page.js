"use client";

import { motion } from "framer-motion";
import TarjetaZigzag from "@/components/TarjetaZigzag";
import CarruselReseñas from "@/components/CarruselReseñas";
import Link from "next/link";

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


      <section className="pt-24 pb-0 px-8 max-w-7xl mx-auto overflow-hidden">

        {/* Tarta 1: Foto a la Izquierda (Normal) */}
        <TarjetaZigzag
          titulo="Tartas Personalizadas"
          descripcion="El centro de todas las miradas en tu celebración. Bizcochos esponjosos, rellenos sedosos y una decoración elegante pensada exclusivamente para ti."
          enlace="/category/tartas"
          imageUrl="https://blog.tuimusement.com/wp-content/uploads/2019/11/tartas-AdobeStock_209102761.jpeg" // Vacío hasta que conectemos Sanity
          inversa={false}
        />

        {/* Dulces 2: Foto a la Derecha (Inversa) */}
        <TarjetaZigzag
          titulo="Todos nuestros dulces"
          descripcion="Nuestra selección diaria de muffins, bizcochos y palmeritas. El acompañamiento perfecto para tu café o para darte un homenaje porque sí."
          enlace="/dulces"
          imageUrl="https://img.freepik.com/foto-gratis/magdalena-chocolate-indulgente-decoracion-glaseado-cremoso-generada-ia_188544-15730.jpg?semt=ais_user_personalization&w=740&q=80"
          inversa={true} // ¡Aquí ocurre la magia del zigzag!
        />

        {/* Eventos 3: Foto a la Izquierda (Normal) */}
        <TarjetaZigzag
          titulo="Eventos inolvidables"
          descripcion="Diseñamos mesas dulces espectaculares y preparamos desayunos sorpresa a domicilio. Nos encargamos de que tu evento tenga el sabor más dulce."
          enlace="/eventos"
          imageUrl="https://thumbs.dreamstime.com/b/mesa-de-postres-bodas-oto%C3%B1o-pastel-boda-blanco-con-flores-frescas-postre-tema-decoraci%C3%B3n-recepci%C3%B3n-176447911.jpg"
          inversa={false}
        />

      </section>

      {/* SECCIÓN ATELIER: VERSIÓN DISCRETA */}
      <section className="py-4  bg-fondo relative">
        {/* Un sutil toque de luz en el fondo para dar profundidad */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-principal/5 via-transparent to-transparent opacity-50"></div>

        <div className="max-w-4xl mx-auto px-2 relative">
          {/* Contenedor sin bordes pesados, solo una línea superior e inferior muy fina */}
          <div className="py-12 border-y border-principal/10 flex flex-col items-center text-center">


            <h2 className="font-serif text-3xl md:text-4xl text-principal mb-8 leading-snug italic italic-font-style">
              ¿Tienes un evento especial en mente?
            </h2>

            <p className="text-texto/70 text-lg leading-relaxed max-w-2xl mb-12 font-light">
              Cada tarta cuenta una historia única. Déjate sorprender por nuestras creaciones artesanales y <span className="text-principal font-medium">diseñemos juntos</span> el centro de tu celebración.
            </p>

            <Link
              href="/a-medida"
              className="group flex flex-col items-center gap-4"
            >
              {/* Botón más minimalista: solo texto con espaciado */}
              <div className="text-principal font-bold text-xs tracking-[0.2em] uppercase transition-all group-hover:tracking-[0.3em]">
                descubrir inspiraciones
              </div>


            </Link>

          </div>
        </div>
      </section>


      {/* =========================================
          SECCIÓN 3: RESEÑAS (Cabecera preparatoria)
          ========================================= */}
      <section className="py-10  bg-tarjeta overflow-hidden">
        <div className="text-center px-4 mb-6">
          <h2 className="text-3xl md:text-4xl text-principal font-serif mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-texto font-sans text-md">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>

        <CarruselReseñas />
      </section>

    </main>
  );
}