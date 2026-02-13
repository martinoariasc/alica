import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Alica Bebés | Zapatitos de Suela Blanda para Bebés',
    template: '%s | Alica Bebés',
  },
  description:
    'Zapatitos artesanales de suela blanda, hechos con amor para los primeros pasos de tu bebé. Diseño, confort y calidad en cada par. Envíos a todo Paraguay.',
  keywords: [
    'zapatitos bebé',
    'suela blanda',
    'calzado infantil',
    'zapatitos artesanales',
    'bebé Paraguay',
    'alica bebés',
    'botitas bebé',
    'alpargatitas bebé',
  ],
  openGraph: {
    title: 'Alica Bebés | Zapatitos de Suela Blanda para Bebés',
    description:
      'Zapatitos artesanales de suela blanda, hechos con amor para los primeros pasos de tu bebé.',
    type: 'website',
    locale: 'es_PY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
