'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function StorySection() {
    return (
        <section className="py-20 md:py-28 bg-bg-warm/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <AnimatedSection>
                            <SectionTitle
                                title="Manos que crean"
                                subtitle="Más que una marca, somos una familia"
                                className="!text-center lg:!text-left !items-center lg:!items-start"
                            />
                            <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
                                En un mundo de prisa, nosotros elegimos la <span className="italic text-charcoal font-medium">pausa</span>.
                                Cada par de Alica se corta, cose y amolda a mano, pensando en los deditos que protegerá.
                            </p>
                            <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-10">
                                No es solo confección, es una promesa de amor y cuidado para los pies que darán los pasos del futuro.
                            </p>

                            <Link
                                href="/nosotros"
                                className="inline-flex items-center gap-2 text-rose-deep font-heading font-semibold hover:text-charcoal transition-colors group"
                            >
                                Conoce nuestra historia
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </AnimatedSection>
                    </div>

                    {/* Image Placeholder */}
                    <div className="order-1 lg:order-2">
                        <AnimatedSection delay={0.2}>
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 bg-cream">
                                {/* Placeholder for artisanal photo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-light/20 to-charcoal/5 flex items-center justify-center">
                                    <span className="text-charcoal/20 font-heading text-lg tracking-widest uppercase">
                                        Foto Taller / Artesanal
                                    </span>
                                </div>
                                <div className="absolute inset-0 border-[1px] border-white/30 m-4 rounded-2xl"></div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
