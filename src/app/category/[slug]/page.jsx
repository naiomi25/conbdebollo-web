"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import TarjetaProducto from "@/components/TarjetaProducto";
import ModalInfo from "@/components/ModalInfo";

// ========================================================
// 1. DICCIONARIO DE DATOS (Simulación de lo que vendrá de Sanity)
// ========================================================
const contenidoCategorias = {
  tartas: {
    titulo: "Tartas Artesanales",
    descripcion: "Diseños exclusivos y sabores inolvidables para tus momentos más especiales.",
    cierrePregunta: "¿Tienes una idea en mente?",
    cierreTexto: "Cuéntanos qué evento celebras y diseñaremos la tarta perfecta para ti. Cada detalle cuenta.",
    productos: [
      {
        id: 1,
        title: "Tarta de Queso",
        description: "Se elabora siguiendo el método tradicional neoyorquino, integrando un queso crema premium de alta densidad sobre una base artesana de galleta de mantequilla horneada a fuego lento. El resultado es una estructura densa pero aterciopelada que se funde en el paladar, ofreciendo un equilibrio perfecto entre la acidez sutil del lácteo y el sabor envolvente de nuestra mermelada casera de frutos rojos.",
        alergenos: ["Lácteos", "Huevos", "Gluten"],
        porciones: "8 - 10 raciones (15cm) / 12 - 15 raciones (18cm)",
        image: "https://placehold.co/600x400/E7D4B5/4A3B2C?text=CheeseCake"
      },
      {
        id: 2,
        title: "Tarta de Chocolate",
        description: "La Tarta Bony es una reinterpretación premium de la repostería clásica, elaborada con un bizcocho tierno de chocolate relleno de una nube de nata artesanal y una capa fina de mermelada de fruta seleccionada. Recubierta por un glaseado firme de cacao, esta creación despierta la nostalgia a través de una ejecución técnica superior, ofreciendo un contraste de texturas que deleita tanto a niños como a adultos.",
        alergenos: ["Lácteos", "Huevos", "Gluten", "Soja"],
        porciones: "10 - 12 raciones (15cm)",
        image: "https://placehold.co/600x400/E7D4B5/4A3B2C?text=Chocolate"
      },
    ]
  },
  muffins: {
    titulo: "Muffins & Cupcakes",
    descripcion: "Pequeños bocados de felicidad horneados cada mañana.",
    cierrePregunta: "¿Te apetece una caja variada?",
    cierreTexto: "Preparamos surtidos personalizados para tus meriendas o regalos. ¡Consúltanos!",
    productos: [
      {
        id: 3,
        title: "Muffin de Arándanos",
        description: "Estos dulces son una oda a la repostería premium, combinando una base de bizcocho artesano con perlas de chocolate negro, con leche y blanco de la máxima calidad. La experiencia se transforma en un juego de contrastes térmicos y texturas fundentes que inundan el paladar, ofreciendo un capricho multisensorial perfecto para cualquier evento.",
        alergenos: ["Gluten", "Huevos"],
        porciones: "Unidad individual (Tamaño XL)",
        image: "https://placehold.co/600x400/D4B5E7/4A3B2C?text=Muffin+Blueberry"
      },
      {
        id: 4,
        title: "Cupcake Red Velvet",
        description: "Una experiencia sensorial completa que combina un bizcocho de terciopelo rojo, intensamente coloreado y con un toque sutil de cacao, coronado por un frosting cremoso de queso crema. Su textura húmeda y esponjosa contrasta con la densidad sedosa del glaseado, creando un equilibrio perfecto entre dulzor y acidez.",
        alergenos: ["Gluten", "Huevos", "Lácteos"],
        porciones: "Unidad individual (Tamaño Premium)",
        image: "https://placehold.co/600x400/D4B5E7/4A3B2C?text=Red+Velvet"
      },
    ]
  },
  bizcochos: {
    titulo: "Bizcochos Artesanos",
    descripcion: "Recetas tradicionales con un toque moderno y textura jugosa irresistible.",
    cierrePregunta: "¿Buscas el bizcocho perfecto?",
    cierreTexto: "Todos nuestros bizcochos se hornean el mismo día para garantizar su frescura y jugosidad. ¡Pregúntanos por nuestros sabores de temporada!",
    productos: [
      {
        id: 5,
        title: "Bizcocho de Limón y Amapola",
        description: "Este bizcocho combina la frescura cítrica del limón ecológico con el crujiente toque de las semillas de amapola. Su miga tierna y esponjosa, impregnada de un glaseado ligero de limón, ofrece un sabor vibrante y refrescante que lo convierte en el acompañamiento ideal para el té o café de media tarde.",
        alergenos: ["Gluten", "Huevos", "Lácteos"],
        porciones: "8 - 10 raciones",
        image: "https://placehold.co/600x400/F6E6CB/4A3B2C?text=Limon+Amapola"
      },
      {
        id: 6,
        title: "Bizcocho de Zanahoria y Nueces",
        description: "Una reinterpretación artesanal del clásico Carrot Cake, donde la zanahoria rallada aporta humedad natural y las nueces tostadas añaden un contraste crujiente. Especiado con canela y nuez moscada, cada bocado revela capas de sabor envueltas en un acabado de frosting de queso crema que equilibra la dulzura con un toque ácido.",
        alergenos: ["Gluten", "Huevos", "Lácteos", "Frutos secos"],
        porciones: "10 - 12 raciones",
        image: "https://placehold.co/600x400/F6E6CB/4A3B2C?text=Zanahoria+Nueces"
      },
    ]
  },
  palmeritas: {
    titulo: "Palmeritas Gourmet",
    descripcion: "Crujientes, doradas y bañadas en el mejor chocolate premium.",
    cierrePregunta: "¿Dulce o salado?",
    cierreTexto: "Nuestras palmeritas se elaboran con masa de hojaldre artesana y se hornean hasta alcanzar el punto perfecto de caramelización. Perfectas para regalar o darte un capricho.",
    productos: [
      {
        id: 7,
        title: "Palmeritas Clásicas Caramelizadas",
        description: "Elaboradas con masa de hojaldre de mantequilla pura y azúcar refinada, estas palmeritas se hornean lentamente hasta lograr múltiples capas crujientes y un caramelizado dorado perfecto. Su textura quebradiza al morder da paso a matices tostados que evocan la repostería artesanal de antaño.",
        alergenos: ["Gluten", "Lácteos"],
        porciones: "Unidad individual (Formato gigante)",
        image: "https://placehold.co/600x400/CC9B6D/F6E6CB?text=Palmeritas+Clasicas"
      },
      {
        id: 8,
        title: "Palmeritas con Cobertura de Chocolate Negro",
        description: "Una evolución gourmet de la palmerita tradicional, bañada en chocolate negro al 70% de cacao de origen ecuatoriano. El contraste entre el dulzor caramelizado del hojaldre y la intensidad amarga del chocolate crea una experiencia sensorial sofisticada, ideal para los paladares más exigentes.",
        alergenos: ["Gluten", "Lácteos", "Soja"],
        porciones: "Unidad individual (Formato premium)",
        image: "https://placehold.co/600x400/CC9B6D/F6E6CB?text=Palmeritas+Chocolate"
      },
    ]
  },
  "cheesecake-vasitos": {
    titulo: "Vasitos de Cheesecake",
    descripcion: "El equilibrio perfecto entre crujiente y cremosidad en cada cucharada.",
    cierrePregunta: "¿Te gusta el cheesecake sin complicaciones?",
    cierreTexto: "Nuestros vasitos son el formato perfecto para eventos, regalos corporativos o simplemente para disfrutar en casa. Cada vasito es una experiencia completa.",
    productos: [
      {
        id: 9,
        title: "Vasito de Cheesecake Frutos Rojos",
        description: "Un vasito estratificado que comienza con una base crujiente de galleta María artesanal, seguido de una generosa capa de mousse de queso crema y culmina con un coulis de frutos rojos naturales. Esta presentación individual permite apreciar cada textura por separado antes de fundirse en una sinfonía de sabores en el paladar.",
        alergenos: ["Gluten", "Lácteos", "Huevos"],
        porciones: "Formato individual (200ml)",
        image: "https://placehold.co/600x400/E3CDC1/4A3B2C?text=Cheesecake+Frutos"
      },
      {
        id: 10,
        title: "Vasito de Cheesecake Lotus",
        description: "Una creación contemporánea que fusiona la cremosidad del cheesecake tradicional con el sabor especiado de las galletas Lotus caramelizadas. La base triturada aporta un toque canela-caramelo, mientras que el relleno sedoso se corona con trocitos crujientes y un hilo de crema de Lotus que intensifica la experiencia.",
        alergenos: ["Gluten", "Lácteos", "Huevos", "Soja"],
        porciones: "Formato individual (200ml)",
        image: "https://placehold.co/600x400/E3CDC1/4A3B2C?text=Cheesecake+Lotus"
      },
    ]
  },
  cakepops: {
    titulo: "Cakepops Artesanales",
    descripcion: "La esencia de nuestra pastelería en un solo bocado perfecto.",
    cierrePregunta: "¿Para un evento especial?",
    cierreTexto: "Los cakepops son ideales para mesas dulces, detalles de boda o regalos corporativos. Personalizamos colores y diseños según tu ocasión. ¡Consulta disponibilidad!",
    productos: [
      {
        id: 11,
        title: "Cakepop de Vainilla con Cobertura Blanca",
        description: "Bola de bizcocho de vainilla bourbon mezclado con ganache de chocolate blanco, recubierta por una capa fina de chocolate blanco fundido y decorada con sprinkles dorados. Su tamaño compacto esconde una textura húmeda y cremosa que se deshace en boca, ofreciendo un dulzor elegante y equilibrado.",
        alergenos: ["Gluten", "Lácteos", "Huevos", "Soja"],
        porciones: "Unidad individual (40g aprox.)",
        image: "https://placehold.co/600x400/F6E6CB/4A3B2C?text=Cakepop+Vainilla"
      },
      {
        id: 12,
        title: "Cakepop Red Velvet",
        description: "Una versión en miniatura del icónico Red Velvet: bizcocho rojo aterciopelado mezclado con frosting de queso crema, bañado en chocolate con leche y finalizado con un toque de cacao en polvo. Cada cakepop condensa la experiencia completa de la tarta en un formato lúdico y sofisticado.",
        alergenos: ["Gluten", "Lácteos", "Huevos", "Soja"],
        porciones: "Unidad individual (40g aprox.)",
        image: "https://placehold.co/600x400/F6E6CB/4A3B2C?text=Cakepop+RedVelvet"
      },
    ]
  },
};

