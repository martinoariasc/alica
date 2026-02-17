'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import FloatingElement from '@/components/ui/FloatingElement';
import { ShieldCheck, Heart, Sparkles, Footprints, Feather } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
    {
        icon: Footprints,
        title: 'Sentir el suelo',
        description: 'La suela blanda permite que sus nervios conecten con el terreno, fundamental para su equilibrio y desarrollo cognitivo.',
    },
    {
        icon: Feather,
        title: 'Libertad Total',
        description: 'Pesan menos que una media. Tu bebé ni se va a dar cuenta que los tiene puestos, evitando que se los quiera sacar.',
    },
    {
        icon: ShieldCheck,
        title: 'Protección Natural',
        description: 'Protege de la suciedad, el frío y superficies rugosas sin aislarlo de la experiencia sensorial de caminar.',
    },
    {
        icon: Heart,
        title: 'Piel que Respira',
        description: 'Materiales 100% nobles y algodón que previenen la transpiración y cuidan su piel delicada de irritaciones.',
    },
];

export default function BarefootBenefits() {
    const sectionRef = useRef<HTMLElement>(null);
    return (
        <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden w-full">
            {/* Texture overlay handled by global CSS, just need transparent bg */}

            {/* Floating Decorative Elements */}
            <FloatingElement className="absolute top-[10%] left-[5%] pointer-events-none opacity-20" amplitude={10} duration={8}>
                <div className="w-64 h-64 rounded-full bg-rose-light blur-[80px]" />
            </FloatingElement>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <AnimatedSection blur>
                    <div className="text-center mb-16 md:mb-24 flex flex-col items-center justify-center">
                        <span className="font-body text-[10px] tracking-[0.5em] uppercase text-rose-deep mb-6 block font-bold opacity-70">Diseño Fisiológico</span>
                        <h2 className="font-heading text-charcoal leading-[1.3] mb-8 text-center"
                            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 4.5rem)' }}>
                            Su piecito necesita <span className="italic text-rose-deep">entender</span><br />
                            el mundo que pisa.
                        </h2>
                        <div className="w-12 h-px bg-stone-200 mb-8" />
                        <p className="font-body text-muted max-w-xl text-center font-light leading-relaxed mx-auto"
                            style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)' }}>
                            Los expertos coinciden: lo mejor para un bebé es andar descalzo. Pero no siempre se puede. Por eso creamos <span className="font-medium text-charcoal">ALICA</span>: la experiencia más cercana a no llevar nada, pero con la protección que te da tranquilidad.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                            <AnimatedSection key={benefit.title} delay={i * 0.15} blur scale={0.95}>
                                <motion.div
                                    className="flex flex-col items-center text-center group"
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="w-16 h-16 mb-8 rounded-full bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] flex items-center justify-center relative backdrop-blur-sm group-hover:shadow-[0_20px_40px_-10px_rgba(227,156,156,0.3)] transition-all duration-500 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <Icon className="w-6 h-6 text-charcoal/80 group-hover:text-rose-deep transition-all duration-500 relative z-10" />
                                    </div>
                                    <h3 className="font-heading text-xl text-charcoal mb-4 font-medium">
                                        {benefit.title}
                                    </h3>
                                    <p className="font-body text-sm text-muted leading-relaxed font-light">
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
