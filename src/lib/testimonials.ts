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
        text: 'Nunca vi zapatitos tan delicados. El cuero es una manteca, ideal para los primeros pasos de mi bebé. Se nota el amor en cada costura.',
        image: '/images/738b4594-6f52-4567-b980-b5887423b94a.jpg',
        babyAge: '6 meses',
        product: 'Mocasines Classic',
    },
    {
        id: 2,
        name: 'Andrea Benítez',
        text: 'Estaba buscando algo que no le apretara el piecito y estos son perfectos. Súper flexibles y calentitos. ¡Ya pedí otro par!',
        image: '/images/7b618458-7f27-4632-85cd-753318b2ae12.jpg',
        babyAge: '11 meses',
        product: 'Botitas Rose',
    },
    {
        id: 3,
        name: 'Sofía Martínez',
        text: 'La presentación es un sueño, cada detalle cuenta. Abrir la cajita fue una experiencia hermosa. La calidad supera a cualquier marca importada.',
        image: '/images/940a2e9d-115a-4b71-959d-26dc24e184b5.jpg',
        babyAge: '3 meses',
        product: 'Sandalias Sol',
    },
    {
        id: 4,
        name: 'Laura Villalba',
        text: 'Atención 10/10. Me asesoraron con el talle por WhatsApp y me llegó al día siguiente. Mi gorda está feliz con sus flequitos.',
        image: '/images/9886342d-0c78-424e-873c-dfaeba496e67.jpg',
        babyAge: '9 meses',
        product: 'Oxford Baby',
    },
];
