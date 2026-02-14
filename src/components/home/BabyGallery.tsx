'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

const babyImages = Array.from({ length: 8 }).map((_, i) => `/images/bebes/bebe-${i + 1}.jpg`);

export default function BabyGallery() {
    return (
        <section className="py-20 bg-bg-warm/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <SectionTitle
                        title="Bebés ALICA"
                        subtitle="La comunidad más tierna del mundo"
                    />
                </AnimatedSection>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {babyImages.map((src, i) => (
                        <AnimatedSection key={i} delay={i * 0.05}>
                            <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 break-inside-avoid">
                                <Image
                                    src={src}
                                    alt={`Bebé ALICA ${i + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
