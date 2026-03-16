// src/app/api/enviar/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Despertamos a Resend con tu llave maestra
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        // 1. ABRIMOS LA CAJA
        const data = await request.formData();
        const nombre = data.get('nombre');
        const emailCliente = data.get('email');
        const detalles = data.get('detalles'); 
        const foto = data.get('foto'); 

        // 2. PREPARAMOS LA FOTO (Si la hay)
        let adjuntos = [];
        if (foto && foto !== "undefined" && foto !== "null") {
            const bytes = await foto.arrayBuffer();
            const buffer = Buffer.from(bytes);
            adjuntos.push({
                filename: foto.name,
                content: buffer,
            });
        }

        // 3. Mandamos el correo
        const { data: infoEnvio, error } = await resend.emails.send({
            from: 'Pedidos Web <onboarding@resend.dev>', 
            to: ['naiomidiaz.her@gmail.com'], 
            reply_to: emailCliente,
            subject: `🎂 Nuevo pedido web de: ${nombre}`,
            text: detalles, 
            attachments: adjuntos, 
        });

        // Si Resend se queja por algo (ej. API key mal puesta), lanzamos error
        if (error) {
            console.error("Error de Resend:", error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        // Si todo va bien, devolvemos un OK
        return NextResponse.json({ mensaje: "¡Email enviado con éxito!" }, { status: 200 });

    } catch (error) {
        console.error("Error catastrófico en el servidor:", error);
        return NextResponse.json({ error: "El servidor explotó un poquito" }, { status: 500 });
    }
}