'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Heart, Shield, Footprints, Wind, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: Footprints,
        title: 'Piecitos Libres',
        description: 'Suela blanda que deja que sus deditos se muevan, agarren y sientan el piso como si caminara descalzo.',
    },
    {
        icon: Shield,
        title: 'Crecen Sanos',
        description: 'Diseño ergonómico aprobado por pediatras que no deforma ni aprieta. Sus músculos crecen fuertes.',
    },
    {
        icon: Heart,
        title: '0% Resbalones',
        description: 'Suela de cuero natural con agarre antideslizante. Podés dejarlo explorar sin miedo.',
    },
    {
        icon: Wind,
        title: 'Piel de Bebé',
        description: 'Cuero suave que respira, 100% libre de plásticos y químicos. Tan delicado como sus mejillas.',
    },
    {
        icon: HandHeart,
        title: 'Hecho con Alma',
        description: 'No es una fábrica. Es una mamá que dedica 3 horas de amor artesanal a cada par que sale de sus manos.',
    },
];

export default function BenefitsSection() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <AnimatedSection>
                    <SectionTitle
                        title="¿Por qué las mamás que prueban ALICA no vuelven atrás?"
                        subtitle="No es marketing. Es lo que sus piecitos sienten."
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
