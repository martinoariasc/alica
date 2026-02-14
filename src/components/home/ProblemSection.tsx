'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ProblemSection() {
    return (
        <section className="py-20 md:py-28 bg-charcoal text-white relative overflow-hidden">
            {/* Background Texture/Pattern (Optional - keeping it clean for now) */}
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <AnimatedSection>
                    <div className="relative">
                        <span className="block text-rose-light text-6xl font-heading opacity-30 absolute -top-10 left-1/2 -translate-x-1/2 select-none">
                            &ldquo;
                        </span>
                        <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-12 font-medium max-w-3xl mx-auto drop-shadow-md">
                            La mayoría de los zapatitos son duros, calurosos y no
                            respetan el desarrollo natural del pie...
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                    <div className="w-24 h-[1px] bg-rose-light/50 mx-auto mb-10" />
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                    <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto">
                        En <strong className="font-heading font-semibold text-rose-light">Alica</strong> diseñamos calzado
                        blando, flexible y transpirable que abraza cada movimiento de tu bebé, permitiendo que sus piecitos crezcan
                        <span className="italic"> libres y fuertes</span>.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
