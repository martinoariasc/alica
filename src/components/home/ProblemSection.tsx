'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ProblemSection() {
    return (
        <section className="py-20 md:py-28 bg-bg-warm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <AnimatedSection>
                    <p className="font-heading text-xl md:text-2xl lg:text-3xl text-charcoal/50 leading-relaxed mb-10 font-light italic max-w-2xl mx-auto">
                        &ldquo;La mayoría de los zapatitos son duros, calurosos y no
                        respetan el desarrollo natural del pie...&rdquo;
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <div className="w-24 h-[1px] bg-rose-deep/30 mx-auto mb-10" />
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                    <p className="font-body text-lg md:text-xl text-charcoal/80 leading-relaxed font-light max-w-3xl mx-auto">
                        En <strong className="font-heading font-semibold text-rose-deep">Alica</strong> diseñamos calzado
                        blando, flexible y transpirable que abraza cada movimiento de tu bebé.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
