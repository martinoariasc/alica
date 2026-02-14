'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
    {
        name: 'Mamá de Sofi',
        text: 'Lloré cuando abrí la cajita. Son demasiado perfectos, se nota el amor en cada costura. Sofi no se los quiere sacar nunca.',
        date: 'hace 2 semanas',
        rotation: 'md:-rotate-2',
        image: '/testimonials/testimonial-1.jpg',
    },
    {
        name: 'Mamá de Tomi',
        text: 'Buscaba algo que no le apretara sus piecitos gorditos y Alica fue la salvación. El cuero es manteca pura. Volveré a comprar.',
        date: 'hace 1 mes',
        rotation: 'md:rotate-1',
        image: '/testimonials/testimonial-2.jpg',
    },
    {
        name: 'Babu de Clara',
        text: 'El regalo más lindo del Baby Shower. La presentación es un sueño y los zapatitos una joya. Gracias por tanta dedicación.',
        date: 'hace 3 días',
        rotation: 'md:-rotate-1',
        image: '/testimonials/testimonial-3.jpg',
    },
];

export default function PolaroidTestimonials() {
    return (
        <section className="py-16 md:py-32 bg-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <AnimatedSection>
                    <SectionTitle
                        title="Historias Reales"
                        subtitle="Mamás que confiaron en Alica para sus tesoros más preciados"
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-12 md:mt-16 px-2 md:px-4">
                    {reviews.map((review, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className={`bg-white p-4 pb-8 md:pb-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-0 ${review.rotation} relative max-w-[320px] mx-auto md:max-w-none border border-gray-100`}>
                                {/* Tape effect */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 md:w-24 md:h-8 bg-cream-dark/30 rotate-1 backdrop-blur-sm z-20"></div>

                                {/* Photo Area */}
                                <div className="aspect-square bg-bg-warm mb-6 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700 relative">
                                    {/* Used placeholder logic: If image exists in public/testimonials it will show, otherwise it might show broken icon or we should use a smart fallback. 
                                        Since we can't verify files effectively, we use the path. Users can add files there. */}
                                    <Image
                                        src={review.image}
                                        alt={`Testimonio ${review.name}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        onError={(e) => {
                                            // Fallback logic could go here but simpler to just let it be or use a purely CSS placeholder if concerned.
                                            // For now, assuming user will provide images at these paths.
                                        }}
                                    />
                                    {/* Placeholder overlay if image is missing/loading (visual fallback) */}
                                    <div className="absolute inset-0 flex items-center justify-center text-charcoal/20 font-heading text-sm uppercase tracking-widest bg-gray-100 -z-10">
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
                                    <p className="font-heading text-charcoal/80 text-base md:text-lg leading-relaxed italic mb-6">
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
