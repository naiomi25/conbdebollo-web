// Ejemplo para: src/app/politica-privacidad/page.jsx
import Link from "next/link";

export default function PoliticaPrivacidadPage() {
    return (
        <main className="min-h-screen bg-fondo pt-24 pb-20 px-6">
            <div className="max-w-3xl mx-auto bg-tarjeta p-8 md:p-12 rounded-3xl shadow-sm border border-principal/10">
                
                <h1 className="font-serif text-3xl md:text-4xl text-principal mb-8 border-b border-principal/10 pb-6">
                    Política de Privacidad
                </h1>

                <div className="prose prose-sm md:prose-base prose-stone max-w-none text-texto/80 space-y-6">
                    <h2 className="text-xl font-bold text-principal mt-8">1. Identidad del responsable</h2>
                    <p>El responsable del tratamiento de los datos personales recogidos en esta web es:</p>
                    <ul className="list-disc pl-5 mt-2 mb-4">
                        <li><strong>Responsable:</strong> [NOMBRE DE LA EMPRESA O AUTÓNOMO]</li>
                        <li><strong>NIF/CIF:</strong> [SU CIF/NIF]</li>
                        <li><strong>Email:</strong> [SU CORREO DE CONTACTO]</li>
                    </ul>

                    <h2 className="text-xl font-bold text-principal mt-8">2. Finalidad del tratamiento</h2>
                    <p>En esta web tratamos los datos que nos facilitan las personas interesadas con el siguiente fin: gestionar los pedidos de tartas y productos de pastelería a medida solicitados a través de nuestro formulario web, así como responder a consultas enviadas por correo electrónico.</p>
                    <p className="mt-2">
                        <strong>Comunicaciones a través de WhatsApp:</strong> Al utilizar el botón o enlace de WhatsApp disponible en nuestra web, el usuario consiente expresamente que sus datos (número de teléfono y nombre de perfil) sean tratados por el titular de la web exclusivamente para atender su consulta o gestionar su pedido. Le informamos que WhatsApp es un servicio prestado por WhatsApp Ireland Limited, por lo que el uso de este canal implica la transferencia de datos a los servidores de dicha compañía, de acuerdo con su propia política de privacidad.
                    </p>
                    <h2 className="text-xl font-bold text-principal mt-8">3. Legitimación</h2>
                    <p>La base legal para el tratamiento de sus datos es el <strong>consentimiento</strong>. Para contactar o realizar un pedido en esta web se requiere la aceptación de esta política de privacidad.</p>

                    <h2 className="text-xl font-bold text-principal mt-8">4. Conservación de los datos</h2>
                    <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.</p>

                    <h2 className="text-xl font-bold text-principal mt-8">5. Derechos del usuario (Derechos ARCO)</h2>
                    <p>Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que les conciernan. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión. Podrá ejercer sus derechos dirigiendo un email a <strong>[SU CORREO DE CONTACTO]</strong>.</p>
                    <p>
                        Última actualización: {new Date().toLocaleDateString('es-ES')}
                    </p>
                    
                    <h2 className="text-xl font-bold text-principal mt-8">1. Identidad del responsable</h2>
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