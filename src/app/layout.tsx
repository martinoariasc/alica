import type { Metadata } from 'next';
import { Italiana, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import GlobalVideoBackground from '@/components/layout/GlobalVideoBackground';

const italiana = Italiana({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
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
      <body className={`${italiana.variable} ${montserrat.variable} antialiased bg-[#FAF7F5] overflow-x-hidden`}>
        <GlobalVideoBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
