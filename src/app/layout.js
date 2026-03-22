import { Playfair_Display, Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFlotante from '@/components/whatsapp';
import CookieBanner from '@/components/CookieBanner';


'cambios para forzar el redeploy'

// Fuente para titulos

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Fuente para textos

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// 'prueba para redeploy'
export const metadata = {
  title: {
   
    template: '%s | Con B de bollo',
    default: 'Con B de bollo | Obrador artesanal y tartas a Medida', 
  },
  description: 'Especialistas en tartas personalizadas, mesas dulces y repostería artesanal para eventos. Haz tu pedido a medida online y sorprende a tus invitados.',
  keywords: ['tartas a medida', 'pastelería artesanal', 'mesas dulces', 'repostería', 'eventos', 'Madrid', 'muffins','desayunos','tartas de queso','cheesecakes','tartas de cumpleaños','tartas personalizadas','tartas para eventos',],
  authors: [{ name: 'Con B de bollo' }],
  creator: 'Con B de bollo',
  
  openGraph: {
    title: 'Con B de bollo | Repostería artesanal y tartas personalizadas en Madrid',
    description: ' Repostería artesanal para tus mejores celebraciones.Diseña tu tarta perfecta online.',
    url: 'https://conbdebollo-web-6x95.vercel.app',
    siteName: 'Con B de bollo',
    images: [
      {
        url: 'https://conbdebollo-web-6x95.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo de Con B de Bollo - Repostería artesanal  y tartas personalizadasen Madrid',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
     <Navbar />
       <div className="flex-grow">
          {children}
        </div>
      <Footer/>
      <WhatsappFlotante />
      <CookieBanner />
      </body>
    </html>
  );
}