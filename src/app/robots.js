export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', 
    },
    sitemap: 'https://conbdebollo-web-6x95.vercel.app/sitemap.xml',
  }
}