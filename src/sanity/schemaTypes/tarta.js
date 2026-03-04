export default {
  name: 'tarta', // El nombre interno que usará el código
  title: 'Nuestras Tartas', // El nombre que verán las dueñas en el panel
  type: 'document', // Decimos que es un documento (una ficha)
  fields: [
    {
      name: 'nombre',
      title: 'Nombre de la tarta',
      type: 'string',
      validation: Rule => Rule.required() // Esto obliga a que rellenen el nombre
    },
    {
      name: 'imagen',
      title: 'Foto de la tarta',
      type: 'image',
      options: { hotspot: true } // Esto les permite recortar la foto en el panel
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3
    },
    {
      name: 'alergenos',
      title: 'Información de Alérgenos (Pop-up)',
      type: 'array',
      of: [{ type: 'string' }],
     options: {
        layout: 'tags' 
      }
    },
    {
      name: 'porciones',
      title: 'Número de porciones (Pop-up)',
      type: 'string',
      description: 'Ejemplo: 10-12 raciones'
    }
  ]
}