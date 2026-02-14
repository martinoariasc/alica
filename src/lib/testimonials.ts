import { Product } from './products';

export interface Testimonial {
    id: number;
    name: string;
    text: string;
    image: string;
    babyAge: string;
    product: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'María González',
        text: '¡Hermosos! La calidad del cuero es increíble, súper suavitos. A mi bebé le encantan y no se los quiere sacar nunca.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop',
        babyAge: '6 meses',
        product: 'Mocasines Classic',
    },
    {
        id: 2,
        name: 'Andrea Benítez',
        text: 'Me encanta que sean tan flexibles. Mi nena está aprendiendo a caminar y se nota que está cómoda. ¡Súper recomendados!',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop',
        babyAge: '11 meses',
        product: 'Botitas Rose',
    },
    {
        id: 3,
        name: 'Sofía Martínez',
        text: 'La presentación es un sueño, ideal para regalo. Compré para mi sobrino y quedé súper bien. ¡Volveré a comprar!',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop',
        babyAge: '3 meses',
        product: 'Sandalias Sol',
    },
    {
        id: 4,
        name: 'Laura Villalba',
        text: 'Tenía miedo de pedir online pero la atención por WhatsApp fue excelente. Me ayudaron con el talle y llegaron rapidísimo.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
        babyAge: '9 meses',
        product: 'Oxford Baby',
    },
];
