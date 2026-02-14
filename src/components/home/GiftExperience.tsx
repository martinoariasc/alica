'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { Gift } from 'lucide-react';

export default function GiftExperience() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="relative rounded-[3rem] overflow-hidden bg-bg-warm px-6 py-20 md:p-24 text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-pink-soft/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-soft/30 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

                    <AnimatedSection>
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-gold">
                            <Gift className="w-8 h-8" />
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8">
                            El regalo que recordarán<br /> <span className="italic text-muted">para siempre</span>
                        </h2>
                        <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed mb-12">
                            Cada par llega en una caja artesanal, envuelto en papel de seda y con aroma a bebé.
                            Porque abrir un paquete de Alica debería sentirse como un abrazo.
                        </p>
                        <Button
                            href="/gift"
                            variant="primary"
                            size="lg"
                            className="bg-charcoal text-white hover:bg-gold transition-colors shadow-2xl shadow-charcoal/20"
                        >
                            Regalar Magia
                        </Button>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
