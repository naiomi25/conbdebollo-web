// src/utils/whatsapp.js

export const enviarPorWhatsApp = (datosCliente, tarta, extras) => {
    const telefono = "34661043558"; 

    // Emojis blindados: traducidos directamente de su código web para que no fallen nunca
    const hola = decodeURIComponent("%F0%9F%91%8B");
    const destellos = decodeURIComponent("%E2%9C%A8");
    const alerta = decodeURIComponent("%E2%9A%A0%EF%B8%8F");
    const pastel = decodeURIComponent("%F0%9F%8D%B0");

    let mensaje = `¡Hola! ${hola} Quería consultar el diseño de una tarta a medida con estos detalles:\n\n`;

    mensaje += `*DATOS DEL EVENTO*\n`;
    mensaje += `- Nombre: ${datosCliente.nombre || "Tarta Invitada " + destellos}\n`;
    mensaje += `- Fecha: ${datosCliente.fechaEvento || "Pendiente"}\n`;
    mensaje += `- Hora: ${datosCliente.horaEvento || "Pendiente"}\n`;
    mensaje += `- Lugar: ${datosCliente.lugarEntrega || "Pendiente"}\n`;
    
    if (datosCliente.alergias) {
        mensaje += `- Alergias: *${datosCliente.alergias}* ${alerta}\n`;
    }

    mensaje += `\n*DISEÑO DE LA TARTA*\n`;
    mensaje += `- Tamaño: ${tarta.tamaño}\n`;
    mensaje += `- Bizcocho: ${tarta.bizcocho}\n`;
    mensaje += `- Relleno: ${tarta.relleno}\n`;
    mensaje += `- Cobertura: ${tarta.cobertura}\n`;

    mensaje += `\n*EXTRAS*\n`;
    if (extras.quiereTopper) {
        mensaje += `- Topper: Sí (${extras.textoTopper})\n`;
    } else {
        mensaje += `- Topper: No\n`;
    }
    
    if (extras.tematica) {
        mensaje += `- Temática: ${extras.tematica}\n`;
    }

    mensaje += `\n¡Quedo a la espera para ultimar detalles! Gracias. ${pastel}`;

    // Codificamos todo el texto final
    const mensajeCodificado = encodeURIComponent(mensaje);

    // API oficial  de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeCodificado}`;

    window.open(url, '_blank');
};