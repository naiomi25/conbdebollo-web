"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TarjetaProducto from "@/components/TarjetaProducto";
import ModalInfo from "@/components/ModalInfo";

const productosPrueba = [
  {
    id: 1,
    title: "Tarta Mousse de Chocolate",
    description: "Una tarta espectacular con base de galleta crujiente y mantequilla caramelizada. El relleno es una mousse suave de chocolate belga al 70% con un núcleo de praliné de avellanas tostadas. Decorada con frutos rojos frescos y macarons.",
    image: "https://placehold.co/600x400/E7D4B5/A0937D?text=Tarta+Chocolate"
  },
  {
    id: 2,
    title: "Cheesecake de Frutos Rojos",
    description: "Nuestra versión de la clásica tarta de queso neoyorquina, horneada a fuego lento para conseguir una textura extra cremosa. Coronada con una mermelada artesanal de frambuesas y arándanos frescos.",
    image: "https://placehold.co/600x400/E7D4B5/A0937D?text=Cheesecake"
  },
  {
    id: 3,
    title: "Red Velvet Elegance",
    description: "El clásico bizcocho aterciopelado con un ligero toque a cacao, relleno y cubierto con nuestro característico frosting de queso crema y vainilla de Madagascar. Un diseño elegante perfecto para cualquier celebración.",
    image: "https://placehold.co/600x400/E7D4B5/A0937D?text=Red+Velvet"
  }
];

export default function CategoryPage({ params }) {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: "", content: null });

  const cerrarModal = () => setModalConfig({ ...modalConfig, isOpen: false });

  const abrirModalAlergenos = () => {
    setModalConfig({
      isOpen: true,
      title: "Información de Alérgenos",
      content: (
        <div className="space-y-4">
          <p>Nuestros productos pueden contener los siguientes alérgenos:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-dorado">
            <li><strong>Gluten:</strong> Trigo, centeno, cebada</li>
            <li><strong>Huevos:</strong> Presente en la mayoría de productos</li>
            <li><strong>Lácteos:</strong> Leche, mantequilla, nata</li>
            <li><strong>Frutos secos:</strong> Almendras, avellanas, nueces</li>
            <li><strong>Soja:</strong> Lecitina de soja</li>
          </ul>
          <div className="mt-4 p-3 bg-principal/10 border-l-4 border-dorado rounded-r-md">
            <p className="text-xs"><strong>Nota importante:</strong> Todos nuestros productos se elaboran en un obrador donde se manipulan estos alérgenos. Si tienes alguna alergia grave, por favor contáctanos.</p>
          </div>
        </div>
      )
    });
  };

  const abrirModalPorciones = () => {
    setModalConfig({
      isOpen: true,
      title: "Guía de Porciones",
      content: (
        <div className="space-y-4">
          <p>Calculamos nuestras porciones para que nadie se quede con hambre:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-dorado">
            <li><strong>Pequeña (15cm):</strong> 8 - 10 raciones</li>
            <li><strong>Mediana (18cm):</strong> 12 - 15 raciones</li>
            <li><strong>Grande (22cm):</strong> 20 - 24 raciones</li>
          </ul>
          <p className="text-xs mt-3 italic text-texto/80">* Las raciones son aproximadas y dependen del corte.</p>
        </div>
      )
    });
  };

  return (
    <main className="min-h-screen bg-fondo pt-32 pb-20">
      {/* Añadimos motion.div para animar la entrada de toda la página */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section className="text-center max-w-3xl mx-auto px-4 mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl text-principal mb-4 capitalize">
            Catálogo de Tartas
          </h1>
          <p className="text-base text-texto leading-relaxed">
            Descubre nuestra variedad de tartas artesanales. Pequeñas delicias horneadas con amor, decoradas con esmero y elaboradas con ingredientes de primera calidad.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {productosPrueba.map((producto) => (
              <TarjetaProducto 
                key={producto.id}
                title={producto.title}
                description={producto.description}
                image={producto.image}
                onOpenAllergens={abrirModalAlergenos}
                onOpenPortions={abrirModalPorciones}
              />
            ))}
          </div>
        </section>
      </motion.div>

      <ModalInfo isOpen={modalConfig.isOpen} onClose={cerrarModal} title={modalConfig.title}>
        {modalConfig.content}
      </ModalInfo>
      {/* SECCIÓN DE CIERRE (Solo pregunta y texto) */}
        <section className="py-24 bg-tarjeta/30 mt-20 border-t border-principal/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-principal mb-6">
                ¿Te ha gustado alguna?
              </h3>
              <p className="text-lg text-texto leading-relaxed opacity-90 italic">
                Contáctanos para hacer tu pedido o resolver cualquier duda sobre nuestras tartas. 
                Personalizamos cada detalle para que tu momento sea verdaderamente único.
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
    </main>
  );
}