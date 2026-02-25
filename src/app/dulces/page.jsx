import Link from "next/link";

export default function DulcesPage() {
  return (
    <main className="min-h-screen bg-fondo pt-32 px-8 pb-20">
      <h1 className="text-4xl text-principal text-center mb-12 font-bold">Nuestros Dulces</h1>
      
      {/* Grid responsive: 1 columna en móvil, 3 columnas a partir de tablet/PC */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Card 1: Muffins */}
        {/* El Link nos lleva a nuestra ruta dinámica /categoria/muffins */}
        <Link href="/categoria/muffins" className="block bg-tarjeta rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
          {/* Hueco temporal para la foto (Fase de conexión con Sanity) */}
          <div className="h-48 bg-principal/20 flex items-center justify-center">
            <span className="text-principal font-medium">Foto de Muffins</span>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl text-principal mb-2">Muffins</h2>
            <p className="text-texto text-sm">Esponjosos, tiernos y con el equilibrio perfecto de dulzor.</p>
          </div>
        </Link>

        {/* Card 2: Bizcochos */}
        <Link href="/categoria/bizcochos" className="block bg-tarjeta rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="h-48 bg-principal/20 flex items-center justify-center">
            <span className="text-principal font-medium">Foto de Bizcochos</span>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl text-principal mb-2">Bizcochos</h2>
            <p className="text-texto text-sm">Recetas tradicionales y opciones creativas para acompañar tu café.</p>
          </div>
        </Link>

        {/* Card 3: Palmeritas */}
        <Link href="/categoria/palmeritas" className="block bg-tarjeta rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="h-48 bg-principal/20 flex items-center justify-center">
            <span className="text-principal font-medium">Foto de Palmeritas</span>
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl text-principal mb-2">Palmeritas</h2>
            <p className="text-texto text-sm">Crujientes, bañadas en chocolate o glaseadas. Un bocado clásico.</p>
          </div>
        </Link>
        
      </div>
    </main>
  );
}