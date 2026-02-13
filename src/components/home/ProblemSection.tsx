'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ProblemSection() {
    return (
        <section className="py-20 md:py-28 bg-bg-warm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <AnimatedSection>
                    <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal/60 leading-relaxed mb-8 font-light italic">
                        &ldquo;La mayoría de los zapatitos son duros, calurosos y no
                        respetan el pie del bebé...&rdquo;
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <div className="w-16 h-[2px] bg-rose mx-auto mb-8" />
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                    <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed font-medium">
                        En <span className="gradient-text">Alica</span> diseñamos zapatitos
                        blandos, flexibles y transpirables que cuidan cada movimiento.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
