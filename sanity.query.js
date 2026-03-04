import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Para que los cambios se vean al instante
});

export async function getTartas() {
  return client.fetch(
    `*[_type == "tarta"]{
      _id,
      nombre,
      "img": imagen.asset->url,
      descripcion,
      alergenos,
      porciones
    }`
  );
}