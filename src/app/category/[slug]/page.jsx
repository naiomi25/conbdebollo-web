
import { getProductosPorTipo, getContenidoPagina } from "../../../../sanity.query";
import CategoryClient from "./CategoryClient";

export default async function CategoryPage({ params }) {

  const { slug } = await params;

  // Obtenemos los productos y el contenido de la página desde Sanity
  const productosSanity = await getProductosPorTipo(slug);
  const contenidoSanity = await getContenidoPagina(slug);


  return <CategoryClient slug={slug} productos={productosSanity} contenido={contenidoSanity} />;
}