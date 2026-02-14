'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ProblemSection() {
    return (
        <section className="py-20 md:py-28 bg-bg-warm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <AnimatedSection>
                    <div className="relative">
                        <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed mb-10 font-normal max-w-3xl mx-auto drop-shadow-sm">
                            &ldquo;La mayoría de los zapatitos son duros, calurosos y no
                            respetan el desarrollo natural del pie...&rdquo;
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <div className="w-24 h-[2px] bg-rose-deep/40 mx-auto mb-10" />
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                    <p className="font-body text-lg md:text-xl text-charcoal leading-relaxed font-normal max-w-3xl mx-auto">
                        En <strong className="font-heading font-semibold text-rose-deep">Alica</strong> diseñamos calzado
                        blando, flexible y transpirable que abraza cada movimiento de tu bebé.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
