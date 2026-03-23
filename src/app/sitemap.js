import { client } from '@/sanity/lib/client';

export default async function sitemap() {
    const baseUrl = 'https://conbdebollo-web-6x95.vercel.app'; // Cambiar al .com cuando lo compréis

    // 1. Le pedimos a Sanity SOLO los productos (para sus páginas individuales)
    const query = `*[_type == "producto" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }`;

    const productos = await client.fetch(query);

    // 2. Construimos las rutas dinámicas de los DULCES individuales (/dulces/nombre-del-dulce)
    const rutasDulces = productos.map((producto) => ({
        url: `${baseUrl}/dulces/${producto.slug}`,
        lastModified: producto._updatedAt, // Google sabrá exactamente cuándo se modificó
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // 3. Construimos TODAS tus rutas fijas y las páginas de categorías
    const rutasFijas = [
        {
            url: baseUrl, // Home
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
        url: `${baseUrl}/conocenos`, 
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
        },
        {
            url: `${baseUrl}/dulces`, // La puerta de entrada general a los dulces
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/eventos`, // Eventos
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/a-medida`, // Configurador de tartas
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // --- CATEGORÍAS DE DULCES ---
        {
            url: `${baseUrl}/category/tartas`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/category/muffins`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/category/bizcochos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/category/palmeritas`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/category/cookies`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/category/cakepops`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/category/cheesecake-vasitos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // --- PÁGINAS LEGALES ---
        {
            url: `${baseUrl}/aviso-legal`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/politica-privacidad`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/politica-cookies`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // 4. Juntamos las rutas fijas y los dulces de Sanity
    return [...rutasFijas, ...rutasDulces];
}