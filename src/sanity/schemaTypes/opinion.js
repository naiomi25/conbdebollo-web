// opinion.js
export default {
  name: 'opinion',
  title: 'Opiniones de Clientes',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Cliente',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'comentario',
      title: 'Comentario',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }
    
  ]
}