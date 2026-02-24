'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();   
  const router = useRouter();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const esHome = pathname === '/';

  return (
   <nav
      className={`w-full transition-all duration-300 ${
        esHome
          ? "bg-transparent absolute top-0 left-0 z-50 py-6 px-4 md:px-8" 
          : "bg-fondo shadow-sm sticky top-0 z-50 py-4 px-4 md:px-6"
      }`}
    >
      {esHome ? (
     <div className="flex justify-between items-center">
          <Link href="/">
            <h2 className="text-xl md:text-2xl text-principal font-bold cursor-pointer hover:opacity-80 transition-opacity">
              Con B de Bollo
            </h2>
          </Link>

          {/* Menú para Ordenador */}
          <ul className="hidden md:flex gap-6 text-texto font-medium">
            <li><Link href="/categoria/tartas" className="hover:text-principal transition-colors">Tartas</Link></li>
            <li><Link href="/categoria/dulces" className="hover:text-principal transition-colors">Dulces</Link></li>
            <li><Link href="/eventos" className="hover:text-principal transition-colors">Eventos</Link></li>
            <li><Link href="/conocenos" className="hover:text-principal transition-colors">Conócenos</Link></li>
          </ul>

          {/* Botón Hamburguesa para Móvil */}
          <button 
            className="md:hidden text-principal text-3xl focus:outline-none"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
          
            {menuAbierto ? "✕" : "☰"}
          </button>
        </div>
      ) : (
      
        <div className="flex items-center justify-between relative">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 md:gap-2 text-texto hover:text-principal transition-colors font-medium z-10 text-sm md:text-base"
          >
            <span className="text-lg md:text-xl">&larr;</span> Volver
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <h2 className="text-lg md:text-xl text-principal font-bold cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap">
                Con B de Bollo
              </h2>
            </Link>
          </div>

          <div className="w-16 md:w-20 opacity-0 pointer-events-none">
            Espacio
          </div>
        </div>
      )}

    
      {esHome && menuAbierto && (
        <div className="md:hidden absolute top-full left-0 w-full bg-fondo shadow-md py-4 px-6 flex flex-col gap-4 text-texto font-medium">
          <Link href="/categoria/tartas" onClick={() => setMenuAbierto(false)}>Tartas</Link>
          <Link href="/categoria/dulces" onClick={() => setMenuAbierto(false)}>Dulces</Link>
          <Link href="/eventos" onClick={() => setMenuAbierto(false)}>Eventos</Link>
          <Link href="/conocenos" onClick={() => setMenuAbierto(false)}>Conócenos</Link>
        </div>
      )}
    </nav>
  );
}