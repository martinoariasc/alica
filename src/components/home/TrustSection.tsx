'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Heart, MessageCircle, Package } from 'lucide-react';

const trustItems = [
    {
        icon: Heart,
        text: 'Cada par es hecho a mano con dedicación y amor.',
    },
    {
        icon: Package,
        text: 'Pedidos personalizados según tu estilo.',
    },
    {
        icon: MessageCircle,
        text: 'Coordinamos todo por WhatsApp, fácil y rápido.',
    },
];

export default function TrustSection() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <AnimatedSection>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
                        Pedidos artesanales, personalizados y{' '}
                        <span className="gradient-text">hechos con amor</span>
                    </h2>
                    <p className="text-lg text-muted font-light max-w-2xl mx-auto mb-12">
                        Coordinamos todo por WhatsApp para que tengas una experiencia
                        cómoda, cercana y sin complicaciones.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <AnimatedSection key={i} delay={i * 0.15}>
                                <div className="flex flex-col items-center gap-4 p-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-full bg-rose-light flex items-center justify-center mb-2 shadow-sm">
                                        <Icon className="w-7 h-7 text-rose-deep" />
                                    </div>
                                    <p className="font-heading font-medium text-charcoal/90 text-sm md:text-base leading-relaxed max-w-xs">
                                        {item.text}
                                    </p>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
