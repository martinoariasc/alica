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

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12 md:p-24">
                    <AnimatedSection>
                        <h3 className="font-heading text-5xl md:text-7xl text-white mb-6 italic drop-shadow-xl tracking-tight">
                            Pequeños Marineros
                        </h3>
                        <p className="font-body text-white text-lg md:text-xl mb-12 max-w-md mx-auto drop-shadow-lg font-light tracking-wide leading-relaxed">
                            Para los que nacieron para explorar el mundo con valentía.
                        </p>
                        <Button
                            href="/shop?gender=nene"
                            variant="caviar"
                            size="lg"
                            className="text-white border-white/40 hover:border-white px-12"
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

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12 md:p-24">
                    <AnimatedSection>
                        <h3 className="font-heading text-5xl md:text-7xl text-white mb-6 italic drop-shadow-xl tracking-tight">
                            Pequeñas Princesas
                        </h3>
                        <p className="font-body text-white text-lg md:text-xl mb-12 max-w-md mx-auto drop-shadow-lg font-light tracking-wide leading-relaxed">
                            Dulzura, protección y un toque de magia en cada pisadita.
                        </p>
                        <Button
                            href="/shop?gender=nena"
                            variant="caviar"
                            size="lg"
                            className="text-white border-white/40 hover:border-white px-12"
                        >
                            Elegir su par
                        </Button>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
