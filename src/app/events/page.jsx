import { getContenidoPagina } from "../../../sanity.query";
import EventosClient from "./EventosClient";
import { getEventos } from "../../../sanity.query";

export default async function EventosPage() {

  // Le pedimos a Sanity los textos para la página identificada como "eventos"
  const contenidoSanity = await getContenidoPagina("eventos");
  const listaEventos = await getEventos();

  // Pasamos los datos al cliente
  return <EventosClient contenido={contenidoSanity} eventos={listaEventos}/>;
}