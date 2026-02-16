'use client';

import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';

export default function SplitCategory() {
    return (
        <section className="w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden">
            {/* Pequeños Marineros (Niños) */}
            <div className="flex-1 relative group h-[50vh] md:h-auto overflow-hidden cursor-pointer">
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                    <Image
                        src="/images/categories/marineritos.png"
                        alt="Zapatitos para nenes - Pequeños Marineros"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Subtle overlay, no heavy tint */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12">
                    <AnimatedSection>
                        <h3 className="font-heading text-4xl md:text-6xl text-white mb-4 italic drop-shadow-xl tracking-wide">
                            Pequeños Marineros
                        </h3>
                        <p className="font-body text-white text-lg mb-10 max-w-sm mx-auto drop-shadow-lg font-light tracking-wider">
                            Para los que nacieron para explorar el mundo con valentía.
                        </p>
                        <Button
                            href="/shop?gender=nene"
                            variant="ghost"
                            className="px-10"
                        >
                            Inicia su aventura
                        </Button>
                    </AnimatedSection>
                </div>
            </div>

            {/* Pequeñas Princesas (Niñas) */}
            <div className="flex-1 relative group h-[50vh] md:h-auto overflow-hidden cursor-pointer">
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                    <Image
                        src="/images/categories/princesas.png"
                        alt="Zapatitos para nenas - Pequeñas Princesas"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12">
                    <AnimatedSection delay={0.2}>
                        <h3 className="font-heading text-4xl md:text-6xl text-white mb-4 italic drop-shadow-xl tracking-wide">
                            Pequeñas Princesas
                        </h3>
                        <p className="font-body text-white text-lg mb-10 max-w-sm mx-auto drop-shadow-lg font-light tracking-wider">
                            Dulzura, protección y un toque de magia en cada pisadita.
                        </p>
                        <Button
                            href="/shop?gender=nena"
                            variant="ghost"
                            className="px-10"
                        >
                            Elegir su par
                        </Button>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
