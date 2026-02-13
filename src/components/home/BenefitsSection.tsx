'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Heart, Shield, Footprints, Wind, HandHeart } from 'lucide-react';

const benefits = [
    {
        icon: Footprints,
        title: 'No aprietan',
        description: 'Suela blanda que respeta el desarrollo natural del pie.',
    },
    {
        icon: Shield,
        title: 'No deforman',
        description: 'Flexibles y ligeros, perfectos para pies en crecimiento.',
    },
    {
        icon: Heart,
        title: 'No resbalan',
        description: 'Suela de cuero suave que da agarre sin rigidez.',
    },
    {
        icon: Wind,
        title: 'No irritan',
        description: 'Materiales hipoalergénicos, amigables con la piel sensible.',
    },
    {
        icon: HandHeart,
        title: 'Hechos con amor',
        description: 'Cada par es cosido a mano, con atención al detalle.',
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
                                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-rose-light/50 flex items-center justify-center group-hover:bg-rose-light group-hover:scale-110 transition-all duration-500">
                                        <Icon className="w-7 h-7 text-rose-deep" />
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
