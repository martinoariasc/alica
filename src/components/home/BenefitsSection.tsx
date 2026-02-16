'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import FloatingElement from '@/components/ui/FloatingElement';
import { ShieldCheck, Heart, Sparkles, Smile, Footprints } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: ShieldCheck,
        title: 'Tu tranquilidad ante todo',
        description: 'Materiales 100% naturales y costuras internas invisibles. Cuidamos su piel para que vos no tengas que preocuparte por roces o alergias.',
    },
    {
        icon: Footprints,
        title: 'Su libertad, tu orgullo',
        description: 'Nuestra tecnología de suela blanda imita el caminar descalzo. Vas a amar verlo descubrir el mundo con total seguridad y equilibrio.',
    },
    {
        icon: Heart,
        title: 'Un recuerdo para siempre',
        description: 'Nuestros zapatitos están diseñados para durar en el tiempo y en tu caja de recuerdos. Es la primera reliquia de su infancia.',
    },
    {
        icon: Sparkles,
        title: 'Elegancia sin esfuerzo',
        description: 'Diseños atemporales que combinan con todo. Que tu bebé sea el más lindo de la reunión es solo un beneficio extra.',
    },
    {
        icon: Smile,
        title: 'Cero complicaciones',
        description: 'Fáciles de poner, difíciles de que se los saquen solos. Menos tiempo peleando con cordones, más tiempo disfrutando de él.',
    },
];

export default function BenefitsSection() {
    return (
        <section className="py-32 md:py-48 bg-white relative overflow-hidden">
            {/* Floating Decorative Sparkles */}
            <FloatingElement className="absolute top-[15%] right-[12%] pointer-events-none opacity-20" amplitude={15} duration={7} rotate={10}>
                <div className="w-3 h-3 rounded-full bg-gold" />
            </FloatingElement>
            <FloatingElement className="absolute bottom-[20%] left-[8%] pointer-events-none opacity-15" amplitude={12} duration={9} delay={3} rotate={-8}>
                <div className="w-4 h-4 rounded-full bg-rose-light" />
            </FloatingElement>

            <div className="max-w-6xl mx-auto px-6 sm:px-12">
                <AnimatedSection blur>
                    <div className="text-center mb-24 md:mb-32">
                        <span className="font-body text-[11px] tracking-[0.4em] uppercase text-stone-300 mb-6 block font-bold">Inversión en Calidad</span>
                        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-stone-900 leading-[1.1]">
                            ¿Por qué las mamás eligen <span className="italic">ALICA</span><br className="hidden md:block" /> para el tesoro más grande de su vida?
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
                    {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                            <AnimatedSection key={benefit.title} delay={i * 0.12} blur scale={0.95}>
                                <motion.div
                                    className="flex flex-col items-center text-center group"
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                >
                                    <div className="w-20 h-20 mb-8 rounded-full bg-rose-light/20 flex items-center justify-center relative">
                                        <motion.div
                                            className="absolute inset-0 rounded-full border-2 border-rose-light/50"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileHover={{ scale: 1.2, opacity: 1 }}
                                        />
                                        <Icon className="w-9 h-9 text-rose-deep" />
                                    </div>
                                    <h3 className="font-heading text-xl text-stone-800 mb-4 font-semibold italic">
                                        {benefit.title}
                                    </h3>
                                    <p className="font-body text-sm text-stone-500 leading-[1.8] font-light">
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
