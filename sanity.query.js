import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Para que los cambios se vean al instante
});

const builder = imageUrlBuilder(client);

export async function getProductosPorTipo(slug) {
  const mapaTipos = {
    "tartas": "tarta",
    "muffins": "muffin",
    "cookies": "cookie",
    "palmeritas": "palmerita",
    // Puedes añadir más en el futuro aquí
  };

  // 2. Buscamos qué tipo toca ahora. Si no existe, buscamos "nada".
  const tipoDocumento = mapaTipos[slug] || "desconocido";

 // 3. Traemos las cosas de Sanity (Fíjate que ahora pedimos 'imagen' entera, sin el ->url)
  const productos = await client.fetch(
    `*[_type == $tipoDocumento]{
      _id,
      "title": nombre,
      "description": descripcion,
      imagen,
      alergenos,
      porciones
    }`,
    { tipoDocumento }
  );

  // 4. Antes de mandar las tartas a tu web, pasamos las fotos por las "tijeras"
  return productos.map((producto) => {
    return {
      ...producto,
      // Si la tarta tiene foto, usamos builder.image() que aplica el recorte automáticamente
      image: producto.imagen ? builder.image(producto.imagen).url() : null
    };
  });
}