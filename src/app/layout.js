import { Playfair_Display, Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import WhatsappFlotante from '@/components/whatsapp';
import CookieBanner from '@/components/CookieBanner';

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
// src/app/layout.js

export const metadata = {
  title: {
   
    template: '%s | Con B de bollo',
    default: 'Con B de bollo | Obrador Artesanal y Tartas a Medida', 
  },
  description: 'Especialistas en tartas personalizadas, mesas dulces y repostería artesanal para eventos. Haz tu pedido a medida online y sorprende a tus invitados.',
  keywords: ['tartas a medida', 'pastelería artesanal', 'mesas dulces', 'repostería', 'eventos', 'Madrid', 'cupcakes','desayunos',''],
  authors: [{ name: 'Con B de bollo' }],
  creator: 'Con B de bollo',
  
  openGraph: {
    title: 'Con B de bollo | Tartas a Medida',
    description: 'Diseña tu tarta perfecta online. Repostería creativa y artesanal para tus mejores celebraciones.',
    url: 'https://www.sudominio.com',
    siteName: 'Con B de bollo',
    images: [
      {
        url: 'https://www.sudominio.com/ruta-a-una-foto-bonita-de-una-tarta.jpg', // Cambiaremos esto cuando esté online
        width: 1200,
        height: 630,
        alt: 'Tartas artesanales a medida',
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