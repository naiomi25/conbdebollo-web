export default function Home() {
  return (
    <main className="min-h-screen">
      {/* SECCIÓN HERO: Ocupa toda la pantalla, aquí irá la foto principal de fondo */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-tarjeta text-center px-4">
        
        {/* Un pequeño overlay (capa oscura) si en el futuro la foto de fondo es muy clara */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        {/* Contenido principal de la Home */}
        <div className="relative z-10 flex flex-col items-center gap-6 mt-16">
          <h1 className="text-5xl md:text-7xl text-principal font-bold drop-shadow-md">
            Artesanía en cada bocado
          </h1>
          <p className="text-lg md:text-xl text-texto font-medium max-w-2xl bg-fondo/80 p-4 rounded-lg">
            Descubre nuestras tartas y dulces elaborados con los mejores ingredientes y mucho mimo.
          </p>
          
        </div>
      </section>

      {/* Aquí irán las secciones destacadas que menciona tu documento más adelante */}
      <section className="py-20 px-8">
        <h2 className="text-3xl text-center text-principal mb-10">Nuestras Especialidades</h2>
        {/* ... */}
      </section>
    </main>
  );
}