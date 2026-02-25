import { Playfair_Display, Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

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
export const metadata = {
  title: "Pastelería Con de Bollo",
  description: "Descubre nuestras tartas y dulces artesanales",
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
      </body>
    </html>
  );
}