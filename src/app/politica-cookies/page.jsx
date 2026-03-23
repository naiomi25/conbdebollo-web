// Ejemplo para: src/app/politica-privacidad/page.jsx
import Link from "next/link";

export default function PoliticaCookiesPage() {
    return (
        <main className="min-h-screen bg-fondo pt-24 pb-20 px-6">
            <div className="max-w-3xl mx-auto bg-tarjeta p-8 md:p-12 rounded-3xl shadow-sm border border-principal/10">
                
                <h1 className="font-serif text-3xl md:text-4xl text-principal mb-8 border-b border-principal/10 pb-6">
                    Política de Cookies
                </h1>

                <div className="prose prose-sm md:prose-base prose-stone max-w-none text-texto/80 space-y-6">
                    <h2 className="text-xl font-bold text-principal mt-8">1. ¿Qué son las cookies?</h2>
                    <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>

                    <h2 className="text-xl font-bold text-principal mt-8">2. ¿Qué tipos de cookies utiliza esta página web?</h2>
                    <ul className="list-disc pl-5 mt-2 mb-4">
                        <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan. (Ejemplo: las necesarias para que funcione el formulario de pedidos).</li>
                        <li><strong>Cookies de análisis:</strong> Son aquellas que, bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. (Solo si en un futuro añades Google Analytics).</li>
                    </ul>

                    <h2 className="text-xl font-bold text-principal mt-8">3. Revocación y eliminación de cookies</h2>
                    <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador:</p>
                    <ul className="list-disc pl-5 mt-2 mb-4">
                        <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
                        <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio.</li>
                        <li><strong>Safari:</strong> Preferencias &gt; Privacidad.</li>
                    </ul>
                    <p>El bloqueo de todas las cookies puede ayudar a proteger la privacidad, pero también puede limitar la experiencia en algunos sitios web.</p>
                    <p>
                        Última actualización: {new Date().toLocaleDateString('es-ES')}
                    </p>
                    
                    <h2 className="text-xl font-bold text-principal mt-8">4. Identidad del responsable</h2>
                    <p>
                        El responsable del tratamiento de los datos personales recogidos en esta web es:
                        <br/>- Nombre comercial: <strong>[NOMBRE DE LA PASTELERÍA]</strong>
                        <br/>- CIF/NIF: <strong>[SU CIF/NIF AQUÍ]</strong>
                        <br/>- Dirección: <strong>[SU DIRECCIÓN FÍSICA AQUÍ]</strong>
                        <br/>- Correo electrónico: <strong>[SU EMAIL DE CONTACTO]</strong>
                    </p>

                    {/* Más párrafos legales... */}
                    
                </div>

                <div className="mt-12 pt-8 border-t border-principal/10 text-center">
                    <Link href="/" className="text-sm font-bold text-principal hover:text-oscuro transition-colors underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </main>
    );
}