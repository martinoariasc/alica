'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import FloatingElement from '@/components/ui/FloatingElement';
import { ShieldCheck, Heart, Sparkles, Footprints, Feather } from 'lucide-react';
import { motion } from 'framer-motion';

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
    return (
        <section className="py-40 md:py-80 relative overflow-hidden w-full">
            {/* Texture overlay handled by global CSS, just need transparent bg */}

            {/* Floating Decorative Elements */}
            <FloatingElement className="absolute top-[10%] left-[5%] pointer-events-none opacity-20" amplitude={10} duration={8}>
                <div className="w-64 h-64 rounded-full bg-rose-light blur-[80px]" />
            </FloatingElement>

            <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
                <AnimatedSection blur>
                    <div className="text-center mb-20 md:mb-28">
                        <span className="font-body text-[11px] tracking-[0.4em] uppercase text-stone-400 mb-6 block font-bold">Diseño Fisiológico</span>
                        <h2 className="font-heading text-4xl md:text-6xl text-charcoal leading-[1.1] mb-6">
                            Su piecito necesita <span className="italic text-rose-deep">entender</span><br />
                            el mundo que pisa.
                        </h2>
                        <p className="font-body text-lg text-muted max-w-2xl mx-auto font-light leading-relaxed">
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
                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-white/40 border border-white/60 shadow-sm flex items-center justify-center relative backdrop-blur-sm group-hover:bg-white/80 transition-colors">
                                        <Icon className="w-7 h-7 text-charcoal/80 group-hover:text-rose-deep transition-colors" />
                                    </div>
                                    <h3 className="font-heading text-xl text-charcoal mb-3 font-medium">
                                        {benefit.title}
                                    </h3>
                                    <p className="font-body text-sm text-muted leading-[1.8] font-light">
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
