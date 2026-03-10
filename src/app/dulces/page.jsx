import { getContenidoPagina } from "../../../sanity.query";
import DulcesClient from "./DulcesClient";

export default async function DulcesPage() {
  
  // Le pedimos a Sanity los textos para la página identificada como "dulces"
  const contenidoSanity = await getContenidoPagina("dulces");

  // Pasamos los datos al cliente
  return <DulcesClient contenido={contenidoSanity} />;
}