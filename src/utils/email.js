

export const enviarPorEmail = async (datosCliente, tarta, extras, emailCliente, fotoAdjunta) => {
   
    const cuerpoDelCorreo = `
¡Hola! Ha entrado un nuevo diseño de tarta a medida desde la web:

DATOS DEL CLIENTE:
- Nombre: ${datosCliente.nombre || "No indicado"}
- Email: ${emailCliente}
- Fecha: ${datosCliente.fechaEvento || "Pendiente"} / Hora: ${datosCliente.horaEvento || "Pendiente"}
- Lugar: ${datosCliente.lugarEntrega || "Pendiente"}
- Alergias: ${datosCliente.alergias || "Ninguna"}

DISEÑO DE LA TARTA:
- Tamaño: ${tarta.tamaño}
- Bizcocho: ${tarta.bizcocho}
- Relleno: ${tarta.relleno}
- Cobertura: ${tarta.cobertura}

EXTRAS:
- Topper: ${extras.quiereTopper ? `Sí (${extras.textoTopper})` : "No"}
- Temática: ${extras.tematica || "Ninguna"}
    `;


    const formData = new FormData();
    
    
    formData.append('nombre', datosCliente.nombre || "Cliente Web");
    formData.append('email', emailCliente);
    formData.append('detalles', cuerpoDelCorreo);
    
   
    if (fotoAdjunta) {
        formData.append('foto', fotoAdjunta);
    }

  
    try {
        
        const respuesta = await fetch('/api/enviar', {
            method: 'POST',
            body: formData, 
        });

       
        if (!respuesta.ok) {
            throw new Error('Error en el servidor al enviar el email');
        }

        const resultado = await respuesta.json();
        return resultado;
        
    } catch (error) {
        console.error("Error al conectar con la API de email:", error);
        throw error;
    }
};