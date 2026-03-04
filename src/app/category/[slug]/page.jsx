
import { getProductosPorTipo } from "../../../../sanity.query";
import CategoryClient from "./CategoryClient";

export default async function CategoryPage({ params }) {
  // 2. En las versiones nuevas de Next.js, los params se leen así (con await)
  const { slug } = await params;

  // 3. Vamos a Sanity a por las tartas (aquí SÍ podemos usar await porque no hay 'use client')
  const productosSanity = await getProductosPorTipo(slug);

  // 4. Le pasamos los datos a tu diseño
  return <CategoryClient slug={slug} productos={productosSanity} />;
}