import Link from "next/link";

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-fondo pt-32 px-8">
      <h1 className="text-4xl text-principal text-center mb-12 font-bold">Nuestros Eventos</h1>
      
      {/* Grid para las tarjetas de eventos */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Card 1: Desayunos */}
        <Link href="/eventos/desayunos-meriendas" className="block bg-tarjeta rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
          <h2 className="text-2xl text-principal mb-2">Desayunos y Meriendas</h2>
          <p className="text-texto">Disfruta de nuestros menús especiales para empezar la mañana o endulzar la tarde.</p>
        </Link>

        {/* Card 2: Mesas Dulces */}
        <Link href="/eventos/mesas-dulces" className="block bg-tarjeta rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
          <h2 className="text-2xl text-principal mb-2">Mesas Dulces</h2>
          <p className="text-texto">El toque perfecto y elegante para bodas, bautizos y comuniones.</p>
        </Link>
        
      </div>
    </main>
  );
}