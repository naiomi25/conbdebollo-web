// paginaContenido.js
export default {
  name: 'paginaContenido',
  title: 'Contenido de Páginas',
  type: 'document',
  fields: [
    {
      name: 'identificador',
      title: '¿Qué página es?',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'Tartas', value: 'tartas' },
          { title: 'Muffins', value: 'muffins' },
          { title: 'Cookies', value: 'cookies' },
          { title: 'Palmeritas', value: 'palmeritas' },
          { title: 'Bizcochos', value: 'bizcochos' },
          { title: 'CakePop', value: 'cakepop' },
          { title: 'Vasitos Cheesecake', value: 'vasitoscheesecake' },  
          { title: 'Dulces', value: 'dulces' },
        ]
      }
    },
    {
      name: 'titulo',
      title: 'Título de la página',
      type: 'string'
    },
    {
      name: 'descripcion',
      title: 'Descripción principal',
      type: 'text',
      rows: 2
    },
    {
      name: 'cierrePregunta',
      title: 'Frase de cierre (Pregunta)',
      type: 'string'
    },
    {
      name: 'cierreTexto',
      title: 'Frase de cierre (Texto invitación)',
      type: 'text',
      rows: 2
    }
  ]
}