export default function CategoryPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  // Obtenemos los datos de la categoría actual o unos por defecto
  const data = contenidoCategorias[slug] || {
    titulo: slug,
    descripcion: "Descubre nuestra selección artesanal.",
    cierrePregunta: "¿Te gusta algo?",
    cierreTexto: "Contáctanos para más información.",
    productos: []
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
    className="max-w-5xl mx-auto px-4 mb-16"
  >
    <div className="bg-tarjeta/50 border border-dorado/20 rounded-2xl  md:p-10 text-center relative overflow-hidden">
      {/* Detalle decorativo: una esquina dorada o un icono sutil */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

      <h4 className="font-serif text-principal text-xl mb-4 italic">
        Formatos Especiales para Eventos
      </h4>
      <p className="text-texto text-base leading-relaxed max-w-3xl mx-auto opacity-90">
        Toda nuestra selección de muffins está disponible también en formato <span className="font-bold">cupcake</span> (mín. 18 uds) y <span className="font-bold">minimuffin</span> (mín. 24 uds) para adaptarse perfectamente a sus eventos corporativos o reuniones familiares.
      </p>
      <div className="w-16 h-px bg-dorado/30 mx-auto mt-1 mb-4"></div>
      <p className="text-sm text-principal/80 font-sans tracking-wide uppercase">
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
    className="max-w-5xl mx-auto px-4 mb-16"
  >
    <div className="bg-tarjeta/50 border border-dorado/20 rounded-2xl  md:p-10 text-center relative overflow-hidden">
      {/* Detalle decorativo: una esquina dorada o un icono sutil */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

      <h4 className="font-serif text-principal text-xl mb-4 italic">
        Formatos Especiales para Eventos
      </h4>
      <p className="text-texto text-base leading-relaxed max-w-3xl mx-auto opacity-90">
        Toda nuestra selección de muffins está disponible también en formato <span className="font-bold">cupcake</span> (mín. 18 uds) y <span className="font-bold">minimuffin</span> (mín. 24 uds) para adaptarse perfectamente a sus eventos corporativos o reuniones familiares.
      </p>
      <div className="w-16 h-px bg-dorado/30 mx-auto mt-1 mb-4"></div>
      <p className="text-sm text-principal/80 font-sans tracking-wide uppercase">
        Consulte personalización de sabores y tamaños
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
              <h3 className="font-serif text-2xl sm:text-3xl text-principal mb-6">
                {data.cierrePregunta}
              </h3>
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