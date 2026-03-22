// schemas/evento.js (o donde tengas tus esquemas)
export default {
  name: 'eventos',
  title: 'Eventos', 
  type: 'document',
  fields: [
    { 
      name: 'title', 
      type: 'string', 
      title: 'Título del Evento' 
    },
    { 
      name: 'desc', 
      type: 'text', 
      title: 'Descripción corta' 
    },
    {
      name: 'img',
      type: 'image',
      title: 'Foto del Evento',
      options: { hotspot: true }
    },
    {
      name: 'detalles',
      title: 'Puntos a destacar (Viñetas)',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Ej: 1 para el primero, 2 para el segundo...'
    }
  ],
  // Esto es un extra para que en el panel de Sanity se vea bonito el listado
  preview: {
    select: {
      title: 'title',
      media: 'img',
      subtitle: 'orden'
    },
    prepare(selection) {
      const {title, media, subtitle} = selection
      return {
        title: title,
        media: media,
        subtitle: `Orden: ${subtitle || 'Sin orden'}`
      }
    }
  }
}