"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import TarjetaProducto from "@/components/TarjetaProducto";
import ModalInfo from "@/components/ModalInfo";




export default function CategoryPage({ slug, productos, contenido }) {

  // Usamos los datos de Sanity o valores por defecto
  const data = {
    titulo: contenido?.titulo || slug,
    descripcion: contenido?.descripcion || "Descubre nuestra selección artesanal.",
    cierrePregunta: contenido?.cierrePregunta || "¿Te gusta algo?",
    cierreTexto: contenido?.cierreTexto || "Contáctanos para más información.",
    productos: productos || []
  };

  // ESTADO PARA EL MODAL
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: "", content: null });
  const cerrarModal = () => setModalConfig({ ...modalConfig, isOpen: false });

  // FUNCIÓN PARA ABRIR ALÉRGENOS (DINÁMICA)
  const abrirModalAlergenos = (producto) => {
    setModalConfig({
      isOpen: true,
      title: "Información de Alérgenos",
      content: (
        <div className="space-y-4">
          <p className="text-texto">Este producto puede contener:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-dorado">
            {producto.alergenos.map((item, index) => (
              <li key={index} className="font-bold text-principal">{item}</li>
            ))}
          </ul>
          <div className="mt-4 p-3 bg-principal/10 border-l-4 border-dorado rounded-r-md">

            <p className="text-xs"><strong>Nota importante:</strong> Todos nuestros productos se elaboran en un obrador donde se manipulan estos alérgenos. Si tienes alguna alergia grave, por favor contáctanos.</p>

          </div>
        </div>
      )
    });
  };

  // FUNCIÓN PARA ABRIR PORCIONES (DINÁMICA)
  const abrirModalPorciones = (producto) => {
    setModalConfig({
      isOpen: true,
      title: "Guía de Porciones",
      content: (
        <div className="space-y-4 text-center py-2">
          <p className="text-texto">Recomendación para la <strong>{producto.title}</strong>:</p>
          <div className="py-4 px-2 bg-tarjeta rounded-lg border border-principal/10">
            <p className="font-serif text-xl text-principal">{producto.porciones}</p>
          </div>
          <p className="text-xs text-texto/70 italic mt-2">* Las raciones pueden variar según el tipo de corte.</p>
        </div>
      )
    });
  };

  return (
    <main className="min-h-screen bg-fondo pt-15 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* CABECERA DINÁMICA */}
        <section className="text-center max-w-3xl mx-auto px-4 mb-10">
          <h1 className="font-serif text-4xl lg:text-5xl text-principal mb-4 capitalize">
            {data.titulo}
          </h1>
          <p className="text-base text-texto leading-relaxed max-w-2xl mx-auto">
            {data.descripcion}
          </p>
        </section>
        {/* BLOQUE INFORMATIVO PARA MUFFINS */}
        {slug === "muffins" && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto px-4 mb-16"
          >
            <div className="bg-tarjeta/50 border border-dorado/20 rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">



              <h4 className="font-serif text-principal text-lg mb-3 italic">
                Formatos Especiales para Eventos
              </h4>
              <p className="text-texto text-sm leading-relaxed max-w-2xl mx-auto opacity-90">
                Toda nuestra selección de muffins está disponible también en formato <span className="font-bold">cupcake</span> (mín. 18 uds) y <span className="font-bold">minimuffin</span> (mín. 24 uds) para adaptarse perfectamente a sus eventos corporativos o reuniones familiares.
              </p>
              <div className="w-12 h-px bg-dorado/30 mx-auto mt-1 mb-3"></div>
              <p className="text-xs text-principal/80 font-sans tracking-wide uppercase">
                Consulte personalización de sabores y tamaños
              </p>
            </div>
          </motion.section>
        )}
        {/* NUEVO: BLOQUE INFORMATIVO PARA TARTAS (TOPPERS) */}
        {slug === "tartas" && (

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto px-4 mb-16"
          >
            <div className="bg-tarjeta/50 border border-dorado/20 rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
              {/* Detalle decorativo: una esquina dorada o un icono sutil */}


              <h4 className="font-serif text-principal text-lg mb-3 italic">
                Corona tu tarta con un Topper
              </h4>
              <p className="text-texto text-sm leading-relaxed max-w-2xl mx-auto opacity-90">
                Haz que tu celebración sea verdaderamente única. Personalizamos toppers en madera o acrílico con nombres, números o esa frase especial que lo significa todo.
              </p>
              <div className="w-12 h-px bg-dorado/30 mx-auto mt-1 mb-3"></div>
              <p className="text-xs text-principal/80 font-sans tracking-wide uppercase">
                Pregúntanos al hacer tu pedido
              </p>
            </div>
          </motion.section>
        )}

        {/* GRID DE PRODUCTOS (3 Columnas) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          {data.productos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {data.productos.map((producto) => (
                <TarjetaProducto
                  key={producto.id}
                  title={producto.title}
                  description={producto.description}
                  image={producto.image}
                  onOpenAllergens={() => abrirModalAlergenos(producto)}
                  onOpenPortions={() => abrirModalPorciones(producto)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 opacity-50">
              <p className="font-serif text-xl italic">Próximamente más delicias...</p>
            </div>
          )}
        </section>

        {/* CIERRE DINÁMICO */}
        <section className="py-8  border-principal/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl sm:text-3xl text-principal mb-6">
                {data.cierrePregunta}
              </h2>
              <p className="text-md text-texto italic opacity-90 leading-relaxed">
                {data.cierreTexto}
              </p>

              <div className="flex justify-center gap-2 mt-12 opacity-40">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-principal"></div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* MODAL ÚNICO (Se rellena dinámicamente) */}
      <ModalInfo
        isOpen={modalConfig.isOpen}
        onClose={cerrarModal}
        title={modalConfig.title}
      >
        {modalConfig.content}
      </ModalInfo>
    </main>
  );
}