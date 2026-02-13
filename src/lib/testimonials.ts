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
        name: 'María F.',
        text: '¡Son los zapatitos más lindos que vi! Mi bebé los usa todo el día y no le molestan para nada. Se nota que están hechos con mucho amor.',
        image: '/images/testimonials/testimonial-1.svg',
        babyAge: '8 meses',
        product: 'Alpargatita Clásica',
    },
    {
        id: 2,
        name: 'Carolina S.',
        text: 'Pedí las botitas y quedé encantada. Son super suaves y mi nena no se las quiere sacar. Calidad increíble.',
        image: '/images/testimonials/testimonial-2.svg',
        babyAge: '10 meses',
        product: 'Botita Clásica',
    },
    {
        id: 3,
        name: 'Lucía M.',
        text: 'Las orejitas son un sueño. Le hice la sesión de fotos a mi hijo y quedaron espectaculares. ¡Las amo!',
        image: '/images/testimonials/testimonial-3.svg',
        babyAge: '6 meses',
        product: 'Orejita Clásica',
    },
    {
        id: 4,
        name: 'Valentina R.',
        text: 'Ya compré 3 veces. La atención es increíble y los productos llegarón perfectos. Mi bebé los ama.',
        image: '/images/testimonials/testimonial-4.svg',
        babyAge: '1 año',
        product: 'Pack 3 Vinchas',
    },
    {
        id: 5,
        name: 'Sofía G.',
        text: 'Regalé las alpargatitas para un baby shower y fue el regalo estrella. Vienen en un packaging divino.',
        image: '/images/testimonials/testimonial-5.svg',
        babyAge: 'Regalo',
        product: 'Alpargatita con Bordado',
    },
    {
        id: 6,
        name: 'Ana P.',
        text: 'Las bandanas de Alica son lo mejor que compré. Absorbentes, lindas y mi bebé se ve hermoso con ellas.',
        image: '/images/testimonials/testimonial-6.svg',
        babyAge: '4 meses',
        product: 'Bandana Bebé',
    },
];
