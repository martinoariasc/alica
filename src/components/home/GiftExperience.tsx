'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { Gift, Heart, Star, Package } from 'lucide-react';

const reasons = [
    { icon: Gift, text: 'Caja artesanal con lazo de raso' },
    { icon: Heart, text: 'Tarjeta escrita a mano con tu mensaje' },
    { icon: Star, text: 'Envuelto con aroma a bebé' },
    { icon: Package, text: 'Envío express a todo Paraguay' },
];

export default function GiftExperience() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-bg-warm to-rose-light/20 px-6 py-20 md:p-24 text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-pink-soft/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-soft/30 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
                    <div className="absolute top-20 right-20 w-32 h-32 bg-gold/10 rounded-full blur-[60px]" />

                    <AnimatedSection>
                        <span className="inline-block text-6xl mb-6">🎁</span>
                        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-charcoal mb-4 leading-tight">
                            ¿Querés hacer llorar<br className="hidden md:block" />
                            de emoción a una mamá?
                        </h2>
                        <p className="font-heading text-2xl md:text-3xl text-rose-deep italic mb-8">
                            Regalale un recuerdo que guarde para siempre.
                        </p>
                        <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed mb-12">
                            Abuelas, tías, madrinas... abrir un paquete de ALICA no es abrir un regalo.
                            Es abrir una cajita de ternura que va a arrancar lágrimas de felicidad.
                        </p>

                        {/* Gift Features */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
                            {reasons.map((reason, i) => {
                                const Icon = reason.icon;
                                return (
                                    <AnimatedSection key={i} delay={i * 0.1}>
                                        <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/60 backdrop-blur-sm">
                                            <div className="w-10 h-10 rounded-full bg-rose-light/50 flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-rose-deep" />
                                            </div>
                                            <span className="text-xs text-charcoal/70 font-medium text-center">{reason.text}</span>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>

                        <Button
                            href="/regalo"
                            variant="primary"
                            size="lg"
                            className="bg-charcoal text-white hover:bg-gold transition-colors shadow-2xl shadow-charcoal/20"
                        >
                            Encontrar el regalo perfecto
                        </Button>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
