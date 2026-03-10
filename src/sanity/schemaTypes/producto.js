// producto.js
export default {
  name: 'producto',
  title: 'Catálogo de Dulces',
  type: 'document',
  fields: [
    {
      name: 'categoria',
      title: '¿En qué página va este dulce?',
      type: 'string',
      options: {
        list: [
          { title: 'Tartas', value: 'tartas' },
          { title: 'Muffins', value: 'muffins' },
          { title: 'Cookies', value: 'cookies' },
          { title: 'Palmeritas', value: 'palmeritas' },
          { title: 'Bizcochos', value: 'bizcochos' },
          { title: 'CakePop', value: 'cakepop' },
          { title: 'Vasitos Cheesecake', value: 'vasitoscheesecake' },
          
        ],
        layout: 'radio' 
      },
      validation: Rule => Rule.required() // Obligatorio para que no se pierdan dulces
    },
    {
      name: 'nombre',
      title: 'Nombre del producto',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'imagen',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3
    },
    {
      name: 'alergenos',
      title: 'Alérgenos',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    },
    {
      name: 'porciones',
      title: 'Número de porciones (Pop-up)',
      type: 'string',
    }
  ],
  // ESTO ES EL TRUCO PARA QUE ELLAS 
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'categoria', // Muestra la categoría justo debajo del nombre
      media: 'imagen'
    }
  }
}