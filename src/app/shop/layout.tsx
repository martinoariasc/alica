import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tienda',
    description:
        'Explorá nuestra colección de zapatitos de suela blanda para bebés. Alpargatitas, botitas, orejitas, vinchas y más. Hechos a mano con amor.',
};

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
