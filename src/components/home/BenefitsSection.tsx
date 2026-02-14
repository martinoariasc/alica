'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Heart, Shield, Footprints, Wind, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: Footprints,
        title: 'Pisadas Libres',
        description: 'Diseño ergonómico que respeta la anatomía única de sus piecitos en crecimiento.',
    },
    {
        icon: Shield,
        title: 'Crecimiento Natural',
        description: 'Flexibilidad total para que sus músculos se desarrollen fuertes y sanos.',
    },
    {
        icon: Heart,
        title: 'Seguridad y Confort',
        description: 'Suela de cuero antideslizante que protege sin quitar sensibilidad al piso.',
    },
    {
        icon: Wind,
        title: 'Caricias para su Piel',
        description: 'Materiales nobles y transpirables, 100% libres de plásticos y tóxicos.',
    },
    {
        icon: HandHeart,
        title: 'Hecho con Amor',
        description: 'Cada puntada lleva 3 horas de dedicación, paciencia y mucho amor de mamá.',
    },
];

export default function BenefitsSection() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <SectionTitle
                        title="¿Por qué miles de mamás eligen ALICA?"
                        subtitle="Cada detalle importa cuando se trata de tu bebé"
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                            <AnimatedSection key={benefit.title} delay={i * 0.1}>
                                <motion.div
                                    className="text-center group cursor-default"
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-rose-light/30 flex items-center justify-center shadow-sm"
                                        whileHover={{ scale: 1.15, backgroundColor: 'var(--alica-rose-light)' }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Icon className="w-9 h-9 text-rose-deep" />
                                    </motion.div>
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="font-body text-sm text-charcoal/80 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
