'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Heart, Shield, Footprints, Wind, HandHeart } from 'lucide-react';

const benefits = [
    {
        icon: Footprints,
        title: 'Pisadas Libres',
        description: 'Diseño ergonómico que respeta la anatomía única de sus piecitos.',
    },
    {
        icon: Shield,
        title: 'Crecimiento Natural',
        description: 'Flexibilidad total para que sus músculos se desarrollen fuertes y sanos.',
    },
    {
        icon: Heart,
        title: 'Seguridad y Confort',
        description: 'Suela de cuero antideslizante que protege sin quitar sensibilidad.',
    },
    {
        icon: Wind,
        title: 'Caricias para su Piel',
        description: 'Materiales nobles y transpirables, 100% libres de plásticos.',
    },
    {
        icon: HandHeart,
        title: 'Hecho a Mano',
        description: 'Cada puntada lleva dedicación, tiempo y mucho amor de mamá.',
    },
];

export default function BenefitsSection() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <SectionTitle
                        title="¿Por qué Alica?"
                        subtitle="Cada detalle importa cuando se trata de tu bebé"
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                            <AnimatedSection key={benefit.title} delay={i * 0.1}>
                                <div className="text-center group">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-rose-light/30 flex items-center justify-center group-hover:bg-rose-light group-hover:scale-110 transition-all duration-500 shadow-sm">
                                        <Icon className="w-9 h-9 text-rose-deep" />
                                    </div>
                                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="font-body text-sm text-muted leading-relaxed">
                                        {benefit.description}
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
