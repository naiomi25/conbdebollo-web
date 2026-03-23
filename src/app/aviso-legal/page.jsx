// Ejemplo para: src/app/politica-privacidad/page.jsx
import Link from "next/link";

export default function AvisoLegalPage() {
    return (
        <main className="min-h-screen bg-fondo pt-24 pb-20 px-6">
            <div className="max-w-3xl mx-auto bg-tarjeta p-8 md:p-12 rounded-3xl shadow-sm border border-principal/10">
                
                <h1 className="font-serif text-3xl md:text-4xl text-principal mb-8 border-b border-principal/10 pb-6">
                    Aviso legal
                </h1>

                <div className="prose prose-sm md:prose-base prose-stone max-w-none text-texto/80 space-y-6">
                    <h2 className="text-xl font-bold text-principal mt-8">1. Datos Identificativos</h2>
                    <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), los datos identificativos del titular de la web son:</p>
                    <ul className="list-disc pl-5 mt-2 mb-4">
                        <li><strong>Titular:</strong> [NOMBRE DE LA EMPRESA O AUTÓNOMO]</li>
                        <li><strong>NIF/CIF:</strong> [SU CIF/NIF]</li>
                        <li><strong>Dirección:</strong> [DIRECCIÓN FÍSICA DE LA PASTELERÍA]</li>
                        <li><strong>Email:</strong> [SU CORREO DE CONTACTO]</li>
                        <li><strong>Teléfono:</strong> [SU TELÉFONO]</li>
                    </ul>

                    <h2 className="text-xl font-bold text-principal mt-8">2. Condiciones de uso</h2>
                    <p>El acceso y/o uso de este sitio web atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, los presentes términos de uso. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través de esta web.</p>

                    <h2 className="text-xl font-bold text-principal mt-8">3. Propiedad Intelectual e Industrial</h2>
                    <p>El titular por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Todos los derechos reservados.</p>

                    <h2 className="text-xl font-bold text-principal mt-8">4. Exclusión de garantías y responsabilidad</h2>
                    <p>El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
                    <p>
                        Última actualización: {new Date().toLocaleDateString('es-ES')}
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