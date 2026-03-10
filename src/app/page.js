import { getOpiniones } from "../../sanity.query";
import HomeClient from "./HomeClient"; // Importamos tu nuevo diseño

export default async function HomePage() {
  // 1. Buscamos las opiniones de forma segura en el servidor
  const opinionesSanity = await getOpiniones();

  // 2. Cargamos tu diseño y le pasamos los datos
  return <HomeClient opinionesSanity={opinionesSanity} />;
}