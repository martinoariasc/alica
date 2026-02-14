'use client';

import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';

export default function SplitCategory() {
    return (
        <section className="w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden">
            {/* Pequeños Marineros (Niños) */}
            <div className="flex-1 relative group h-[50vh] md:h-auto overflow-hidden cursor-pointer">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                        src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2674&auto=format&fit=crop"
                        alt="Zapatitos para nenes"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-blue-soft/60" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                    <AnimatedSection>
                        <span className="inline-block text-5xl mb-4">👦</span>
                        <h3 className="font-heading text-3xl md:text-5xl text-white mb-3 italic drop-shadow-lg">
                            Pequeños Marineros
                        </h3>
                        <p className="font-body text-white/90 text-lg mb-8 max-w-sm mx-auto drop-shadow-md">
                            Para los que nacieron para explorar el mundo con valentía y firmeza.
                        </p>
                        <Button
                            href="/shop?gender=nene"
                            variant="outline"
                            className="!border-white !text-white hover:!bg-white hover:!text-charcoal backdrop-blur-sm"
                        >
                            Descubrir su par
                        </Button>
                    </AnimatedSection>
                </div>
            </div>

            {/* Pequeñas Princesas (Niñas) */}
            <div className="flex-1 relative group h-[50vh] md:h-auto overflow-hidden cursor-pointer">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2669&auto=format&fit=crop"
                        alt="Zapatitos para nenas"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-pink-soft/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                    <AnimatedSection delay={0.2}>
                        <span className="inline-block text-5xl mb-4">👧</span>
                        <h3 className="font-heading text-3xl md:text-5xl text-white mb-3 italic drop-shadow-lg">
                            Pequeñas Princesas
                        </h3>
                        <p className="font-body text-white/90 text-lg mb-8 max-w-sm mx-auto drop-shadow-md">
                            Dulzura, protección y un toque de magia en cada pisadita.
                        </p>
                        <Button
                            href="/shop?gender=nena"
                            variant="outline"
                            className="!border-white !text-white hover:!bg-white hover:!text-charcoal backdrop-blur-sm"
                        >
                            Elegir su par
                        </Button>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
