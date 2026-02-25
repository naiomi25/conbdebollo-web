export default function DetalleEventoPage({ params }) {
  const nombreEvento = params.eventSlug; // Esto atrapará "desayunos-meriendas" o "mesas-dulces"

  return (
    <main className="min-h-screen bg-fondo pt-32 px-8">
      <h1 className="text-4xl text-principal text-center mb-12 capitalize">
        Detalle de: {nombreEvento.replace('-', ' ')}
      </h1>
      <p className="text-center text-texto">Aquí pondremos las fotos, precios y especificaciones de este evento concreto.</p>
    </main>
  );
}