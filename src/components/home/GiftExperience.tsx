'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import FloatingElement from '@/components/ui/FloatingElement';
import { Gift, Heart, Star, Package } from 'lucide-react';

const reasons = [
    { icon: Gift, text: 'Caja artesanal con lazo de raso' },
    { icon: Heart, text: 'Tarjeta escrita a mano con tu mensaje' },
    { icon: Star, text: 'Envuelto con aroma a bebé' },
    { icon: Package, text: 'Envío express a todo Paraguay' },
];

export default function GiftExperience() {
    return (
        <section className="py-32 md:py-48 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-bg-warm to-rose-light/20 px-6 py-32 md:p-32 text-center">
                    {/* Reduced to 2 floating blobs (from 5+) */}
                    <FloatingElement className="absolute top-0 left-0 pointer-events-none" amplitude={15} duration={10}>
                        <div className="w-64 h-64 bg-pink-soft/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                    </FloatingElement>
                    <FloatingElement className="absolute bottom-0 right-0 pointer-events-none" amplitude={12} duration={12} delay={2}>
                        <div className="w-64 h-64 bg-blue-soft/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
                    </FloatingElement>

                    <AnimatedSection blur>
                        <span className="inline-block text-6xl mb-8">🎁</span>
                        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
                            ¿Querés hacer llorar<br className="hidden md:block" />
                            de emoción a una mamá?
                        </h2>
                        <p className="font-heading text-2xl md:text-4xl text-rose-deep italic mb-10">
                            Regalale un recuerdo que guarde para siempre.
                        </p>
                        <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
                            Abuelas, tías, madrinas... abrir un paquete de ALICA no es abrir un regalo.
                            Es abrir una cajita de ternura que va a arrancar lágrimas de felicidad.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
                            {reasons.map((reason, i) => {
                                const Icon = reason.icon;
                                return (
                                    <AnimatedSection key={i} delay={i * 0.1} blur scale={0.95}>
                                        <div className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-500">
                                            <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-rose-deep" />
                                            </div>
                                            <span className="text-xs text-charcoal/70 font-bold uppercase tracking-widest text-center leading-tight">{reason.text}</span>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>

                        <Button href="/regalo" variant="primary" size="lg" className="px-16">
                            Encontrar el regalo perfecto
                        </Button>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
