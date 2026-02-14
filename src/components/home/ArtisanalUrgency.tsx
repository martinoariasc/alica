'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function ArtisanalUrgency() {
    return (
        <section className="py-8 bg-charcoal text-white text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-4">
                <AnimatedSection>
                    <p className="font-heading text-lg md:text-xl tracking-wide font-light">
                        ⏳ <span className="italic mx-2">Slow Fashion:</span>
                        Confeccionamos pocos pares por semana para asegurar la perfección.
                        <Link href="/shop" className="underline underline-offset-4 decoration-gold hover:text-gold transition-colors ml-2 font-medium">
                            ¿Reservamos el tuyo hoy?
                        </Link>
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
