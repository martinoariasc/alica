'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function SplitCategory() {
    return (
        <section className="w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden">
            {/* Pequeños Marineros (Niños) */}
            <div className="flex-1 relative group h-[50vh] md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-blue-soft transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Background Image Placeholder (Optional) */}
                {/* <div className="absolute inset-0 bg-[url('/images/boy-bg.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-700" /> */}

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                    <AnimatedSection>
                        <h3 className="font-heading text-3xl md:text-5xl text-charcoal mb-4 italic">
                            Pequeños Marineros
                        </h3>
                        <p className="font-body text-charcoal/80 text-lg mb-8 max-w-sm mx-auto">
                            Grandes aventuras comienzan con un paso firme y seguro.
                        </p>
                        <Button
                            href="/shop?category=niños"
                            variant="outline"
                            className="!border-charcoal !text-charcoal hover:!bg-charcoal hover:!text-white backdrop-blur-sm"
                        >
                            Explorar Mundo
                        </Button>
                    </AnimatedSection>
                </div>
            </div>

            {/* Pequeñas Princesas (Niñas) */}
            <div className="flex-1 relative group h-[50vh] md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-pink-soft transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                {/* Background Image Placeholder (Optional) */}
                {/* <div className="absolute inset-0 bg-[url('/images/girl-bg.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-700" /> */}

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                    <AnimatedSection delay={0.2}>
                        <h3 className="font-heading text-3xl md:text-5xl text-charcoal mb-4 italic">
                            Pequeñas Princesas
                        </h3>
                        <p className="font-body text-charcoal/80 text-lg mb-8 max-w-sm mx-auto">
                            Primeros sueños envueltos en dulzura y protección.
                        </p>
                        <Button
                            href="/shop?category=niñas"
                            variant="outline"
                            className="!border-charcoal !text-charcoal hover:!bg-charcoal hover:!text-white backdrop-blur-sm"
                        >
                            Ver Cuento de Hadas
                        </Button>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
