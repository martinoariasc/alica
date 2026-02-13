import { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { testimonials } from '@/lib/testimonials';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Testimonios',
    description:
        'Leé lo que dicen las mamás sobre los zapatitos Alica. Opiniones reales de clientas satisfechas.',
};

export default function TestimoniosPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-rose-light/30 to-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <AnimatedSection>
                        <SectionTitle
                            title="Lo que dicen las mamás"
                            subtitle="Mamás reales. Bebés reales. Amor real."
                        />
                    </AnimatedSection>
                </div>
            </section>

            {/* Testimonial Grid */}
            <section className="pb-20 bg-bg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <AnimatedSection key={t.id} delay={i * 0.08}>
                                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, j) => (
                                            <Star
                                                key={j}
                                                className="w-4 h-4 text-gold fill-current"
                                            />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-charcoal/80 leading-relaxed mb-6 flex-1 text-sm">
                                        &ldquo;{t.text}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                                        <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center">
                                            <span className="text-rose-deep font-heading font-semibold text-sm">
                                                {t.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-charcoal text-sm">
                                                {t.name}
                                            </p>
                                            <p className="text-xs text-muted">
                                                {t.product} · Bebé de {t.babyAge}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* CTA */}
                    <AnimatedSection className="text-center mt-16">
                        <p className="text-muted mb-4 text-lg">
                            ¿Querés ser la próxima mamá feliz?
                        </p>
                        <Button href="/shop" variant="primary" size="lg">
                            Ver la colección
                        </Button>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
