'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: 'Mamá de Sofi',
        text: 'Lloré cuando abrí la cajita. Son demasiado perfectos, se nota el amor en cada costura. Sofi no se los quiere sacar nunca.',
        date: 'hace 2 semanas',
        rotation: '-rotate-2',
    },
    {
        name: 'Mamá de Tomi',
        text: 'Buscaba algo que no le apretara sus piecitos gorditos y Alica fue la salvación. El cuero es manteca pura. Volveré a comprar.',
        date: 'hace 1 mes',
        rotation: 'rotate-1',
    },
    {
        name: 'Babu de Clara',
        text: 'El regalo más lindo del Baby Shower. La presentación es un sueño y los zapatitos una joya. Gracias por tanta dedicación.',
        date: 'hace 3 días',
        rotation: '-rotate-1',
    },
];

export default function PolaroidTestimonials() {
    return (
        <section className="py-20 md:py-32 bg-bg overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <SectionTitle
                        title="Historias Reales"
                        subtitle="Mamás que confiaron en Alica para sus tesoros más preciados"
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 px-4">
                    {reviews.map((review, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className={`bg-white p-4 pb-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-0 ${review.rotation} relative`}>
                                {/* Tape effect (Optional css trick, simplified for now) */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-cream-dark/30 rotate-1 backdrop-blur-sm"></div>

                                {/* Photo Area (Placeholder) */}
                                <div className="aspect-square bg-bg-warm mb-6 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                                    <div className="w-full h-full flex items-center justify-center text-charcoal/20 font-heading text-sm uppercase tracking-widest">
                                        Foto Bebé
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="text-center px-2">
                                    <div className="flex justify-center gap-1 mb-4 text-gold">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="font-heading text-charcoal/80 text-lg leading-relaxed italic mb-6">
                                        &ldquo;{review.text}&rdquo;
                                    </p>
                                    <div className="font-body text-sm font-medium text-charcoal uppercase tracking-widest">
                                        {review.name}
                                    </div>
                                    <div className="font-body text-xs text-muted mt-1">
                                        {review.date}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
