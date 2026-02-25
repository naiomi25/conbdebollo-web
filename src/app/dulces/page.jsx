"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categoriasDulces = [
  {
    id: 1,
    title: "Muffins ",
    desc: "Pequeños bocados de felicidad con rellenos sorprendentes.",
    img: "https://placehold.co/600x800/E3CDC1/4A3B2C?text=Muffins",
    link: "/category/muffins"
  },
  {
    id: 2,
    title: "Bizcochos Artesanos",
    desc: "Recetas tradicionales con un toque moderno y extra de jugosidad.",
    img: "https://placehold.co/600x800/E7D4B5/4A3B2C?text=Bizcochos",
    link: "/category/bizcochos"
  },
  {
    id: 3,
    title: "Palmeritas",
    desc: "Crujientes, doradas y bañadas en el mejor chocolate.",
    img: "https://placehold.co/600x800/F6E6CB/4A3B2C?text=Palmeritas",
    link: "/category/palmeritas"
  },
  {
    id: 4,
    title: "Galletas",
    desc: "Desde las clásicas de mantequilla hasta nuestras cookies rellenas.",
    img: "https://placehold.co/600x800/CC9B6D/F6E6CB?text=Cookies",
    link: "/category/cookies"
  },
  {
    id: 5,
    title: "Cakepops",
    desc: "La esencia de nuestra pastelería en un solo bocado.",
    img: "https://placehold.co/600x800/CC9B6D/F6E6CB?text=cakepops",
    link: "/category/cakepops"
  },
  {
    id: 7,
    title: "Vasitos de Cheesecake",
    desc: "Cucharas que cuentan historias. El equilibrio perfecto entre crujiente y crema.",
    img: "https://placehold.co/600x800/CC9B6D/F6E6CB?text=cheesecake-vasitos",
    link: "/category/cheesecake-vasitos"
  }
];

export default function DulcesPage() {
  return (
    <main className="min-h-screen bg-fondo pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Cabecera */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-principal mb-4">Nuestros Dulces</h1>
          <p className="text-texto max-w-2xl mx-auto text-lg">
            Selecciona una categoría para descubrir todas nuestras variedades elaboradas diariamente.
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriasDulces.map((cat) => (
            <Link href={cat.link} key={cat.id} className="group">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-tarjeta rounded-2xl overflow-hidden shadow-sm border border-principal/10 transition-all hover:shadow-xl"
              >
                {/* Imagen Vertical */}
                <div className="h-72 overflow-hidden relative shrink-0">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                </div>

                {/* Info */}
                <div className="p-6 flex flex-col grow justify-between text-center">
                  <h3 className="font-serif text-xl text-principal mb-3 group-hover:text-oscuro transition-colors font-bold">
                    {cat.title}
                  </h3>
                  <p className="text-texto text-sm leading-relaxed opacity-80 line-clamp-2">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Cierre  ya teníamos */}
        <section className="py-10  mt-10 border-t border-principal/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-principal mb-6">
                ¿Buscas algo específico?
              </h3>
              <p className="text-lg text-texto leading-relaxed opacity-90 italic">
               Nuestras vitrinas cambian cada día. Si tienes un antojo especial, escríbenos.
              </p>

              {/* Añadimos un pequeño detalle decorativo al final para cerrar la sección */}
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