import Link from "next/link";

export default function Footer() {
    return (
        // Usamos las variables limpias: bg-oscuro y text-fondo
        <footer className="bg-oscuro text-fondo pt-8 pb-4 px-6 mt-auto w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">

                {/* Columna 1: Marca */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-dorado">Con B de Bollo</h2>
                    <p className="opacity-90 leading-relaxed text-sm">
                        Pastelería artesanal dedicada a endulzar tus momentos especiales con productos de calidad y un toque de sofisticación.
                    </p>
                </div>

                {/* Columna 2: Contacto */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-dorado">Contáctanos</h3>
                    <p className="opacity-90 text-sm">
                        Reserva tu momento más dulce o cuéntanos tu idea.
                    </p>

                    <p className="text-principal font-semibold text-xs inline-block  py-1 rounded-md mt-1 self-start">
                    * Pedidos con 48h de antelación mínima.
                    </p>
                    <div className="flex gap-4 text-2xl my-1">
                        <span className="cursor-pointer hover:text-dorado transition-colors">✉️</span>
                        <span className="cursor-pointer hover:text-dorado transition-colors">📷</span>
                        <span className="cursor-pointer hover:text-dorado transition-colors">💬</span>
                    </div>

                </div>

                {/* Columna 3: Legal */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-dorado">Legal</h3>
                    <ul className="flex flex-col gap-2 opacity-90 text-sm">
                        <li><Link href="/privacidad" className="hover:text-dorado transition-colors">Política de Privacidad</Link></li>
                        <li><Link href="/aviso-legal" className="hover:text-dorado transition-colors">Aviso Legal</Link></li>
                        <li><Link href="/cookies" className="hover:text-dorado transition-colors">Política de Cookies</Link></li>
                    </ul>
                    <p className="text-[9px] opacity-70">© 2026 Con B de Bollo. Todos los derechos reservados.</p>
                </div>

            </div>


        </footer>
    );
}