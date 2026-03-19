import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export async function getProductosPorTipo(slug) {
  // Ahora le decimos a Sanity: "Búscame los PRODUCTOS cuya CATEGORÍA sea igual al slug de la página"
  const productos = await client.fetch(
    `*[_type == "producto" && categoria == $slug]{
      _id,
      "title": nombre,
      "description": descripcion,
      imagen,
      alergenos,
      porciones
    }`,
    { slug }
  );

  return productos.map((producto) => {
    return {
      ...producto,
      image: producto.imagen ? builder.image(producto.imagen).url() : null
    };
  });
}
export async function getOpiniones() {
  return client.fetch(`*[_type == "opinion"]{
    nombre,
    comentario
  }`);
}
export async function getContenidoPagina(slug) {
  return client.fetch(
    `*[_type == "paginaContenido" && identificador == $slug][0]{
      titulo,
      descripcion,
      cierrePregunta,
      cierreTexto,
      
    }`,
    { slug }
  );
}
export async function getEventos() {
  return client.fetch(
    `*[_type == "eventos"] | order(orden asc) {
      _id,
      title,
      desc,
      "img": img.asset->url,
      detalles
    }`
  );
}