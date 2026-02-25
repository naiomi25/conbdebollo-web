export default function CategoriaPage({ params }) {
  // Sacamos el nombre de la categoría de la URL (el "slug")
  const nombreCategoria = params.slug;

  return (
    <main className="min-h-screen bg-fondo pt-32 px-8">
      {/* Ponemos la primera letra en mayúscula para que quede bonito */}
      <h1 className="text-4xl text-principal text-center mb-12 capitalize">
        Categoría: {nombreCategoria}
      </h1>
      
      <div className="text-center text-texto">
        <p>Aquí irá el grid (cuadrícula) con las cards de los productos de esta categoría.</p>
        <p>Y al hacer clic, se abrirá el modal de Framer Motion.</p>
      </div>
    </main>
  );
}