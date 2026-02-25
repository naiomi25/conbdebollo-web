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
                    <div className="space-y-4">

                        {/* Teléfono */}
                        <a
                            href="tel:+34600000000"
                            className="flex items-center gap-3 text-texto hover:text-principal transition-colors group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                <line x1="12" y1="18" x2="12.01" y2="18"></line>
                            </svg>
                            <span className="text-sm font-medium">600 000 000</span>
                        </a>

                        {/* Email e Instagram en la misma línea */}
                        <div className="flex items-center gap-4">
                            {/* Email */}
                            <a
                                href="mailto:hola@conbdebollo.com"
                                className="flex items-center gap-2 text-texto hover:text-principal transition-colors group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/conbdebollo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-texto hover:text-principal transition-colors group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>

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